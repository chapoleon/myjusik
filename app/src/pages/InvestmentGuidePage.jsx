import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function InvestmentGuidePage() {
  useEffect(() => {
    document.title = '투자 가이드 - MoneyFit'
  }, [])

  return (
    <main className="page-content">
      <div className="container">
        <h1>초보자를 위한 투자 가이드</h1>
        <p className="lead-text">
          투자를 처음 시작할 때 알아 두면 좋은 기본 개념을 정리했습니다. 본 문서는 일반적인 정보 제공이며, 특정 상품을
          추천하지 않습니다.
        </p>

        <section>
          <h2>1. 투자 전에 할 일</h2>
          <ul>
            <li>비상금(생활비 여유분)을 먼저 확보합니다.</li>
            <li>감내할 수 있는 손실 범위와 투자 기간을 스스로 정합니다.</li>
            <li>분산 투자, 수수료, 세금 등 기본 개념을 익힙니다.</li>
          </ul>
        </section>

        <section>
          <h2>2. ETF와 개별 주식</h2>
          <p>
            ETF(상장지수펀드)는 여러 종목에 나누어 투자하는 간접투자 수단으로, 분산에 유리한 경우가 많습니다. 개별 주식은
            기업 분석과 변동성 이해가 더 필요합니다.
          </p>
        </section>

        <section>
          <h2>3. 리스크와 수익</h2>
          <p>일반적으로 기대 수익이 높을수록 가격 변동(리스크)도 커질 수 있습니다. 본인 성향에 맞는 균형을 찾는 것이 중요합니다.</p>
        </section>

        <section>
          <h2>4. MoneyFit과 함께하기</h2>
          <p>
            <Link to="/quiz">투자 성향 테스트</Link>로 자신의 성향을 가볍게 점검해 본 뒤, 공식 자료와 전문가 상담 등을 병행해
            판단하시기 바랍니다.
          </p>
        </section>

        <section>
          <h2>더 읽어보기</h2>
          <p>
            기본 개념을 더 깊게 정리한 글은 <Link to="/articles">아티클</Link>에서 확인하실 수 있습니다.
          </p>
        </section>
      </div>
    </main>
  )
}
