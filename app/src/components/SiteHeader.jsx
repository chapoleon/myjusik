import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const linkClass = ({ isActive }) =>
  isActive ? 'nav-link-active' : undefined

export default function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const stored = window.localStorage.getItem('mf_theme')
    const preferDark = window.matchMedia?.('(prefers-color-scheme: dark)')?.matches
    const initial = stored || (preferDark ? 'dark' : 'light')
    setTheme(initial)
    document.documentElement.setAttribute('data-theme', initial)
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    window.localStorage.setItem('mf_theme', theme)
  }, [theme])

  return (
    <header id="globalNav">
      <div className="nav-inner">
        <Link to="/" className="nav-logo" onClick={() => setOpen(false)}>
          💰 MoneyFit
        </Link>
        <ul className={`nav-links${open ? ' open' : ''}`}>
          <li>
            <NavLink to="/quiz" className={linkClass} onClick={() => setOpen(false)}>
              투자 테스트
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={linkClass} onClick={() => setOpen(false)}>
              소개
            </NavLink>
          </li>
          <li>
            <NavLink to="/articles/investment-guide" className={linkClass} onClick={() => setOpen(false)}>
              투자 가이드
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={linkClass} onClick={() => setOpen(false)}>
              문의
            </NavLink>
          </li>
          <li>
            <NavLink to="/privacy" className={linkClass} onClick={() => setOpen(false)}>
              개인정보처리방침
            </NavLink>
          </li>
          <li>
            <NavLink to="/terms" className={linkClass} onClick={() => setOpen(false)}>
              이용약관
            </NavLink>
          </li>
        </ul>
        <div className="nav-actions">
          <button
            type="button"
            className="nav-theme-toggle"
            aria-label={theme === 'dark' ? '라이트 모드로 전환' : '다크 모드로 전환'}
            title={theme === 'dark' ? '라이트 모드' : '다크 모드'}
            onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
          >
            <i className={`fas ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`} aria-hidden="true" />
          </button>
          <button
            type="button"
            className="nav-toggle"
            aria-label="메뉴"
            onClick={() => setOpen((v) => !v)}
          >
            <i className="fas fa-bars" />
          </button>
        </div>
      </div>
    </header>
  )
}
