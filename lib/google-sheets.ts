import { createSign } from "node:crypto";

const GOOGLE_TOKEN_URL = "https://oauth2.googleapis.com/token";
const GOOGLE_SHEETS_SCOPE = "https://www.googleapis.com/auth/spreadsheets";
const DEFAULT_SPREADSHEET_ID = "1c1UUKczbvGNJl5aeb0LZSBMuzsvZnIzHZ3OATkYUUic";

let cachedToken: { value: string; expiresAt: number } | null = null;

function encodeBase64Url(value: string | Buffer) {
  return Buffer.from(value).toString("base64url");
}

function getGoogleCredentials() {
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL?.trim();
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n").trim();

  if (!clientEmail || !privateKey) {
    throw new Error("Google Sheets credentials are not configured.");
  }

  return { clientEmail, privateKey };
}

async function getGoogleAccessToken() {
  const now = Math.floor(Date.now() / 1000);
  if (cachedToken && cachedToken.expiresAt > now + 60) return cachedToken.value;

  const { clientEmail, privateKey } = getGoogleCredentials();
  const header = encodeBase64Url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const claims = encodeBase64Url(JSON.stringify({
    iss: clientEmail,
    scope: GOOGLE_SHEETS_SCOPE,
    aud: GOOGLE_TOKEN_URL,
    iat: now,
    exp: now + 3600,
  }));
  const unsignedToken = `${header}.${claims}`;
  const signer = createSign("RSA-SHA256");
  signer.update(unsignedToken);
  signer.end();
  const signature = encodeBase64Url(signer.sign(privateKey));

  const response = await fetch(GOOGLE_TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: `${unsignedToken}.${signature}`,
    }),
  });

  if (!response.ok) throw new Error("Google authentication failed.");
  const token = await response.json() as { access_token?: string; expires_in?: number };
  if (!token.access_token) throw new Error("Google did not return an access token.");

  cachedToken = {
    value: token.access_token,
    expiresAt: now + (token.expires_in ?? 3600),
  };
  return cachedToken.value;
}

export async function appendSpreadsheetRow(sheetName: "Volunteers" | "Subscribers", values: string[]) {
  const spreadsheetId = process.env.GOOGLE_SHEET_ID?.trim() || DEFAULT_SPREADSHEET_ID;
  const range = sheetName === "Volunteers" ? "Volunteers!A:J" : "Subscribers!A:C";
  const accessToken = await getGoogleAccessToken();
  const endpoint = `https://sheets.googleapis.com/v4/spreadsheets/${encodeURIComponent(spreadsheetId)}/values/${encodeURIComponent(range)}:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`;
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ majorDimension: "ROWS", values: [values] }),
  });

  if (!response.ok) throw new Error(`Google Sheets append failed with status ${response.status}.`);
}
