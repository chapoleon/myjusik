/**
 * MoneyFit - Common Navigation & Footer (i18n)
 * Loaded on all pages
 */

// Navigation
function renderNav() {
  const isRoot = !window.location.pathname.includes('/pages/') && !window.location.pathname.includes('/articles/');
  const prefix = isRoot ? '' : '../';

  const nav = document.createElement('nav');
  nav.id = 'globalNav';
  nav.innerHTML = `
    <div class="nav-inner">
      <a href="${prefix}index.html" class="nav-logo">💰 MoneyFit</a>
      <button class="nav-toggle" onclick="toggleMenu()" aria-label="Menu">
        <i class="fas fa-bars"></i>
      </button>
      <ul class="nav-links" id="navLinks">
        <li><a href="${prefix}index.html" data-i18n="nav_analysis">${typeof t === 'function' ? t('nav_analysis') : 'Investment Profile'}</a></li>
        <li><a href="${prefix}articles/beginner-guide.html" data-i18n="nav_guide">${typeof t === 'function' ? t('nav_guide') : 'Investment Guide'}</a></li>
        <li><a href="${prefix}articles/etf-101.html" data-i18n="nav_etf">${typeof t === 'function' ? t('nav_etf') : 'ETF 101'}</a></li>
        <li><a href="${prefix}articles/dividend-investing.html" data-i18n="nav_dividend">${typeof t === 'function' ? t('nav_dividend') : 'Dividend Investing'}</a></li>
        <li><a href="${prefix}pages/about.html" data-i18n="nav_about">${typeof t === 'function' ? t('nav_about') : 'About'}</a></li>
      </ul>
    </div>
  `;
  document.body.prepend(nav);
}

function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

// Footer
function renderFooter() {
  const isRoot = !window.location.pathname.includes('/pages/') && !window.location.pathname.includes('/articles/');
  const prefix = isRoot ? '' : '../';
  const _t = typeof t === 'function' ? t : (k) => k;

  const footer = document.createElement('footer');
  footer.id = 'siteFooter';
  footer.innerHTML = `
    <div class="footer-inner">
      <div class="footer-grid">
        <div class="footer-col">
          <div class="footer-brand">💰 MoneyFit</div>
          <p class="footer-desc" data-i18n="footer_desc">${_t('footer_desc')}</p>
        </div>
        <div class="footer-col">
          <h4 data-i18n="footer_services">${_t('footer_services')}</h4>
          <ul>
            <li><a href="${prefix}index.html" data-i18n="nav_analysis">${_t('nav_analysis')}</a></li>
            <li><a href="${prefix}articles/beginner-guide.html" data-i18n="footer_beginner">${_t('footer_beginner')}</a></li>
            <li><a href="${prefix}articles/etf-101.html" data-i18n="footer_etf">${_t('footer_etf')}</a></li>
            <li><a href="${prefix}articles/dividend-investing.html" data-i18n="footer_dividend">${_t('footer_dividend')}</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4 data-i18n="footer_insights">${_t('footer_insights')}</h4>
          <ul>
            <li><a href="${prefix}articles/risk-management.html" data-i18n="footer_risk">${_t('footer_risk')}</a></li>
            <li><a href="${prefix}articles/portfolio-rebalancing.html" data-i18n="footer_rebalancing">${_t('footer_rebalancing')}</a></li>
            <li><a href="${prefix}articles/mental-investing.html" data-i18n="footer_psychology">${_t('footer_psychology')}</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4 data-i18n="footer_info">${_t('footer_info')}</h4>
          <ul>
            <li><a href="${prefix}pages/about.html" data-i18n="footer_about">${_t('footer_about')}</a></li>
            <li><a href="${prefix}pages/privacy.html" data-i18n="footer_privacy">${_t('footer_privacy')}</a></li>
            <li><a href="${prefix}pages/terms.html" data-i18n="footer_terms">${_t('footer_terms')}</a></li>
            <li><a href="${prefix}pages/contact.html" data-i18n="footer_contact">${_t('footer_contact')}</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom-bar">
        <div class="footer-disclaimer" data-i18n="footer_disclaimer">${_t('footer_disclaimer')}</div>
        <p class="footer-copy">&copy; 2024 MoneyFit (moneyfit.vip). All rights reserved.</p>
      </div>
    </div>
  `;

  const old = document.getElementById('footer');
  if (old) old.remove();
  document.body.appendChild(footer);
}

// AdSense injection
function injectAdSense() {
  if (!document.querySelector('meta[name="google-adsense-account"]')) {
    const meta = document.createElement('meta');
    meta.name = 'google-adsense-account';
    meta.content = 'ca-pub-5440243063519453';
    document.head.appendChild(meta);
  }
  if (!document.querySelector('script[src*="adsbygoogle"]')) {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5440243063519453';
    script.crossOrigin = 'anonymous';
    document.head.appendChild(script);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  injectAdSense();
  renderNav();
  renderFooter();
});
