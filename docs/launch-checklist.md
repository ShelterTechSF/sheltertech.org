# ShelterTech launch checklist

## 1. Ownership and integrations

- Create or select a ShelterTech-owned Vercel team.
- Link this directory to a `sheltertech-web` project in that team.
- Connect the ShelterTech GitHub repository so pushes to `main` produce production deployments and pull requests produce previews.
- Add the email and donation environment variables listed in `.env.example`.
- Verify the sender domain with the email provider before testing forms.

## 2. Review the preview

- Check home, About, Programs, Volunteer, Donate, and all three legal pages.
- Submit a volunteer application and newsletter signup; confirm both arrive at the intended inbox.
- Complete a small test donation through the configured payment provider.
- Review the leadership roster, board affiliations, metrics, funding figures, address, and governance documents for currency.
- Have counsel review the new Privacy Policy and Terms before launch.

## 3. Add the domain in Vercel

Add both domains to the project:

```bash
npx vercel@latest domains add sheltertech.org sheltertech-web
npx vercel@latest domains add www.sheltertech.org sheltertech-web
npx vercel@latest domains inspect sheltertech.org
npx vercel@latest domains inspect www.sheltertech.org
```

Use `www.sheltertech.org` as the canonical production domain and redirect the apex domain to it (or choose the reverse, but keep one canonical host). Use the exact DNS values returned by `domains inspect`; Vercel’s generic values can change.

## 4. Cut over in Cloudflare

In Cloudflare → ShelterTech zone → DNS:

1. Preserve all MX, SPF, DKIM, DMARC, and other email-related records.
2. Remove only the old Wix web records for `@` and `www`.
3. Add the apex `A` record and `www` `CNAME` shown by Vercel.
4. Set both web records to **DNS only** (gray cloud) for verification and initial launch.
5. Add any Vercel TXT ownership-verification record exactly as shown, also DNS only.
6. Do not change the domain’s Cloudflare nameservers.

Then verify:

```bash
npx vercel@latest domains inspect sheltertech.org
npx vercel@latest domains inspect www.sheltertech.org
npx vercel@latest certs ls
dig A sheltertech.org +short
dig CNAME www.sheltertech.org +short
```

## 5. Post-launch checks

- Confirm both `https://sheltertech.org` and `https://www.sheltertech.org` reach the canonical URL with valid TLS.
- Confirm forms and donations still work on the custom domain.
- Check `/robots.txt` and `/sitemap.xml`.
- Scan Vercel runtime logs for errors.
- Keep the Wix site available for a few days as a rollback reference, but do not leave both versions serving from the same domain.
