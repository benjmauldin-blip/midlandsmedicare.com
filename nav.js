// SEO: Force .html canonical version. Bounces clean URLs to .html so Google
// stops indexing duplicates. Safe no-op for root, .html, and asset paths.
(function() {
  var p = window.location.pathname;
  if (p === '/' || /\.[a-z0-9]+$/i.test(p) || p.endsWith('/')) return;
  window.location.replace(p + '.html' + window.location.search + window.location.hash);
})();
// Midlands Medicare — Central Navigation
document.addEventListener('DOMContentLoaded', function () {
  const navHTML = `
  <nav class="site-nav" id="site-nav">
    <div class="nav-inner">
      <a href="/" class="nav-brand">
        <img src="/favicon.png" alt="Midlands Medicare" style="height:36px;width:auto;" />
        <div class="nav-brand-text">
          <span class="nav-brand-name">Midlands Medicare</span>
          <span class="nav-brand-sub">Mauldin Insurance Group</span>
        </div>
      </a>
      <button class="nav-toggle" id="nav-toggle" aria-label="Toggle menu">☰</button>
      <div class="nav-links" id="nav-links">
        <div class="nav-dropdown">
          <button class="nav-drop-btn">Medicare Plans ▾</button>
          <div class="nav-drop-menu">
            <a href="/medicare-advantage-midlands.html">Medicare Advantage</a>
            <a href="/medicare-supplement-midlands.html">Medicare Supplement</a>
            <a href="/medicare-part-d-midlands.html">Medicare Part D</a>
          </div>
        </div>
        <div class="nav-dropdown">
          <button class="nav-drop-btn">Life Events ▾</button>
          <div class="nav-drop-menu">
            <a href="/turning-65-midlands.html">Turning 65</a>
            <a href="/working-past-65-south-carolina.html">Working Past 65</a>
            <a href="/moving-to-south-carolina-medicare.html">Moving to SC</a>
            <a href="/lake-murray-relocation-guide.html" style="color:#c9a227;font-weight:700;">🎁 Free Relocation Guide</a>
          </div>
        </div>
        <div class="nav-dropdown">
          <button class="nav-drop-btn">Local Areas ▾</button>
          <div class="nav-drop-menu">
            <a href="/medicare-lexington-sc.html">Lexington</a>
            <a href="/medicare-columbia-sc.html">Columbia</a>
            <a href="/medicare-irmo-sc.html">Irmo</a>
            <a href="/medicare-chapin-sc.html">Chapin & Lake Murray</a>
            <a href="/medicare-blythewood-sc.html">Blythewood</a>
            <a href="/medicare-cayce-west-columbia-sc.html">Cayce & West Columbia</a>
          </div>
        </div>
        <div class="nav-dropdown">
          <button class="nav-drop-btn">Other Coverage ▾</button>
          <div class="nav-drop-menu">
            <a href="/aca-health-insurance-midlands.html">ACA Health Insurance</a>
            <a href="/final-expense-midlands.html">Final Expense</a>
          </div>
        </div>
        <a href="/midlands-service-areas.html" class="nav-link">Service Areas</a>
        <a href="tel:+18435092462" class="nav-phone">843-509-2462</a>
        <a href="/quiz.html" class="nav-quiz">Free Quiz</a>
        <a href="https://www.mauldininsurancegroup.com/contact" class="nav-cta" target="_blank">Free Consultation</a>
      </div>
    </div>
  </nav>`;

  const navCSS = `<style>
    .site-nav{background:#1a2e5a;position:sticky;top:0;z-index:1000;box-shadow:0 2px 12px rgba(0,0,0,.25)}
    .nav-inner{max-width:1200px;margin:0 auto;padding:0 20px;display:flex;align-items:center;gap:8px;height:62px}
    .nav-brand{display:flex;align-items:center;gap:10px;text-decoration:none;flex-shrink:0}
    .nav-brand-text{display:flex;flex-direction:column}
    .nav-brand-name{font-size:14px;font-weight:700;color:white;line-height:1.2;font-family:'Source Sans 3',sans-serif}
    .nav-brand-sub{font-size:10px;color:#c9a227;text-transform:uppercase;letter-spacing:.5px;font-family:'Source Sans 3',sans-serif}
    .nav-links{display:flex;align-items:center;gap:4px;margin-left:auto;flex-wrap:nowrap}
    .nav-link{font-size:13px;font-weight:600;color:rgba(255,255,255,.85);text-decoration:none;padding:6px 10px;border-radius:4px;transition:color .2s;font-family:'Source Sans 3',sans-serif;white-space:nowrap}
    .nav-link:hover{color:#c9a227}
    .nav-dropdown{position:relative}
    .nav-drop-btn{background:none;border:none;font-size:13px;font-weight:600;color:rgba(255,255,255,.85);padding:6px 10px;cursor:pointer;border-radius:4px;transition:color .2s;font-family:'Source Sans 3',sans-serif;white-space:nowrap}
    .nav-drop-btn:hover{color:#c9a227}
    .nav-drop-menu{display:none;position:absolute;top:100%;left:0;background:#1a2e5a;border:1px solid rgba(255,255,255,.1);border-radius:6px;padding:8px 0;min-width:200px;box-shadow:0 8px 24px rgba(0,0,0,.3);z-index:100}
    .nav-dropdown:hover .nav-drop-menu{display:block}
    .nav-drop-menu a{display:block;font-size:13px;color:rgba(255,255,255,.8);text-decoration:none;padding:8px 16px;transition:all .2s;font-family:'Source Sans 3',sans-serif}
    .nav-drop-menu a:hover{background:rgba(201,162,39,.1);color:#c9a227}
    .nav-phone{font-size:13px;font-weight:700;color:#c9a227;text-decoration:none;padding:6px 10px;font-family:'Source Sans 3',sans-serif;white-space:nowrap}
    .nav-quiz{background:#0e7490;color:white;text-decoration:none;font-weight:700;padding:8px 14px;border-radius:6px;font-size:13px;transition:background .2s;font-family:'Source Sans 3',sans-serif;white-space:nowrap}
    .nav-quiz:hover{background:#0c6377}
    .nav-cta{background:#c9a227;color:#1a2e5a;text-decoration:none;font-weight:700;padding:8px 16px;border-radius:6px;font-size:13px;transition:background .2s;font-family:'Source Sans 3',sans-serif;white-space:nowrap}
    .nav-cta:hover{background:#e0b82d}
    .nav-toggle{display:none;background:none;border:none;color:white;font-size:22px;cursor:pointer;padding:4px 8px}
    @media(max-width:900px){
      .nav-toggle{display:block}
      .nav-links{display:none;position:absolute;top:62px;left:0;right:0;background:#1a2e5a;flex-direction:column;align-items:flex-start;padding:12px 20px 20px;gap:4px;border-top:1px solid rgba(255,255,255,.1)}
      .nav-links.open{display:flex}
      .nav-dropdown{width:100%}
      .nav-drop-menu{position:static;display:none;box-shadow:none;border:none;padding:0 0 0 16px;background:transparent}
      .nav-dropdown.open .nav-drop-menu{display:block}
      .nav-drop-btn{padding:8px 0}
    }
  </style>`;

  document.head.insertAdjacentHTML('beforeend', navCSS);
  const placeholder = document.getElementById('nav-placeholder');
  if (placeholder) {
    placeholder.outerHTML = navHTML;
  } else {
    document.body.insertAdjacentHTML('afterbegin', navHTML);
  }

  // Mobile toggle
  setTimeout(() => {
    const toggle = document.getElementById('nav-toggle');
    const links = document.getElementById('nav-links');
    if (toggle && links) {
      toggle.addEventListener('click', () => links.classList.toggle('open'));
      document.querySelectorAll('.nav-drop-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          if (window.innerWidth <= 900) {
            e.stopPropagation();
            btn.closest('.nav-dropdown').classList.toggle('open');
          }
        });
      });
    }
  }, 100);
});
