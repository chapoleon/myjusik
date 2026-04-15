import React, { useEffect } from 'react'

export default function AboutPage() {
  useEffect(() => {
    document.title = '서비스 소개 - MoneyFit'
  }, [])

  return (
    <main className="page-content">
      <div className="container">
        <h1>MoneyFit 서비스 소개</h1>
        <p className="lead-text">
          MoneyFit은 10가지 질문으로 투자 성향을 분석하고, 맞춤형 포트폴리오 방향을 안내하는 무료 웹 서비스입니다. 회원가입 없이
          브라우저에서 바로 이용할 수 있습니다.
        </p>

        <section>
          <h2>운영 주체</h2>
          <p>
            본 서비스는 서비스 운영자가 운영합니다. 문의는{' '}
            <a href="mailto:indd@ondasoop.com">indd@ondasoop.com</a> 으로 연락해 주세요.
          </p>
        </section>

        <section>
          <h2>제공 기능</h2>
          <ul>
            <li>다국어(영어, 한국어, 중국어, 일본어, 힌디어) 투자 성향 설문</li>
            <li>응답 기반 투자 유형 요약 및 참고용 포트폴리오·종목 예시(교육 목적)</li>
            <li>투자 가이드 등 부가 콘텐츠</li>
          </ul>
        </section>

        <section>
          <h2>중요한 안내</h2>
          <p>
            MoneyFit이 제공하는 분석과 예시는 <strong>투자 권유나 매매 추천이 아닙니다</strong>. 모든 투자 결정과 그에 따른
            결과는 이용자 본인의 책임입니다. 과거 수익률이 미래를 보장하지 않으며, 금융투자상품은 예금자보호 대상이 아닐 수
            있습니다.
          </p>
        </section>
      </div>
    </main>
  )
}
