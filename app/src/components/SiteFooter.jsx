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
              주식회사 아이앤디디 | <span>indd@ondasoop.com</span>
            </p>
          </div>

          <div className="footer-col">
            <h4>법적 고지</h4>
            <ul>
              <li>
                <Link to="/pages/privacy">개인정보처리방침</Link>
              </li>
              <li>
                <Link to="/pages/terms">이용약관</Link>
              </li>
              <li>
                <Link to="/pages/contact">문의하기</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>서비스</h4>
            <ul>
              <li>
                <Link to="/pages/about">About</Link>
              </li>
              <li>
                <Link to="/articles/investment-guide">투자 가이드</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>면책</h4>
            <div className="footer-disclaimer">
              투자 추천은 참고용이며, 최종 투자 판단과 책임은 투자자 본인에게 있습니다.
            </div>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <div className="footer-copy">© {new Date().getFullYear()} MoneyFit. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}

