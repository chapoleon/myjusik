import React, { useEffect, useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getArticle } from '../content/articles.js'

export default function ArticlePage() {
  const { slug } = useParams()
  const article = useMemo(() => getArticle(slug), [slug])

  useEffect(() => {
    document.title = article ? `${article.title} - MoneyFit` : '아티클을 찾을 수 없습니다 - MoneyFit'
  }, [article])

  if (!article) {
    return (
      <main className="page-content">
        <div className="container">
          <h1>아티클을 찾을 수 없습니다</h1>
          <p className="lead-text">주소가 잘못되었거나, 글이 이동/삭제되었을 수 있습니다.</p>
          <Link className="btn-primary" to="/articles" style={{ display: 'inline-flex' }}>
            아티클 목록으로
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="page-content">
      <div className="container">
        <div style={{ marginBottom: 16 }}>
          <Link to="/articles" className="muted-link">
            ← 아티클 목록
          </Link>
        </div>

        <h1>{article.title}</h1>
        <p className="lead-text">{article.excerpt}</p>
        <div className="article-updated" style={{ marginBottom: 18 }}>
          업데이트: {article.updated}
        </div>

        {article.sections.map((s, idx) => (
          <section key={idx}>
            <h2>{s.h}</h2>
            {s.p.map((para, j) => (
              <p key={j}>{para}</p>
            ))}
          </section>
        ))}

        <section>
          <h2>다음 단계</h2>
          <p>
            개념을 이해하셨다면 <Link to="/quiz">투자 성향 테스트</Link>로 본인 성향을 점검해보세요.
          </p>
        </section>
      </div>
    </main>
  )
}

