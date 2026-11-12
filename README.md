# Lyneham Dental Care: website (static, Vercel)

Production build of the approved design: 39 pages plus a 404, plain HTML/CSS/JS, no build step. URLs follow the client's developer instructions (for example `/services/general/fillings/`). The contact form sends through a small serverless function (`api/enquiry.js`) using SMTP2GO.

## Deploy from Terminal
Save `deploy-lyneham.sh` and the newest `lyneham-dental-care-vercel.zip` in Downloads, then run:

    bash ~/Downloads/deploy-lyneham.sh

The script keeps a working copy of the repo at `~/gya-sites/lyneham-dental` (it clones it the first time). Each run checks the copy is clean and up to date, makes a local backup branch, copies the newest zip in (keeping `.git`, `.env*` and `.vercel`), shows the changes, and commits and pushes to `main` only after you type y. Vercel deploys from `main` automatically. It prints the rollback commands at the end.

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
- Online booking: every Book button goes to `/book-online/`, which embeds Zavy360. The booking address is in two places on that page (`book-online/index.html`: the iframe `src` and the fallback link); if Zavy ever issues a new link, change both. The buttons themselves read `BOOKING_URL` in `main.js`.
- Booking clicks push a `book_online` event to `window.dataLayer`. It does nothing until GA4 or GTM is added.
- `CHANGELOG.md` lists every release, including wording removed so it can be restored later.

## Not in this build (by design)
Hero B and the review bar (review-only), the Smile Gallery (until there are consented cases), the newsletter signup (no mailing list yet).

## Before go-live
The full list is in REVIEW.md in the design zip. The main items: privacy policy wording from the practice, written approval from staff shown in the Welcome, Our Team and Fees photos, the flagged AHPRA wording, the CDBS age range, the Zavy link, and the SMTP2GO sender domain.
