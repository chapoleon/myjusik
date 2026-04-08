/**
 * MoneyFit - 10-Question Investment Profile & Stock Recommendations
 */

// ===== Question structure (language-agnostic) =====
const QUESTIONS = [
  { key: 'age', options: [
    { icon: '🌱', value: '20s', score: 9 },
    { icon: '🔥', value: '30s', score: 7 },
    { icon: '⚖️', value: '40s', score: 5 },
    { icon: '🌳', value: '50s', score: 2 },
  ]},
  { key: 'amount', options: [
    { icon: '☕', value: 'low', score: 3 },
    { icon: '💼', value: 'medium', score: 6 },
    { icon: '🏦', value: 'high', score: 7 },
    { icon: '💎', value: 'very_high', score: 8 },
  ]},
  { key: 'goal', options: [
    { icon: '📈', value: 'growth', score: 9 },
    { icon: '🏠', value: 'stability', score: 5 },
    { icon: '💵', value: 'income', score: 3 },
    { icon: '🤔', value: 'explore', score: 5 },
  ]},
  { key: 'experience', options: [
    { icon: '🐣', value: 'none', score: 2 },
    { icon: '📚', value: 'study', score: 4 },
    { icon: '🔰', value: 'beginner', score: 6 },
    { icon: '🏆', value: 'experienced', score: 9 },
  ]},
  { key: 'income_stability', options: [
    { icon: '🏢', value: 'stable', score: 7 },
    { icon: '📊', value: 'variable', score: 5 },
    { icon: '🎲', value: 'irregular', score: 3 },
    { icon: '🎓', value: 'none', score: 1 },
  ]},
  { key: 'horizon', options: [
    { icon: '⏰', value: 'short', score: 2 },
    { icon: '📅', value: 'medium', score: 5 },
    { icon: '🗓️', value: 'long', score: 7 },
    { icon: '🌏', value: 'very_long', score: 10 },
  ]},
  { key: 'loss_reaction', options: [
    { icon: '😱', value: 'panic_sell', score: 1 },
    { icon: '😰', value: 'reduce', score: 4 },
    { icon: '😐', value: 'hold', score: 7 },
    { icon: '🤑', value: 'buy_more', score: 10 },
  ]},
  { key: 'preference', options: [
    { icon: '🛡️', value: 'safety', score: 1 },
    { icon: '⚖️', value: 'balanced', score: 5 },
    { icon: '🎯', value: 'return', score: 8 },
    { icon: '🚀', value: 'max_return', score: 10 },
  ]},
  { key: 'knowledge', options: [
    { icon: '❓', value: 'none', score: 2 },
    { icon: '📖', value: 'basic', score: 5 },
    { icon: '📊', value: 'intermediate', score: 7 },
    { icon: '🧠', value: 'expert', score: 9 },
  ]},
  { key: 'savings', options: [
    { icon: '😅', value: 'none', score: 1 },
    { icon: '💰', value: 'low', score: 4 },
    { icon: '🏦', value: 'medium', score: 7 },
    { icon: '💎', value: 'high', score: 9 },
  ]},
];

const TOTAL_QUESTIONS = QUESTIONS.length;

// ===== State =====
const AppState = {
    currentStep: 'splash',
    stepHistory: [],
    currentQuestion: 0,
    answers: {},
    analysis: { investorType: null, portfolio: null, totalScore: 0 },
    selectedStocks: [],
};

// ===== Investor Types (numeric data only, text from i18n) =====
const INVESTOR_TYPE_DATA = {
    aggressive_growth: {
        mbtiCode: 'FIRE', mbtiEmoji: '🔥',
        gradient: 'linear-gradient(135deg, #FF6B6B, #ee5a24)',
        risk: 85, horizon: 90, cashflow: 30,
        riskColor: '#FF6B6B', horizonColor: '#4ecdc4', cashflowColor: '#95e1d3',
        scoreRange: [70, 100],
    },
    growth: {
        mbtiCode: 'RISE', mbtiEmoji: '📈',
        gradient: 'linear-gradient(135deg, #FFA94D, #F7971E)',
        risk: 70, horizon: 75, cashflow: 40,
        riskColor: '#FFA94D', horizonColor: '#4ecdc4', cashflowColor: '#95e1d3',
        scoreRange: [55, 69],
    },
    balanced: {
        mbtiCode: 'WISE', mbtiEmoji: '⚖️',
        gradient: 'linear-gradient(135deg, #667eea, #764ba2)',
        risk: 55, horizon: 65, cashflow: 55,
        riskColor: '#FFA94D', horizonColor: '#4ecdc4', cashflowColor: '#95e1d3',
        scoreRange: [40, 54],
    },
    conservative: {
        mbtiCode: 'SAFE', mbtiEmoji: '🛡️',
        gradient: 'linear-gradient(135deg, #00C896, #00b09b)',
        risk: 35, horizon: 50, cashflow: 75,
        riskColor: '#00C896', horizonColor: '#4ecdc4', cashflowColor: '#667eea',
        scoreRange: [25, 39],
    },
    very_conservative: {
        mbtiCode: 'FORT', mbtiEmoji: '🏦',
        gradient: 'linear-gradient(135deg, #4facfe, #00f2fe)',
        risk: 15, horizon: 30, cashflow: 90,
        riskColor: '#00C896', horizonColor: '#95e1d3', cashflowColor: '#667eea',
        scoreRange: [0, 24],
    },
};

// ===== Step Navigation =====
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

// ===== Render Question =====
function renderQuestion() {
    const q = QUESTIONS[AppState.currentQuestion];
    const qTrans = t('questions')[AppState.currentQuestion];
    const num = AppState.currentQuestion + 1;
    const pct = (num / TOTAL_QUESTIONS) * 100;

    document.getElementById('progressFill').style.width = pct + '%';
    document.getElementById('questionNumber').textContent = `Q${num}/${TOTAL_QUESTIONS}`;
    document.getElementById('questionTitle').textContent = qTrans.title;
    document.getElementById('questionSubtitle').textContent = qTrans.subtitle;

    const prev = AppState.answers[q.key];

    document.getElementById('optionsGrid').innerHTML = q.options.map((opt, i) => `
        <button class="option-card ${prev && prev.value === opt.value ? 'selected' : ''}"
                onclick="selectAnswer('${q.key}', '${opt.value}', ${opt.score}, this)">
            <div class="option-icon">${opt.icon}</div>
            <div class="option-text">${qTrans.options[i].text}</div>
            <div class="option-desc">${qTrans.options[i].desc}</div>
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

// ===== MBTI 4-axis calculation =====
function calcMbtiAxes(answers) {
    // Axis 1: S(Safe) vs R(Risk) — from loss_reaction + preference
    const riskScore = ((answers.loss_reaction?.score || 5) + (answers.preference?.score || 5)) / 2;
    const axis1 = riskScore >= 5 ? 'R' : 'S';
    const axis1pct = Math.round(riskScore * 10);

    // Axis 2: T(short-Term) vs L(Long) — from horizon
    const horizonScore = answers.horizon?.score || 5;
    const axis2 = horizonScore >= 5 ? 'L' : 'T';
    const axis2pct = Math.round(horizonScore * 10);

    // Axis 3: D(Dividend/income) vs G(Growth) — from goal + amount
    const goalScore = answers.goal?.score || 5;
    const axis3 = goalScore >= 5 ? 'G' : 'D';
    const axis3pct = Math.round(goalScore * 10);

    // Axis 4: N(Novice) vs E(Expert) — from knowledge + experience
    const expScore = ((answers.knowledge?.score || 5) + (answers.experience?.score || 5)) / 2;
    const axis4 = expScore >= 5 ? 'E' : 'N';
    const axis4pct = Math.round(expScore * 10);

    return {
        code: axis1 + axis2 + axis3 + axis4,
        axes: [
            { letter: axis1, pct: axis1pct, leftKey: 'mbti_axis_safe', rightKey: 'mbti_axis_risk' },
            { letter: axis2, pct: axis2pct, leftKey: 'mbti_axis_short', rightKey: 'mbti_axis_long' },
            { letter: axis3, pct: axis3pct, leftKey: 'mbti_axis_dividend', rightKey: 'mbti_axis_growth' },
            { letter: axis4, pct: axis4pct, leftKey: 'mbti_axis_novice', rightKey: 'mbti_axis_expert' },
        ]
    };
}

// ===== Score-based Analysis =====
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
    AppState.analysis.portfolio = getPortfolios(type);
    AppState.analysis.totalScore = pct;
    AppState.analysis.mbti = calcMbtiAxes(AppState.answers);

    // Shareable URL (type-based)
    try {
        const url = new URL(window.location.href);
        url.searchParams.set('result', type);
        history.replaceState({}, '', url.toString());
    } catch (_) {}

    // Persist last result so payment redirects can return to /#result reliably.
    try {
        localStorage.setItem('moneyfit_last_result', JSON.stringify({
            lang: getLang(),
            answers: AppState.answers,
            investorType: type,
            totalScore: pct,
            savedAt: new Date().toISOString(),
        }));
    } catch (_) {}

    renderResult(type, pct);
    showStep('result');
}

function renderResult(type, pct) {
    const data = INVESTOR_TYPE_DATA[type];
    const info = t('investor_types.' + type);
    const portfolio = getPortfolios(type);
    const stocks = getStockRecommendations(type);

    // MBTI-style card with 4 axes
    const mbti = AppState.analysis.mbti;
    const codeLetters = mbti.code.split('').map(l => `<span class="mbti-letter">${l}</span>`).join('<span class="mbti-dot">·</span>');

    document.getElementById('mbtiCard').innerHTML = `
        <div class="mbti-card-inner" style="background:${data.gradient}">
            <div class="mbti-label">${t('mbti_label')}</div>
            <div class="mbti-emoji">${data.mbtiEmoji}</div>
            <div class="mbti-code-wrap">${codeLetters}</div>
            <div class="mbti-type-name">${data.mbtiCode} - ${info.name}</div>
            <div class="mbti-axes">
                ${mbti.axes.map(ax => `
                    <div class="mbti-axis-row">
                        <span class="mbti-axis-left ${ax.pct < 50 ? 'active' : ''}">${t(ax.leftKey)}</span>
                        <div class="mbti-axis-bar">
                            <div class="mbti-axis-fill-left" style="width:${100 - ax.pct}%"></div>
                            <div class="mbti-axis-center"></div>
                            <div class="mbti-axis-fill-right" style="width:${ax.pct}%"></div>
                        </div>
                        <span class="mbti-axis-right ${ax.pct >= 50 ? 'active' : ''}">${t(ax.rightKey)}</span>
                    </div>
                `).join('')}
            </div>
            <div class="mbti-url">moneyfit.vip</div>
        </div>
    `;

    document.getElementById('investorTypeBadge').textContent = `${data.mbtiEmoji} ${mbti.code} — ${info.name}`;
    document.getElementById('typeDescription').textContent = info.description;

    // Characteristic bars
    document.getElementById('typeCharacteristics').innerHTML = `
        <div class="char-item">
            <span class="char-label">${t('char_risk')}</span>
            <div class="char-bar"><div class="char-fill" style="width:${data.risk}%;background:${data.riskColor}"></div></div>
            <span class="char-value">${info.riskLabel}</span>
        </div>
        <div class="char-item">
            <span class="char-label">${t('char_horizon')}</span>
            <div class="char-bar"><div class="char-fill" style="width:${data.horizon}%;background:${data.horizonColor}"></div></div>
            <span class="char-value">${info.horizonLabel}</span>
        </div>
        <div class="char-item">
            <span class="char-label">${t('char_cashflow')}</span>
            <div class="char-bar"><div class="char-fill" style="width:${data.cashflow}%;background:${data.cashflowColor}"></div></div>
            <span class="char-value">${info.cashflowLabel}</span>
        </div>
    `;

    // Score detail
    const scoreLabels = t('score_labels');
    document.getElementById('scoreDetail').innerHTML = `
        <div class="score-total">
            <div class="score-total-label">${t('score_total_label')}</div>
            <div class="score-total-value">${pct}<span class="score-unit">${t('score_unit')}</span></div>
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

    // Portfolio
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

    // Stocks
    document.getElementById('stockRecommendations').innerHTML = stocks.map(s => `
        <div class="stock-item" onclick="toggleStockSubscribe('${s.name.replace(/'/g, "\\'")}', this)">
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

    // Update subscription section based on language
    updateSubscriptionUI();
}

// ===== Subscription UI =====
function updateSubscriptionUI() {
    const isKo = isKorean();
    const kakaoMethod = document.getElementById('kakaoMethodWrap');
    const kakaoInput = document.getElementById('kakaoInput');
    const kakaoShare = document.getElementById('kakaoShareBtn');
    const kakaoShareTop = document.getElementById('kakaoShareBtnTop');

    if (kakaoMethod) kakaoMethod.classList.toggle('hidden', !isKo);
    if (kakaoInput) kakaoInput.classList.toggle('hidden', !isKo);
    if (kakaoShare) kakaoShare.classList.toggle('hidden', !isKo);
    if (kakaoShareTop) kakaoShareTop.classList.toggle('hidden', !isKo);

    // Set email checked for non-Korean
    const emailCheck = document.getElementById('methodEmail');
    if (emailCheck && !isKo) {
        emailCheck.checked = true;
        const emailInput = document.getElementById('emailInput');
        if (emailInput) emailInput.classList.remove('hidden');
    }
}

// ===== Stock Subscription =====
function toggleStockSubscribe(name) {
    const idx = AppState.selectedStocks.indexOf(name);
    if (idx > -1) AppState.selectedStocks.splice(idx, 1);
    else AppState.selectedStocks.push(name);
    renderSubscribeStocks();
    showToast(name + (idx > -1 ? t('unsubscribe_toast') : t('subscribe_toast')));
}

function renderSubscribeStocks() {
    document.getElementById('subscribeStockList').innerHTML = AppState.selectedStocks.map(name => `
        <span class="subscribe-stock-tag selected" onclick="removeSubscribeStock('${name.replace(/'/g, "\\'")}')">
            ${name.split('(')[0].trim()} <span class="remove">✕</span>
        </span>
    `).join('');
}

function removeSubscribeStock(name) {
    AppState.selectedStocks = AppState.selectedStocks.filter(n => n !== name);
    renderSubscribeStocks();
    showToast(name + t('unsubscribe_toast'));
}

// ===== Events =====
document.addEventListener('DOMContentLoaded', () => {
    // Initialize language
    setLang(getLang());
    showStep('splash');

    // Pricing launch counter (if present on this page)
    setLaunchRemaining(getLaunchRemaining());

    // Restore result step if user is coming back from payments
    if (window.location.hash === '#result') {
        try {
            const raw = localStorage.getItem('moneyfit_last_result');
            if (raw) {
                const saved = JSON.parse(raw);
                if (saved?.answers) AppState.answers = saved.answers;
                if (saved?.investorType) {
                    AppState.analysis.investorType = saved.investorType;
                    AppState.analysis.totalScore = saved.totalScore || 0;
                    AppState.analysis.portfolio = getPortfolios(saved.investorType);
                    AppState.analysis.mbti = calcMbtiAxes(AppState.answers);
                    renderResult(saved.investorType, AppState.analysis.totalScore);
                    showStep('result');
                }
            }
        } catch (_) {}
    }

    // Share entry: /?result={type} shows result view without running test
    try {
        const url = new URL(window.location.href);
        const type = url.searchParams.get('result');
        if (type && INVESTOR_TYPE_DATA[type]) {
            // Create neutral answers so the UI renders cleanly
            AppState.answers = {};
            for (const q of QUESTIONS) {
                AppState.answers[q.key] = { value: 'shared', score: 5 };
            }
            AppState.analysis.investorType = type;
            AppState.analysis.totalScore = 50;
            AppState.analysis.portfolio = getPortfolios(type);
            AppState.analysis.mbti = calcMbtiAxes(AppState.answers);
            renderResult(type, 50);
            showStep('result');
        }
    } catch (_) {}

    setTimeout(() => {
        const kc = document.getElementById('methodKakao');
        const ec = document.getElementById('methodEmail');
        if (kc) kc.addEventListener('change', () => {
            const ki = document.getElementById('kakaoInput');
            if (ki) ki.classList.toggle('hidden', !kc.checked);
        });
        if (ec) ec.addEventListener('change', () => {
            const ei = document.getElementById('emailInput');
            if (ei) ei.classList.toggle('hidden', !ec.checked);
        });
    }, 100);
});

// Called by setLang() in i18n.js to re-render current view
function renderCurrentView() {
    if (AppState.currentStep === 'question') {
        renderQuestion();
    } else if (AppState.currentStep === 'result' && AppState.analysis.investorType) {
        renderResult(AppState.analysis.investorType, AppState.analysis.totalScore);
    }
    // Update subscription UI
    updateSubscriptionUI();
}

function selectFrequency(freq, el) {
    document.querySelectorAll('.freq-btn').forEach(b => b.classList.remove('active'));
    el.classList.add('active');
}

function subscribe() {
    if (AppState.selectedStocks.length === 0) { showToast(t('subscribe_select_stock')); return; }
    const kk = document.getElementById('methodKakao');
    const em = document.getElementById('methodEmail');
    const kakaoChecked = kk && kk.checked;
    const emailChecked = em && em.checked;
    if (!kakaoChecked && !emailChecked) { showToast(t('subscribe_select_method')); return; }
    if (kakaoChecked && !document.getElementById('phone').value.trim()) { showToast(t('subscribe_enter_phone') || t('subscribe_enter_email')); return; }
    if (emailChecked && !document.getElementById('email').value.trim()) { showToast(t('subscribe_enter_email')); return; }
    showToast(AppState.selectedStocks.length + t('subscribe_success'));
}

// ===== AI Report =====
async function generateReport() {
    const btn = document.getElementById('btnReport');
    const loading = document.getElementById('reportLoading');
    const content = document.getElementById('reportContent');
    const error = document.getElementById('reportError');

    const savedEmail = (localStorage.getItem('moneyfit_email') || '').trim();
    const email = await ensureEmail({
        title: '보고서를 보내드릴 이메일을 입력하세요',
        placeholder: '이메일 주소',
        defaultValue: savedEmail,
        cta: '보고서 받기',
        storageKey: 'moneyfit_email',
    });
    if (!email) return;

    btn.classList.add('hidden');
    error.classList.add('hidden');
    content.classList.add('hidden');
    loading.classList.remove('hidden');

    try {
        const type = AppState.analysis.investorType;
        const info = t('investor_types.' + type);
        const res = await fetch('/api/report', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                lang: getLang(),
                age: AppState.answers.age?.value,
                amount: AppState.answers.amount?.value,
                goal: AppState.answers.goal?.value,
                investorType: info.name,
                portfolio: getPortfolios(type),
                stocks: getStockRecommendations(type),
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
        showToast(t('report_success_toast'));
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

// ===== Share =====
function getShareText() {
    const type = AppState.analysis.investorType;
    if (!type) return '';
    const data = INVESTOR_TYPE_DATA[type];
    const info = t('investor_types.' + type);
    const mbtiCode = AppState.analysis.mbti?.code || data.mbtiCode;
    return `${data.mbtiEmoji} ${t('mbti_share_prefix')} [${mbtiCode}] ${info.name}!\n${t('mbti_share_suffix')}\n`;
}

function getShareUrl() {
    try {
        const type = AppState.analysis.investorType;
        const u = new URL(window.location.origin + '/');
        if (type) u.searchParams.set('result', type);
        return u.toString();
    } catch (_) {
        return window.location.origin + '/';
    }
}

function shareTwitter() {
    const text = encodeURIComponent(getShareText());
    const url = encodeURIComponent(getShareUrl());
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
}

function initKakaoIfNeeded() {
    try {
        if (!window.Kakao) return false;
        const key = window.MONEYFIT_KAKAO_JAVASCRIPT_KEY || '';
        if (!key) return false;
        if (!window.Kakao.isInitialized || !window.Kakao.init) return false;
        if (!window.Kakao.isInitialized()) window.Kakao.init(key);
        return window.Kakao.isInitialized();
    } catch (e) {
        console.error(e);
        return false;
    }
}

function shareKakao() {
    const ok = initKakaoIfNeeded();
    if (!ok) {
        showToast('카카오 공유 설정이 필요합니다. (링크 복사로 대체)');
        copyLink();
        return;
    }

    const type = AppState.analysis.investorType;
    const data = type ? INVESTOR_TYPE_DATA[type] : null;
    const info = type ? t('investor_types.' + type) : null;
    const mbtiCode = AppState.analysis.mbti?.code || data?.mbtiCode || 'MF';

    const title = info ? `나는 ${data?.mbtiEmoji || '💰'} ${mbtiCode} — ${info.name}!` : 'MoneyFit 투자 성향 테스트';
    const description = info ? info.description : t('meta_description');
    const url = getShareUrl();
    const imageUrl = window.location.origin + '/favicon.svg';

    // Prefer Kakao.Share (new), fallback to Kakao.Link (legacy)
    try {
        if (window.Kakao.Share?.sendDefault) {
            window.Kakao.Share.sendDefault({
                objectType: 'feed',
                content: {
                    title,
                    description,
                    imageUrl,
                    link: { mobileWebUrl: url, webUrl: url },
                },
                buttons: [
                    { title: '내 결과 보기', link: { mobileWebUrl: url, webUrl: url } },
                    { title: '나도 테스트', link: { mobileWebUrl: url, webUrl: url } },
                ],
            });
            return;
        }
        if (window.Kakao.Link?.sendDefault) {
            window.Kakao.Link.sendDefault({
                objectType: 'feed',
                content: {
                    title,
                    description,
                    imageUrl,
                    link: { mobileWebUrl: url, webUrl: url },
                },
                buttons: [
                    { title: '내 결과 보기', link: { mobileWebUrl: url, webUrl: url } },
                    { title: '나도 테스트', link: { mobileWebUrl: url, webUrl: url } },
                ],
            });
            return;
        }
        showToast('카카오 공유를 지원하지 않는 환경입니다.');
        copyLink();
    } catch (e) {
        console.error(e);
        showToast('카카오 공유에 실패했습니다.');
        copyLink();
    }
}

async function shareInstagramStory() {
    // Instagram web does not provide a direct "story share" API.
    // Best effort: use Web Share with an image file, fallback to download.
    try {
        const file = await buildShareCardImageFile();
        const text = getShareText() + '\n' + 'moneyfit.vip';
        if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
            await navigator.share({ files: [file], text });
            return;
        }
        downloadFile(file);
        showToast('이미지를 저장한 뒤 인스타 스토리에 올려주세요.');
    } catch (e) {
        console.error(e);
        showToast('인스타 공유 준비에 실패했습니다.');
    }
}

function downloadFile(file) {
    const url = URL.createObjectURL(file);
    const a = document.createElement('a');
    a.href = url;
    a.download = file.name || 'moneyfit.png';
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 2000);
}

async function buildShareCardImageFile() {
    const type = AppState.analysis.investorType;
    const data = type ? INVESTOR_TYPE_DATA[type] : null;
    const info = type ? t('investor_types.' + type) : null;
    const mbtiCode = AppState.analysis.mbti?.code || data?.mbtiCode || 'MF';

    const canvas = document.createElement('canvas');
    canvas.width = 1080;
    canvas.height = 1080;
    const ctx = canvas.getContext('2d');

    // Background
    const grad = ctx.createLinearGradient(0, 0, 1080, 1080);
    grad.addColorStop(0, '#EA580C');
    grad.addColorStop(1, '#2D3436');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 1080, 1080);

    // Card
    const pad = 88;
    const cardW = 1080 - pad * 2;
    const cardH = 1080 - pad * 2;
    const cardX = pad;
    const cardY = pad;
    ctx.fillStyle = 'rgba(255,255,255,0.94)';
    roundRect(ctx, cardX, cardY, cardW, cardH, 48);
    ctx.fill();

    // Title
    ctx.fillStyle = '#2D3436';
    ctx.font = '900 54px Pretendard, sans-serif';
    ctx.fillText('MoneyFit', cardX + 64, cardY + 120);

    // Main
    ctx.font = '900 92px Pretendard, sans-serif';
    ctx.fillText(mbtiCode, cardX + 64, cardY + 260);

    const emoji = data?.mbtiEmoji || '💰';
    ctx.font = '900 120px Pretendard, sans-serif';
    ctx.fillText(emoji, cardX + 64, cardY + 410);

    ctx.font = '800 44px Pretendard, sans-serif';
    ctx.fillStyle = '#4E5968';
    const name = info?.name || '투자자';
    ctx.fillText(name, cardX + 64, cardY + 510);

    // Footer URL (requirement)
    ctx.fillStyle = '#2D3436';
    ctx.font = '900 36px Pretendard, sans-serif';
    ctx.fillText('moneyfit.vip', cardX + 64, cardY + cardH - 80);

    const blob = await new Promise((resolve) => canvas.toBlob(resolve, 'image/png'));
    return new File([blob], 'moneyfit-share.png', { type: 'image/png' });
}

function roundRect(ctx, x, y, w, h, r) {
    const radius = Math.min(r, w / 2, h / 2);
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.arcTo(x + w, y, x + w, y + h, radius);
    ctx.arcTo(x + w, y + h, x, y + h, radius);
    ctx.arcTo(x, y + h, x, y, radius);
    ctx.arcTo(x, y, x + w, y, radius);
    ctx.closePath();
}

function copyLink() {
    const text = getShareText() + getShareUrl();
    if (navigator.clipboard) navigator.clipboard.writeText(text).then(() => showToast(t('link_copied')));
    else showToast(t('link_copy_fail'));
}

function shareResult() {
    const text = getShareText();
    if (navigator.share) {
        navigator.share({ title: 'MoneyFit', text: text, url: window.location.href });
    } else {
        copyLink();
    }
}

// ===== Premium =====
function buyDeepReport() {
    openPrereg('Deep AI 리포트');
}

function buyRebalancing() {
    openPrereg('포트폴리오 리밸런싱');
}

async function openPrereg(productName) {
    const email = await ensureEmail({
        title: `${productName} 사전등록 이메일을 입력하세요`,
        placeholder: '이메일 주소',
        defaultValue: (localStorage.getItem('moneyfit_email') || '').trim(),
        cta: '사전등록',
        storageKey: 'moneyfit_email',
    });
    if (!email) return;
    showToast('사전등록이 완료되었습니다.');
}

// ===== Restart =====
function restartAnalysis() {
    AppState.currentStep = 'splash';
    AppState.stepHistory = [];
    AppState.currentQuestion = 0;
    AppState.answers = {};
    AppState.analysis = { investorType: null, portfolio: null, totalScore: 0 };
    AppState.selectedStocks = [];
    showStep('splash');
}

// ===== Toast =====
function showToast(msg) {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = msg;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2500);
}

// ===== Simple Email Modal (Report / Prereg) =====
function ensureEmail({ title, placeholder, defaultValue = '', cta = '확인', storageKey = 'moneyfit_email' }) {
    return new Promise((resolve) => {
        const existing = document.getElementById('mfModalOverlay');
        if (existing) existing.remove();

        const overlay = document.createElement('div');
        overlay.id = 'mfModalOverlay';
        overlay.style.cssText = `
            position:fixed; inset:0; z-index:2000;
            background:rgba(0,0,0,0.45);
            display:flex; align-items:center; justify-content:center;
            padding:18px;
        `;

        const modal = document.createElement('div');
        modal.style.cssText = `
            width:min(520px, 100%);
            background:#fff;
            border-radius:16px;
            box-shadow:0 20px 60px rgba(0,0,0,0.22);
            border:1px solid rgba(0,0,0,0.06);
            padding:18px;
        `;

        modal.innerHTML = `
            <div style="font-weight:900;font-size:16px;color:var(--text-1);margin-bottom:10px;">${title}</div>
            <input id="mfEmailInput" type="email" autocomplete="email" placeholder="${placeholder}"
                   style="width:100%;padding:14px;border:2px solid var(--border);border-radius:12px;font-size:15px;" />
            <div style="display:flex;gap:10px;margin-top:12px;">
              <button id="mfCancelBtn" style="flex:1;padding:12px 14px;border-radius:12px;background:var(--bg-3);color:var(--text-1);font-weight:800;">취소</button>
              <button id="mfOkBtn" style="flex:1;padding:12px 14px;border-radius:12px;background:linear-gradient(135deg,var(--primary),var(--primary-dark));color:#fff;font-weight:900;">${cta}</button>
            </div>
            <div style="margin-top:10px;font-size:12px;color:var(--text-3);font-weight:600;line-height:1.4;">
              스팸은 보내지 않습니다. 필요할 때만 안내드립니다.
            </div>
        `;

        overlay.appendChild(modal);
        document.body.appendChild(overlay);

        const input = modal.querySelector('#mfEmailInput');
        input.value = defaultValue;
        setTimeout(() => input.focus(), 0);

        function close(val) {
            overlay.remove();
            resolve(val);
        }

        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) close(null);
        });

        modal.querySelector('#mfCancelBtn').addEventListener('click', () => close(null));
        modal.querySelector('#mfOkBtn').addEventListener('click', () => {
            const v = input.value.trim();
            if (!v || !v.includes('@')) {
                input.style.borderColor = 'var(--danger)';
                input.focus();
                return;
            }
            try { localStorage.setItem(storageKey, v); } catch (_) {}
            close(v);
        });

        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') modal.querySelector('#mfOkBtn').click();
            if (e.key === 'Escape') close(null);
        });
    });
}

// ===== Pricing (launch) =====
const LAUNCH_SPOTS_KEY = 'moneyfit_launch_spots_remaining';
const LAUNCH_SPOTS_DEFAULT = 500;

function getLaunchRemaining() {
    const raw = localStorage.getItem(LAUNCH_SPOTS_KEY);
    const n = raw == null ? LAUNCH_SPOTS_DEFAULT : Number(raw);
    if (!Number.isFinite(n)) return LAUNCH_SPOTS_DEFAULT;
    return Math.max(0, Math.min(LAUNCH_SPOTS_DEFAULT, Math.floor(n)));
}

function setLaunchRemaining(n) {
    const next = Math.max(0, Math.min(LAUNCH_SPOTS_DEFAULT, Math.floor(n)));
    localStorage.setItem(LAUNCH_SPOTS_KEY, String(next));
    const el = document.getElementById('launchRemaining');
    if (el) el.textContent = String(next);
}

function maybeConsumeLaunchSpot() {
    const remaining = getLaunchRemaining();
    if (remaining > 0) setLaunchRemaining(remaining - 1);
}

let selectedProPlan = 'monthly';

function selectProPlan(plan, el) {
    selectedProPlan = plan;
    document.querySelectorAll('.pricing-toggle-btn').forEach(b => b.classList.remove('active'));
    if (el) el.classList.add('active');
    const priceEl = document.querySelector('.pricing-pro .premium-price [data-i18n="pricing_pro_price"]');
    const frameEl = document.querySelector('.pricing-pro .pricing-subprice');
    if (priceEl) {
        priceEl.textContent = plan === 'yearly' ? t('pricing_pro_yearly_price') : t('pricing_pro_monthly_price');
    }
    if (frameEl) {
        frameEl.textContent = plan === 'yearly' ? t('pricing_pro_yearly_frame') : t('pricing_pro_frame');
    }
}

function startProTrial() {
    maybeConsumeLaunchSpot();
    const msg = selectedProPlan === 'yearly' ? t('pricing_toast_pro_yearly') : t('pricing_toast_pro_trial');
    showToast(msg);
}

function applyPremium() {
    maybeConsumeLaunchSpot();
    openPrereg('프리미엄');
}
