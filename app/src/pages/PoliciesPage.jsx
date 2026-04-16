import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Seo from '../components/Seo'

function scrollToHash(hash) {
  if (!hash) return
  const id = hash.replace('#', '')
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function PoliciesPage() {
  const location = useLocation()

  useEffect(() => {
    scrollToHash(location.hash)
  }, [location.hash])

  return (
    <main className="page-content">
      <Seo
        title="통합 정책 | 머니핏"
        description="사업자 정보, 결제수단 안내, 환불/취소 정책 등 전자상거래법 필수 고지를 한 페이지에서 확인할 수 있습니다."
        canonicalPath="/policies"
      />
      <div className="container">
        <h1>통합 정책</h1>
        <p className="lead-text">
          전자상거래법 제13조 필수 고지 및 결제/환불 안내를 최소 노출 원칙에 따라 한 페이지로 정리했습니다.
        </p>

        <section className="toc">
          <h3>목차</h3>
          <ul>
            <li>
              <Link to="/policies#business-info">사업자 정보</Link>
            </li>
            <li>
              <Link to="/policies#payment">결제수단 안내</Link>
            </li>
            <li>
              <Link to="/policies#refund">환불/취소 정책</Link>
            </li>
          </ul>
        </section>

        <section id="business-info">
          <h2>사업자 정보</h2>
          <div className="contact-info-box" style={{ fontSize: 14 }}>
            <ul>
              <li>
                <strong>상호:</strong> 주식회사 아이앤디디 (INDD)
              </li>
              <li>
                <strong>대표자:</strong> [수동 입력]
              </li>
              <li>
                <strong>사업자등록번호:</strong> [수동 입력]
              </li>
              <li>
                <strong>통신판매업 신고번호:</strong> [수동 입력]
              </li>
              <li>
                <strong>주소:</strong> [수동 입력]
              </li>
              <li>
                <strong>이메일:</strong> <a href="mailto:contact@moneyfit.vip">contact@moneyfit.vip</a>
              </li>
              <li>
                <strong>전화:</strong> [수동 입력] <span style={{ color: 'var(--text-3)' }}>(선택)</span>
              </li>
            </ul>
          </div>
        </section>

        <section id="payment">
          <h2>결제수단 안내</h2>
          <ul>
            <li>
              <strong>결제 대행사:</strong> 토스페이먼츠(주) (Toss Payments)
            </li>
            <li>
              <strong>지원 결제수단:</strong>
              <ul>
                <li>신용카드: 국내 주요 카드사</li>
                <li>계좌이체: 실시간 계좌이체</li>
                <li>가상계좌: 무통장입금</li>
                <li>간편결제: 토스페이, 카카오페이, 네이버페이, 페이코</li>
                <li>휴대폰 결제: SKT, KT, LG U+</li>
              </ul>
            </li>
            <li>
              <strong>해외 카드:</strong> VISA, MasterCard, JCB, AMEX
            </li>
            <li>
              <strong>정기결제:</strong> 월 구독 결제 시 자동 결제(매월 동일 일자)
            </li>
            <li>
              <strong>영수증:</strong> 결제 완료 시 이메일 안내(결제수단 정책에 따름)
            </li>
            <li>
              <strong>세금계산서:</strong> 별도 요청 시 발행 (<a href="mailto:contact@moneyfit.vip">contact@moneyfit.vip</a>)
            </li>
          </ul>
        </section>

        <section id="refund">
          <h2>환불/취소 정책</h2>
          <div className="warning-box">
            <h3>요약</h3>
            <p>
              환불/취소는 관련 법령 및 결제대행사(Toss Payments) 정책을 기준으로 처리되며, 서비스 이용 이력에 따라 환불 범위가
              달라질 수 있습니다.
            </p>
          </div>

          <h3>1. 결제 직후 즉시 취소</h3>
          <ul>
            <li>결제 후 7일 이내, 서비스 미사용 시 전액 환불</li>
            <li>결제 취소 처리: 영업일 기준 3~5일 소요될 수 있음</li>
          </ul>

          <h3>2. 프리미엄 구독 환불</h3>
          <ul>
            <li>월 구독(₩4,900/월) 가입 후 7일 이내 환불 가능(법령 범위 내)</li>
            <li>프리미엄 기능(상세 리포트, AI 코칭 등) 이용 이력이 없을 때 전액 환불</li>
            <li>이용 이력이 있는 경우 부분 환불(일할 계산 등) 적용 가능</li>
          </ul>

          <h3>3. 정기결제 해지</h3>
          <ul>
            <li>구독 페이지에서 언제든 해지 가능</li>
            <li>해지 시 남은 기간은 이용 가능하며, 자동 갱신만 중단</li>
            <li>결제일 기준 24시간 전 해지 권장(다음 결제 방지)</li>
          </ul>

          <h3>4. 환불 불가 사유(예시)</h3>
          <ul>
            <li>핵심 콘텐츠(상세 리포트, AI 코칭 세션 등)를 이미 이용한 경우</li>
            <li>약관 위반으로 계정 정지된 경우</li>
            <li>결제 7일 경과 및 서비스 이용이 완료된 경우(법령상 제한 사유 해당 시)</li>
          </ul>

          <h3>5. 환불 요청 방법</h3>
          <ul>
            <li>
              이메일: <a href="mailto:refund@moneyfit.vip">refund@moneyfit.vip</a> 또는{' '}
              <a href="mailto:contact@moneyfit.vip">contact@moneyfit.vip</a>
            </li>
            <li>필수 정보: 가입 이메일, 결제일, 환불 사유</li>
            <li>처리 기간: 영업일 기준 5일 이내</li>
            <li>환불 수단: 원결제수단으로 환불(카드 승인 취소/계좌 입금 등)</li>
          </ul>

          <h3>6. 부당 환불/차지백</h3>
          <ul>
            <li>서비스 정상 이용 후 차지백 요청 등 부정 이용이 확인되는 경우 계정 제한이 있을 수 있습니다.</li>
            <li>허위 환불 신청이 적발되는 경우 관련 법령에 따른 조치가 진행될 수 있습니다.</li>
          </ul>

          <h3>7. 분쟁 해결</h3>
          <ul>
            <li>1차: 이메일 상담</li>
            <li>2차: 소비자24(구 1372), 전자거래분쟁조정위원회 등 외부 기관</li>
          </ul>
        </section>

        <p className="page-updated" style={{ marginTop: 32 }}>
          최종 수정일: 2026년 4월 16일
        </p>
      </div>
    </main>
  )
}

