/**
 * MoneyFit - 10문항 투자 성향 분석 & 종목 추천
 */

// ===== 10문항 정의 =====
// 각 선택지에 risk 점수 (0~10) 부여. 높을수록 공격적.
const QUESTIONS = [
  {
    key: 'age', title: '나이대가 어떻게 되세요?', subtitle: '연령대별 최적 투자 전략이 달라요',
    options: [
      { icon: '🌱', text: '20대', desc: '시간이 가장 큰 자산', value: '20s', score: 9 },
      { icon: '🔥', text: '30대', desc: '본격 자산 증식기', value: '30s', score: 7 },
      { icon: '⚖️', text: '40대', desc: '성장과 안정의 균형', value: '40s', score: 5 },
      { icon: '🌳', text: '50대 이상', desc: '안정적 현금흐름', value: '50s', score: 2 },
    ]
  },
  {
    key: 'amount', title: '투자 가능한 금액은?', subtitle: '작은 금액부터 시작해도 OK',
    options: [
      { icon: '☕', text: '50만원 미만', desc: '소액 분산투자', value: 'low', score: 3 },
      { icon: '💼', text: '50만~500만원', desc: '포트폴리오 시작', value: 'medium', score: 6 },
      { icon: '🏦', text: '500만~2000만원', desc: '본격 자산 배분', value: 'high', score: 7 },
      { icon: '💎', text: '2000만원 이상', desc: '전략적 투자', value: 'very_high', score: 8 },
    ]
  },
  {
    key: 'goal', title: '투자 목표가 뭔가요?', subtitle: '목표에 따라 전략이 달라져요',
    options: [
      { icon: '📈', text: '자산 크게 불리기', desc: '공격적 성장 추구', value: 'growth', score: 9 },
      { icon: '🏠', text: '집 사기 / 노후 준비', desc: '중장기 목표 달성', value: 'stability', score: 5 },
      { icon: '💵', text: '매달 용돈 만들기', desc: '배당/현금흐름 중시', value: 'income', score: 3 },
      { icon: '🤔', text: '잘 모르겠어요', desc: '기본 전략 추천', value: 'explore', score: 5 },
    ]
  },
  {
    key: 'experience', title: '투자 경험이 있으세요?', subtitle: '경험에 맞는 전략을 추천해요',
    options: [
      { icon: '🐣', text: '완전 처음', desc: '주식 계좌도 없어요', value: 'none', score: 2 },
      { icon: '📚', text: '공부는 했어요', desc: '아직 실전은 없음', value: 'study', score: 4 },
      { icon: '🔰', text: '1~2년 해봤어요', desc: '기본은 알아요', value: 'beginner', score: 6 },
      { icon: '🏆', text: '3년 이상', desc: '나름 경험 풍부', value: 'experienced', score: 9 },
    ]
  },
  {
    key: 'income_stability', title: '수입이 안정적인가요?', subtitle: '수입 안정성에 따라 위험 감수 범위가 달라요',
    options: [
      { icon: '🏢', text: '매월 고정 월급', desc: '회사원/공무원', value: 'stable', score: 7 },
      { icon: '📊', text: '변동 있지만 꾸준', desc: '프리랜서/자영업', value: 'variable', score: 5 },
      { icon: '🎲', text: '불규칙해요', desc: '수입이 들쭉날쭉', value: 'irregular', score: 3 },
      { icon: '🎓', text: '수입 없음', desc: '학생/취준생/무직', value: 'none', score: 1 },
    ]
  },
  {
    key: 'horizon', title: '이 돈을 언제 쓸 예정이에요?', subtitle: '투자 기간이 전략을 결정해요',
    options: [
      { icon: '⏰', text: '1년 이내', desc: '단기간 굴리기', value: 'short', score: 2 },
      { icon: '📅', text: '1~3년', desc: '중기 목표', value: 'medium', score: 5 },
      { icon: '🗓️', text: '3~5년', desc: '중장기 투자', value: 'long', score: 7 },
      { icon: '🌏', text: '5년 이상 / 없음', desc: '장기 묻어두기', value: 'very_long', score: 10 },
    ]
  },
  {
    key: 'loss_reaction', title: '투자금이 -20% 빠지면?', subtitle: '솔직한 마음을 골라주세요',
    options: [
      { icon: '😱', text: '당장 전부 팔겠다', desc: '손실 못 참아요', value: 'panic_sell', score: 1 },
      { icon: '😰', text: '일부를 줄이겠다', desc: '불안하지만 일부 유지', value: 'reduce', score: 4 },
      { icon: '😐', text: '그냥 기다리겠다', desc: '장기적으로 회복 기대', value: 'hold', score: 7 },
      { icon: '🤑', text: '오히려 더 사겠다', desc: '싸게 살 기회!', value: 'buy_more', score: 10 },
    ]
  },
  {
    key: 'preference', title: '수익률 vs 안정성, 뭐가 더 중요?', subtitle: '둘 다는 안 돼요, 하나만!',
    options: [
      { icon: '🛡️', text: '안정이 최고', desc: '수익 낮아도 원금 보전', value: 'safety', score: 1 },
      { icon: '⚖️', text: '적당히 균형', desc: '약간의 변동은 OK', value: 'balanced', score: 5 },
      { icon: '🎯', text: '수익이 우선', desc: '변동 있어도 높은 수익', value: 'return', score: 8 },
      { icon: '🚀', text: '수익 극대화', desc: '크게 벌고 싶어요', value: 'max_return', score: 10 },
    ]
  },
  {
    key: 'knowledge', title: 'ETF, PER 같은 용어 알아요?', subtitle: '투자 지식 수준을 체크해요',
    options: [
      { icon: '❓', text: '거의 모른다', desc: '주식이 뭔지도 애매', value: 'none', score: 2 },
      { icon: '📖', text: '기본 용어는 안다', desc: 'ETF, 배당 정도는 OK', value: 'basic', score: 5 },
      { icon: '📊', text: '재무제표도 본다', desc: 'PER, PBR 분석 가능', value: 'intermediate', score: 7 },
      { icon: '🧠', text: '전문가 수준', desc: '기술적 분석도 함', value: 'expert', score: 9 },
    ]
  },
  {
    key: 'savings', title: '비상금이 얼마나 있으세요?', subtitle: '비상금 없이 투자하면 위험해요',
    options: [
      { icon: '😅', text: '거의 없다', desc: '당장 쓸 돈도 빠듯', value: 'none', score: 1 },
      { icon: '💰', text: '1~3개월치 생활비', desc: '최소한의 안전망', value: 'low', score: 4 },
      { icon: '🏦', text: '3~6개월치', desc: '어느 정도 여유', value: 'medium', score: 7 },
      { icon: '💎', text: '6개월 이상', desc: '든든한 안전망', value: 'high', score: 9 },
    ]
  },
];

const TOTAL_QUESTIONS = QUESTIONS.length;

// ===== 상태 =====
const AppState = {
    currentStep: 'splash',
    stepHistory: [],
    currentQuestion: 0,
    answers: {},   // key: { value, score }
    analysis: { investorType: null, portfolio: null, totalScore: 0 },
    selectedStocks: [],
};

// ===== 투자 유형 =====
const INVESTOR_TYPES = {
    aggressive_growth: {
        name: '공격적 성장 추구형', emoji: '🚀',
        description: '높은 수익을 위해 위험도 감수하는 타입이에요. 성장주와 기술주 중심으로 투자하고, 장기적으로 큰 수익을 노립니다. 시장 변동에도 흔들리지 않는 강한 멘탈이 강점입니다.',
        risk: 85, horizon: 90, cashflow: 30,
        riskLabel: '높음', horizonLabel: '장기', cashflowLabel: '낮음',
        riskColor: '#FF6B6B', horizonColor: '#4ecdc4', cashflowColor: '#95e1d3',
        scoreRange: [70, 100],
    },
    growth: {
        name: '적극 투자형', emoji: '📈',
        description: '적극적으로 수익을 추구하지만 어느 정도의 안전장치도 갖추는 타입이에요. 성장 ETF와 우량 개별주를 조합해 꾸준히 시장을 이기려 합니다.',
        risk: 70, horizon: 75, cashflow: 40,
        riskLabel: '중상', horizonLabel: '중장기', cashflowLabel: '보통',
        riskColor: '#FFA94D', horizonColor: '#4ecdc4', cashflowColor: '#95e1d3',
        scoreRange: [55, 69],
    },
    balanced: {
        name: '균형 투자형', emoji: '⚖️',
        description: '성장과 안정 사이에서 균형을 잡는 타입이에요. 적당한 위험을 감수하면서 꾸준한 수익을 추구합니다. 대부분의 시장 상황에서 무난한 성과를 기대할 수 있어요.',
        risk: 55, horizon: 65, cashflow: 55,
        riskLabel: '중간', horizonLabel: '중기', cashflowLabel: '보통',
        riskColor: '#FFA94D', horizonColor: '#4ecdc4', cashflowColor: '#95e1d3',
        scoreRange: [40, 54],
    },
    conservative: {
        name: '안정 추구형', emoji: '🛡️',
        description: '안정적인 수익과 원금 보전을 중시하는 타입이에요. 배당주와 채권 비중을 높게 가져가고, 큰 변동 없이 꾸준히 자산을 불려갑니다.',
        risk: 35, horizon: 50, cashflow: 75,
        riskLabel: '낮음', horizonLabel: '중단기', cashflowLabel: '높음',
        riskColor: '#00C896', horizonColor: '#4ecdc4', cashflowColor: '#667eea',
        scoreRange: [25, 39],
    },
    very_conservative: {
        name: '안전 제일형', emoji: '🏦',
        description: '원금 손실을 극도로 꺼리는 타입이에요. 예금 수준의 안정성을 원하면서 조금 더 나은 수익을 추구합니다. 채권과 고배당 위주가 적합해요.',
        risk: 15, horizon: 30, cashflow: 90,
        riskLabel: '매우 낮음', horizonLabel: '단기', cashflowLabel: '매우 높음',
        riskColor: '#00C896', horizonColor: '#95e1d3', cashflowColor: '#667eea',
        scoreRange: [0, 24],
    },
};

// ===== 포트폴리오 =====
const PORTFOLIOS = {
    aggressive_growth: [
        { name: 'QQQ (나스닥100)', pct: 35, color: '#667eea', desc: '기술주 중심 성장 ETF' },
        { name: '테슬라/엔비디아', pct: 20, color: '#764ba2', desc: '대표 성장주' },
        { name: 'S&P500 ETF', pct: 25, color: '#f093fb', desc: '미국 대표 지수' },
        { name: '신흥시장 ETF', pct: 15, color: '#4facfe', desc: '고성장 시장' },
        { name: '비트코인 ETF', pct: 5, color: '#fa709a', desc: '대안 자산' },
    ],
    growth: [
        { name: 'S&P500 ETF', pct: 35, color: '#667eea', desc: '미국 대표 지수' },
        { name: '나스닥100 ETF', pct: 25, color: '#764ba2', desc: '기술주 성장' },
        { name: '배당성장 ETF', pct: 20, color: '#f093fb', desc: '배당+성장' },
        { name: '리츠 (REITs)', pct: 10, color: '#4facfe', desc: '부동산 간접투자' },
        { name: '채권 ETF', pct: 10, color: '#43e97b', desc: '안정성 확보' },
    ],
    balanced: [
        { name: 'S&P500 ETF', pct: 30, color: '#667eea', desc: '미국 대표 지수' },
        { name: '배당성장 ETF', pct: 25, color: '#764ba2', desc: '안정적 배당' },
        { name: '채권 ETF', pct: 20, color: '#f093fb', desc: '원금 보존' },
        { name: '리츠 (REITs)', pct: 15, color: '#4facfe', desc: '부동산 간접' },
        { name: '나스닥100 ETF', pct: 10, color: '#43e97b', desc: '기술주 참여' },
    ],
    conservative: [
        { name: '고배당 ETF', pct: 35, color: '#667eea', desc: '안정적 배당 수익' },
        { name: '채권 ETF', pct: 25, color: '#764ba2', desc: '원금 보존' },
        { name: '리츠 (REITs)', pct: 20, color: '#f093fb', desc: '부동산 배당' },
        { name: 'S&P500 ETF', pct: 15, color: '#4facfe', desc: '최소 성장' },
        { name: '단기채 ETF', pct: 5, color: '#43e97b', desc: '현금성 자산' },
    ],
    very_conservative: [
        { name: '단기채 ETF', pct: 35, color: '#667eea', desc: '예금 대안' },
        { name: '고배당 ETF', pct: 25, color: '#764ba2', desc: '안정 배당' },
        { name: '채권 ETF', pct: 25, color: '#f093fb', desc: '원금 보존' },
        { name: 'S&P500 ETF', pct: 10, color: '#4facfe', desc: '최소 성장' },
        { name: '현금/MMF', pct: 5, color: '#43e97b', desc: '유동성 확보' },
    ],
};

// ===== 추천 종목 =====
const STOCK_RECOMMENDATIONS = {
    aggressive_growth: [
        { icon: '🚀', name: '테슬라 (TSLA)', reason: 'AI·로봇·에너지 통합 성장주', tag: '성장주' },
        { icon: '🤖', name: '엔비디아 (NVDA)', reason: 'AI 반도체 시장 지배', tag: 'AI' },
        { icon: '☁️', name: '아마존 (AMZN)', reason: 'AWS + 이커머스 양날개', tag: '빅테크' },
        { icon: '📱', name: '애플 (AAPL)', reason: '생태계 기반 안정 성장', tag: '빅테크' },
        { icon: '💊', name: '일라이릴리 (LLY)', reason: '비만·당뇨 치료제 대박', tag: '바이오' },
    ],
    growth: [
        { icon: '📊', name: 'S&P500 ETF (VOO)', reason: '미국 대형주 500개 분산', tag: 'ETF' },
        { icon: '💻', name: '마이크로소프트 (MSFT)', reason: 'AI+클라우드 안정 성장', tag: '빅테크' },
        { icon: '🤖', name: '엔비디아 (NVDA)', reason: 'AI 반도체 핵심 수혜주', tag: 'AI' },
        { icon: '🏠', name: '리얼티인컴 (O)', reason: '월배당 리츠 대표주', tag: '리츠' },
        { icon: '📈', name: 'QQQ ETF', reason: '나스닥100 기술주 성장', tag: 'ETF' },
    ],
    balanced: [
        { icon: '📊', name: 'S&P500 ETF (VOO)', reason: '미국 대형주 분산투자', tag: 'ETF' },
        { icon: '💰', name: 'SCHD ETF', reason: '미국 배당 성장주 ETF', tag: '배당ETF' },
        { icon: '💻', name: '마이크로소프트 (MSFT)', reason: 'AI 시대 필수 기업', tag: '빅테크' },
        { icon: '🏠', name: 'VNQ (부동산 ETF)', reason: '리츠 분산투자', tag: '리츠' },
        { icon: '🏥', name: '존슨앤존슨 (JNJ)', reason: '방어주 + 꾸준한 배당', tag: '배당' },
    ],
    conservative: [
        { icon: '💰', name: 'SCHD ETF', reason: '배당 성장주 ETF 대표', tag: '배당ETF' },
        { icon: '🏠', name: '리얼티인컴 (O)', reason: '매월 배당 지급 리츠', tag: '월배당' },
        { icon: '🏦', name: 'JP모건 (JPM)', reason: '금융 대장주 + 높은 배당', tag: '배당' },
        { icon: '⚡', name: '코카콜라 (KO)', reason: '62년 연속 배당 증가', tag: '배당킹' },
        { icon: '📦', name: 'P&G (PG)', reason: '생활필수품 안정 배당', tag: '배당킹' },
    ],
    very_conservative: [
        { icon: '🏦', name: 'BND (채권 ETF)', reason: '미국 전체 채권 분산', tag: '채권' },
        { icon: '💰', name: 'SCHD ETF', reason: '안정적 배당 성장', tag: '배당ETF' },
        { icon: '⚡', name: '코카콜라 (KO)', reason: '배당킹 62년 연속', tag: '배당킹' },
        { icon: '📦', name: 'P&G (PG)', reason: '경기 방어 + 꾸준한 배당', tag: '필수소비재' },
        { icon: '🏠', name: '리얼티인컴 (O)', reason: '월배당으로 현금흐름', tag: '월배당' },
    ],
};

// ===== 화면 전환 =====
function showStep(stepId) {
    document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
    const el = document.getElementById(stepId);
    if (el) {
        el.classList.add('active');
        AppState.stepHistory.push(AppState.currentStep);
        AppState.currentStep = stepId;
        window.scrollTo(0, 0);
    }
}

function goBack() {
    if (AppState.currentStep === 'question' && AppState.currentQuestion > 0) {
        AppState.currentQuestion--;
        renderQuestion();
        window.scrollTo(0, 0);
        return;
    }
    if (AppState.stepHistory.length > 0) {
        const prev = AppState.stepHistory.pop();
        document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
        document.getElementById(prev).classList.add('active');
        AppState.currentStep = prev;
        if (prev === 'question') {
            renderQuestion();
        }
        window.scrollTo(0, 0);
    }
}

function startAnalysis() {
    AppState.currentQuestion = 0;
    renderQuestion();
    showStep('question');
}

// ===== 질문 렌더링 =====
function renderQuestion() {
    const q = QUESTIONS[AppState.currentQuestion];
    const num = AppState.currentQuestion + 1;
    const pct = (num / TOTAL_QUESTIONS) * 100;

    document.getElementById('progressFill').style.width = pct + '%';
    document.getElementById('questionNumber').textContent = `Q${num}/${TOTAL_QUESTIONS}`;
    document.getElementById('questionTitle').textContent = q.title;
    document.getElementById('questionSubtitle').textContent = q.subtitle;

    const prev = AppState.answers[q.key];

    document.getElementById('optionsGrid').innerHTML = q.options.map(opt => `
        <button class="option-card ${prev && prev.value === opt.value ? 'selected' : ''}"
                onclick="selectAnswer('${q.key}', '${opt.value}', ${opt.score}, this)">
            <div class="option-icon">${opt.icon}</div>
            <div class="option-text">${opt.text}</div>
            <div class="option-desc">${opt.desc}</div>
        </button>
    `).join('');
}

function selectAnswer(key, value, score, el) {
    el.parentElement.querySelectorAll('.option-card').forEach(c => c.classList.remove('selected'));
    el.classList.add('selected');

    AppState.answers[key] = { value, score };

    setTimeout(() => {
        if (AppState.currentQuestion < TOTAL_QUESTIONS - 1) {
            AppState.currentQuestion++;
            renderQuestion();
            window.scrollTo(0, 0);
        } else {
            showResult();
        }
    }, 350);
}

// ===== 점수 기반 분석 =====
function showResult() {
    const totalScore = Object.values(AppState.answers).reduce((sum, a) => sum + a.score, 0);
    const maxScore = TOTAL_QUESTIONS * 10;
    const pct = Math.round((totalScore / maxScore) * 100);

    let type;
    if (pct >= 70) type = 'aggressive_growth';
    else if (pct >= 55) type = 'growth';
    else if (pct >= 40) type = 'balanced';
    else if (pct >= 25) type = 'conservative';
    else type = 'very_conservative';

    AppState.analysis.investorType = type;
    AppState.analysis.portfolio = PORTFOLIOS[type];
    AppState.analysis.totalScore = pct;

    renderResult(type, pct);
    showStep('result');
}

function renderResult(type, pct) {
    const info = INVESTOR_TYPES[type];
    const portfolio = PORTFOLIOS[type];
    const stocks = STOCK_RECOMMENDATIONS[type];

    document.getElementById('investorTypeBadge').textContent = `${info.emoji} ${info.name}`;
    document.getElementById('typeDescription').textContent = info.description;

    // 성향 바
    document.getElementById('typeCharacteristics').innerHTML = `
        <div class="char-item">
            <span class="char-label">위험 감수도</span>
            <div class="char-bar"><div class="char-fill" style="width:${info.risk}%;background:${info.riskColor}"></div></div>
            <span class="char-value">${info.riskLabel}</span>
        </div>
        <div class="char-item">
            <span class="char-label">투자 기간</span>
            <div class="char-bar"><div class="char-fill" style="width:${info.horizon}%;background:${info.horizonColor}"></div></div>
            <span class="char-value">${info.horizonLabel}</span>
        </div>
        <div class="char-item">
            <span class="char-label">현금흐름</span>
            <div class="char-bar"><div class="char-fill" style="width:${info.cashflow}%;background:${info.cashflowColor}"></div></div>
            <span class="char-value">${info.cashflowLabel}</span>
        </div>
    `;

    // 상세 점수
    const scoreLabels = {
        age: '연령', amount: '투자금', goal: '목표', experience: '경험',
        income_stability: '수입 안정성', horizon: '투자 기간', loss_reaction: '손실 대응',
        preference: '수익 선호', knowledge: '지식 수준', savings: '비상금',
    };
    document.getElementById('scoreDetail').innerHTML = `
        <div class="score-total">
            <div class="score-total-label">종합 점수</div>
            <div class="score-total-value">${pct}<span class="score-unit">점</span></div>
            <div class="score-total-bar"><div class="score-total-fill" style="width:${pct}%"></div></div>
        </div>
        <div class="score-items">
            ${QUESTIONS.map(q => {
                const a = AppState.answers[q.key];
                const s = a ? a.score : 0;
                return `<div class="score-row">
                    <span class="score-label">${scoreLabels[q.key]}</span>
                    <div class="score-bar"><div class="score-bar-fill" style="width:${s*10}%"></div></div>
                    <span class="score-val">${s}/10</span>
                </div>`;
            }).join('')}
        </div>
    `;

    // 포트폴리오
    document.getElementById('portfolioList').innerHTML = portfolio.map(p => `
        <div class="portfolio-item">
            <div class="portfolio-color" style="background:${p.color}"></div>
            <div class="portfolio-info">
                <div class="portfolio-name">${p.name}</div>
                <div class="portfolio-desc">${p.desc}</div>
            </div>
            <div class="portfolio-pct">${p.pct}%</div>
        </div>
    `).join('');
    createPortfolioPieChart(portfolio);

    // 종목
    document.getElementById('stockRecommendations').innerHTML = stocks.map(s => `
        <div class="stock-item" onclick="toggleStockSubscribe('${s.name}', this)">
            <div class="stock-icon">${s.icon}</div>
            <div class="stock-info">
                <div class="stock-name">${s.name}</div>
                <div class="stock-reason">${s.reason}</div>
            </div>
            <div class="stock-tag">${s.tag}</div>
        </div>
    `).join('');

    AppState.selectedStocks = stocks.map(s => s.name);
    renderSubscribeStocks();
}

// ===== 구독 종목 =====
function toggleStockSubscribe(name) {
    const idx = AppState.selectedStocks.indexOf(name);
    if (idx > -1) AppState.selectedStocks.splice(idx, 1);
    else AppState.selectedStocks.push(name);
    renderSubscribeStocks();
    showToast(idx > -1 ? `${name} 구독 해제` : `${name} 구독 추가`);
}

function renderSubscribeStocks() {
    document.getElementById('subscribeStockList').innerHTML = AppState.selectedStocks.map(name => `
        <span class="subscribe-stock-tag selected" onclick="removeSubscribeStock('${name}')">
            ${name.split('(')[0].trim()} <span class="remove">✕</span>
        </span>
    `).join('');
}

function removeSubscribeStock(name) {
    AppState.selectedStocks = AppState.selectedStocks.filter(n => n !== name);
    renderSubscribeStocks();
    showToast(`${name} 구독 해제`);
}

// ===== 이벤트 =====
document.addEventListener('DOMContentLoaded', () => {
    showStep('splash');
    setTimeout(() => {
        const kc = document.getElementById('methodKakao');
        const ec = document.getElementById('methodEmail');
        if (kc) kc.addEventListener('change', () => document.getElementById('kakaoInput').classList.toggle('hidden', !kc.checked));
        if (ec) ec.addEventListener('change', () => document.getElementById('emailInput').classList.toggle('hidden', !ec.checked));
    }, 100);
});

function selectFrequency(freq, el) {
    document.querySelectorAll('.freq-btn').forEach(b => b.classList.remove('active'));
    el.classList.add('active');
}

function subscribe() {
    if (AppState.selectedStocks.length === 0) { showToast('구독할 종목을 1개 이상 선택해주세요'); return; }
    const kk = document.getElementById('methodKakao').checked;
    const em = document.getElementById('methodEmail').checked;
    if (!kk && !em) { showToast('카카오톡 또는 이메일 중 하나를 선택해주세요'); return; }
    if (kk && !document.getElementById('phone').value.trim()) { showToast('휴대폰 번호를 입력해주세요'); return; }
    if (em && !document.getElementById('email').value.trim()) { showToast('이메일을 입력해주세요'); return; }
    showToast(`${AppState.selectedStocks.length}개 종목 뉴스 구독 완료!`);
}

// ===== AI 보고서 =====
async function generateReport() {
    const btn = document.getElementById('btnReport');
    const loading = document.getElementById('reportLoading');
    const content = document.getElementById('reportContent');
    const error = document.getElementById('reportError');

    btn.classList.add('hidden');
    error.classList.add('hidden');
    content.classList.add('hidden');
    loading.classList.remove('hidden');

    try {
        const type = AppState.analysis.investorType;
        const res = await fetch('/api/report', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                age: AppState.answers.age?.value,
                amount: AppState.answers.amount?.value,
                goal: AppState.answers.goal?.value,
                investorType: INVESTOR_TYPES[type].name,
                portfolio: PORTFOLIOS[type],
                stocks: STOCK_RECOMMENDATIONS[type],
                score: AppState.analysis.totalScore,
                answers: AppState.answers,
            })
        });

        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        if (data.error) throw new Error(data.error);

        content.innerHTML = markdownToHtml(data.report);
        loading.classList.add('hidden');
        content.classList.remove('hidden');
        showToast('보고서가 생성되었습니다!');
    } catch (err) {
        console.error('Report error:', err);
        loading.classList.add('hidden');
        error.classList.remove('hidden');
        btn.classList.remove('hidden');
    }
}

function markdownToHtml(md) {
    return md
        .replace(/```[\s\S]*?```/g, m => `<pre><code>${m.slice(3, -3).trim()}</code></pre>`)
        .replace(/^### (.+)$/gm, '<h3>$1</h3>')
        .replace(/^## (.+)$/gm, '<h2>$1</h2>')
        .replace(/^# (.+)$/gm, '<h1>$1</h1>')
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.+?)\*/g, '<em>$1</em>')
        .replace(/`(.+?)`/g, '<code>$1</code>')
        .replace(/^---$/gm, '<hr>')
        .replace(/^> (.+)$/gm, '<blockquote>$1</blockquote>')
        .replace(/^- (.+)$/gm, '<li>$1</li>')
        .replace(/^(\d+)\. (.+)$/gm, '<li>$2</li>')
        .replace(/(<li>.*<\/li>\n?)+/g, m => '<ul>' + m + '</ul>')
        .replace(/\n\n/g, '</p><p>')
        .replace(/\n/g, '<br>')
        .replace(/^/, '<p>').replace(/$/, '</p>')
        .replace(/<p><\/p>/g, '')
        .replace(/<p>(<h[123]>)/g, '$1').replace(/(<\/h[123]>)<\/p>/g, '$1')
        .replace(/<p>(<ul>)/g, '$1').replace(/(<\/ul>)<\/p>/g, '$1')
        .replace(/<p>(<hr>)<\/p>/g, '$1')
        .replace(/<p>(<blockquote>)/g, '$1').replace(/(<\/blockquote>)<\/p>/g, '$1')
        .replace(/<p>(<pre>)/g, '$1').replace(/(<\/pre>)<\/p>/g, '$1');
}

// ===== 공유 =====
function shareKakao() { showToast('카카오톡 공유는 실제 배포 시 연동됩니다'); }
function copyLink() {
    if (navigator.clipboard) navigator.clipboard.writeText(window.location.href).then(() => showToast('링크가 복사되었습니다!'));
    else showToast('링크 복사 실패');
}

// ===== 다시 시작 =====
function restartAnalysis() {
    AppState.currentStep = 'splash';
    AppState.stepHistory = [];
    AppState.currentQuestion = 0;
    AppState.answers = {};
    AppState.analysis = { investorType: null, portfolio: null, totalScore: 0 };
    AppState.selectedStocks = [];
    showStep('splash');
}

// ===== 토스트 =====
function showToast(msg) {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = msg;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2500);
}
