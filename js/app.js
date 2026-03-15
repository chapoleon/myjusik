/**
 * MoneyFit - 투자 성향 분석 & 종목 추천
 */

const AppState = {
    currentStep: 'splash',
    stepHistory: [],
    userData: { age: null, amount: null, goal: null },
    analysis: { investorType: null, portfolio: null },
    selectedStocks: [] // 구독할 종목
};

// 투자 유형
const INVESTOR_TYPES = {
    aggressive_growth: {
        name: '공격적 성장 추구형',
        description: '높은 수익을 위해 위험도 감수하는 타입이에요. 성장주와 기술주 중심으로 투자하고, 장기적으로 큰 수익을 노립니다.',
        risk: 85, horizon: 90, cashflow: 30,
        riskLabel: '높음', horizonLabel: '장기', cashflowLabel: '낮음',
        riskColor: '#FF6B6B', horizonColor: '#4ecdc4', cashflowColor: '#95e1d3'
    },
    balanced_growth: {
        name: '균형 성장형',
        description: '성장과 안정 사이에서 균형을 잡는 타입이에요. 적당한 위험을 감수하면서 꾸준한 수익을 추구합니다.',
        risk: 60, horizon: 70, cashflow: 50,
        riskLabel: '중간', horizonLabel: '중장기', cashflowLabel: '보통',
        riskColor: '#FFA94D', horizonColor: '#4ecdc4', cashflowColor: '#95e1d3'
    },
    conservative_income: {
        name: '안정 배당 추구형',
        description: '안정적인 배당과 현금흐름을 중시하는 타입이에요. 원금 보전하면서 꾸준히 수익을 쌓아갑니다.',
        risk: 30, horizon: 50, cashflow: 85,
        riskLabel: '낮음', horizonLabel: '중기', cashflowLabel: '높음',
        riskColor: '#00C896', horizonColor: '#4ecdc4', cashflowColor: '#667eea'
    },
    moderate_balanced: {
        name: '온건 균형형',
        description: '안전한 기반 위에서 조금씩 성장을 추구하는 타입이에요. 보수적이지만 기회를 놓치지 않습니다.',
        risk: 45, horizon: 60, cashflow: 60,
        riskLabel: '중하', horizonLabel: '중기', cashflowLabel: '보통',
        riskColor: '#FFA94D', horizonColor: '#4ecdc4', cashflowColor: '#95e1d3'
    }
};

// 포트폴리오
const PORTFOLIOS = {
    aggressive_growth: [
        { name: 'QQQ (나스닥100)', pct: 35, color: '#667eea', desc: '기술주 중심 성장 ETF' },
        { name: 'TSLA (테슬라)', pct: 20, color: '#764ba2', desc: '대표 성장주' },
        { name: 'S&P500 ETF', pct: 25, color: '#f093fb', desc: '미국 대표 지수' },
        { name: '신흥시장 ETF', pct: 15, color: '#4facfe', desc: '고성장 시장' },
        { name: '비트코인 ETF', pct: 5, color: '#fa709a', desc: '대안 자산' }
    ],
    balanced_growth: [
        { name: 'S&P500 ETF', pct: 40, color: '#667eea', desc: '미국 대표 지수' },
        { name: '나스닥100 ETF', pct: 20, color: '#764ba2', desc: '기술주 성장' },
        { name: '배당성장 ETF', pct: 20, color: '#f093fb', desc: '안정적 배당' },
        { name: '리츠 (REITs)', pct: 10, color: '#4facfe', desc: '부동산 간접투자' },
        { name: '채권 ETF', pct: 10, color: '#43e97b', desc: '안정성 확보' }
    ],
    conservative_income: [
        { name: '고배당 ETF', pct: 35, color: '#667eea', desc: '안정적 배당 수익' },
        { name: '리츠 (REITs)', pct: 25, color: '#764ba2', desc: '부동산 배당' },
        { name: '채권 ETF', pct: 20, color: '#f093fb', desc: '원금 보존' },
        { name: '우선주 ETF', pct: 15, color: '#4facfe', desc: '높은 배당률' },
        { name: 'S&P500 ETF', pct: 5, color: '#43e97b', desc: '최소 성장' }
    ],
    moderate_balanced: [
        { name: 'S&P500 ETF', pct: 35, color: '#667eea', desc: '미국 대표 지수' },
        { name: '배당성장 ETF', pct: 25, color: '#764ba2', desc: '배당+성장' },
        { name: '나스닥100 ETF', pct: 15, color: '#f093fb', desc: '기술주 참여' },
        { name: '리츠 (REITs)', pct: 15, color: '#4facfe', desc: '부동산 간접' },
        { name: '채권 ETF', pct: 10, color: '#43e97b', desc: '안정성' }
    ]
};

// 추천 종목
const STOCK_RECOMMENDATIONS = {
    aggressive_growth: [
        { icon: '🚀', name: '테슬라 (TSLA)', reason: 'AI·로봇·에너지 통합 성장주', tag: '성장주' },
        { icon: '🤖', name: '엔비디아 (NVDA)', reason: 'AI 반도체 시장 지배', tag: 'AI' },
        { icon: '☁️', name: '아마존 (AMZN)', reason: 'AWS + 이커머스 양날개', tag: '빅테크' },
        { icon: '📱', name: '애플 (AAPL)', reason: '생태계 기반 안정 성장', tag: '빅테크' },
        { icon: '💊', name: '일라이릴리 (LLY)', reason: '비만·당뇨 치료제 대박', tag: '바이오' }
    ],
    balanced_growth: [
        { icon: '📊', name: 'S&P500 ETF (VOO)', reason: '미국 대형주 500개 분산투자', tag: 'ETF' },
        { icon: '💻', name: '마이크로소프트 (MSFT)', reason: 'AI+클라우드 안정 성장', tag: '빅테크' },
        { icon: '🏥', name: '존슨앤존슨 (JNJ)', reason: '헬스케어 배당 귀족주', tag: '배당' },
        { icon: '🏠', name: '리얼티인컴 (O)', reason: '월배당 리츠 대표주', tag: '리츠' },
        { icon: '📈', name: 'QQQ ETF', reason: '나스닥100 기술주 성장', tag: 'ETF' }
    ],
    conservative_income: [
        { icon: '💰', name: 'SCHD ETF', reason: '미국 배당 성장주 ETF', tag: '배당ETF' },
        { icon: '🏠', name: '리얼티인컴 (O)', reason: '매월 배당 지급 리츠', tag: '월배당' },
        { icon: '🏦', name: 'JP모건 (JPM)', reason: '금융 대장주 + 높은 배당', tag: '배당' },
        { icon: '⚡', name: '코카콜라 (KO)', reason: '62년 연속 배당 증가', tag: '배당킹' },
        { icon: '📦', name: 'P&G (PG)', reason: '생활필수품 안정 배당', tag: '배당킹' }
    ],
    moderate_balanced: [
        { icon: '📊', name: 'S&P500 ETF (VOO)', reason: '안정적 지수 추종', tag: 'ETF' },
        { icon: '💰', name: 'SCHD ETF', reason: '배당 성장주 중심', tag: '배당ETF' },
        { icon: '💻', name: '마이크로소프트 (MSFT)', reason: 'AI 시대 필수 기업', tag: '빅테크' },
        { icon: '🏠', name: 'VNQ (부동산 ETF)', reason: '리츠 분산투자', tag: '리츠' },
        { icon: '🏥', name: '존슨앤존슨 (JNJ)', reason: '방어주 + 꾸준한 배당', tag: '헬스케어' }
    ]
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
    if (AppState.stepHistory.length > 0) {
        const prev = AppState.stepHistory.pop();
        document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
        document.getElementById(prev).classList.add('active');
        AppState.currentStep = prev;
        window.scrollTo(0, 0);
    }
}

function startAnalysis() { showStep('question1'); }

// ===== 옵션 선택 =====
function selectOption(category, value, el) {
    el.parentElement.querySelectorAll('.option-card').forEach(c => c.classList.remove('selected'));
    el.classList.add('selected');
    AppState.userData[category] = value;

    setTimeout(() => {
        if (category === 'age') showStep('question2');
        else if (category === 'amount') showStep('question3');
        else if (category === 'goal') showResult();
    }, 400);
}

// ===== 결과 계산 & 표시 (AI 로딩 없이 바로) =====
function showResult() {
    const { age, amount, goal } = AppState.userData;
    let type;

    if (age === '20s') {
        type = goal === 'growth' ? 'aggressive_growth' : goal === 'income' ? 'balanced_growth' : 'moderate_balanced';
    } else if (age === '30s') {
        type = goal === 'growth' ? 'aggressive_growth' : 'balanced_growth';
    } else if (age === '40s') {
        type = goal === 'growth' ? 'balanced_growth' : goal === 'income' ? 'conservative_income' : 'moderate_balanced';
    } else {
        type = goal === 'income' ? 'conservative_income' : 'moderate_balanced';
    }

    if (amount === 'low' && type === 'aggressive_growth') type = 'balanced_growth';

    AppState.analysis.investorType = type;
    AppState.analysis.portfolio = PORTFOLIOS[type];

    renderResult(type);
    showStep('result');
}

function renderResult(type) {
    const info = INVESTOR_TYPES[type];
    const portfolio = PORTFOLIOS[type];
    const stocks = STOCK_RECOMMENDATIONS[type];

    // 유형 배지 & 설명
    document.getElementById('investorTypeBadge').textContent = info.name;
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

    // 포트폴리오 리스트
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

    // 차트
    createPortfolioPieChart(portfolio);

    // 추천 종목
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

    // 구독 종목 태그 (추천 종목 기본 선택)
    AppState.selectedStocks = stocks.map(s => s.name);
    renderSubscribeStocks();
}

// ===== 구독 종목 관리 =====
function toggleStockSubscribe(name, el) {
    const idx = AppState.selectedStocks.indexOf(name);
    if (idx > -1) {
        AppState.selectedStocks.splice(idx, 1);
    } else {
        AppState.selectedStocks.push(name);
    }
    renderSubscribeStocks();
    showToast(idx > -1 ? `${name} 구독 해제` : `${name} 구독 추가`);
}

function renderSubscribeStocks() {
    const el = document.getElementById('subscribeStockList');
    el.innerHTML = AppState.selectedStocks.map(name => `
        <span class="subscribe-stock-tag selected" onclick="removeSubscribeStock('${name}')">
            ${name.split('(')[0].trim()}
            <span class="remove">✕</span>
        </span>
    `).join('');
}

function removeSubscribeStock(name) {
    AppState.selectedStocks = AppState.selectedStocks.filter(n => n !== name);
    renderSubscribeStocks();
    showToast(`${name} 구독 해제`);
}

// ===== 구독 방법 토글 =====
document.addEventListener('DOMContentLoaded', () => {
    showStep('splash');

    // 카카오톡/이메일 체크박스 토글
    setTimeout(() => {
        const kakaoCheck = document.getElementById('methodKakao');
        const emailCheck = document.getElementById('methodEmail');
        if (kakaoCheck) {
            kakaoCheck.addEventListener('change', () => {
                document.getElementById('kakaoInput').classList.toggle('hidden', !kakaoCheck.checked);
            });
        }
        if (emailCheck) {
            emailCheck.addEventListener('change', () => {
                document.getElementById('emailInput').classList.toggle('hidden', !emailCheck.checked);
            });
        }
    }, 100);
});

function selectFrequency(freq, el) {
    document.querySelectorAll('.freq-btn').forEach(b => b.classList.remove('active'));
    el.classList.add('active');
}

// ===== 구독 신청 =====
function subscribe() {
    if (AppState.selectedStocks.length === 0) {
        showToast('구독할 종목을 1개 이상 선택해주세요');
        return;
    }

    const kakaoChecked = document.getElementById('methodKakao').checked;
    const emailChecked = document.getElementById('methodEmail').checked;

    if (!kakaoChecked && !emailChecked) {
        showToast('카카오톡 또는 이메일 중 하나를 선택해주세요');
        return;
    }

    if (kakaoChecked) {
        const phone = document.getElementById('phone').value.trim();
        if (!phone) { showToast('휴대폰 번호를 입력해주세요'); return; }
    }

    if (emailChecked) {
        const email = document.getElementById('email').value.trim();
        if (!email) { showToast('이메일을 입력해주세요'); return; }
    }

    // 실제로는 서버 API 호출
    showToast(`${AppState.selectedStocks.length}개 종목 뉴스 구독 완료!`);
}

// ===== AI 보고서 생성 =====
async function generateReport() {
    const btn = document.getElementById('btnReport');
    const loading = document.getElementById('reportLoading');
    const content = document.getElementById('reportContent');
    const error = document.getElementById('reportError');

    // UI 상태 전환
    btn.classList.add('hidden');
    error.classList.add('hidden');
    content.classList.add('hidden');
    loading.classList.remove('hidden');

    try {
        const type = AppState.analysis.investorType;
        const stocks = STOCK_RECOMMENDATIONS[type];

        const res = await fetch('/api/report', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                age: AppState.userData.age,
                amount: AppState.userData.amount,
                goal: AppState.userData.goal,
                investorType: INVESTOR_TYPES[type].name,
                portfolio: PORTFOLIOS[type],
                stocks: stocks
            })
        });

        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const data = await res.json();
        if (data.error) throw new Error(data.error);

        // 마크다운 → HTML 변환 (간단 변환기)
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

// 간단한 마크다운 → HTML 변환
function markdownToHtml(md) {
    return md
        // 코드블록
        .replace(/```[\s\S]*?```/g, m => `<pre><code>${m.slice(3, -3).trim()}</code></pre>`)
        // 헤더
        .replace(/^### (.+)$/gm, '<h3>$1</h3>')
        .replace(/^## (.+)$/gm, '<h2>$1</h2>')
        .replace(/^# (.+)$/gm, '<h1>$1</h1>')
        // 볼드, 이탤릭
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.+?)\*/g, '<em>$1</em>')
        // 인라인 코드
        .replace(/`(.+?)`/g, '<code>$1</code>')
        // 수평선
        .replace(/^---$/gm, '<hr>')
        // 인용문
        .replace(/^> (.+)$/gm, '<blockquote>$1</blockquote>')
        // 리스트
        .replace(/^- (.+)$/gm, '<li>$1</li>')
        .replace(/^(\d+)\. (.+)$/gm, '<li>$2</li>')
        .replace(/(<li>.*<\/li>\n?)+/g, m => {
            return '<ul>' + m + '</ul>';
        })
        // 줄바꿈
        .replace(/\n\n/g, '</p><p>')
        .replace(/\n/g, '<br>')
        // 감싸기
        .replace(/^/, '<p>')
        .replace(/$/, '</p>')
        // 빈 태그 정리
        .replace(/<p><\/p>/g, '')
        .replace(/<p>(<h[123]>)/g, '$1')
        .replace(/(<\/h[123]>)<\/p>/g, '$1')
        .replace(/<p>(<ul>)/g, '$1')
        .replace(/(<\/ul>)<\/p>/g, '$1')
        .replace(/<p>(<hr>)<\/p>/g, '$1')
        .replace(/<p>(<blockquote>)/g, '$1')
        .replace(/(<\/blockquote>)<\/p>/g, '$1')
        .replace(/<p>(<pre>)/g, '$1')
        .replace(/(<\/pre>)<\/p>/g, '$1');
}

// ===== 공유 =====
function shareKakao() {
    const type = INVESTOR_TYPES[AppState.analysis.investorType];
    showToast('카카오톡 공유는 실제 배포 시 연동됩니다');
}

function copyLink() {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(window.location.href).then(() => showToast('링크가 복사되었습니다!'));
    } else {
        showToast('링크 복사 실패');
    }
}

// ===== 다시 시작 =====
function restartAnalysis() {
    AppState.currentStep = 'splash';
    AppState.stepHistory = [];
    AppState.userData = { age: null, amount: null, goal: null };
    AppState.analysis = { investorType: null, portfolio: null };
    AppState.selectedStocks = [];
    document.querySelectorAll('.option-card').forEach(c => c.classList.remove('selected'));
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
