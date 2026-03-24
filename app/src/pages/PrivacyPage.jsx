import React, { useEffect } from 'react'

export default function PrivacyPage() {
  useEffect(() => {
    document.title = '개인정보처리방침 - MoneyFit'
  }, [])

  return (
    <main className="page-content">
      <div className="container">
        <h1>개인정보처리방침</h1>
        <p className="page-updated">최종 수정일: 2026년 3월 24일</p>

        <section id="section1">
          <h2>1. 총칙</h2>
          <p>
            주식회사 아이앤디디(이하 &quot;회사&quot;)는 MoneyFit 서비스 이용자의 개인정보를 중요하게 여기며, 「개인정보 보호법」
            등 관련 법령을 준수합니다. 본 방침은 서비스 이용 과정에서 처리되는 개인정보의 항목, 목적, 보유 기간 등을
            안내합니다.
          </p>
        </section>

        <section id="section2">
          <h2>2. 수집하는 정보</h2>
          <ul>
            <li>
              <strong>서비스 이용 시:</strong> 설문 응답(투자 성향 관련 선택 값) — 브라우저 로컬 저장소 등에 저장될 수 있습니다.
            </li>
            <li>
              <strong>자동 수집:</strong> 접속 로그, IP, 쿠키, 기기·브라우저 정보(서비스 운영·통계·보안 목적).
            </li>
            <li>
              <strong>문의 시:</strong> 이메일, 이름(또는 닉네임), 문의 내용 등 이용자가 직접 입력한 정보.
            </li>
          </ul>
        </section>

        <section id="adsense">
          <h2>3. 광고 및 제3자 서비스(구글 애드센스 등)</h2>
          <p>
            회사는 서비스 운영을 위해 Google 등 광고 파트너의 광고를 게재할 수 있습니다. Google은 쿠키를 사용하여 이 사이트에
            대한 이용자의 방문 정보를 바탕으로 광고를 게재할 수 있으며,{' '}
            <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noreferrer">
              Google 광고 정책
            </a>
            에 따라 맞춤 광고를 제공할 수 있습니다. 이용자는 브라우저 설정에서 쿠키 저장을 거부하거나, Google 광고 설정에서
            맞춤 광고를 끌 수 있습니다.
          </p>
        </section>

        <section>
          <h2>4. 이용 목적</h2>
          <p>서비스 제공, 품질 개선, 통계 분석, 부정 이용 방지, 법령상 의무 이행, 문의 응대.</p>
        </section>

        <section>
          <h2>5. 보유 및 파기</h2>
          <p>
            수집 목적 달성 후 지체 없이 파기합니다. 다만 관련 법령에 따라 일정 기간 보관이 필요한 경우 해당 기간 동안
            보관합니다.
          </p>
        </section>

        <section>
          <h2>6. 이용자 권리</h2>
          <p>
            이용자는 개인정보 열람·정정·삭제·처리 정지를 요청할 수 있으며, 요청은{' '}
            <a href="mailto:indd@ondasoop.com">indd@ondasoop.com</a> 으로 하실 수 있습니다.
          </p>
        </section>

        <section>
          <h2>7. 개인정보 보호 책임자</h2>
          <p>
            문의: <a href="mailto:indd@ondasoop.com">indd@ondasoop.com</a> (주식회사 아이앤디디)
          </p>
        </section>
      </div>
    </main>
  )
}
