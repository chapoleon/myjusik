import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Chart, ArcElement, Tooltip, Legend, DoughnutController } from 'chart.js'
import { useMoneyFit } from '../state/MoneyFitContext'
import { INVESTOR_TYPE_DATA } from '../data/investorTypes.js'
import { QUESTIONS } from '../data/questions.js'
import { getPortfolios, getStockRecommendations } from '../data/selectors.js'
import { getLang } from '../i18n.js'
import { markdownToHtml } from '../utils/markdownToHtml.js'

Chart.register(DoughnutController, ArcElement, Tooltip, Legend)

function PortfolioPieChart({ portfolio }) {
  const canvasRef = useRef(null)
  const chartRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || !portfolio?.length) return

    chartRef.current?.destroy()
    const ctx = canvas.getContext('2d')
    chartRef.current = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: portfolio.map((p) => p.name),
        datasets: [
          {
            data: portfolio.map((p) => p.pct),
            backgroundColor: portfolio.map((p) => p.color),
            borderWidth: 0,
            hoverOffset: 6,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 1,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: 'rgba(0,0,0,0.8)',
            padding: 10,
            cornerRadius: 8,
            callbacks: {
              label: (c) => `${c.label}: ${c.parsed}%`,
            },
          },
        },
        cutout: '62%',
        animation: { animateRotate: true, animateScale: true, duration: 800, easing: 'easeOutQuart' },
      },
    })
    return () => {
      chartRef.current?.destroy()
      chartRef.current = null
    }
  }, [portfolio])

  return <canvas ref={canvasRef} id="portfolioPieChart" />
}

export default function Result() {
  const navigate = useNavigate()
  const { lang, t, answers, analysis, resetToHome, showToast } = useMoneyFit()
  const [reportPhase, setReportPhase] = useState('idle')
  const [reportHtml, setReportHtml] = useState('')

  useEffect(() => {
    document.title = `${t('page_title')} — ${t('result_celebration')}`
  }, [t])

  useEffect(() => {
    if (!analysis?.investorType) {
      navigate('/', { replace: true })
    }
  }, [analysis, navigate])

  const type = analysis?.investorType
  const pct = analysis?.totalScore ?? 0
  const mbti = analysis?.mbti

  const data = type ? INVESTOR_TYPE_DATA[type] : null
  const info = type ? t(`investor_types.${type}`) : null

  const portfolio = useMemo(() => (type ? getPortfolios(type, lang) : []), [type, lang])
  const stocks = useMemo(() => (type ? getStockRecommendations(type, lang) : []), [type, lang])

  const scoreLabels = t('score_labels')

  const getShareText = useCallback(() => {
    if (!type || !data || !info || !mbti) return ''
    const mbtiCode = mbti.code || data.mbtiCode
    return `${data.mbtiEmoji} ${t('mbti_share_prefix')} [${mbtiCode}] ${info.name}!\n${t('mbti_share_suffix')}\n`
  }, [type, data, info, mbti, t])

  const copyLink = useCallback(() => {
    const text = getShareText() + window.location.origin + '/'
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => showToast(t('link_copied')))
    } else {
      showToast(t('link_copy_fail'))
    }
  }, [getShareText, showToast, t])

  const shareTwitter = useCallback(() => {
    const text = encodeURIComponent(getShareText())
    const url = encodeURIComponent(window.location.href)
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank')
  }, [getShareText])

  const shareKakao = useCallback(() => {
    const key = window.MONEYFIT_KAKAO_JAVASCRIPT_KEY || ''
    const Kakao = window.Kakao
    if (!key) {
      showToast('카카오 JavaScript 키가 설정되지 않았습니다.')
      return
    }
    if (!Kakao) {
      showToast('카카오 SDK가 로드되지 않았습니다.')
      return
    }
    if (!Kakao.isInitialized?.()) {
      Kakao.init(key)
    }
    const title = `${t('page_title')} - ${t('mbti_label')}`
    const description = (getShareText() || '').trim()
    const origin = window.location.origin
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title,
        description,
        imageUrl: `${origin}/favicon.svg`,
        link: { mobileWebUrl: origin, webUrl: origin },
      },
      buttons: [
        {
          title: '결과 보기',
          link: { mobileWebUrl: origin, webUrl: origin },
        },
      ],
    })
  }, [getShareText, showToast, t])

  const shareInstagramStory = useCallback(() => {
    // Web cannot post directly to Instagram Story reliably; copy link for user.
    copyLink()
    window.open('https://www.instagram.com/', '_blank')
  }, [copyLink])

  const shareNative = useCallback(() => {
    const text = getShareText()
    if (navigator.share) {
      navigator.share({ title: 'MoneyFit', text, url: window.location.href })
    } else {
      copyLink()
    }
  }, [getShareText, copyLink])

  const generateReport = useCallback(async () => {
    if (!type || !info) return
    setReportPhase('loading')
    setReportHtml('')
    try {
      const res = await fetch('/api/report', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          lang: getLang(),
          age: answers.age?.value,
          amount: answers.amount?.value,
          goal: answers.goal?.value,
          investorType: info.name,
          portfolio: getPortfolios(type, lang),
          stocks: getStockRecommendations(type, lang),
          score: pct,
          answers,
        }),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const json = await res.json()
      if (json.error) throw new Error(json.error)
      setReportHtml(markdownToHtml(json.report || ''))
      setReportPhase('done')
      showToast(t('report_success_toast'))
    } catch {
      setReportPhase('error')
    }
  }, [type, info, answers, lang, pct, showToast, t])

  if (!type || !data || !info || !mbti) {
    return null
  }

  const codeLetters = mbti.code.split('').map((l, i) => (
    <React.Fragment key={i}>
      {i > 0 ? <span className="mbti-dot">·</span> : null}
      <span className="mbti-letter">{l}</span>
    </React.Fragment>
  ))

  return (
    <div id="app">
      <section id="result" className="step active">
        <div className="container">
          <div className="result-header">
            <div className="celebration">🎉</div>
            <h2 className="result-title">{t('result_celebration')}</h2>
            <div id="investorTypeBadge" className="result-badge">
              {data.mbtiEmoji} {mbti.code} — {info.name}
            </div>
          </div>

          <div className="mbti-card" id="mbtiCard">
            <div className="mbti-card-inner" style={{ background: data.gradient }}>
              <div className="mbti-label">{t('mbti_label')}</div>
              <div className="mbti-emoji">{data.mbtiEmoji}</div>
              <div className="mbti-code-wrap">{codeLetters}</div>
              <div className="mbti-type-name">
                {data.mbtiCode} - {info.name}
              </div>
              <div className="mbti-axes">
                {mbti.axes.map((ax, idx) => (
                  <div key={idx} className="mbti-axis-row">
                    <span className={`mbti-axis-left ${ax.pct < 50 ? 'active' : ''}`}>{t(ax.leftKey)}</span>
                    <div className="mbti-axis-bar">
                      <div className="mbti-axis-fill-left" style={{ width: `${100 - ax.pct}%` }} />
                      <div className="mbti-axis-center" />
                      <div className="mbti-axis-fill-right" style={{ width: `${ax.pct}%` }} />
                    </div>
                    <span className={`mbti-axis-right ${ax.pct >= 50 ? 'active' : ''}`}>{t(ax.rightKey)}</span>
                  </div>
                ))}
              </div>
              <div className="mbti-url">MoneyFit</div>
            </div>
          </div>

          <div className="card">
            <p id="typeDescription" className="type-description">
              {info.description}
            </p>
            <div id="typeCharacteristics" className="type-characteristics">
              <div className="char-item">
                <span className="char-label">{t('char_risk')}</span>
                <div className="char-bar">
                  <div className="char-fill" style={{ width: `${data.risk}%`, background: data.riskColor }} />
                </div>
                <span className="char-value">{info.riskLabel}</span>
              </div>
              <div className="char-item">
                <span className="char-label">{t('char_horizon')}</span>
                <div className="char-bar">
                  <div className="char-fill" style={{ width: `${data.horizon}%`, background: data.horizonColor }} />
                </div>
                <span className="char-value">{info.horizonLabel}</span>
              </div>
              <div className="char-item">
                <span className="char-label">{t('char_cashflow')}</span>
                <div className="char-bar">
                  <div className="char-fill" style={{ width: `${data.cashflow}%`, background: data.cashflowColor }} />
                </div>
                <span className="char-value">{info.cashflowLabel}</span>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-title">
              <i className="fas fa-chart-pie" /> {t('score_title')}
            </div>
            <div id="scoreDetail">
              <div className="score-total">
                <div className="score-total-label">{t('score_total_label')}</div>
                <div className="score-total-value">
                  {pct}
                  <span className="score-unit">{t('score_unit')}</span>
                </div>
                <div className="score-total-bar">
                  <div className="score-total-fill" style={{ width: `${pct}%` }} />
                </div>
              </div>
              <div className="score-items">
                {QUESTIONS.map((q) => {
                  const s = answers[q.key]?.score ?? 0
                  return (
                    <div key={q.key} className="score-row">
                      <span className="score-label">{scoreLabels[q.key]}</span>
                      <div className="score-bar">
                        <div className="score-bar-fill" style={{ width: `${s * 10}%` }} />
                      </div>
                      <span className="score-val">
                        {s}/10
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-title">
              <i className="fas fa-wallet" /> {t('portfolio_title')}
            </div>
            <div className="portfolio-visual">
              <PortfolioPieChart portfolio={portfolio} />
            </div>
            <div id="portfolioList" className="portfolio-list">
              {portfolio.map((p, i) => (
                <div key={i} className="portfolio-item">
                  <div className="portfolio-color" style={{ background: p.color }} />
                  <div className="portfolio-info">
                    <div className="portfolio-name">{p.name}</div>
                    <div className="portfolio-desc">{p.desc}</div>
                  </div>
                  <div className="portfolio-pct">{p.pct}%</div>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <div className="card-title">
              <i className="fas fa-star" /> {t('stock_title')}
            </div>
            <div id="stockRecommendations" className="stock-recommendations">
              {stocks.map((s, i) => (
                <div key={i} className="stock-item">
                  <div className="stock-icon">{s.icon}</div>
                  <div className="stock-info">
                    <div className="stock-name">{s.name}</div>
                    <div className="stock-reason">{s.reason}</div>
                  </div>
                  <div className="stock-tag">{s.tag}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="card report-card">
            <div className="card-title">
              <i className="fas fa-robot" /> {t('report_title')}
            </div>
            <p
              className="report-desc"
              dangerouslySetInnerHTML={{ __html: t('report_desc') }}
            />
            {reportPhase === 'idle' || reportPhase === 'error' ? (
              <button type="button" className="btn-report" onClick={generateReport}>
                <i className="fas fa-file-alt" /> {t('btn_report')}
              </button>
            ) : null}
            {reportPhase === 'loading' ? (
              <div className="report-loading">
                <div className="report-spinner" />
                <span>{t('report_loading')}</span>
              </div>
            ) : null}
            {reportPhase === 'error' ? (
              <div className="report-error">
                {t('report_error')}
                <button type="button" className="btn-retry" onClick={generateReport}>
                  {t('btn_retry')}
                </button>
              </div>
            ) : null}
            {reportHtml ? (
              <div className="report-content" dangerouslySetInnerHTML={{ __html: reportHtml }} />
            ) : null}
          </div>

          <div className="premium-section">
            <h3 className="premium-section-title">{t('premium_section_title')}</h3>
            <p className="premium-section-desc">{t('premium_section_desc')}</p>
            <div className="premium-card premium-pro">
              <span className="premium-badge">{t('premium_deep_report_badge')}</span>
              <div className="premium-icon">📊</div>
              <div className="premium-name">{t('premium_deep_report_title')}</div>
              <p className="premium-desc" dangerouslySetInnerHTML={{ __html: t('premium_deep_report_desc') }} />
              <div className="premium-price">{t('premium_deep_report_price')}</div>
              <button type="button" className="btn-premium" onClick={() => showToast(t('premium_coming_soon'))}>
                {t('premium_btn_buy')}
              </button>
            </div>
            <div className="premium-card">
              <span className="premium-badge pro">{t('premium_rebalancing_badge')}</span>
              <div className="premium-icon">⚖️</div>
              <div className="premium-name">{t('premium_rebalancing_title')}</div>
              <p className="premium-desc" dangerouslySetInnerHTML={{ __html: t('premium_rebalancing_desc') }} />
              <div className="premium-price">{t('premium_rebalancing_price')}</div>
              <button type="button" className="btn-premium" onClick={() => showToast(t('premium_coming_soon'))}>
                {t('premium_btn_buy')}
              </button>
            </div>
          </div>

          <div className="card">
            <div className="card-title">
              <i className="fas fa-share-alt" /> {t('share_title')}
            </div>
            <div className="sns-share-bar">
              <button type="button" className="sns-btn sns-kakao" onClick={shareKakao}>
                <i className="fas fa-comment" /> {t('share_kakao')}
              </button>
              <button type="button" className="sns-btn sns-instagram" onClick={shareInstagramStory}>
                <i className="fab fa-instagram" /> {t('share_instagram')}
              </button>
              <button type="button" className="sns-btn sns-copy" onClick={copyLink}>
                <i className="fas fa-link" /> {t('share_link')}
              </button>
              <button type="button" className="sns-btn sns-twitter" onClick={shareTwitter}>
                <i className="fab fa-x-twitter" /> {t('share_twitter')}
              </button>
              <button type="button" className="sns-btn sns-native" onClick={shareNative}>
                <i className="fas fa-share" /> {t('share_native')}
              </button>
            </div>
          </div>

          <button
            type="button"
            className="btn-restart"
            onClick={() => {
              resetToHome()
              navigate('/')
            }}
          >
            <i className="fas fa-redo" /> {t('btn_restart')}
          </button>
        </div>
      </section>
    </div>
  )
}
