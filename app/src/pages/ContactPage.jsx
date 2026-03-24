import React, { useEffect } from 'react'

export default function ContactPage() {
  useEffect(() => {
    document.title = '문의하기 - MoneyFit'
  }, [])

  return (
    <main className="page-content">
      <div className="container">
        <h1>문의하기</h1>
        <p className="lead-text">
          MoneyFit 서비스에 대한 문의, 오류 신고, 제휴 제안은 아래 이메일로 보내 주시면 검토 후 답변 드리겠습니다.
        </p>

        <section className="contact-layout">
          <div className="contact-form-section">
            <h2>연락처</h2>
            <p>
              <strong>이메일:</strong>{' '}
              <a href="mailto:indd@ondasoop.com">indd@ondasoop.com</a>
            </p>
            <p>
              <strong>운영사:</strong> 주식회사 아이앤디디
            </p>
            <p className="page-updated">개인정보 관련 문의는 &quot;개인정보처리방침&quot;의 책임자 연락처를 이용해 주세요.</p>
          </div>

          <div className="contact-form-section">
            <h2>메일 클라이언트로 보내기</h2>
            <p>아래 버튼을 누르면 기본 메일 앱이 열립니다.</p>
            <a className="btn-primary" href="mailto:indd@ondasoop.com?subject=MoneyFit%20문의" style={{ display: 'inline-flex' }}>
              indd@ondasoop.com 으로 메일 보내기
            </a>
          </div>
        </section>
      </div>
    </main>
  )
}
