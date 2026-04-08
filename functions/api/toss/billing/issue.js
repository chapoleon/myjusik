/**
 * Cloudflare Pages Function
 * POST /api/toss/billing/issue
 *
 * Issues billingKey from authKey + customerKey, then charges first payment.
 *
 * Env:
 * - TOSS_SECRET_KEY: test_sk_... or live_sk_...
 */

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Content-Type': 'application/json; charset=utf-8',
    },
  });
}

function b64(s) {
  // btoa is not always available in CF runtime for Unicode; secret key is ASCII.
  // eslint-disable-next-line no-undef
  return btoa(s);
}

function makeAuthHeader(secretKey) {
  return `Basic ${b64(`${secretKey}:`)}`;
}

export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

export async function onRequestPost(context) {
  try {
    const secretKey = context.env.TOSS_SECRET_KEY;
    if (!secretKey) return json({ error: 'TOSS_SECRET_KEY not configured' }, 500);

    const { authKey, customerKey, plan = 'pro_monthly' } = await context.request.json();
    if (!authKey || !customerKey) return json({ error: 'authKey and customerKey are required' }, 400);

    const issueRes = await fetch('https://api.tosspayments.com/v1/billing/authorizations/issue', {
      method: 'POST',
      headers: {
        Authorization: makeAuthHeader(secretKey),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ authKey, customerKey }),
    });

    const issueText = await issueRes.text();
    if (!issueRes.ok) {
      return json({ error: 'Failed to issue billingKey', detail: issueText }, 502);
    }
    const billing = JSON.parse(issueText);
    const billingKey = billing?.billingKey;
    if (!billingKey) return json({ error: 'billingKey missing in response', raw: billing }, 502);

    // NOTE: Automatic billing approval API may require an additional contract.
    // We still attempt the first payment so "success" matches user expectation.
    const orderId = `mf_${crypto.randomUUID().replace(/-/g, '').slice(0, 20)}`;

    const amount = plan === 'pro_yearly' ? 39900 : 4900;
    const orderName = plan === 'pro_yearly' ? 'MoneyFit 프로 연간 구독' : 'MoneyFit 프로 월 구독';

    const chargeRes = await fetch(`https://api.tosspayments.com/v1/billing/${encodeURIComponent(billingKey)}`, {
      method: 'POST',
      headers: {
        Authorization: makeAuthHeader(secretKey),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        customerKey,
        amount,
        orderId,
        orderName,
      }),
    });

    const chargeText = await chargeRes.text();
    if (!chargeRes.ok) {
      return json(
        {
          error: 'billingKey issued but first charge failed',
          billingKey,
          detail: chargeText,
        },
        502
      );
    }

    const charge = JSON.parse(chargeText);

    return json({
      ok: true,
      plan,
      billingKey,
      customerKey,
      payment: {
        paymentKey: charge?.paymentKey,
        orderId: charge?.orderId,
        status: charge?.status,
        approvedAt: charge?.approvedAt,
        totalAmount: charge?.totalAmount,
        method: charge?.method,
      },
    });
  } catch (err) {
    return json({ error: err?.message || String(err) }, 500);
  }
}

