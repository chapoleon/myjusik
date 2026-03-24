import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useMoneyFit } from '../state/MoneyFitContext'

function LangButton({ id, label, flag, active, onClick }) {
  return (
    <button
      className={`lang-btn ${active ? 'active' : ''}`}
      data-lang={id}
      onClick={onClick}
      type="button"
    >
      {flag} {label}
    </button>
  )
}

export default function Home() {
  const navigate = useNavigate()
  const { lang, updateLang, t, resetToHome } = useMoneyFit()

  const langs = [
    { id: 'en', flag: '🇺🇸', label: 'EN' },
    { id: 'ko', flag: '🇰🇷', label: '한국어' },
    { id: 'zh', flag: '🇨🇳', label: '中文' },
    { id: 'ja', flag: '🇯🇵', label: '日本語' },
    { id: 'hi', flag: '🇮🇳', label: 'हिंदी' },
  ]

  return (
    <div id="app">
      <section id="splash" className="step active">
        <div className="container">
          <div className="logo-container">
            <div className="logo">💰</div>
            <h1 className="brand-name">MoneyFit</h1>
            <p className="tagline">{t('tagline')}</p>
          </div>

          <div className="lang-selector">
            {langs.map((l) => (
              <LangButton
                key={l.id}
                id={l.id}
                label={l.label}
                flag={l.flag}
                active={lang === l.id}
                onClick={() => updateLang(l.id)}
              />
            ))}
          </div>

          <div className="value-prop">
            <h2
              className="headline"
              // translations contain <br/>
              dangerouslySetInnerHTML={{ __html: t('headline') }}
            />

            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-number">{t('stat_time')}</div>
                <div className="stat-label">{t('stat_time_label')}</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">{t('stat_questions')}</div>
                <div className="stat-label">{t('stat_questions_label')}</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">{t('stat_custom')}</div>
                <div className="stat-label">{t('stat_custom_label')}</div>
              </div>
            </div>

            <div className="trust-badges">
              <span className="badge">
                <i className="fas fa-shield-alt"></i> <span>{t('badge_free')}</span>
              </span>
              <span className="badge">
                <i className="fas fa-check-circle"></i> <span>{t('badge_no_signup')}</span>
              </span>
            </div>
          </div>

          <button
            className="btn-primary btn-large"
            type="button"
            onClick={() => {
              resetToHome()
              navigate('/quiz')
            }}
          >
            <span>{t('btn_start')}</span>
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </section>
    </div>
  )
}

