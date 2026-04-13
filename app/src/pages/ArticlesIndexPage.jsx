import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ARTICLES } from '../content/articles.js'

export default function ArticlesIndexPage() {
  useEffect(() => {
    document.title = '투자 아티클 - MoneyFit'
  }, [])

  return (
    <main className="page-content">
      <div className="container">
        <h1>투자 아티클</h1>
        <p className="lead-text">
          초보자용 핵심 개념부터 ETF/배당/리스크 관리까지, 투자에 필요한 기초 지식을 정리했습니다. (정보 제공 목적)
        </p>

        <section>
          <div className="article-list">
            {ARTICLES.map((a) => (
              <Link key={a.slug} to={`/articles/${a.slug}`} className="article-card">
                <div className="article-card-top">
                  <h2 className="article-title">{a.title}</h2>
                  <div className="article-updated">업데이트: {a.updated}</div>
                </div>
                <p className="article-excerpt">{a.excerpt}</p>
                <div className="article-cta">읽으러 가기 →</div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

