import React, { useEffect, useMemo, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const linkClass = ({ isActive }) =>
  isActive ? 'nav-link-active' : undefined

export default function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState('light')

  const isDark = theme === 'dark'
  const themeIcon = useMemo(() => (isDark ? 'fa-sun' : 'fa-moon'), [isDark])
  const themeLabel = useMemo(() => (isDark ? 'LIGHT' : 'DARK'), [isDark])

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
        <div className="nav-actions">
          <button
            type="button"
            className="nav-theme-toggle"
            aria-label="테마 전환"
            onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
          >
            <i className={`fas ${themeIcon}`} aria-hidden="true" />
            <span className="nav-theme-text">{themeLabel}</span>
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
      </div>
    </header>
  )
}
