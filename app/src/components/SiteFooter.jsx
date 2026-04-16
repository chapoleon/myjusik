import React from 'react'
import { Link } from 'react-router-dom'

export default function SiteFooter() {
  return (
    <footer id="siteFooter">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-col">
            <div className="footer-brand">💰 MoneyFit</div>
            <p className="footer-desc">
              운영: 주식회사 아이앤디디(INDD)
              <br />
              사업자등록번호: <span>[수동 입력]</span>
              <br />
              문의: <a href="mailto:contact@moneyfit.vip">contact@moneyfit.vip</a>
            </p>
          </div>

          <div className="footer-col">
            <h4>법적 고지</h4>
            <ul>
              <li>
                <Link to="/privacy-policy">개인정보처리방침</Link>
              </li>
              <li>
                <Link to="/terms">이용약관</Link>
              </li>
              <li>
                <Link to="/disclaimer">면책 조항</Link>
              </li>
              <li>
                <Link to="/contact">문의하기</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>서비스</h4>
            <ul>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/blog">블로그</Link>
              </li>
              <li>
                <Link to="/articles">아티클</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>면책</h4>
            <div className="footer-disclaimer">
              본 서비스의 테스트 결과 및 콘텐츠는 투자 자문이 아니며, 최종 투자 판단과 책임은 이용자 본인에게 있습니다.
            </div>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <div className="footer-copy">© 2026 INDD. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}

