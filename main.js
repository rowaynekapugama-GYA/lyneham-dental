/* Lyneham Dental Care, design r1. Shared behaviour for every page. */

/* ---------------------------------------------------------------------------
   Site settings. In the Site Kit build these come from Site Settings in the
   dashboard; here they are one object so every page reads the same values.
   --------------------------------------------------------------------------- */
var SITE = {
  // Zavy online booking goes live in about 3 weeks. Until then every
  // "Book an appointment" button points to the contact page booking slot.
  // Replace with the Zavy link Rowayne supplies. Do not guess it.
  BOOKING_URL: '/book-online/',
  PHONE: '02 6249 1785',
  TEL: 'tel:0262491785',
  // Smile Gallery is designed but switched off until there are consented cases.
  smileGallery: false
};

(function () {
  'use strict';
  var doc = document.documentElement;
  doc.classList.remove('no-js');
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Booking links: one setting feeds every button */
  document.querySelectorAll('[data-book]').forEach(function (a) { a.setAttribute('href', SITE.BOOKING_URL); });

  /* Booking clicks: a book_online event for GA4/GTM once a tag is added (no-op until then) */
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('[data-book], [data-zavy-link]');
    if (!a) return;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'book_online', link_url: a.getAttribute('href'), link_text: (a.textContent || '').trim().slice(0, 60), page_path: location.pathname });
  });

  /* Zavy booking embed: resize only on messages from Zavy itself */
  var zavy = document.getElementById('zavy-online-booking');
  if (zavy) {
    window.addEventListener('message', function (e) {
      if (e.origin !== 'https://bookings.zavy360.com') return;
      var d = e.data;
      if (d && d.type === 'zavy-resize') {
        var h = parseInt(d.height, 10);
        if (h >= 300 && h <= 12000) zavy.style.height = h + 'px';
      }
    });
  }

  /* Feature flags: elements marked data-flag stay hidden unless the flag is on */
  document.querySelectorAll('[data-flag]').forEach(function (el) {
    if (SITE[el.getAttribute('data-flag')]) el.hidden = false;
  });

  /* Header state */
  var header = document.querySelector('.site-header');
  function onScroll() { if (header) header.classList.toggle('scrolled', window.scrollY > 16); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Desktop dropdowns: click or hover, Escape and outside click close */
  var drops = Array.prototype.slice.call(document.querySelectorAll('[data-drop]'));
  var desktop = window.matchMedia('(min-width: 1181px)');
  function closeAll(except) {
    drops.forEach(function (li) {
      if (li === except) return;
      li.querySelector('.drop').classList.remove('open');
      li.querySelector('.nav-link').setAttribute('aria-expanded', 'false');
    });
  }
  drops.forEach(function (li) {
    var btn = li.querySelector('.nav-link'), panel = li.querySelector('.drop'), t = null;
    function open() { if (!desktop.matches) return; clearTimeout(t); closeAll(li); panel.classList.add('open'); btn.setAttribute('aria-expanded', 'true'); }
    function close() { panel.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
    btn.addEventListener('click', function () { panel.classList.contains('open') ? close() : open(); });
    li.addEventListener('mouseenter', open);
    li.addEventListener('mouseleave', function () { t = setTimeout(close, 160); });
    li.addEventListener('focusout', function (e) { if (!li.contains(e.relatedTarget)) close(); });
  });
  document.addEventListener('click', function (e) { if (!e.target.closest('[data-drop]')) closeAll(null); });

  /* Mobile menu */
  var menuBtn = document.querySelector('.menu-btn');
  var menu = document.getElementById('mobile-menu');
  function setMenu(open) {
    if (!menu) return;
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    menu.classList.toggle('open', open);
    if (open) { var first = menu.querySelector('a, button'); if (first) first.focus(); }
  }
  if (menuBtn) menuBtn.addEventListener('click', function () { setMenu(menuBtn.getAttribute('aria-expanded') !== 'true'); });
  document.querySelectorAll('.mm-group > button').forEach(function (b) {
    b.addEventListener('click', function () {
      var sub = document.getElementById(b.getAttribute('aria-controls'));
      var open = b.getAttribute('aria-expanded') !== 'true';
      b.setAttribute('aria-expanded', String(open));
      sub.classList.toggle('open', open);
    });
  });
  if (menu) menu.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    if (menu && menu.classList.contains('open')) { setMenu(false); menuBtn.focus(); }
    var openDrop = drops.filter(function (li) { return li.querySelector('.drop').classList.contains('open'); })[0];
    if (openDrop) { closeAll(null); openDrop.querySelector('.nav-link').focus(); }
  });

  /* Fade and slide on scroll */
  var rv = document.querySelectorAll('.rv');
  if (reduced || !('IntersectionObserver' in window)) {
    rv.forEach(function (el) { el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    rv.forEach(function (el) { io.observe(el); });
  }

  /* Services: filter + slider arrows */
  document.querySelectorAll('[data-slider]').forEach(function (wrap) {
    var track = wrap.querySelector('.slider');
    var prev = wrap.querySelector('[data-prev]'), next = wrap.querySelector('[data-next]');
    function step() { var c = track.querySelector('.svc-card:not([hidden])'); return c ? c.getBoundingClientRect().width + 18 : 300; }
    function update() {
      if (!prev) return;
      prev.disabled = track.scrollLeft < 4;
      next.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
    }
    if (prev) {
      prev.addEventListener('click', function () { track.scrollBy({ left: -step(), behavior: reduced ? 'auto' : 'smooth' }); });
      next.addEventListener('click', function () { track.scrollBy({ left: step(), behavior: reduced ? 'auto' : 'smooth' }); });
    }
    track.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    wrap.querySelectorAll('.filter').forEach(function (f) {
      f.addEventListener('click', function () {
        var cat = f.getAttribute('data-filter');
        wrap.querySelectorAll('.filter').forEach(function (o) { o.setAttribute('aria-pressed', String(o === f)); });
        track.querySelectorAll('.svc-card').forEach(function (c) {
          c.hidden = !(cat === 'all' || (' ' + c.getAttribute('data-cats') + ' ').indexOf(' ' + cat + ' ') > -1);
        });
        track.scrollTo({ left: 0 });
        update();
      });
    });
    update();
  });

  /* FAQ: native details, one open at a time within a list */
  document.querySelectorAll('.faq-list').forEach(function (list) {
    var items = list.querySelectorAll('details');
    items.forEach(function (d) {
      d.addEventListener('toggle', function () {
        if (d.open) items.forEach(function (o) { if (o !== d) o.open = false; });
      });
    });
  });

  /* Live forms: post to the serverless endpoint (contact enquiry) */
  document.querySelectorAll('form[data-endpoint]').forEach(function (f) {
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      var msg = f.querySelector('[role="status"]');
      var btn = f.querySelector('button[type="submit"]');
      if (!f.checkValidity()) { f.reportValidity(); return; }
      var data = {};
      new FormData(f).forEach(function (v, k) { data[k] = v; });
      data.consent = !!f.querySelector('input[name="consent"]:checked');
      data.page = window.location.pathname;
      if (btn) btn.disabled = true;
      if (msg) msg.textContent = 'Sending...';
      fetch(f.getAttribute('data-endpoint'), { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
        .then(function (r) { return r.json().catch(function () { return {}; }).then(function (j) { return { ok: r.ok && j.ok !== false }; }); })
        .then(function (res) {
          if (res.ok) { f.reset(); if (msg) msg.textContent = 'Thank you. We have received your enquiry and will be in touch soon.'; }
          else if (msg) msg.textContent = 'Sorry, something went wrong. Please call us on ' + SITE.PHONE + '.';
        })
        .catch(function () { if (msg) msg.textContent = 'Sorry, something went wrong. Please call us on ' + SITE.PHONE + '.'; })
        .then(function () { if (btn) btn.disabled = false; });
    });
  });

  /* Design-only forms: no data leaves the page in the review copy */
  document.querySelectorAll('form[data-design-only]').forEach(function (f) {
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      var msg = f.querySelector('[role="status"]');
      if (msg) msg.textContent = f.getAttribute('data-design-only');
    });
  });

  /* Review bar (removed at build): hero A/B and review tags */
  var body = document.body;
  var params = new URLSearchParams(window.location.search);
  var store = { get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
                set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} } };
  var hero = params.get('hero') || store.get('ldc-hero') || 'a';
  function setHero(v) {
    body.setAttribute('data-hero', v);
    store.set('ldc-hero', v);
    document.querySelectorAll('[data-hero-btn]').forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-hero-btn') === v)); });
  }
  if (document.querySelector('.hero-variant')) setHero(hero === 'b' ? 'b' : 'a');
  document.querySelectorAll('[data-hero-btn]').forEach(function (b) { b.addEventListener('click', function () { setHero(b.getAttribute('data-hero-btn')); }); });
  var tagsBtn = document.querySelector('[data-tags-btn]');
  function setTags(on) { body.classList.toggle('hide-tags', !on); store.set('ldc-tags', on ? '1' : '0'); if (tagsBtn) tagsBtn.setAttribute('aria-pressed', String(on)); }
  setTags(store.get('ldc-tags') !== '0');
  if (tagsBtn) tagsBtn.addEventListener('click', function () { setTags(body.classList.contains('hide-tags')); });

  /* Hero zoom: ease in on load, follow the pointer on desktop, push in on scroll */
  var heroEl = document.querySelector('.blk-hero');
  if (heroEl && !reduced) {
    var base = 1.03, push = 0, hover = 0, px = 0, py = 0, ticking = false;
    function applyHero() {
      ticking = false;
      heroEl.style.setProperty('--hz', (base + push + hover).toFixed(4));
      heroEl.style.setProperty('--hx', (px * -14).toFixed(1) + 'px');
      heroEl.style.setProperty('--hy', (py * -10).toFixed(1) + 'px');
    }
    function queue() { if (!ticking) { ticking = true; requestAnimationFrame(applyHero); } }
    requestAnimationFrame(function () { requestAnimationFrame(function () { applyHero(); setTimeout(function () { heroEl.classList.add('hz-live'); }, 1800); }); });
    window.addEventListener('scroll', function () {
      var r = heroEl.getBoundingClientRect();
      var prog = Math.min(1, Math.max(0, -r.top / Math.max(1, r.height)));
      push = prog * 0.08; queue();
    }, { passive: true });
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      heroEl.addEventListener('pointermove', function (e) {
        var r = heroEl.getBoundingClientRect();
        px = (e.clientX - r.left) / r.width - 0.5; py = (e.clientY - r.top) / r.height - 0.5;
        hover = 0.03; queue();
      });
      heroEl.addEventListener('pointerleave', function () { px = 0; py = 0; hover = 0; queue(); });
    }
  }
  /* Inner page hero photos: ease in once visible */
  document.querySelectorAll('.page-hero-media, .profile-photo').forEach(function (el) {
    if (reduced) { el.classList.add('in'); return; }
    requestAnimationFrame(function () { requestAnimationFrame(function () { el.classList.add('in'); }); });
  });

  var y = document.querySelector('[data-year]');
  if (y) y.textContent = new Date().getFullYear();
})();
