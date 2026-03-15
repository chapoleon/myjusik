/**
 * Cloudflare Pages Function - OpenAI Responses API Investment Consulting Report
 * POST /api/report
 * Supports: en, ko, zh, ja, hi
 */

const SYSTEM_PROMPTS = {
  en: `## Report Contents
1. **Investor Profile Deep Analysis** - Strengths, weaknesses, and things to watch
2. **Current Market Context & Strategy** - Advice based on 2024~2025 market trends
3. **Portfolio Allocation Explained** - Why this ratio, each asset's role
4. **Stock Analysis** - Specific reasons and risks for each recommendation
5. **Practical Investment Guide** - How to start, timing, dollar-cost averaging
6. **Risk Management** - Stop-loss criteria, rebalancing timing, mental discipline
7. **3-month / 6-month / 1-year Action Plan**

Write in a friendly but professional tone.
You are a 20-year veteran US investment consultant.
Use markdown format.
State that this is for informational purposes only, not investment advice.`,

  ko: `## 보고서에 포함할 내용
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
투자 권유가 아닌 정보 제공 목적임을 명시합니다.`,

  zh: `## 报告内容
1. **投资者性格深度分析** - 优缺点及注意事项
2. **当前市场环境与策略** - 基于2024~2025年市场趋势的建议
3. **投资组合详细解读** - 为什么是这个比例，各资产的作用
4. **推荐股票分析** - 推荐每只股票的具体原因和风险
5. **实战投资指南** - 入门方法、买入时机、定投策略
6. **风险管理** - 止损标准、再平衡时机、心态管理
7. **3个月 / 6个月 / 1年行动计划**

用友好但专业的语气撰写。
你是一位拥有20年经验的中国投资顾问。
使用markdown格式。
声明本内容仅供参考，不构成投资建议。`,

  ja: `## レポート内容
1. **投資家タイプ深層分析** - 長所・短所・注意点
2. **現在の市場状況と戦略** - 2024〜2025年の市場動向に基づくアドバイス
3. **推薦ポートフォリオ詳細解説** - なぜこの配分か、各資産の役割
4. **推薦銘柄分析** - 各銘柄を推薦する具体的理由とリスク
5. **実践投資ガイド** - 始め方、購入タイミング、積立投資戦略
6. **リスク管理** - 損切り基準、リバランス時期、メンタル管理
7. **3ヶ月 / 6ヶ月 / 1年アクションプラン**

親しみやすく、しかしプロフェッショナルに書いてください。
あなたは20年のキャリアを持つ日本の投資コンサルタントです。
マークダウン形式で記述します。
投資勧誘ではなく情報提供目的であることを明記してください。`,

  hi: `## रिपोर्ट में शामिल करें
1. **निवेशक प्रोफ़ाइल गहन विश्लेषण** - इस प्रकार की ताकत, कमज़ोरी और सावधानियाँ
2. **वर्तमान बाज़ार स्थिति और रणनीति** - 2024~2025 बाज़ार रुझान पर आधारित सलाह
3. **पोर्टफोलियो आवंटन विस्तृत व्याख्या** - यह अनुपात क्यों, प्रत्येक एसेट की भूमिका
4. **सुझाए गए स्टॉक विश्लेषण** - प्रत्येक सुझाव का विशिष्ट कारण और जोखिम
5. **व्यावहारिक निवेश गाइड** - शुरू कैसे करें, SIP रणनीति
6. **जोखिम प्रबंधन** - स्टॉप-लॉस, रीबैलेंसिंग, भावनात्मक अनुशासन
7. **3 महीने / 6 महीने / 1 साल की कार्य योजना**

मित्रवत लेकिन पेशेवर तरीके से लिखें।
आप 20 वर्षों के अनुभव वाले भारतीय निवेश सलाहकार हैं।
मार्कडाउन प्रारूप में लिखें।
यह केवल सूचना के लिए है, निवेश सलाह नहीं - यह स्पष्ट करें।`,
};

const AGE_MAPS = {
  en: { '20s': '20s', '30s': '30s', '40s': '40s', '50s': '50+' },
  ko: { '20s': '20대', '30s': '30대', '40s': '40대', '50s': '50대 이상' },
  zh: { '20s': '20多岁', '30s': '30多岁', '40s': '40多岁', '50s': '50岁以上' },
  ja: { '20s': '20代', '30s': '30代', '40s': '40代', '50s': '50代以上' },
  hi: { '20s': '20 के दशक', '30s': '30 के दशक', '40s': '40 के दशक', '50s': '50+' },
};

const AMOUNT_MAPS = {
  en: { low: 'Under $500', medium: '$500-$5,000', high: '$5,000-$20,000', very_high: 'Over $20,000' },
  ko: { low: '50만원 미만', medium: '50만~500만원', high: '500만~2000만원', very_high: '2000만원 이상' },
  zh: { low: '3000元以下', medium: '3000-3万元', high: '3万-15万元', very_high: '15万元以上' },
  ja: { low: '5万円未満', medium: '5万〜50万円', high: '50万〜200万円', very_high: '200万円以上' },
  hi: { low: '₹25,000 से कम', medium: '₹25K-₹2.5L', high: '₹2.5L-₹10L', very_high: '₹10 लाख+' },
};

const GOAL_MAPS = {
  en: { growth: 'Grow wealth fast', stability: 'Buy house/Retirement', income: 'Monthly income', explore: 'Not sure yet' },
  ko: { growth: '자산 크게 불리기', stability: '집 사기/노후 준비', income: '매달 용돈 만들기', explore: '아직 잘 모르겠음' },
  zh: { growth: '大幅增值', stability: '买房/养老', income: '每月收入', explore: '还不确定' },
  ja: { growth: '大きく増やしたい', stability: '住宅購入/老後資金', income: '毎月のお小遣い', explore: 'まだわからない' },
  hi: { growth: 'तेज़ी से बढ़ाना', stability: 'घर/रिटायरमेंट', income: 'मासिक आय', explore: 'अभी पक्का नहीं' },
};

export async function onRequestPost(context) {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json; charset=utf-8',
  };

  try {
    const { lang = 'en', age, amount, goal, investorType, portfolio, stocks } = await context.request.json();

    const apiKey = context.env.OPENAI_API_KEY;
    if (!apiKey) {
      return new Response(JSON.stringify({ error: 'API key not configured' }), {
        status: 500,
        headers: corsHeaders,
      });
    }

    const systemPrompt = SYSTEM_PROMPTS[lang] || SYSTEM_PROMPTS['en'];
    const userPrompt = buildUserPrompt({ lang, age, amount, goal, investorType, portfolio, stocks });

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
            content: [{ type: 'input_text', text: systemPrompt }]
          },
          {
            role: 'user',
            content: [{ type: 'input_text', text: userPrompt }]
          }
        ],
        text: { format: { type: 'text' } },
        reasoning: { effort: 'medium', summary: 'auto' },
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

export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

function buildUserPrompt({ lang = 'en', age, amount, goal, investorType, portfolio, stocks }) {
  const ageMap = AGE_MAPS[lang] || AGE_MAPS['en'];
  const amountMap = AMOUNT_MAPS[lang] || AMOUNT_MAPS['en'];
  const goalMap = GOAL_MAPS[lang] || GOAL_MAPS['en'];

  const ageText = ageMap[age] || age;
  const amountText = amountMap[amount] || amount;
  const goalText = goalMap[goal] || goal;

  const portfolioText = portfolio
    ? portfolio.map(p => `${p.name} ${p.pct}%`).join(', ')
    : 'N/A';

  const stockText = stocks
    ? stocks.map(s => `${s.name}`).join(', ')
    : 'N/A';

  return `${ageText} ${investorType}, Investment: ${amountText}, Goal: ${goalText}
Portfolio: ${portfolioText}
Stocks: ${stockText}`;
}
