import React from 'react'
import Seo from '../components/Seo'

export default function PrivacyPage() {
  return (
    <main className="page-content">
      <Seo
        title="개인정보처리방침 | 머니핏"
        description="머니핏의 개인정보 수집 항목, 이용 목적, 보유 기간, 제3자 제공(결제·인증·광고), 쿠키(구글 애드센스) 사용 고지 및 이용자 권리를 안내합니다."
        canonicalPath="/privacy-policy"
      />
      <div className="container">
        <h1>개인정보처리방침</h1>
        <p className="page-updated">최종 수정일: 2026년 4월 16일</p>

        <section id="section1">
          <h2>1. 총칙</h2>
          <p>
            머니핏(MoneyFit) 서비스 운영자(이하 “운영자”)는 이용자의 개인정보를 중요하게 여기며, 「개인정보 보호법」 등 관련
            법령을 준수합니다. 본 방침은 서비스 이용 과정에서 처리되는 개인정보의 항목, 목적, 보유기간, 파기절차 및 이용자
            권리를 안내합니다.
          </p>
        </section>

        <section id="section2">
          <h2>2. 수집하는 개인정보 항목</h2>
          <ul>
            <li>
              <strong>문의/고객지원:</strong> 이메일, 이름(또는 닉네임), 문의 내용(이용자가 직접 입력).
            </li>
            <li>
              <strong>테스트/서비스 이용:</strong> 투자 성향 테스트 응답 및 결과(서비스 제공·개선 목적).
            </li>
            <li>
              <strong>결제(유료 서비스 제공 시):</strong> 결제 식별 정보(주문/결제 승인 관련), 결제수단 관련 정보(카드사 등은
              결제대행사에서 처리), 환불 처리에 필요한 정보.
            </li>
            <li>
              <strong>자동 수집:</strong> 접속 로그, IP, 쿠키, 기기·브라우저 정보(서비스 운영·통계·보안 목적).
            </li>
          </ul>
        </section>

        <section id="adsense">
          <h2>3. 광고 및 쿠키 사용(구글 애드센스 고지)</h2>
          <p>
            운영자는 서비스 운영을 위해 Google AdSense 등 광고 파트너의 광고를 게재할 수 있습니다. Google은 쿠키(또는
            유사 기술)를 사용하여 이 사이트에 대한 이용자의 방문 정보를 바탕으로 광고를 게재할 수 있으며,{' '}
            <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noreferrer">
              Google 광고 정책
            </a>
            에 따라 맞춤 광고를 제공할 수 있습니다. 이용자는 브라우저 설정에서 쿠키 저장을 거부하거나, Google 광고 설정에서
            맞춤 광고를 끌 수 있습니다. 다만 쿠키 저장 거부 시 일부 기능이 제한될 수 있습니다.
          </p>
        </section>

        <section>
          <h2>4. 개인정보의 이용 목적</h2>
          <ul>
            <li>서비스 제공(테스트 결과 제공, 구독/알림 등 기능 제공)</li>
            <li>유료 서비스 결제 처리 및 환불 처리</li>
            <li>문의 응대 및 고객지원</li>
            <li>서비스 품질 개선, 통계 분석, 부정 이용 방지, 보안</li>
            <li>법령상 의무 이행</li>
          </ul>
        </section>

        <section>
          <h2>5. 제3자 제공 및 처리위탁</h2>
          <p>운영자는 서비스 제공을 위해 아래 업체에 개인정보 처리를 위탁하거나, 서비스 과정에서 제3자 서비스가 사용될 수 있습니다.</p>
          <ul>
            <li>
              <strong>Toss Payments</strong>: 결제 처리(결제 식별 정보 등)
            </li>
            <li>
              <strong>Firebase</strong>: 인증/서비스 운영을 위한 인프라(로그/인증 관련 정보 등)
            </li>
            <li>
              <strong>Google AdSense</strong>: 광고 게재 및 쿠키 기반 광고 제공
            </li>
          </ul>
          <p>각 제3자 서비스의 개인정보 처리에 대해서는 해당 서비스의 개인정보처리방침이 적용될 수 있습니다.</p>
        </section>

        <section>
          <h2>6. 보유기간 및 파기절차</h2>
          <p>
            운영자는 수집 목적 달성 후 지체 없이 개인정보를 파기합니다. 다만 관련 법령에 따라 일정 기간 보관이 필요한 경우에는
            해당 기간 동안 보관합니다. 전자적 파일 형태의 정보는 복구·재생이 불가능한 방법으로 삭제하며, 출력물 등은 분쇄 또는
            소각 등으로 파기합니다.
          </p>
        </section>

        <section>
          <h2>7. 이용자의 권리</h2>
          <p>
            이용자는 개인정보 열람·정정·삭제·처리정지 등을 요청할 수 있습니다. 요청은 아래 “개인정보 보호책임자” 연락처로
            접수해 주시면, 본인 확인 절차 후 관련 법령에 따라 처리합니다.
          </p>
        </section>

        <section>
          <h2>8. 개인정보 보호책임자</h2>
          <p>
            성명: [수동 입력]
            <br />
            이메일: <a href="mailto:contact@moneyfit.vip">contact@moneyfit.vip</a>
            <br />
            (개인정보 관련 문의는 가능한 한 상세히 작성해 주시면 신속히 안내드리겠습니다.)
          </p>
        </section>
      </div>
    </main>
  )
}
