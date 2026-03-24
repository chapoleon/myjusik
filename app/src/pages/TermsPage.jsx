import React, { useEffect } from 'react'

export default function TermsPage() {
  useEffect(() => {
    document.title = '이용약관 - MoneyFit'
  }, [])

  return (
    <main className="page-content">
      <div className="container">
        <h1>이용약관</h1>
        <p className="page-updated">최종 수정일: 2026년 3월 24일</p>

        <section>
          <h2>제1조 (목적)</h2>
          <p>본 약관은 주식회사 아이앤디디(이하 &quot;회사&quot;)가 제공하는 MoneyFit 서비스의 이용 조건 및 절차를 규정합니다.</p>
        </section>

        <section>
          <h2>제2조 (서비스 내용)</h2>
          <p>
            MoneyFit은 투자 성향 설문 및 참고용 정보를 제공하는 온라인 서비스입니다. 서비스의 구체적인 기능은 회사 정책에 따라
            변경될 수 있습니다.
          </p>
        </section>

        <section>
          <h2>제3조 (이용자의 의무)</h2>
          <p>이용자는 관련 법령 및 본 약관을 준수해야 하며, 타인의 권리를 침해하거나 서비스 운영을 방해해서는 안 됩니다.</p>
        </section>

        <section>
          <h2>제4조 (투자 관련 면책)</h2>
          <p>
            서비스에서 제공하는 분석 결과, 포트폴리오 예시, 종목 정보 등은 <strong>교육 및 정보 제공 목적</strong>에 한하며,
            특정 금융상품의 매수·매도를 권유하지 않습니다. 모든 투자 결정과 손익은 이용자 본인의 책임이며, 회사는 이에 따른
            손해에 대해 책임을 지지 않습니다.
          </p>
        </section>

        <section>
          <h2>제5조 (지적재산권)</h2>
          <p>서비스에 포함된 콘텐츠에 대한 저작권 등 지적재산권은 회사 또는 정당한 권리자에게 귀속됩니다.</p>
        </section>

        <section>
          <h2>제6조 (서비스 중단)</h2>
          <p>
            회사는 시스템 점검, 천재지변, 기술적 장애 등 불가피한 사유가 있는 경우 서비스 제공을 일시 중단할 수 있습니다.
          </p>
        </section>

        <section>
          <h2>제7조 (약관 변경)</h2>
          <p>회사는 필요 시 약관을 변경할 수 있으며, 변경 내용은 서비스 내 공지 등을 통해 안내합니다.</p>
        </section>

        <section>
          <h2>제8조 (문의)</h2>
          <p>
            서비스와 관련한 문의: <a href="mailto:indd@ondasoop.com">indd@ondasoop.com</a>
          </p>
        </section>
      </div>
    </main>
  )
}
