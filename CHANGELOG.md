# Changelog

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
