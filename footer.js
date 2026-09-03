// Midlands Medicare — Central Footer
document.addEventListener('DOMContentLoaded', function () {

  const footerCSS = `<style>
    .site-footer{background:#0d1e3f;color:rgba(255,255,255,.8);font-family:'Source Sans 3',sans-serif;padding:56px 20px 0}
    .footer-inner{max-width:1100px;margin:0 auto}
    .footer-top{display:grid;grid-template-columns:2fr 1.2fr 1.2fr;gap:48px;padding-bottom:40px;border-bottom:1px solid rgba(255,255,255,.1)}
    .footer-logo{display:flex;align-items:center;gap:12px;margin-bottom:16px}
    .footer-logo-text{display:flex;flex-direction:column}
    .footer-logo-name{font-size:15px;font-weight:700;color:white;line-height:1.2}
    .footer-logo-sub{font-size:11px;color:#c9a227;font-weight:600;letter-spacing:.5px;text-transform:uppercase}
    .footer-tagline{font-size:14px;line-height:1.7;color:rgba(255,255,255,.65);margin:0 0 20px}
    .footer-rating{display:flex;align-items:center;gap:8px;font-size:13px;color:rgba(255,255,255,.65)}
    .footer-contact h4,.footer-links h4{font-size:13px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#c9a227;margin:0 0 16px;font-family:'Source Sans 3',sans-serif}
    .footer-contact p{margin:0 0 6px;font-size:14px;line-height:1.5}
    .footer-agent-name{color:white;font-weight:700;font-size:13px;margin-bottom:2px!important}
    .footer-contact a{color:rgba(255,255,255,.75);text-decoration:none;transition:color .2s}
    .footer-contact a:hover{color:#c9a227}
    .footer-links ul{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:8px}
    .footer-links ul li a{font-size:14px;color:rgba(255,255,255,.75);text-decoration:none;transition:color .2s}
    .footer-links ul li a:hover{color:#c9a227}
    .footer-disclaimer{font-size:11px;color:rgba(255,255,255,.35);line-height:1.6;margin:28px 0 0;padding:20px 0;border-top:1px solid rgba(255,255,255,.07)}
    .footer-copy{font-size:12px;color:rgba(255,255,255,.4);text-align:center;padding:16px 0 24px;margin:0;border-top:1px solid rgba(255,255,255,.07)}
    @media(max-width:768px){.footer-top{grid-template-columns:1fr;gap:32px}}
  </style>`;

  const footerHTML = `
  <footer class="site-footer">
    <div class="footer-inner">
      <div class="footer-top">
        <div class="footer-brand">
          <div class="footer-logo">
            <img src="/favicon.png" alt="Midlands Medicare" style="height:40px;width:auto;" />
            <div class="footer-logo-text">
              <span class="footer-logo-name">Midlands Medicare</span>
              <span class="footer-logo-sub">Mauldin Insurance Group</span>
            </div>
          </div>
          <p class="footer-tagline">Independent Medicare agents serving the SC Midlands — Lexington, Columbia, Irmo, Chapin, Lake Murray, and surrounding communities. Always free, always local.</p>
          <div class="footer-rating">
            <span>⭐⭐⭐⭐⭐</span>
            <span>5.0 rating · 151 Google reviews</span>
          </div>
        </div>
        <div class="footer-contact">
          <h4>Contact Us</h4>
          <p class="footer-agent-name">Jennifer Mauldin</p>
          <p><a href="tel:+18435092462">843-509-2462</a></p>
          <p><a href="mailto:jennifer@mauldininsurancegroup.com">jennifer@mauldininsurancegroup.com</a></p>
          <p class="footer-agent-name" style="margin-top:12px;">Ben Mauldin</p>
          <p><a href="tel:+18039208827">803-920-8827</a></p>
          <p><a href="mailto:ben@mauldininsurancegroup.com">ben@mauldininsurancegroup.com</a></p>
          <p style="margin-top:14px;"><a href="https://www.mauldininsurancegroup.com" target="_blank">MauldinInsuranceGroup.com →</a></p>
          <p><a href="https://www.southcarolinamedicareagency.com" target="_blank">SCMedicareAgency.com →</a></p>
          <p><a href="https://www.mauldininsurance.com" target="_blank">Auto, Home &amp; Business →</a></p>
        </div>
        <div class="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/medicare-advantage-midlands.html">Medicare Advantage</a></li>
            <li><a href="/medicare-supplement-midlands.html">Medicare Supplement</a></li>
            <li><a href="/medicare-part-d-midlands.html">Medicare Part D</a></li>
            <li><a href="/turning-65-midlands.html">Turning 65 in SC</a></li>
            <li><a href="/working-past-65-south-carolina.html">Working Past 65</a></li>
            <li><a href="/moving-to-south-carolina-medicare.html">Moving to SC</a></li>
            <li><a href="/medicare-lexington-sc.html">Medicare in Lexington</a></li>
            <li><a href="/medicare-columbia-sc.html">Medicare in Columbia</a></li>
            <li><a href="/medicare-irmo-sc.html">Medicare in Irmo</a></li>
            <li><a href="/medicare-chapin-sc.html">Medicare in Chapin / Lake Murray</a></li>
            <li><a href="/medicare-cayce-west-columbia-sc.html">Medicare in Cayce / W. Columbia</a></li>
            <li><a href="/medicare-blythewood-sc.html">Medicare in Blythewood</a></li>
            <li><a href="/aca-health-insurance-midlands.html">ACA Health Insurance</a></li>
            <li><a href="/final-expense-midlands.html">Final Expense</a></li>
            <li><a href="/midlands-service-areas.html">🗺️ All Service Areas</a></li>
          </ul>
        </div>
      </div>
      <p class="footer-disclaimer">By dialing the phone number you will contact a licensed insurance agent. We do not offer every plan in your area. Currently, we represent 6 organizations which offer 52 products in your area. Please contact Medicare.gov, 1-800-MEDICARE (TTY users call 1-877-486-2048) 24 hours a day/7 days a week, or your local State Health Insurance Program (SHIP) to get information on all your options. JWM_WEB_060125_C</p>
      <p class="footer-copy">&copy; 2026 Mauldin Insurance Group. All rights reserved. | Lexington, SC | Serving the SC Midlands</p>
    </div>
  </footer>`;

  document.head.insertAdjacentHTML('beforeend', footerCSS);
  const placeholder = document.getElementById('footer-placeholder');
  if (placeholder) { placeholder.outerHTML = footerHTML; }
  else { document.body.insertAdjacentHTML('beforeend', footerHTML); }
});
