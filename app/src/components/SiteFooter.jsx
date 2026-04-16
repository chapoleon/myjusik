import React from 'react'
import { Link } from 'react-router-dom'

export default function SiteFooter() {
  return (
    <footer id="siteFooter">
      <div className="footer-inner">
        <div className="footer-bottom-bar">
          <div
            className="footer-copy"
            style={{
              fontSize: 12,
              color: '#9ca3af',
              textAlign: 'center',
              lineHeight: 1.8,
            }}
          >
            <span style={{ whiteSpace: 'nowrap' }}>
              <Link to="/policies#business-info">사업자 정보</Link>
            </span>
            <span aria-hidden="true"> · </span>
            <span style={{ whiteSpace: 'nowrap' }}>
              <Link to="/policies#payment">결제수단</Link>
            </span>
            <span aria-hidden="true"> · </span>
            <span style={{ whiteSpace: 'nowrap' }}>
              <Link to="/policies#refund">환불정책</Link>
            </span>
            <span aria-hidden="true"> · </span>
            <span style={{ whiteSpace: 'nowrap' }}>
              <Link to="/privacy-policy">개인정보처리방침</Link>
            </span>
            <span aria-hidden="true"> · </span>
            <span style={{ whiteSpace: 'nowrap' }}>
              <Link to="/terms">이용약관</Link>
            </span>
            <span aria-hidden="true"> · </span>
            <span style={{ whiteSpace: 'nowrap' }}>
              <Link to="/disclaimer">투자 면책</Link>
            </span>
            <span aria-hidden="true"> · </span>
            <span style={{ whiteSpace: 'nowrap' }}>
              <Link to="/contact">문의</Link>
            </span>
            <span aria-hidden="true"> · </span>
            <span style={{ whiteSpace: 'nowrap' }}>
              <Link to="/blog">블로그</Link>
            </span>
            <div style={{ marginTop: 10 }}>© 2026 주식회사 아이앤디디. All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  )
}

