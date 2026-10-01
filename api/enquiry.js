// Lyneham Dental Care: contact form relay through SMTP2GO.
// Environment variables (Vercel, Production and Preview):
//   SMTP2GO_API_KEY  required
//   SENDER_EMAIL     a from-address on an SMTP2GO-verified domain, e.g. "Lyneham Dental Care <website@lynehamdentalcare.com.au>"
//   ENQUIRY_TO       comma-separated recipients; falls back to the list below
const FALLBACK_TO = ['admin@lynehamdentalcare.com.au', 'rowayne@gyaclients.com'];

const clean = (v, max) => String(v == null ? '' : v).replace(/[\r\n]+/g, ' ').trim().slice(0, max);
const esc = (s) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

module.exports = async (req, res) => {
  if (req.method !== 'POST') { res.setHeader('Allow', 'POST'); return res.status(405).json({ ok: false }); }
  let b = req.body || {};
  if (typeof b === 'string') { try { b = JSON.parse(b); } catch (e) { b = {}; } }

  if (b.website) return res.status(200).json({ ok: true });            // honeypot: quietly ignore bots

  const name = clean(b.name, 120), phone = clean(b.phone, 40), email = clean(b.email, 160);
  const method = clean(b.contact_method, 20) || 'phone';
  const message = String(b.message == null ? '' : b.message).trim().slice(0, 3000);
  const page = clean(b.page, 200);
  if (!name || !phone || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) || !b.consent) {
    return res.status(400).json({ ok: false, error: 'Please complete name, phone, email and the privacy consent.' });
  }

  const key = process.env.SMTP2GO_API_KEY;
  if (!key) return res.status(500).json({ ok: false, error: 'Email is not configured.' });
  const to = (process.env.ENQUIRY_TO ? process.env.ENQUIRY_TO.split(',') : FALLBACK_TO).map((s) => s.trim()).filter(Boolean);
  const sender = process.env.SENDER_EMAIL || 'Lyneham Dental Care <website@lynehamdentalcare.com.au>';

  const rows = [['Name', name], ['Phone', phone], ['Email', email], ['Preferred contact', method], ['Message', message || '(none)'], ['Sent from', page || '/contact/']];
  const text = 'New website enquiry\n\n' + rows.map(([k, v]) => `${k}: ${v}`).join('\n');
  const html = '<h2 style="font-family:Arial,sans-serif;color:#17618C">New website enquiry</h2><table style="font-family:Arial,sans-serif;font-size:14px;border-collapse:collapse">' +
    rows.map(([k, v]) => `<tr><td style="padding:6px 14px 6px 0;color:#5A7183;vertical-align:top">${k}</td><td style="padding:6px 0;white-space:pre-wrap">${esc(v)}</td></tr>`).join('') + '</table>';

  try {
    const r = await fetch('https://api.smtp2go.com/v3/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        api_key: key, to, sender,
        subject: `Website enquiry from ${name}`,
        text_body: text, html_body: html,
        custom_headers: [{ header: 'Reply-To', value: email }]
      })
    });
    const j = await r.json().catch(() => ({}));
    const ok = r.ok && j && j.data && j.data.succeeded > 0;
    return res.status(ok ? 200 : 502).json({ ok: !!ok });
  } catch (e) {
    return res.status(502).json({ ok: false });
  }
};
