import React from 'react'
import Seo from '../components/Seo'

export default function DisclaimerPage() {
  return (
    <main className="page-content">
      <Seo
        title="투자 정보 면책 조항 | 머니핏"
        description="머니핏이 제공하는 테스트 결과 및 콘텐츠는 투자 자문이 아니며, 투자 손실 책임은 이용자 본인에게 있습니다."
        canonicalPath="/disclaimer"
      />
      <div className="container">
        <h1>투자 정보 면책 조항</h1>
        <p className="page-updated">최종 수정일: 2026년 4월 16일</p>

        <div className="warning-box">
          <h3>중요 안내</h3>
          <p>
            머니핏(MoneyFit)에서 제공하는 투자 성향 테스트 결과, 포트폴리오 예시, 종목/ETF 언급, 블로그/아티클 콘텐츠 등은{' '}
            <strong>교육 및 정보 제공 목적</strong>이며 <strong>투자 자문 또는 투자 권유가 아닙니다</strong>.
          </p>
        </div>

        <section>
          <h2>1. 투자 판단 책임</h2>
          <p>
            테스트 결과 및 모든 콘텐츠는 참고용이며, 최종 투자 결정 및 그에 따른 손익(손실 포함)에 대한 책임은 전적으로 이용자
            본인에게 있습니다. 어떠한 경우에도 운영자 및 콘텐츠 작성자는 이용자의 투자 결과에 대해 법적·금전적 책임을 지지
            않습니다.
          </p>
        </section>

        <section>
          <h2>2. 과거 성과의 한계</h2>
          <p>
            과거 수익률, 과거 데이터, 사례 분석 등은 미래의 성과를 보장하지 않습니다. 금융시장은 예측 불가능한 요소(정책, 금리,
            환율, 지정학적 리스크 등)에 의해 급격히 변동할 수 있습니다.
          </p>
        </section>

        <section>
          <h2>3. 콘텐츠의 정확성 및 업데이트</h2>
          <p>
            머니핏은 신뢰할 수 있는 자료를 바탕으로 정보를 제공하려고 노력하나, 정보의 완전성·정확성·최신성을 보증하지는
            않습니다. 법령·정책·시장 환경 변화에 따라 콘텐츠는 예고 없이 변경될 수 있습니다.
          </p>
        </section>

        <section>
          <h2>4. 전문가 상담 권장</h2>
          <p>
            개인의 재무 상황, 투자 목적, 위험 선호도는 각기 다릅니다. 투자 전에는 필요에 따라 금융 전문가(자산관리사, 세무사,
            회계사 등)와 상담하시길 권장드립니다.
          </p>
        </section>
      </div>
    </main>
  )
}

