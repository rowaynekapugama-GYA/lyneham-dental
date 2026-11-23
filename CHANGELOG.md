# Changelog

## v1.7.0 (23 November 2026): Philips Zoom, Angel Aligner, MAS and sleep study, root canal page, emergencies, privacy records, icons

From Dr Huang's emails of 20 November (his answers) and 22 November (suggestions from the two associate dentists). Built from main at 773ba05 (v1.6.0).

Commit message: "content: Philips Zoom, Angel Aligner, MAS and sleep study wording, root canal page, emergencies, privacy records, icons"

Lines marked (draft) are waiting on Dr Huang's approval.

### Dr Huang's answers
1. Teeth Whitening: "Zoom" is now "Philips Zoom" in both places it appeared (the in-chair card and its bullet). No other page, tile, menu or meta used it.
2. Implants, restore only. Implant Restorations "Is it right for you?" now includes (draft): "We do not place implants at the practice. The implant itself is placed by a surgeon or specialist, and we then make and fit the crown or bridge that goes on it." No other page suggests placement.
3. Clear Aligners, "How clear aligners work", now opens: "We use the Angel Aligner system." There is no "which system" FAQ, so the body has the only mention. The suitability card and "results vary" lines are unchanged.
4. Splint photos: only the email previews (166 px) were available, which is too small for any use on the page. The hero is unchanged, pending the full-size originals. Pick: IMG_3225.

### Associates' edits
5. In-chair whitening (draft). "It is carried out by your dentist in a single appointment, rather than over a series of days at home." is now "It is carried out in a single appointment, rather than over a series of days at home. In-chair whitening is currently provided by Dr Teresa Viengkhou, who also sees you for the consultation beforehand." Her name links to her profile.
6. Snoring and MAS (draft). "Dr Teresa Viengkhou offers consultations for these appliances at our practice, and will discuss whether one may be suitable for you." is now "Dr Teresa Viengkhou and Dr Hung-Ting Lin both provide consultations for snoring and mandibular advancement splints at our practice, and will discuss whether a splint may be suitable for you." The FAQ "How do I know if a snoring appliance is right for me?" now names both. Both names link to their profiles.
7. Snoring and MAS, sleep apnoea (draft):
   - Summary now adds: "It can have several causes, and one of them is obstructive sleep apnoea (OSA), where the airway repeatedly narrows or closes during sleep. A custom-made mandibular advancement splint (MAS), often simply called a snoring appliance, is worn at night and gently eases the lower jaw forward to help keep the airway open. It is one way of treating OSA once it has been diagnosed through a sleep study."
   - The card "Snoring and your wider health" is replaced by "Sleep apnoea and a sleep study": "Snoring can be a sign of obstructive sleep apnoea (OSA). A dentist cannot diagnose OSA: a diagnosis comes from a sleep study. A mandibular advancement splint is prescribed when OSA has been diagnosed, preferably with a recommendation from a sleep physician that a splint is a suitable treatment option for you. / A splint is one option for treating OSA, not the only one, and whether it suits you depends on your diagnosis. If you have not had a sleep study, we can talk you through the steps to arrange one through your GP or a sleep physician."
   - FAQ "Will an appliance treat sleep apnoea?" was "...We may suggest you also speak with your GP or a sleep specialist so your wider health is properly considered." It is now: "A mandibular advancement splint is one option for treating obstructive sleep apnoea (OSA), but it is not the only one. OSA first needs to be diagnosed through a sleep study, as a dentist cannot diagnose it. A splint is prescribed once OSA has been diagnosed, preferably with a sleep physician's recommendation that it is a suitable option for you."
   - FAQ "Should I see my doctor about my snoring too?" was "Sometimes, yes. Because snoring can be linked to wider sleep and health concerns, we may recommend speaking with your GP or a sleep specialist alongside considering a dental appliance." It is now: "Often, yes. A sleep study is needed first to find out whether sleep apnoea is involved, and we can talk you through the steps to arrange one through your GP or a sleep physician."
   - Meta description is now: "Snoring appliances (mandibular advancement splints) at Lyneham Dental Care, Canberra. Snoring can be a sign of sleep apnoea, so a sleep study comes first."
   - Service tile summary (5 pages) is now: "Snoring can be a sign of sleep apnoea. A custom splint is one treatment option once it has been diagnosed through a sleep study."
8. Root Canal image: the 3D render is replaced by a neutral line illustration of a molar cross-section (crown, enamel, pulp chamber, two canals, two roots), drawn for the site. The file name is the same, so the hero, tiles and menu thumbnail all show it. A licensed illustration is listed in docs/STOCK-SHOT-LIST.md.
9. Root Canal tone (draft). The page now opens with what the treatment is for, then signs, steps and what to expect afterwards. "Successful in the majority of cases", "far more comfortable than many people expect" and "far more comfortable than its reputation suggests" are removed. Full before and after wording is in the v1.7.0 report. The risks callout is unchanged.
10. Root Canal microscope (draft): "Treatment is carried out using our Zeiss Pico dental operating microscope, which magnifies the inside of the tooth."
11. Dental Emergencies (draft): "keep it moist" now reads "keep it moist in milk or the person's own saliva, not water", in the "In the meantime" box and the FAQ "My tooth has been knocked out" (page and schema).
12. Dental Emergencies: "Getting in touch" now has a phone icon.
13. Teeth Grinding FAQ "Can teeth grinding damage my teeth?" (draft) adds: "It also increases the risk of teeth and restorations, such as fillings and crowns, fracturing."
14. Footer banner: left at three items. The four-item mock-up with CDBS is in the screenshots only.
15. Privacy, CCTV: unchanged ("We use, or are installing"), until Dr Huang confirms it is installed.
16. Privacy, records (draft). "we keep them until they turn 25. After that, records are destroyed securely." is now "we keep them at least until they turn 25. After these periods, records may be securely destroyed or de-identified." The adult sentence already said "at least seven years". Last updated is now 23 November 2026, and the Claude Doc matches.
17. Icons: every info box on a treatment page now has its own icon. The changes are listed in the v1.7.0 report.
18. Blog: "New articles will appear here, newest first" is now "Articles will appear here, newest first".

### Still open
- Splint photo originals (IMG_3225, IMG_3226, IMG_3230 at full size).
- Is the CCTV installed, so we can say "we use"?
- Add CDBS to the footer banner?
- One microscope or more? "ZEISS OPMI pico" full name? CCTV retention and who can view footage? Is admin@ monitored? Before and after photos. Stock photos from the shot list. Go-live date for lynehamdentalcare.com.au.

## v1.6.0 (19 November 2026): in-chair Zoom whitening, implant restorations and clear aligners, photo swaps

From Dr Huang's email of 18 November 2026 (edits from one of his associate dentists). Built from main at d33e7e1 (v1.5.1).

Commit message: "content: in-chair Zoom whitening, implant restorations and clear aligners, photo swaps, team order everywhere"

### Team order (no change needed)
Already the same everywhere since v1.5.1 (d33e7e1): Dr Patrick Huang, Dr Kaitlyn Beers, Dr Hung-Ting Lin, Dr Teresa Viengkhou on the homepage cards and sentence, the Our Team menu (desktop and mobile, every page), the Our Team page, the About page and the four profile pages.

### Teeth Whitening: in-chair Zoom (drafted, for Dr Huang's approval)
Two cards added after "Our tailored, take-home approach":
- "In-chair whitening": "If you would prefer to whiten your teeth at the practice, we also offer in-chair whitening with the Zoom whitening system. It is carried out by your dentist in a single appointment, rather than over a series of days at home." / "At your appointment, we protect your gums and lips, then apply a professional whitening gel to your teeth, checking how they are responding as we go. We will talk you through each step, so you know what to expect before we begin."
- "Before your in-chair appointment": "As with take-home whitening, we start with a check-up to make sure whitening is suitable for you, and that any decay or gum problems are looked after first. We will also discuss whether in-chair or take-home whitening suits you better." Bullets: "It is done at the practice, in one appointment, using the Zoom system" / "A check-up first confirms that whitening is suitable for you" / "It lightens natural teeth only, not fillings, crowns or veneers". Closing line: "Results vary between people. Some people notice temporary tooth sensitivity after whitening."
- Related tiles: Children's Dentistry swapped for Clear Aligners.

### New service pages (drafted, for Dr Huang's approval)
- /services/restorative/implant-restorations/ "Implant restorations": restoring implants with crowns and bridges; does not say the practice places implants. Four cards, four FAQs, FAQ schema, risks and second-opinion callout, related tiles (Crowns and Bridges, CEREC, Inlays and Onlays).
- /services/cosmetic/clear-aligners/ "Clear aligners": no brand named; suitability card, "Results vary" lines, four cards, four FAQs, FAQ schema, related tiles (Teeth Whitening, Veneers, Check-up and Clean).
- Both are in the sitemap, the desktop and mobile Services menus on every page, the Services page index, and the Cosmetic and Restorative category pages. /implant-restorations and /clear-aligners redirect (301) to them.
- Category summaries: "Single-visit crowns, crowns and bridges, inlays and onlays, and root canal treatment." now "Single-visit crowns, crowns and bridges, implant restorations, inlays and onlays, and root canal treatment." (homepage, Services page, six location pages). "Teeth whitening and porcelain veneers." now "Teeth whitening, porcelain veneers and clear aligners." (Services page, five location pages); the Braddon version and the homepage version ("Teeth whitening and veneers, ...") likewise.
- Braddon FAQ: "Yes, we offer professional take-home whitening and porcelain veneers, always beginning..." now "Yes, we offer professional in-chair and take-home whitening, porcelain veneers and clear aligners, always beginning..." (page and schema).
- Crowns and Bridges related tiles: Root Canal Treatment swapped for Implant Restorations. Veneers related tiles: Children's Dentistry swapped for Clear Aligners.

### Fissure Sealants
- Before: "It is a quiet, preventative measure, quietly working in the background to help a healthy tooth stay that way."
- After: "It is a preventative measure, quietly working in the background to help a healthy tooth stay that way."

### Photos
- Custom Mouthguards now shows the sports mouthguard photo (alt "A smiling child holding a blue mouthguard"); Teeth Grinding now shows the clear splint photo (alt "A clear splint being placed over the teeth"). Menu thumbnails and tiles swapped with them. The Teeth Grinding hero, tiles and menu thumbnail all use one file, `images/svc-bruxism.webp`, ready for Dr Huang's nylon splint photo.
- Crowns and Bridges: the implant, tooth and bridge render is removed everywhere it appeared (hero, category tile, related tiles, menu). A neutral line illustration stands in until a licensed bridge photo is bought (alt "Line illustration of a dental bridge").
- New pages use neutral line illustrations too. Photos to buy: `docs/STOCK-SHOT-LIST.md`.

### Still open
- "Zoom" or "Philips Zoom"?
- Does the practice place implants, or restore them only?
- Which clear aligner system?
- Dr Huang's nylon splint photo; stock photos for Crowns and Bridges, Implant Restorations and Clear Aligners.
- Root Canal hero is a stylised 3D render (listed, not changed).
- From v1.5.0: one microscope or more; "ZEISS OPMI pico"; CCTV retention and access; any charge for patients' copies of records; is admin@ monitored; before and after photos.

## v1.5.1 (17 November 2026): same team order everywhere

Built from main at 0281ada (v1.5.0). Requested by Rowayne so the team reads in Dr Huang's order on every page, on phone and desktop.

Commit message: "content: same team order on Our Team, About and profile pages"

Order everywhere: Dr Patrick Huang, Dr Kaitlyn Beers, Dr Hung-Ting Lin, Dr Teresa Viengkhou.
- Our Team page team cards. Before: Huang, Lin, Beers, Viengkhou.
- About page team cards. Before: Huang, Lin, Beers, Viengkhou.
- Profile pages, "the rest of the team" cards (each page leaves out its own dentist): Dr Patrick Huang page now Beers, Lin, Viengkhou (was Lin, Beers, Viengkhou); Dr Teresa Viengkhou page now Huang, Beers, Lin (was Huang, Lin, Beers). The Kaitlyn Beers and Hung-Ting Lin pages were already in order.
- Homepage sentence above the team cards. Before: "Our dentists, Dr Patrick Huang, Dr Hung-Ting Lin, Dr Kaitlyn Beers and Dr Teresa Viengkhou, would be glad to welcome you." After: "Our dentists, Dr Patrick Huang, Dr Kaitlyn Beers, Dr Hung-Ting Lin and Dr Teresa Viengkhou, would be glad to welcome you."
- Names, titles, qualifications and photos unchanged. The homepage cards and the Our Team menu (desktop and mobile) were already in this order from v1.5.0.

## v1.5.0 (17 November 2026): team order, ABN and entity in privacy policy, go-live guide

From Dr Huang's email of 17 November 2026. Built from main at 6ef31d3 (v1.4.0).

Commit message: "content: team order, ABN and entity in privacy policy, go-live guide"

### Team order
- Homepage "Meet our team" and the "Our Team" dropdown in the header (desktop and mobile menu, all 40 pages).
  Before: Dr Patrick Huang, Dr Hung-Ting Lin, Dr Kaitlyn Beers, Dr Teresa Viengkhou
  After: Dr Patrick Huang, Dr Kaitlyn Beers, Dr Hung-Ting Lin, Dr Teresa Viengkhou
- Names, titles, qualifications and photos unchanged; only the order moved. Nobody else is in either list.
- Not changed (not mentioned by Dr Huang): the Our Team page and the About page team section, both still Patrick Huang, Hung-Ting Lin, Kaitlyn Beers, Teresa Viengkhou.

### Privacy policy (page and Claude Doc, word for word)
- Section 1, added after the first sentence: "The practice is operated by The Trustee for The LDC Trust (ABN 80 436 631 241)."
- Last updated: 16 November 2026 changed to 17 November 2026.

### Go-live preparation
- New `docs/GO-LIVE.md` (DNS records to keep, Vercel domain steps, redirects, email, booking, after go-live) and `docs/check-golive.sh` (read-only DNS, host and redirect checks).
- `.vercelignore`: `docs` added so neither file is served.
- `vercel.json`: 301 redirects added for the old homepage's "Read more" links (/node/64, 68, 65, 19, 66, 70, 67, 71 to their service pages), any other /node/ address to the homepage, and /rss.xml to /blog/.
- `README.md`: "Before go-live" now points to docs/GO-LIVE.md.

### Still open
- One microscope or more ("microscopes" on the homepage Welcome and Precision cards, About Precision card and "Why patients stay").
- Full model name "ZEISS OPMI pico"?
- CCTV retention and who can see footage.
- Any charge for patients' copies of records.
- Is admin@lynehamdentalcare.com.au monitored?
- Before and after photos.

## v1.4.0 (16 November 2026): modern technology wording, Zeiss Pico, privacy policy answers

From Dr Huang's email of 14 November 2026. Built from main at faa5eb4 (v1.3.0).

Commit message: "content: modern technology wording, Zeiss Pico, privacy policy answers from Dr Huang"

### Wording
- Homepage, Welcome section.
  Before: "We pair that personal attention with thoughtful, modern dentistry, including dental microscopes for precision, a Gemini diode soft tissue laser, and single-visit ceramic and zirconia restorations, so that excellent care never comes at the expense of comfort ."
  After: "We pair that personal attention with thoughtful dentistry using modern technology, including dental microscopes for precision, a Gemini diode soft tissue laser, and single-visit ceramic and zirconia restorations, so that excellent care never comes at the expense of comfort."
- About, Safety and quality.
  Before: "We are among the few general dental practices to use dental operating microscopes. The view through the dental microscope enlarges the surface of a tooth to the size of a dinner plate."
  After: "We use a Zeiss Pico dental operating microscope. The view through the microscope enlarges the surface of a tooth to the size of a dinner plate." ("the dental microscope" became "the microscope" so the sentence does not repeat the one before it.)
- "State of the art" appears nowhere on the site; "among the few" and "one of the few" are gone.
- Unchanged: O'Connor's "Thoughtful, modern dentistry, applied with a gentle and unhurried approach." (a different sentence). The plural "microscopes" stays on the homepage Welcome sentence, the Precision icon card (homepage and About) and the About Why patients stay card until the practice confirms how many microscopes it has.

### Stray spaces before punctuation (left by the review tags removed in r3.1)
- Homepage: "at the expense of comfort ." to "comfort."
- Extractions: "expert care ." to "expert care."
- Veneers: "look entirely natural :" to "natural:"
- Inlays and Onlays: "looks and feels entirely natural ," to "natural,"
- Root Canal Treatment: "than many people expect ." to "expect." and "in the majority of cases ," to "cases,"

### Privacy policy (privacy-policy/index.html and the draft Claude Doc, word for word)
- Section 2, new paragraph: "CCTV. We use, or are installing, CCTV at the practice for security, with signs where cameras operate."
- Section 3, uses.
  Before: "send appointment confirmations, reminders and recall notices by phone, SMS or email"
  After: "send appointment reminders and recalls by SMS and email (you can tell us which you prefer)"
- Section 3, Marketing.
  Before: "We will only send you newsletters or promotional messages if you have agreed to receive them, and you can opt out at any time by replying STOP, using the unsubscribe link or telling us. Appointment reminders and recall notices are part of your care, not marketing."
  After: "We don't currently send newsletters or promotional messages. If that changes, we will only send them with your consent, and you will be able to opt out at any time. Appointment reminders and recalls are part of your care, not marketing."
- Section 4, where records are held.
  Before: "Our patient records are digital and are stored in an Australian-based cloud database. We protect them with password-protected accounts, ..."
  After: "Our patient records are digital and are kept in Zavy, our practice management system, which stores them in Australia. Digital x-rays are stored on a server at the practice, with cloud backup through Datto; our IT provider, Biztech, has confirmed that this backup is stored in Australia. Digital impressions (3D scans of your teeth) are stored and processed through DS Core, a Dentsply Sirona service, in Sydney." Then a new paragraph: "We protect your records with password-protected accounts, ..." (rest unchanged).
- Section 6, Seeing your records.
  Before: "We may need to confirm your identity first, and a fee may apply for copies or a summary, within the limits set under ACT law; we will tell you before any fee is charged."
  After: "We may need to confirm your identity first. There is no charge to transfer your records to another practitioner. If a fee applies for copies or a summary, it will be within the limits set under ACT law, and we will tell you before it is charged."
- Section 6, Questions and complaints.
  Before: "Please contact us first so we can try to resolve your concern."
  After: "Our Practice Manager, Fay Timmings, looks after privacy questions and complaints. Please contact her first so we can try to resolve your concern."
  Contact list, before: "Lyneham Dental Care, 45 Hall Street, Lyneham ACT 2602"; after: "Post: Fay Timmings, Practice Manager, Lyneham Dental Care, 45 Hall Street, Lyneham ACT 2602". Phone and email unchanged (the practice's 02 6249 1785 and admin@lynehamdentalcare.com.au).
- Last updated: 12 November 2026 to 16 November 2026.
- Unchanged: everything else, including the section saying website enquiries may be processed outside Australia.

### Still open with the practice
Legal entity name and ABN; how many microscopes; whether to use Zeiss's model name "OPMI pico"; CCTV retention and who can view footage; any charge for patients' copies of their own records; that admin@lynehamdentalcare.com.au is monitored; before and after photos.

## v1.3.0 (12 November 2026): privacy policy

- Privacy Policy page: the holding text is replaced by the full policy (six sections: about the policy, what we collect, use and sharing, storage and retention, the website, access and complaints). Last updated 12 November 2026. Meta description updated.
- Drafted by GYA and published at Rowayne's request before the practice has confirmed it. Still to confirm with the practice: legal entity name and ABN, the privacy contact, that Zavy stores records in Australia, other systems holding patient data, SMS/email reminders, whether any marketing is sent, CCTV, and fees for copies of records.

## v1.2.0 (12 November 2026): homepage headline and family wording

Following Dr Huang's design feedback of 24 September 2026.
- Homepage H1: "Trusted dental care in the heart of Lyneham" to "Everyday dentistry, done really well" (his preferred line). The page title, meta description and the "Dentist Lyneham, Canberra" eyebrow above the H1 are unchanged, so the location keywords stay.
- Homepage hero: "cared for Canberra families" to "cared for Canberra patients" (he felt the design leaned too heavily into family). "Family owned" is kept, as it describes the ownership.

## v1.1.0 (12 November 2026): Dr Huang's edits and Zavy online booking

Commit message: "Client edits: 30 years, accreditation removed, bios, technology, Zavy online booking"

### Accreditation removed (renewal not yet complete)
The wording below was removed so it can go back once the renewal is done. Nothing was written in its place.

| Where | Removed wording | Now |
|---|---|---|
| Footer trust line, all 39 pages | "Accredited dental practice · " (start of the line) | "New patients welcome · Department of Veterans' Affairs (DVA) welcome · HICAPS on-the-spot health-fund claims" |
| Why patients choose us card: /dentist-dickson/, /dentist-watson/, /index.html/ | "An accredited practice, held to recognised national safety and quality standards." | Card removed; the other cards remain |
| Convenient for card: /dentist-ainslie/, /dentist-braddon/, /dentist-downer/, /dentist-oconnor/ | "An accredited, independent and family-owned practice." | "An independent and family-owned practice." |
| About, Safety and quality icon cards | "Standards / Accredited practice" card | Card removed; Infection control card now fills the 2 x 2 grid |
| About, Safety and quality paragraph | "We are an accredited practice, independently assessed against the National Safety and Quality Health Service Standards, and we adhere fully to the ACT's infection control regulations." | "We adhere fully to the ACT's infection control regulations." |
| /dentist-dickson/ and /dentist-oconnor/ meta and OG description | "gentle, accredited dental care" | "gentle dental care" |
| /dentist-watson/ meta and OG description | "A trusted, accredited dentist" | "A trusted dentist" |
| /dentist-braddon/ meta and OG description | "A considered, accredited dentist" | "A considered dentist" |
| /dentist-downer/ meta and OG description | "A gentle, accredited dentist" | "A gentle dentist" |
| /dentist-ainslie/ meta and OG description | "A gentle, accredited family dentist" | "A gentle family dentist" |
| /dentist-ainslie/ H1 and breadcrumb | "Gentle, accredited dental care for Ainslie" | "Gentle dental care for Ainslie" |

### Thirty years (practice founded 1993)
- Footer and stats band intro, every page: "trusted by Canberra for over twenty years" to "over thirty years" (53 instances, including homepage and About meta descriptions).
- Homepage hero and /dentist-dickson/ lead: "For more than twenty years" to "For more than thirty years".
- Suburb leads (/dentist-ainslie/, /dentist-braddon/, /dentist-downer/, /dentist-oconnor/, /dentist-watson/): "for more than twenty years" to "for more than thirty years".
- About H1: "A practice Canberra has trusted for over twenty years" to "over thirty years". About, Our story: "More than twenty years on" to "More than thirty years on".
- Stats band, 10 pages: "20+ Years caring for the Canberra community" to "30+".

### Technology and imaging
- Homepage Welcome: "including dental microscopes for precision, low-dose digital imaging, and single-visit ceramic restorations" to "including dental microscopes for precision, a Gemini diode soft tissue laser, and single-visit ceramic and zirconia restorations". "Modern dentistry" is unchanged while "state of the art" is checked with the practice.
- Technology icon card (homepage and About): "Single-visit ceramic restorations" to "Single-visit ceramic and zirconia restorations".
- Imaging icon card (homepage and About): "Low-dose digital imaging" to "Low-dose digital radiography".
- About, Why patients stay: "Modern technology, including digital imaging, microscopes and single-visit crowns." to "Modern technology, including a Gemini diode soft tissue laser, microscopes and single-visit crowns."
- About, Safety and quality: Dr Huang's text replaces "Our records and imaging are digital, which keeps radiation exposure low, and we are among the few general practices to use dental microscope technology for added precision." The single-visit ceramic sentence and "In short" line that follow are unchanged.

### Team
- Dr Kaitlyn Beers: "her husband, daughter and their dog" to "daughters".
- Dr Patrick Huang: qualifications now "BSc (SFU), BDent (SYD)" on his profile, Our Team, the homepage and About team cards, the Our Team menu and the other dentists' "meet the rest" cards (7 places).
- Dr Patrick Huang: last bio paragraph replaced with the practice's wording ("Canberrra" corrected to "Canberra").

### Online booking (Zavy360)
- New page /book-online/ with the Zavy embed (their iframe attributes kept, plus a title for screen readers), an origin check on the resize message, a 600px minimum height and a fallback link that opens the booking page in a new tab.
- Every Book button (196 links across all pages: header, mobile menu, mobile call/book bar, heroes, service and suburb CTAs, panels) now goes to /book-online/. Contact page booking note now links to it. BOOKING_URL in main.js updated.
- Booking clicks push a book_online event to window.dataLayer (no GA4 or GTM on the site yet, so nothing is sent until one is added).
- /book-online/ added to sitemap.xml. No Content-Security-Policy is set, and X-Frame-Options only controls this site being framed, so Zavy needs no header change.

### Homepage phone number
- Larger phone number in the homepage body (hero, panels and visit card): same font, weight and colour. The hero number goes from 15px to 20px on phones and 25.6px on desktop. The header is unchanged; it shows a phone icon up to 1500px wide.

### Layout
- Card grids whose last row is incomplete now centre it instead of leaving an empty slot (homepage Why patients choose us, and the Convenient for grids on all six suburb pages).
- Contact page: the contact details card no longer runs 33px off screen at 320px (the email address can now wrap). This was in v1.0.0.

### Repo
- Added CHANGELOG.md, .gitignore and .env.example; README updated. CHANGELOG, README and .env.example are excluded from the deployed site (.vercelignore).

## v1.0.0 (1 October 2026)
- First production build on Vercel: 38 pages plus a 404, client URL structure, old-site 301 redirects, SMTP2GO contact form, sitemap and schema. Contact page form-first layout and full-width map.
