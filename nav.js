// SEO: Force .html canonical version. Bounces clean URLs to .html so Google
// stops indexing duplicates. Safe no-op for root, .html, and asset paths.
(function() {
  var p = window.location.pathname;
  if (p === '/' || /\.[a-z0-9]+$/i.test(p) || p.endsWith('/')) return;
  window.location.replace(p + '.html' + window.location.search + window.location.hash);
})();
// Midlands Medicare — Central Navigation (version 2: floating pill bar)
document.addEventListener('DOMContentLoaded', function () {
  const navHTML = `
  <a class="mm-skip" href="#main">Skip to content</a>
  <div class="nav-bg" aria-hidden="true"></div>
  <div class="site-nav" id="site-nav">
    <div class="nav-inner">
      <a href="/" class="nav-brand">
        <img src="/favicon.png" alt="Midlands Medicare" width="40" height="40" />
        <span class="nav-brand-name">Midlands Medicare</span>
      </a>
      <nav class="nav-links" id="nav-links" aria-label="Main">
        <a href="/deadlines.html" class="nav-link">Deadlines</a>
        <a href="/quiz.html" class="nav-link">Coverage quiz</a>
        <a href="/checklist.html" class="nav-link">Review checklist</a>
        <a href="/lake-murray-relocation-guide.html" class="nav-link">Relocation guide</a>
        <a href="https://www.mauldininsurancegroup.com/medicare" class="nav-link">Medicare plans</a>
        <a href="tel:+18435092462" class="nav-link nav-phone-m">Call Jennifer 843-509-2462</a>
      </nav>
      <a href="tel:+18435092462" class="nav-phone">843-509-2462</a>
      <a href="https://www.mauldininsurancegroup.com/contact" class="nav-cta">Free consultation</a>
      <button class="nav-toggle" id="nav-toggle" aria-label="Open menu" aria-expanded="false" aria-controls="nav-links"><span></span><span></span></button>
    </div>
  </div>`;

  const navCSS = `<style>
    .mm-skip{position:absolute;left:-9999px;top:0;background:#d4a52a;color:#0c1a2e;padding:8px 14px;font-weight:700;z-index:2000}
    .mm-skip:focus{left:12px;top:12px}
    .nav-bg{position:absolute;left:0;right:0;top:0;height:86px;background:#0c1a2e;z-index:0}
    .site-nav{position:sticky;top:12px;z-index:1000;margin:12px auto;max-width:1200px;padding:0 max(12px,env(safe-area-inset-left,0px))}
    .nav-inner{position:relative;display:flex;align-items:center;gap:10px;background:rgba(12,26,46,.9);backdrop-filter:blur(14px) saturate(1.4);-webkit-backdrop-filter:blur(14px) saturate(1.4);border:1px solid rgba(255,255,255,.1);border-radius:999px;padding:8px 8px 8px 12px;font-family:'Source Sans 3',sans-serif}
    .nav-brand{display:flex;align-items:center;gap:10px;text-decoration:none;margin-right:auto;flex-shrink:0}
    .nav-brand img{width:40px;height:40px;border-radius:50%;object-fit:cover;background:#fff}
    .nav-brand-name{font-family:'Bricolage Grotesque','Source Sans 3',sans-serif;font-size:18px;font-weight:700;color:#fff;letter-spacing:-.01em;white-space:nowrap}
    .nav-links{display:flex;align-items:center;gap:2px}
    .nav-link{font-size:15px;font-weight:600;color:rgba(255,255,255,.84);text-decoration:none;padding:8px 11px;border-radius:999px;white-space:nowrap}
    .nav-link:hover{background:rgba(255,255,255,.08);color:#fff}
    .nav-link[aria-current="page"]{color:#e8bf4a}
    .nav-phone-m{display:none}
    .nav-phone{font-size:15px;font-weight:700;color:#e8bf4a;text-decoration:none;padding:8px 8px;white-space:nowrap}
    .nav-cta{background:#d4a52a;color:#0c1a2e;text-decoration:none;font-weight:700;padding:10px 18px;border-radius:999px;font-size:15px;white-space:nowrap}
    .nav-cta:hover{background:#e8bf4a}
    .nav-toggle{display:none;flex-direction:column;justify-content:center;gap:6px;width:44px;height:44px;border-radius:50%;border:1px solid rgba(255,255,255,.2);background:transparent;cursor:pointer;padding:0 12px}
    .nav-toggle span{display:block;height:2px;background:#fff;border-radius:2px}
    .site-nav a:focus-visible,.site-nav button:focus-visible{outline:3px solid #d4a52a;outline-offset:2px}
    @media(max-width:1120px){.nav-phone{display:none}}
    @media(max-width:980px){
      .nav-toggle{display:flex}
      .nav-links{display:none;position:absolute;top:calc(100% + 8px);left:0;right:0;flex-direction:column;align-items:stretch;background:#0c1a2e;border:1px solid rgba(255,255,255,.12);border-radius:22px;padding:10px;box-shadow:0 20px 50px rgba(0,0,0,.35)}
      .nav-links.open{display:flex}
      .nav-link{padding:12px 14px;border-radius:14px;font-size:17px}
      .nav-phone-m{display:block;color:#e8bf4a}
    }
    @media(max-width:520px){.nav-cta{padding:10px 14px;font-size:14px}.nav-brand-name{font-size:16px}}
    @media(max-width:440px){.nav-brand-name{font-size:15px}.nav-cta{padding:9px 12px;font-size:13px}.nav-inner{gap:6px}}@media(max-width:400px){.nav-brand-name{display:none}}
    @media print{.site-nav{display:none!important}}
  </style>`;

  document.head.insertAdjacentHTML('beforeend', navCSS);
  const placeholder = document.getElementById('nav-placeholder');
  if (placeholder) {
    placeholder.outerHTML = navHTML;
  } else {
    document.body.insertAdjacentHTML('afterbegin', navHTML);
  }
  if (!document.getElementById('main')) {
    const m = document.querySelector('main');
    if (m) m.id = 'main';
  }

  const here = location.pathname;
  document.querySelectorAll('.nav-link').forEach(a => {
    if (a.getAttribute('href') === here) a.setAttribute('aria-current', 'page');
  });

  const toggle = document.getElementById('nav-toggle');
  const links = document.getElementById('nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
});
