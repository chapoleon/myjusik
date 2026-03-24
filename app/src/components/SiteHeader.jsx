import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const linkClass = ({ isActive }) =>
  isActive ? 'nav-link-active' : undefined

export default function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header id="globalNav">
      <div className="nav-inner">
        <Link to="/" className="nav-logo" onClick={() => setOpen(false)}>
          💰 MoneyFit
        </Link>
        <button
          type="button"
          className="nav-toggle"
          aria-label="메뉴"
          onClick={() => setOpen((v) => !v)}
        >
          <i className="fas fa-bars" />
        </button>
        <ul className={`nav-links${open ? ' open' : ''}`}>
          <li>
            <NavLink to="/quiz" className={linkClass} onClick={() => setOpen(false)}>
              투자 테스트
            </NavLink>
          </li>
          <li>
            <NavLink to="/pages/about" className={linkClass} onClick={() => setOpen(false)}>
              소개
            </NavLink>
          </li>
          <li>
            <NavLink to="/articles/investment-guide" className={linkClass} onClick={() => setOpen(false)}>
              투자 가이드
            </NavLink>
          </li>
          <li>
            <NavLink to="/pages/contact" className={linkClass} onClick={() => setOpen(false)}>
              문의
            </NavLink>
          </li>
          <li>
            <NavLink to="/pages/privacy" className={linkClass} onClick={() => setOpen(false)}>
              개인정보처리방침
            </NavLink>
          </li>
          <li>
            <NavLink to="/pages/terms" className={linkClass} onClick={() => setOpen(false)}>
              이용약관
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  )
}
