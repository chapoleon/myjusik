import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  useEffect(() => {
    document.title = '페이지를 찾을 수 없습니다 - MoneyFit'
  }, [])

  return (
    <main className="page-content">
      <div className="container">
        <h1>페이지를 찾을 수 없습니다</h1>
        <p className="lead-text">요청하신 주소가 잘못되었거나, 페이지가 이동/삭제되었을 수 있습니다.</p>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 12 }}>
          <Link className="btn-primary" to="/" style={{ display: 'inline-flex' }}>
            홈으로
          </Link>
          <Link className="btn-primary" to="/articles" style={{ display: 'inline-flex' }}>
            아티클 보기
          </Link>
          <Link className="btn-primary" to="/contact" style={{ display: 'inline-flex' }}>
            문의하기
          </Link>
        </div>
      </div>
    </main>
  )
}

