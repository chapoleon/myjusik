import React from 'react'
import { Link } from 'react-router-dom'
import Seo from '../components/Seo'

export default function AboutPage() {
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'MoneyFit',
    url: 'https://moneyfit.vip',
    brand: {
      '@type': 'Brand',
      name: 'MoneyFit',
    },
  }

  return (
    <main className="page-content">
      <Seo
        title="머니핏 소개 | 투자 성격 테스트 서비스"
        description="머니핏은 행동경제학과 투자 심리학 기반의 투자 성격 분석 서비스입니다. 손실회피·앵커링·확증편향 등 편향을 이해하고, 흔들리지 않는 투자 습관을 돕습니다."
        canonicalPath="/about"
        jsonLd={[orgJsonLd]}
      />
      <div className="container">
        <h1>머니핏 소개</h1>
        <p className="lead-text">
          머니핏은 행동경제학과 투자 심리학 기반의 투자 성격 분석 서비스입니다. 우리는 “투자는 정보가 아닌 심리가 결정한다”는
          철학 아래, 사용자가 자신의 의사결정 습관을 이해하고 더 안정적으로 투자 계획을 유지하도록 돕습니다. 손실회피 편향,
          앵커링(기준점 고정), 확증편향(보고 싶은 정보만 보는 경향) 등 대표적인 행동경제학 이론을 바탕으로, 투자에서 반복되는
          실수를 줄이는 방향으로 콘텐츠와 테스트를 설계합니다.
        </p>

        <section>
          <h2>저자 및 운영 안내</h2>
          <p>
            본 사이트의 콘텐츠는 <strong>INDD 편집팀</strong>이 작성·편집합니다. 법정 고지(사업자 정보, 결제수단, 환불/취소
            정책)는 통합 정책 페이지에서 확인하실 수 있습니다.
          </p>
          <p>
            <Link to="/policies#business-info">통합 정책 페이지로 이동</Link>
          </p>
        </section>

        <section>
          <h2>서비스 철학</h2>
          <div className="disclaimer-box">
            <p>
              <strong>“투자는 정보가 아닌 심리가 결정한다.”</strong> 머니핏은 지식 전달을 넘어, 의사결정의 흔들림(불안, 조급함,
              과잉확신)을 줄이는 데 초점을 둡니다.
            </p>
          </div>
        </section>

        <section>
          <h2>전문성 기반</h2>
          <p>
            행동경제학은 사람들이 항상 합리적으로 판단하지 않는다는 현실을 다룹니다. 머니핏은 전망이론(손실회피), 앵커링,
            확증편향, 군중심리(FOMO) 같은 개념을 쉬운 언어로 풀어, 투자자가 스스로 위험 신호를 인식할 수 있도록 돕습니다. 또한
            투자 성향을 단정짓기보다는, “내가 어떤 상황에서 어떤 편향으로 무너지는지”를 점검하는 체크리스트로 제공하는 것을
            목표로 합니다.
          </p>
        </section>

        <section>
          <h2>제공 기능</h2>
          <ul>
            <li>투자 성향 테스트(투자 성격 분석)</li>
            <li>응답 기반 투자 유형 요약 및 참고용 포트폴리오 방향 제시(교육 목적)</li>
            <li>행동경제학 기반 블로그/아티클 콘텐츠 제공</li>
          </ul>
        </section>

        <section>
          <h2>중요한 안내</h2>
          <p>
            머니핏이 제공하는 분석과 예시는 <strong>투자 권유나 매매 추천이 아닙니다</strong>. 모든 투자 결정과 그에 따른 결과는
            이용자 본인의 책임입니다. 과거 수익률은 미래를 보장하지 않으며, 금융투자상품은 예금자보호 대상이 아닐 수 있습니다.
          </p>
        </section>
      </div>
    </main>
  )
}
