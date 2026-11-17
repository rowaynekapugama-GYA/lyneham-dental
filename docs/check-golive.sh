#!/bin/bash
# Lyneham Dental Care go-live checks. Read only: nothing is changed anywhere.
# Runs on a Mac (dig and curl are built in). The docs folder is not deployed.
#
#   bash docs/check-golive.sh dns                                   DNS records today
#   bash docs/check-golive.sh hosts                                 where apex and www land now
#   bash docs/check-golive.sh redirects https://lyneham-dental.vercel.app
#   bash docs/check-golive.sh redirects https://lynehamdentalcare.com.au   (after the switch)

DOMAIN="lynehamdentalcare.com.au"
MODE="${1:-}"

line() { printf '%-28s %s\n' "$1" "$2"; }

case "$MODE" in
  dns)
    echo "== DNS for $DOMAIN ($(date '+%d %b %Y %H:%M'))"
    for t in NS SOA A AAAA MX TXT CAA; do
      echo "-- $t"; dig +noall +answer "$DOMAIN" "$t"
    done
    echo "-- www";            dig +noall +answer "www.$DOMAIN" CNAME; dig +noall +answer "www.$DOMAIN" A
    echo "-- _dmarc";         dig +noall +answer "_dmarc.$DOMAIN" TXT
    echo "-- mail, webmail, autodiscover, ftp (often on the same server as the old site)"
    for h in mail webmail autodiscover ftp cpanel; do dig +noall +answer "$h.$DOMAIN"; done
    echo "-- whois name servers and registrar"
    whois "$DOMAIN" 2>/dev/null | grep -iE 'registrar name|reseller|name server|status' | head -12
    ;;
  hosts)
    for u in "http://$DOMAIN/" "https://$DOMAIN/" "http://www.$DOMAIN/" "https://www.$DOMAIN/"; do
      line "$u" "$(curl -s -o /dev/null -m 15 -w '%{http_code} -> %{redirect_url}' "$u")"
    done
    ;;
  redirects)
    BASE="${2:?Give the site address, for example https://lyneham-dental.vercel.app}"
    BASE="${BASE%/}"
    FAIL=0
    while read -r P; do
      [ -z "$P" ] && continue
      R="$(curl -s -o /dev/null -L -m 20 -w '%{http_code} %{url_effective}' "$BASE$P")"
      CODE="${R%% *}"; FINAL="${R#* }"
      if [ "$CODE" = "200" ]; then line "$P" "ok  ${FINAL#$BASE}"; else line "$P" "FAIL $CODE ${FINAL#$BASE}"; FAIL=1; fi
    done << 'URLS'
/
/about-us
/services
/patient-information
/contact
/news
/news/retired-team-members
/news/your-safety-our-first-priority
/news/important-information-lyneham-dental-care
/service/preventative-care
/service/childrens-dentistry
/service/cosmetic-enhancements
/service/tooth-reconstruction-cerec-one-visit-dentistry
/service/root-canal-treatment
/service/grinding-and-temporomandibular-joint-dysfunction
/service/extractions
/service/emergency-dentist-our-canberra-patients
/node/64
/node/68
/node/65
/node/19
/node/66
/node/70
/node/67
/node/71
/our-team-dr-patrick-huang
/our-team-dr-hung-ting-lin
/our-team-dr-kaitlyn-beers
/our-team-dr-teresa-viengkhou
/portfolio
/smile-gallery
/rss.xml
/sitemap.xml
/robots.txt
/book-online/
/privacy-policy/
URLS
    [ "$FAIL" = 0 ] && echo "All old addresses land on a working page." || echo "Some addresses failed: see FAIL above."
    ;;
  *)
    sed -n '2,9p' "$0" | sed 's/^# \{0,1\}//'; exit 1 ;;
esac
