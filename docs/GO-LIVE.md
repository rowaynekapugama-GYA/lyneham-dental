# Lyneham Dental Care: go-live guide

Moving `lynehamdentalcare.com.au` from the old Drupal 7 site to this Vercel site. Written 17 November 2026 for v1.5.0.

GYA does the switch. Nothing here has been changed at the registrar, the DNS host or Vercel. The docs folder is kept off the live site (`.vercelignore`).

The checks script runs on a Mac and changes nothing:

    cd ~/gya-sites/lyneham-dental
    bash docs/check-golive.sh dns          # DNS records today
    bash docs/check-golive.sh hosts        # where apex and www land today
    bash docs/check-golive.sh redirects https://lyneham-dental.vercel.app

## 1. DNS today

DNS lookups are blocked from the session that wrote this guide, so the records below must be filled in from `bash docs/check-golive.sh dns` before the switch. Save the output; it is the record of what was there.

| Record | Name | Value today | At go-live |
|---|---|---|---|
| NS | @ | (from the script) | No change. This is who hosts the DNS, where the edits are made |
| A | @ | (old Drupal server) | Replace with Vercel's value |
| AAAA | @ | (if any) | Remove if it points at the old server |
| CNAME or A | www | (old server) | Replace with Vercel's value |
| MX | @ | (mail servers) | **Do not touch** |
| TXT | @ | SPF `v=spf1 ...` and any verification strings | **Do not touch** |
| TXT | _dmarc | (if any) | **Do not touch** |
| CAA | @ | (if any) | Add `0 issue "letsencrypt.org"` if CAA records exist and don't already allow it |
| A or CNAME | mail, webmail, autodiscover, ftp, cpanel | (if any) | **Do not touch**, even if they point at the same IP as the old site |

What the old site tells us:
- It is Drupal 7, built by Agileware (footer credit). Ask whoever hosts it whether **email for admin@lynehamdentalcare.com.au is on the same server**. If it is, the MX record and any `mail` record point there, and that hosting must stay until email is moved. Changing the website does not move email, but cancelling the old hosting would stop it.
- Whoever the NS records name is where the DNS edits are made: the registrar, the old host, or a DNS service such as Cloudflare.

**Records that must stay untouched:** every MX record, the SPF TXT record, the DMARC record, any DKIM records (`*._domainkey`), any verification TXT records (Google, Microsoft), autodiscover and SRV records, and any `mail`, `webmail` or `ftp` host records.

## 2. Apex or www

The old site's canonical tag and Open Graph URL are `https://lynehamdentalcare.com.au/`, and Google indexes the apex (`https://lynehamdentalcare.com.au/contact`, `/about-us`, `/services` and others). So we keep our standard:

- **Apex `lynehamdentalcare.com.au` is primary.**
- **`www` redirects to the apex with a 308.**

`bash docs/check-golive.sh hosts` shows how http, https, apex and www land today. If it shows www is primary on the old site, stop and swap the two above.

## 3. Vercel steps

1. **A day before:** at the DNS host, lower the TTL on the apex A and the www record to 300 seconds (5 minutes), so the switch and any rollback take effect quickly.
2. **Vercel, project lyneham-dental, Settings, Domains:**
   - Add `lynehamdentalcare.com.au`.
   - Add `www.lynehamdentalcare.com.au` and set it to **Redirect to lynehamdentalcare.com.au**, status **308**.
   - Vercel then shows "Invalid Configuration" with the exact records to add. Use the values Vercel shows.
3. **At the DNS host:**

   | Type | Name | Value (use Vercel's) | Usually looks like |
   |---|---|---|---|
   | A | @ | Vercel's IP | `76.76.21.21`, or a newer project-specific IP such as `216.198.79.1` |
   | CNAME | www | Vercel's target | `cname.vercel-dns.com`, or a project-specific `xxxx.vercel-dns-0xx.com` |

4. **Remove the old website records only:**
   - Edit the existing apex **A** record (`@`) to Vercel's IP rather than adding a second one. Two A records would send some visitors to the old site.
   - Delete any apex **AAAA** record that points at the old server.
   - Change **www** to the Vercel CNAME. If www is an A record, delete it and add the CNAME.
   - Don't touch anything in the "must stay untouched" list in section 1. If unsure about a record, leave it and ask.
5. **Wait for Vercel to show "Valid Configuration"** on both domains. The SSL certificate is issued automatically, usually within minutes.

**Rollback:** put the apex A and www records back to the old values (saved from the dns check). With a 300 second TTL that takes effect within minutes.

## 4. Switches on the site at go-live

Nothing needs changing in the code:

- **Canonical tags, Open Graph URLs and images, the schema `url`, `sitemap.xml` and `robots.txt`** already use `https://lynehamdentalcare.com.au`. They were written for the live domain from the start.
- **Indexing:** `vercel.json` sends `X-Robots-Tag: noindex, nofollow` only when the host ends in `.vercel.app`. Previews stay noindexed. The live domain is indexable as soon as it points at Vercel.
- **Hard-coded `vercel.app`:** none in any page, script or setting. The only mentions are in `README.md`, which isn't served.
- One side effect until go-live: link previews of the vercel.app address load their images from the live domain, which still serves Drupal, so shared preview links may show no image. That fixes itself at the switch.

## 5. Old Drupal URLs

`vercel.json` sends every old address to its new page with a 301. The old site's sitemap could not be read from here. The list below comes from the old site's menus and Google's index:

| Old | New |
|---|---|
| /service/preventative-care, /node/64 | /services/preventative/check-up-and-clean/ |
| /service/childrens-dentistry, /node/68 | /services/preventative/childrens-dentistry/ |
| /service/cosmetic-enhancements, /node/65 | /services/cosmetic/ |
| /service/tooth-reconstruction-cerec-one-visit-dentistry, /node/19 | /services/restorative/cerec-one-visit-crowns/ |
| /service/root-canal-treatment, /node/66 | /services/restorative/root-canal-treatment/ |
| /service/grinding-and-temporomandibular-joint-dysfunction, /node/70 | /services/general/grinding-clenching-tmj/ |
| /service/extractions, /node/67 | /services/general/extractions/ |
| /service/emergency-dentist-our-canberra-patients, /node/71 | /services/general/dental-emergencies/ |
| /our-team-dr-patrick-huang (and the other three) | /our-team/dr-.../ |
| /news, /news/... | /blog/ |
| /portfolio | /services/ |
| /smile-gallery | / |
| /rss.xml | /blog/ |
| any other /node/... | / |
| /about-us, /services, /patient-information, /contact | same page with a trailing slash |

New in v1.5.0: the eight `/node/` numbers (the old homepage's "Read more" links), a catch-all for other `/node/` addresses, and `/rss.xml`.

Not redirected: old image and file links under `/sites/default/files/`. They return 404. That is normal, and nothing on the new site links to them.

**Before the switch:** run `bash docs/check-golive.sh redirects https://lyneham-dental.vercel.app`. Every line should say ok.

**Resolved by go-live:** the old site still says "accredited dental practice" and "over 20 years". Both disappear when the domain points at the new site.

## 6. Email and the enquiry form

- **The form is not affected by the website DNS.** `api/enquiry.js` sends through SMTP2GO's API from Vercel, so it keeps working through the switch.
- **Recipients:** `ENQUIRY_TO` in Vercel, or the fallback in `api/enquiry.js` (admin@lynehamdentalcare.com.au and rowayne@gyaclients.com). admin@ keeps receiving because the MX records don't change.
- **Sender:** `SENDER_EMAIL` must be on a domain verified in the practice's SMTP2GO account. Check which address is set in Vercel, Settings, Environment Variables, Production.
  - If it is already `website@lynehamdentalcare.com.au` and the form works on the preview, the domain is verified. Nothing to do.
  - If it uses another domain, verify `lynehamdentalcare.com.au` in SMTP2GO first. Go to Sending, then Verified Senders, then Add Sender Domain. SMTP2GO shows three CNAME records to add at the DNS host. They are additive and don't affect existing email:

    | Type | Name | Points to |
    |---|---|---|
    | CNAME | `s<number>._domainkey` | `dkim.smtp2go.net` (DKIM) |
    | CNAME | `em<number>` | `return.smtp2go.net` (return-path) |
    | CNAME | `link` | `track.smtp2go.net` (link tracking, optional) |

    Use the exact names SMTP2GO shows. The numbers are specific to the account. Once verified, set `SENDER_EMAIL` to `Lyneham Dental Care <website@lynehamdentalcare.com.au>` and redeploy.
  - No SPF change is needed, because SMTP2GO's return-path handles it.

## 7. Zavy360 booking

- `/book-online/` embeds `https://bookings.zavy360.com/booking/lynehamdentalcare/...` in an iframe. Nothing in it depends on the website's domain, and it already works on the preview.
- **Zavy may limit which websites can embed the booking page.** If the iframe is blank on the live domain after the switch, ask Zavy to allow `lynehamdentalcare.com.au` and `www.lynehamdentalcare.com.au`. Meanwhile the "Open the booking page" link below the frame still works.
- Our `X-Frame-Options: SAMEORIGIN` header only stops other sites framing ours. It doesn't affect the Zavy frame.

## 8. After go-live

1. Open `https://lynehamdentalcare.com.au/` and `https://www.lynehamdentalcare.com.au/`. The second should land on the first, with a padlock on both.
2. `bash docs/check-golive.sh redirects https://lynehamdentalcare.com.au`: every line ok.
3. Submit the contact form once and confirm it reaches admin@ and rowayne@gyaclients.com.
4. Open `/book-online/` and start a booking up to the time-slot step, without confirming.
5. **Google Search Console:**
   - Add a Domain property for `lynehamdentalcare.com.au`.
   - Add the TXT record it shows at the DNS host (alongside the existing TXT records, not replacing them) and verify.
   - Submit `https://lynehamdentalcare.com.au/sitemap.xml`.
6. **Google Business Profile:** set the website link to `https://lynehamdentalcare.com.au/`. Booking links can go to `/book-online/`.
7. Check that email to admin@lynehamdentalcare.com.au still arrives (send one from a personal address).
8. Keep the old hosting for at least two weeks as a fallback, and longer if email lives there.

## 9. Open items (from v1.4.0, still unanswered)

The wording is left as it is until these are answered:
- [ ] Does the practice have one microscope or more? The homepage Welcome sentence, the Precision card (homepage and About) and the About "Why patients stay" card say "microscopes".
- [ ] Should the site use the full model name, "ZEISS OPMI pico", or keep "Zeiss Pico"?
- [ ] How long is CCTV footage kept, and who can see it? (Privacy policy)
- [ ] Is there a charge for patients' copies of their records? (Privacy policy; transfers are free)
- [ ] Is admin@lynehamdentalcare.com.au checked regularly? It is the privacy contact email.
- [ ] Before and after photos (Dr Huang is choosing them). Each needs patient consent, the same lighting and angle, no retouching, and a "results vary" line.
- [ ] Footer ABN (optional): the natural spot is the copyright line, "© 2026 Lyneham Dental Care. ABN 80 436 631 241. All rights reserved."
