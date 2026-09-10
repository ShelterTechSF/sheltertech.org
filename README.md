# ShelterTech website

A ground-up rebuild of [sheltertech.org](https://www.sheltertech.org) using Next.js 16 and React 19. The site is designed for Vercel and uses locally hosted ShelterTech photography.

The raw `media/` library is intentionally excluded from Git and Vercel uploads. Production-ready derivatives—optimized images, partner marks, documents, and two compressed videos—live under `public/`. Keep the raw library as the source archive for future edits.

## Local development

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

## Quality checks

```bash
npm run lint
npm run build
npm audit --omit=dev
```

## Forms

Volunteer and newsletter forms post to `/api/contact`. Each valid submission is appended to the existing **Website Leads** Google Sheet before the form reports success:

- Volunteer applications → `Volunteers!A:J`
- Newsletter signups → `Subscribers!A:C`

Google Sheets delivery requires a Google Cloud service account. Enable the Google Sheets API, create a service-account key, and share the Website Leads spreadsheet with the service account as an Editor. Configure:

- `GOOGLE_SERVICE_ACCOUNT_EMAIL`
- `GOOGLE_PRIVATE_KEY` (the complete PEM key; escaped `\\n` newlines are supported)
- `GOOGLE_SHEET_ID` (defaults to the existing Website Leads spreadsheet)

Email notifications use the Resend HTTP API and require:

- `RESEND_API_KEY`
- `FORM_TO_EMAILS` (comma-separated recipients; defaults to the five ShelterTech recipients)
- `FORM_FROM_EMAIL` (a sender on a verified Resend domain)

Until Google Sheets and Resend are configured, forms show a direct email fallback and return no false success state. Once configured, spreadsheet capture is treated as the critical operation; a transient notification-email failure does not ask the visitor to resubmit and create a duplicate row.

## Donations

The Donate page embeds ShelterTech's Zeffy form. Zeffy handles payment details and receipts; the website does not receive or store donor form contents. The embed includes `utm_source=sheltertech_website` so donations can be attributed in Zeffy.

PostHog records the first meaningful view and successful load of the embedded form, along with clicks on donation calls to action. Because the payment form is hosted in a cross-origin iframe, the website does not infer donation completion from an iframe load.

## Deploy to Vercel

Use a ShelterTech-owned Vercel team so the organization—not an individual or unrelated employer—owns the project.

```bash
npx vercel@latest whoami
npx vercel@latest link --scope <sheltertech-team-slug>
npx vercel@latest env add RESEND_API_KEY production
npx vercel@latest env add FORM_TO_EMAILS production
npx vercel@latest env add FORM_FROM_EMAIL production
npx vercel@latest env add GOOGLE_SERVICE_ACCOUNT_EMAIL production
npx vercel@latest env add GOOGLE_PRIVATE_KEY production --sensitive
npx vercel@latest env add GOOGLE_SHEET_ID production
npx vercel@latest deploy
```

Validate the preview URL, then deploy the same code to production:

```bash
npx vercel@latest deploy --prod
```

See [docs/launch-checklist.md](docs/launch-checklist.md) for the Cloudflare cutover.
