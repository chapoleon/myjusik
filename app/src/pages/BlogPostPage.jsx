import React, { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Seo from '../components/Seo'
import { getPost } from '../data/posts'

const SITE_URL = 'https://moneyfit.vip'

function orgSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'INDD',
    url: SITE_URL,
    brand: {
      '@type': 'Brand',
      name: 'MoneyFit',
    },
  }
}

function toFaqSchema(faq) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: (faq || []).map((x) => ({
      '@type': 'Question',
      name: x.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: x.a,
      },
    })),
  }
}

export default function BlogPostPage() {
  const { slug } = useParams()
  const post = useMemo(() => getPost(slug), [slug])
  const [openIdx, setOpenIdx] = useState(-1)

  if (!post) {
    return (
      <main className="page-content">
        <Seo
          title="글을 찾을 수 없습니다 | 머니핏 블로그"
          description="요청하신 글을 찾을 수 없습니다."
          canonicalPath="/blog"
          noindex
        />
        <div className="container">
          <h1>글을 찾을 수 없습니다</h1>
          <p className="lead-text">주소가 잘못되었거나, 글이 이동/삭제되었을 수 있습니다.</p>
          <Link className="btn-primary" to="/blog" style={{ display: 'inline-flex' }}>
            블로그 목록으로
          </Link>
        </div>
      </main>
    )
  }

  const canonicalPath = `/blog/${post.slug}`
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    author: {
      '@type': 'Organization',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'INDD',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/favicon.svg`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}${canonicalPath}`,
    },
    keywords: (post.keywords || []).join(', '),
  }

  return (
    <main className="page-content">
      <Seo
        title={`${post.title} | 머니핏 블로그`}
        description={post.excerpt}
        canonicalPath={canonicalPath}
        jsonLd={[articleSchema, toFaqSchema(post.faq), orgSchema()]}
      />
      <div className="container">
        <div style={{ marginBottom: 16 }}>
          <Link to="/blog" className="muted-link">
            ← 블로그 목록
          </Link>
        </div>

        <header className="article-header">
          <h1>{post.title}</h1>
          <p className="lead-text">{post.excerpt}</p>
          <div className="article-meta">
            <span>
              <i className="fas fa-user-edit" aria-hidden="true" /> 저자: {post.author}
            </span>
            <span>
              <i className="fas fa-calendar" aria-hidden="true" /> 작성일: {post.datePublished}
            </span>
            <span>
              <i className="fas fa-rotate" aria-hidden="true" /> 최종수정일: {post.dateModified}
            </span>
          </div>
        </header>

        {post.sections.map((s, idx) => (
          <section key={idx}>
            <h2>{s.h}</h2>
            {s.p.map((para, j) => (
              <p key={j}>{para}</p>
            ))}
          </section>
        ))}

        <section className="article-cta">
          <h3>내 투자 성향 점검하기</h3>
          <p>블로그 글을 읽고 끝내지 말고, 본인의 투자 성향을 테스트로 점검해 보세요.</p>
          <Link className="cta-button" to="/quiz">
            <i className="fas fa-clipboard-check" aria-hidden="true" /> 머니핏 투자 성향 테스트
          </Link>
        </section>

        <section className="faq-section">
          <h2>자주 묻는 질문</h2>
          <div className="faq-list">
            {post.faq.map((item, idx) => {
              const active = openIdx === idx
              return (
                <div key={idx} className={`faq-item${active ? ' active' : ''}`}>
                  <h3
                    className="faq-question"
                    role="button"
                    tabIndex={0}
                    onClick={() => setOpenIdx((v) => (v === idx ? -1 : idx))}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') setOpenIdx((v) => (v === idx ? -1 : idx))
                    }}
                  >
                    {item.q}
                    <i className="fas fa-chevron-down" aria-hidden="true" />
                  </h3>
                  <div className="faq-answer">
                    <p>{item.a}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        <section className="disclaimer-section">
          <div className="disclaimer-box">
            <p>
              본 글은 <strong>교육 및 정보 제공 목적</strong>이며 투자 자문이 아닙니다. 최종 투자 판단과 책임은 이용자 본인에게
              있습니다.
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}

