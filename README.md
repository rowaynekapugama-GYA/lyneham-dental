# Lyneham Dental Care: website (static, Vercel)

Production build of the approved design: 38 pages plus a 404, plain HTML/CSS/JS, no build step. URLs follow the client's developer instructions (for example `/services/general/fillings/`). The contact form sends through a small serverless function (`api/enquiry.js`) using SMTP2GO.

## Deploy
1. Create a **private** GitHub repo (suggested name `lyneham-dental-care`) and upload the **contents** of this folder to the repo root, so `index.html`, `vercel.json` and the `api` folder sit at the top level. Include the hidden `.vercelignore` file.
2. Vercel: Add New Project, import the repo.
   - Framework Preset: **Other**
   - Build Command: leave empty. Output Directory: leave as default (the repo root).
3. Settings, Environment Variables (Production and Preview):

   | Variable | Value |
   |---|---|
   | `SMTP2GO_API_KEY` | the practice's SMTP2GO API key (its own account, not another client's) |
   | `SENDER_EMAIL` | `Lyneham Dental Care <website@lynehamdentalcare.com.au>` once lynehamdentalcare.com.au is verified in SMTP2GO |
   | `ENQUIRY_TO` | comma-separated recipients, e.g. `admin@lynehamdentalcare.com.au,<SmileOx intake address>,rowayne@gyaclients.com` |

   If `ENQUIRY_TO` is not set, enquiries go to admin@lynehamdentalcare.com.au and rowayne@gyaclients.com.
4. Deploy, then test on the preview link: open a few pages, open the Services menu, submit the contact form once and confirm the email arrives. Preview links (`*.vercel.app`) are noindexed automatically.
5. Domain: add `lynehamdentalcare.com.au` and `www.lynehamdentalcare.com.au` in Vercel, make the apex the primary with www redirecting (308), and point DNS as Vercel instructs. Canonical URLs, the sitemap and schema already use `https://lynehamdentalcare.com.au`.
6. Submit `https://lynehamdentalcare.com.au/sitemap.xml` in Google Search Console.

## What's configured
- `vercel.json`: trailing-slash URLs, 301 redirects from the old site's URLs (Document 2, section 6, plus /news and /portfolio), security headers, noindex on `*.vercel.app`, CSS/JS revalidated on every visit and images cached for a day (file names are not hashed, so long caching would strand old versions).
- `sitemap.xml` and `robots.txt`; Dentist schema on the homepage, contact and suburb pages; FAQPage schema on service and suburb pages.
- Every Book an appointment button reads one setting, `BOOKING_URL` in `main.js` (currently `/contact/#book`). When Zavy is live, change that one line to the Zavy link.

## Not in this build (by design)
- Hero B (team photo) and the review bar: review-only.
- Smile Gallery: hidden until there are consented cases.
- Newsletter signup: no mailing list yet.

## Before go-live
The full list is in REVIEW.md in the design zip. The main items: privacy policy wording from the practice (the Privacy page currently says it is being finalised), written approval from staff shown in the Welcome, Our Team and Fees photos, the flagged AHPRA wording, the CDBS age range, the Zavy link, and the SMTP2GO sender domain.
