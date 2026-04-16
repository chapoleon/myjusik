import React, { useMemo, useState } from 'react'
import Seo from '../components/Seo'

export default function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const mailtoHref = useMemo(() => {
    const to = 'contact@moneyfit.vip'
    const subject = `머니핏 문의 - ${name || '이름 미입력'}`
    const body = [
      `이름: ${name || '-'}`,
      `이메일: ${email || '-'}`,
      '',
      message || '',
      '',
      '---',
      '이 메일은 머니핏(contact@moneyfit.vip) 문의 페이지에서 작성되었습니다.',
    ].join('\n')
    return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }, [name, email, message])

  return (
    <main className="page-content">
      <Seo
        title="문의하기 | 머니핏"
        description="머니핏 서비스 문의는 contact@moneyfit.vip로 연락해 주세요. 평일 09:00~18:00 운영."
        canonicalPath="/contact"
      />
      <div className="container">
        <h1>문의하기</h1>
        <p className="lead-text">
          머니핏 서비스에 대한 문의, 오류 신고, 제휴 제안은 아래 연락처로 보내 주시면 검토 후 답변 드리겠습니다.
        </p>

        <section className="contact-layout">
          <div className="contact-form-section">
            <h2>연락처</h2>
            <div className="contact-info-box">
              <h4>기본 정보</h4>
              <ul>
                <li>
                  <strong>이메일:</strong> <a href="mailto:contact@moneyfit.vip">contact@moneyfit.vip</a>
                </li>
                <li>
                  <strong>운영시간:</strong> 평일 09:00~18:00
                </li>
              </ul>
            </div>
            <p className="page-updated">개인정보 관련 문의는 개인정보처리방침의 “개인정보 보호책임자” 연락처를 이용해 주세요.</p>
          </div>

          <div className="contact-form-section">
            <h2>문의 양식</h2>
            <p>아래 내용을 작성하시면, 기본 메일 앱으로 전송됩니다(서버 저장 없음).</p>

            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="contactName">
                  <i className="fas fa-user" aria-hidden="true" /> 이름
                </label>
                <input
                  id="contactName"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="홍길동"
                />
              </div>

              <div className="form-group">
                <label htmlFor="contactEmail">
                  <i className="fas fa-envelope" aria-hidden="true" /> 이메일
                </label>
                <input
                  id="contactEmail"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="contactMessage">
                  <i className="fas fa-comment-dots" aria-hidden="true" /> 내용
                </label>
                <textarea
                  id="contactMessage"
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="문의 내용을 적어 주세요."
                />
              </div>

              <a className="cta-button" href={mailtoHref} style={{ width: '100%', textAlign: 'center' }}>
                메일로 문의 보내기
              </a>
            </form>
          </div>
        </section>
      </div>
    </main>
  )
}
