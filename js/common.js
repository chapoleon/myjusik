/**
 * MoneyFit - 공통 네비게이션 & 푸터
 * 모든 페이지에서 로드
 */

// 네비게이션 삽입
function renderNav() {
  const isRoot = !window.location.pathname.includes('/pages/') && !window.location.pathname.includes('/articles/');
  const prefix = isRoot ? '' : '../';

  const nav = document.createElement('nav');
  nav.id = 'globalNav';
  nav.innerHTML = `
    <div class="nav-inner">
      <a href="${prefix}index.html" class="nav-logo">💰 MoneyFit</a>
      <button class="nav-toggle" onclick="toggleMenu()" aria-label="메뉴">
        <i class="fas fa-bars"></i>
      </button>
      <ul class="nav-links" id="navLinks">
        <li><a href="${prefix}index.html">투자 성향 분석</a></li>
        <li><a href="${prefix}articles/beginner-guide.html">투자 가이드</a></li>
        <li><a href="${prefix}articles/etf-101.html">ETF 입문</a></li>
        <li><a href="${prefix}articles/dividend-investing.html">배당 투자</a></li>
        <li><a href="${prefix}pages/about.html">소개</a></li>
      </ul>
    </div>
  `;
  document.body.prepend(nav);
}

function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

// 푸터 삽입
function renderFooter() {
  const isRoot = !window.location.pathname.includes('/pages/') && !window.location.pathname.includes('/articles/');
  const prefix = isRoot ? '' : '../';

  const footer = document.createElement('footer');
  footer.id = 'siteFooter';
  footer.innerHTML = `
    <div class="footer-inner">
      <div class="footer-grid">
        <div class="footer-col">
          <div class="footer-brand">💰 MoneyFit</div>
          <p class="footer-desc">나와 맞는 투자를 찾아드려요.<br>10문항 심층 분석으로 맞춤 포트폴리오를 추천합니다.</p>
        </div>
        <div class="footer-col">
          <h4>서비스</h4>
          <ul>
            <li><a href="${prefix}index.html">투자 성향 분석</a></li>
            <li><a href="${prefix}articles/beginner-guide.html">초보 투자 가이드</a></li>
            <li><a href="${prefix}articles/etf-101.html">ETF 완전정복</a></li>
            <li><a href="${prefix}articles/dividend-investing.html">배당 투자 전략</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>투자 인사이트</h4>
          <ul>
            <li><a href="${prefix}articles/risk-management.html">리스크 관리법</a></li>
            <li><a href="${prefix}articles/portfolio-rebalancing.html">포트폴리오 리밸런싱</a></li>
            <li><a href="${prefix}articles/mental-investing.html">투자 심리학</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>안내</h4>
          <ul>
            <li><a href="${prefix}pages/about.html">서비스 소개</a></li>
            <li><a href="${prefix}pages/privacy.html">개인정보처리방침</a></li>
            <li><a href="${prefix}pages/terms.html">이용약관</a></li>
            <li><a href="${prefix}pages/contact.html">문의하기</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom-bar">
        <div class="footer-disclaimer">
          <strong>투자 유의사항:</strong> 본 서비스는 투자 권유가 아닌 정보 제공 목적입니다.
          모든 투자의 최종 결정은 본인의 책임이며, 과거의 수익률이 미래의 수익률을 보장하지 않습니다.
          금융투자상품은 예금자보호법에 따라 보호되지 않습니다.
        </div>
        <p class="footer-copy">&copy; 2024 MoneyFit (andwhatbuy.com). All rights reserved.</p>
      </div>
    </div>
  `;

  // 기존 footer 제거
  const old = document.getElementById('footer');
  if (old) old.remove();
  document.body.appendChild(footer);
}

document.addEventListener('DOMContentLoaded', () => {
  renderNav();
  renderFooter();
});
