/**
 * Toss Payments integration (client-side)
 * - Card billing auth (recurring): requestBillingAuth('카드')
 * - EasyPay (Kakao/Naver) is NOT supported for billingKey; if used, it must be one-time payments.
 */

function mfUuid() {
  // Prefer crypto.randomUUID when available
  if (crypto?.randomUUID) return crypto.randomUUID();
  const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
}

function getOrCreateCustomerKey() {
  const key = 'moneyfit_customer_key';
  let v = localStorage.getItem(key);
  if (!v) {
    // customerKey must be hard to guess
    v = `mf_${mfUuid()}`;
    localStorage.setItem(key, v);
  }
  return v;
}

function getOrigin() {
  return `${location.protocol}//${location.host}`;
}

function tossClientKey() {
  return window.MONEYFIT_TOSS_CLIENT_KEY || '';
}

function ensureTossReady() {
  const ck = tossClientKey();
  if (!ck) throw new Error('토스페이먼츠 클라이언트 키가 설정되지 않았습니다.');
  if (typeof TossPayments !== 'function') throw new Error('토스페이먼츠 SDK가 로드되지 않았습니다.');
  return TossPayments(ck);
}

window.startProTrial = function startProTrial() {
  try {
    maybeConsumeLaunchSpot();
    const plan = (window.selectedProPlan === 'yearly') ? 'pro_yearly' : 'pro_monthly';
    localStorage.setItem('moneyfit_selected_plan', plan);

    const tossPayments = ensureTossReady();
    const customerKey = getOrCreateCustomerKey();

    // Billing auth supports CARD/TRANSFER only. We use CARD for subscriptions.
    const successUrl = `${getOrigin()}/toss/billing-success.html?plan=${encodeURIComponent(plan)}`;
    const failUrl = `${getOrigin()}/toss/fail.html`;

    tossPayments.requestBillingAuth('카드', {
      customerKey,
      successUrl,
      failUrl,
    }).catch((error) => {
      if (error?.code === 'USER_CANCEL') {
        showToast('결제가 취소되었습니다.');
        return;
      }
      showToast('결제창 호출에 실패했습니다.');
      console.error(error);
    });
  } catch (e) {
    showToast(e?.message || '결제 준비에 실패했습니다.');
    console.error(e);
  }
};

