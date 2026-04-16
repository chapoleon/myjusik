import React from 'react'
import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import { posts } from '../data/posts'

export default function BlogIndexPage() {
  return (
    <main className="page-content">
      <Seo
        title="블로그 | 머니핏 투자 심리 아카이브"
        description="행동경제학과 투자 심리학을 바탕으로, 손실회피·FOMO·투자 성격 등 투자 의사결정의 핵심 주제를 정리합니다."
        canonicalPath="/blog"
      />
      <div className="container">
        <h1>블로그</h1>
        <p className="lead-text">
          머니핏은 행동경제학과 투자 심리학 기반으로, 투자 의사결정에서 반복되는 편향과 실전 대응법을 정리합니다.
        </p>

        <section>
          <div className="article-list">
            {posts.map((p) => (
              <Link key={p.slug} to={`/blog/${p.slug}`} className="article-card">
                <div className="article-card-top">
                  <h2 className="article-title">{p.title}</h2>
                  <div className="article-updated">최종수정: {p.dateModified}</div>
                </div>
                <p className="article-excerpt">{p.excerpt}</p>
                <div className="article-cta">읽으러 가기 →</div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

