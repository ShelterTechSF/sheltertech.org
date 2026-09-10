import { NextResponse } from "next/server";
import { appendSpreadsheetRow } from "@/lib/google-sheets";

const DEFAULT_RECIPIENTS = [
  "derek@sheltertech.org",
  "melissa@sheltertech.org",
  "tammy@sheltertech.org",
  "bill@sheltertech.org",
  "richard@sheltertech.org",
];

function escapeHtml(value: unknown) {
  return String(value ?? "").replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[char] || char);
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    if (String(data.website || "").trim()) return NextResponse.json({ ok: true });

    const email = String(data.email || "").trim();
    if (!/^\S+@\S+\.\S+$/.test(email)) return NextResponse.json({ error: "A valid email is required." }, { status: 400 });

    const isNewsletter = data.formType === "newsletter";
    const isVolunteer = data.formType === "volunteer";
    if (!isNewsletter && !isVolunteer) return NextResponse.json({ error: "Unknown form type." }, { status: 400 });

    const firstName = String(data.firstName || "").trim();
    const lastName = String(data.lastName || "").trim();
    if (isVolunteer && (!firstName || !lastName)) return NextResponse.json({ error: "First and last name are required." }, { status: 400 });

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.FORM_FROM_EMAIL || "ShelterTech Website <onboarding@resend.dev>";
    if (!apiKey || !process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY) {
      return NextResponse.json({ error: "Form delivery is not configured." }, { status: 503 });
    }

    const configuredRecipients = process.env.FORM_TO_EMAILS;
    const recipients = configuredRecipients
      ? configuredRecipients.split(",").map((value) => value.trim()).filter(Boolean)
      : DEFAULT_RECIPIENTS;

    const timestamp = new Date().toISOString();
    const interests = Array.isArray(data.interests) ? data.interests.map((value: unknown) => String(value).trim()).filter(Boolean) : [];
    if (isNewsletter) {
      await appendSpreadsheetRow("Subscribers", [timestamp, email, "Checked"]);
    } else {
      await appendSpreadsheetRow("Volunteers", [
        timestamp,
        firstName,
        lastName,
        email,
        String(data.pronouns || "").trim(),
        interests.join("; "),
        String(data.message || "").trim(),
        String(data.commitment || "").trim(),
        data.newsletter === "yes" ? "Checked" : "Unchecked",
        String(data.source || "").trim(),
      ]);
    }

    const rows = Object.entries(data)
      .filter(([key]) => !["formType", "website"].includes(key))
      .map(([key, value]) => `<tr><th style="text-align:left;padding:8px;border-bottom:1px solid #ddd">${escapeHtml(key)}</th><td style="padding:8px;border-bottom:1px solid #ddd">${escapeHtml(Array.isArray(value) ? value.join(", ") : value)}</td></tr>`)
      .join("");

    try {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from,
          to: recipients,
          reply_to: email,
          subject: isNewsletter ? `Newsletter signup: ${email}` : `Volunteer application: ${firstName} ${lastName}`,
          html: `<h1>${isNewsletter ? "Newsletter signup" : "Volunteer application"}</h1><p>This submission has been saved to the Website Leads spreadsheet.</p><table style="border-collapse:collapse">${rows}</table>`,
        }),
      });
      if (!response.ok) {
        const details = (await response.text()).slice(0, 500);
        console.error(`Resend rejected a form notification (${response.status}): ${details}`);
      }
    } catch {
      console.error("Form notification email could not be sent.");
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Form submission could not be saved.", error instanceof Error ? error.message : "Unknown error");
    return NextResponse.json({ error: "We could not save this submission." }, { status: 502 });
  }
}
