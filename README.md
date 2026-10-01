# Lyneham Dental Care: website (static, Vercel)

Production build of the approved design: 38 pages plus a 404, plain HTML/CSS/JS, no build step. URLs follow the client's developer instructions (for example `/services/general/fillings/`). The contact form sends through a small serverless function (`api/enquiry.js`) using SMTP2GO.

## Deploy from Terminal (recommended)
Save `deploy-lyneham.sh` and the newest `lyneham-dental-care-vercel.zip` in Downloads, then run:

    bash ~/Downloads/deploy-lyneham.sh

The first run asks for the GitHub repo address (a private repo, e.g. `https://github.com/rowaynekapugama-GYA/lyneham-dental-care.git`) and remembers it. Each run uses the newest zip in Downloads, shows what will change and pushes only after you type yes. Vercel deploys from `main` automatically.

## First-time Vercel setup
1. Vercel: Add New Project, import the repo. Framework Preset: **Other**. Build Command: empty. Output Directory: default (the repo root).
2. Settings, Environment Variables (Production and Preview):

   | Variable | Value |
   |---|---|
   | `SMTP2GO_API_KEY` | the practice's SMTP2GO API key (its own account, not another client's) |
   | `SENDER_EMAIL` | `Lyneham Dental Care <website@lynehamdentalcare.com.au>` once lynehamdentalcare.com.au is verified in SMTP2GO |
   | `ENQUIRY_TO` | comma-separated recipients, e.g. `admin@lynehamdentalcare.com.au,<SmileOx intake address>,rowayne@gyaclients.com` |

   If `ENQUIRY_TO` is not set, enquiries go to admin@lynehamdentalcare.com.au and rowayne@gyaclients.com. Redeploy after adding variables.
3. Test on the preview link: open a few pages, open the Services menu, submit the contact form once and confirm the email arrives. Preview links (`*.vercel.app`) are noindexed automatically.
4. Domain: add `lynehamdentalcare.com.au` and `www.lynehamdentalcare.com.au`, make the apex primary with www redirecting (308), and point DNS as Vercel instructs.
5. Submit `https://lynehamdentalcare.com.au/sitemap.xml` in Google Search Console.

## What's configured
- `vercel.json`: trailing-slash URLs, 301 redirects from the old site's URLs (Document 2, section 6, plus /news and /portfolio), security headers, noindex on `*.vercel.app`, CSS/JS revalidated on every visit and images cached for a day.
- `sitemap.xml` and `robots.txt`; Dentist schema on the homepage, contact and suburb pages; FAQPage schema on service and suburb pages.
- Every Book an appointment button reads one setting, `BOOKING_URL` in `main.js` (currently `/contact/#book`). When Zavy is live, change that one line to the Zavy link.

## Not in this build (by design)
Hero B and the review bar (review-only), the Smile Gallery (until there are consented cases), the newsletter signup (no mailing list yet).

## Before go-live
The full list is in REVIEW.md in the design zip. The main items: privacy policy wording from the practice, written approval from staff shown in the Welcome, Our Team and Fees photos, the flagged AHPRA wording, the CDBS age range, the Zavy link, and the SMTP2GO sender domain.
