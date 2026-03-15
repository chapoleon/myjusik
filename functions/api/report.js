/**
 * Cloudflare Pages Function - OpenAI Responses API 투자 컨설팅 보고서
 * POST /api/report
 *
 * 환경변수 필요: OPENAI_API_KEY (Cloudflare Dashboard에서 설정)
 */

const SYSTEM_PROMPT = `## 보고서에 포함할 내용
1. **투자자 성향 심층 분석** - 이 유형의 장단점, 주의할 점
2. **현재 시장 상황과 전략** - 2024~2025년 시장 흐름 기반 조언
3. **추천 포트폴리오 상세 해설** - 왜 이 비율인지, 각 자산의 역할
4. **추천 종목 분석** - 각 종목을 추천하는 구체적 이유, 리스크
5. **실전 투자 가이드** - 투자 시작 방법, 매수 타이밍, 분할매수 전략
6. **리스크 관리** - 손절 기준, 리밸런싱 시기, 멘탈 관리
7. **3개월 / 6개월 / 1년 액션 플랜**

쉽고 친근하게, 하지만 전문적으로 작성해주세요.
당신은 20년 경력의 한국인 투자 컨설턴트입니다.
마크다운 형식으로 작성합니다.
투자 권유가 아닌 정보 제공 목적임을 명시합니다.`;

export async function onRequestPost(context) {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json; charset=utf-8',
  };

  try {
    const { age, amount, goal, investorType, portfolio, stocks } = await context.request.json();

    const apiKey = context.env.OPENAI_API_KEY;
    if (!apiKey) {
      return new Response(JSON.stringify({ error: 'API key not configured' }), {
        status: 500,
        headers: corsHeaders,
      });
    }

    const userPrompt = buildUserPrompt({ age, amount, goal, investorType, portfolio, stocks });

    // OpenAI Responses API (최신)
    const openaiRes = await fetch('https://api.openai.com/v1/responses', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4.1',
        input: [
          {
            role: 'developer',
            content: [
              {
                type: 'input_text',
                text: SYSTEM_PROMPT,
              }
            ]
          },
          {
            role: 'user',
            content: [
              {
                type: 'input_text',
                text: userPrompt,
              }
            ]
          }
        ],
        text: {
          format: {
            type: 'text',
          }
        },
        reasoning: {
          effort: 'medium',
          summary: 'auto',
        },
        temperature: 0.7,
        max_output_tokens: 4000,
        store: true,
      }),
    });

    if (!openaiRes.ok) {
      const errData = await openaiRes.text();
      return new Response(JSON.stringify({ error: 'OpenAI API error', detail: errData }), {
        status: 502,
        headers: corsHeaders,
      });
    }

    const data = await openaiRes.json();

    // Responses API 응답에서 output_text 추출
    let report = '';
    if (data.output && Array.isArray(data.output)) {
      for (const item of data.output) {
        if (item.type === 'message' && item.content) {
          for (const block of item.content) {
            if (block.type === 'output_text') {
              report += block.text;
            }
          }
        }
      }
    }

    if (!report) {
      return new Response(JSON.stringify({ error: 'No report generated', raw: data }), {
        status: 502,
        headers: corsHeaders,
      });
    }

    return new Response(JSON.stringify({ report }), {
      status: 200,
      headers: corsHeaders,
    });

  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: corsHeaders,
    });
  }
}

// OPTIONS (CORS preflight)
export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

function buildUserPrompt({ age, amount, goal, investorType, portfolio, stocks }) {
  const ageMap = { '20s': '20대', '30s': '30대', '40s': '40대', '50s': '50대 이상' };
  const amountMap = { low: '50만원 미만', medium: '50만~500만원', high: '500만원 이상' };
  const goalMap = {
    growth: '자산 크게 불리기',
    stability: '집 사기/노후 준비',
    income: '매달 용돈 만들기',
    explore: '아직 잘 모르겠음',
  };

  const ageText = ageMap[age] || age;
  const amountText = amountMap[amount] || amount;
  const goalText = goalMap[goal] || goal;

  const portfolioText = portfolio
    ? portfolio.map(p => `${p.name} ${p.pct}%`).join(', ')
    : '없음';

  const stockText = stocks
    ? stocks.map(s => `${s.name}`).join(', ')
    : '없음';

  return `${ageText} ${investorType}, 투자금 ${amountText}, 목표: ${goalText}
포트폴리오: ${portfolioText}
관심종목: ${stockText}`;
}
