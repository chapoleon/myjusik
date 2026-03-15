/**
 * MoneyFit - 메인 앱 로직
 * 온보딩 플로우 & 투자 성향 분석
 */

// ===== 전역 상태 관리 =====
const AppState = {
    currentStep: 'splash',
    stepHistory: [],
    userData: {
        age: null,
        amount: null,
        goal: null,
        name: null,
        email: null
    },
    analysis: {
        investorType: null,
        portfolio: null,
        riskLevel: null,
        investmentHorizon: null,
        cashflowPreference: null
    }
};

// ===== 투자 유형 정의 =====
const INVESTOR_TYPES = {
    'aggressive_growth': {
        name: '공격적 성장 추구형',
        emoji: '🚀',
        description: '위험을 감수하고 높은 수익을 추구하는 타입입니다. 변동성이 큰 성장주에 투자하며, 장기적 관점에서 자산을 증식시킵니다.',
        riskLevel: 85,
        timeHorizon: 90,
        cashflow: 30
    },
    'balanced_growth': {
        name: '균형 성장형',
        emoji: '⚖️',
        description: '성장과 안정의 균형을 추구하는 타입입니다. 위험을 관리하면서도 적절한 수익을 목표로 합니다.',
        riskLevel: 65,
        timeHorizon: 70,
        cashflow: 50
    },
    'conservative_income': {
        name: '안정 배당 추구형',
        emoji: '🛡️',
        description: '안정적인 현금흐름과 원금 보존을 중시하는 타입입니다. 배당주와 채권을 선호하며, 변동성을 최소화합니다.',
        riskLevel: 35,
        timeHorizon: 50,
        cashflow: 85
    },
    'moderate_balanced': {
        name: '온건 균형형',
        emoji: '🌱',
        description: '안정성을 기반으로 적절한 성장을 추구하는 타입입니다. 보수적이면서도 기회를 놓치지 않습니다.',
        riskLevel: 50,
        timeHorizon: 60,
        cashflow: 60
    }
};

// ===== 포트폴리오 템플릿 =====
const PORTFOLIO_TEMPLATES = {
    'aggressive_growth': [
        { name: 'QQQ (나스닥100 ETF)', percentage: 40, color: '#667eea', description: '기술주 중심 성장 ETF' },
        { name: 'TSLA (테슬라)', percentage: 20, color: '#764ba2', description: '대표적 성장주' },
        { name: 'S&P500 ETF', percentage: 20, color: '#f093fb', description: '미국 대표 지수' },
        { name: '신흥시장 ETF', percentage: 15, color: '#4facfe', description: '고위험 고수익' },
        { name: '비트코인 ETF', percentage: 5, color: '#fa709a', description: '대안 자산' }
    ],
    'balanced_growth': [
        { name: 'S&P500 ETF', percentage: 40, color: '#667eea', description: '미국 대표 지수' },
        { name: '나스닥100 ETF', percentage: 25, color: '#764ba2', description: '기술주 중심' },
        { name: '배당성장 ETF', percentage: 20, color: '#f093fb', description: '안정적 배당' },
        { name: '리츠 (REITs)', percentage: 10, color: '#4facfe', description: '부동산 간접투자' },
        { name: '채권 ETF', percentage: 5, color: '#43e97b', description: '안정성 확보' }
    ],
    'conservative_income': [
        { name: '고배당 ETF', percentage: 35, color: '#667eea', description: '안정적 배당 수익' },
        { name: '리츠 (REITs)', percentage: 25, color: '#764ba2', description: '부동산 배당' },
        { name: '우선주 ETF', percentage: 20, color: '#f093fb', description: '높은 배당률' },
        { name: '채권 ETF', percentage: 15, color: '#4facfe', description: '원금 보존' },
        { name: 'S&P500 ETF', percentage: 5, color: '#43e97b', description: '최소 성장 참여' }
    ],
    'moderate_balanced': [
        { name: 'S&P500 ETF', percentage: 35, color: '#667eea', description: '미국 대표 지수' },
        { name: '배당성장 ETF', percentage: 25, color: '#764ba2', description: '배당+성장' },
        { name: '나스닥100 ETF', percentage: 15, color: '#f093fb', description: '기술주 참여' },
        { name: '리츠 (REITs)', percentage: 15, color: '#4facfe', description: '부동산 간접' },
        { name: '채권 ETF', percentage: 10, color: '#43e97b', description: '안정성' }
    ]
};

// ===== 예상 수익률 매핑 =====
const EXPECTED_RETURNS = {
    'aggressive_growth': { annual: 12.4, tenYear: 3.21 },
    'balanced_growth': { annual: 9.8, tenYear: 2.55 },
    'conservative_income': { annual: 6.5, tenYear: 1.89 },
    'moderate_balanced': { annual: 8.2, tenYear: 2.19 }
};

// ===== 화면 전환 함수 =====
function showStep(stepId) {
    // 현재 step 비활성화
    document.querySelectorAll('.step').forEach(step => {
        step.classList.remove('active');
    });

    // 새 step 활성화
    const newStep = document.getElementById(stepId);
    if (newStep) {
        newStep.classList.add('active');
        AppState.stepHistory.push(AppState.currentStep);
        AppState.currentStep = stepId;

        // 스크롤 최상단으로
        window.scrollTo(0, 0);
    }
}

function goBack() {
    if (AppState.stepHistory.length > 0) {
        const previousStep = AppState.stepHistory.pop();
        showStep(previousStep);
    }
}

// ===== 온보딩 시작 =====
function startAnalysis() {
    showStep('question1');
}

// ===== 옵션 선택 =====
function selectOption(category, value, element) {
    // 선택 상태 업데이트
    const siblings = element.parentElement.querySelectorAll('.option-card');
    siblings.forEach(card => card.classList.remove('selected'));
    element.classList.add('selected');

    // 데이터 저장
    AppState.userData[category] = value;

    // 자동으로 다음 단계로 (0.5초 후)
    setTimeout(() => {
        if (category === 'age') {
            showStep('question2');
        } else if (category === 'amount') {
            showStep('question3');
        } else if (category === 'goal') {
            analyzeUser();
        }
    }, 500);
}

// ===== 투자 성향 분석 알고리즘 =====
function analyzeUser() {
    // 분석 중 화면 표시
    showStep('analyzing');

    // 실제로는 AI 분석을 하겠지만, 여기서는 규칙 기반으로 구현
    setTimeout(() => {
        const { age, amount, goal } = AppState.userData;

        // 투자 유형 결정 로직
        let investorType;

        if (age === '20s') {
            if (goal === 'growth') {
                investorType = 'aggressive_growth';
            } else if (goal === 'income') {
                investorType = 'balanced_growth';
            } else {
                investorType = 'moderate_balanced';
            }
        } else if (age === '30s') {
            if (goal === 'growth') {
                investorType = 'aggressive_growth';
            } else if (goal === 'income') {
                investorType = 'balanced_growth';
            } else {
                investorType = 'balanced_growth';
            }
        } else if (age === '40s') {
            if (goal === 'growth') {
                investorType = 'balanced_growth';
            } else if (goal === 'income') {
                investorType = 'conservative_income';
            } else {
                investorType = 'moderate_balanced';
            }
        } else { // 50s+
            if (goal === 'income') {
                investorType = 'conservative_income';
            } else {
                investorType = 'moderate_balanced';
            }
        }

        // 금액에 따른 조정
        if (amount === 'low' && investorType === 'aggressive_growth') {
            // 소액이면 조금 더 보수적으로
            investorType = 'balanced_growth';
        }

        // 분석 결과 저장
        AppState.analysis.investorType = investorType;
        AppState.analysis.portfolio = PORTFOLIO_TEMPLATES[investorType];

        const typeInfo = INVESTOR_TYPES[investorType];
        AppState.analysis.riskLevel = typeInfo.riskLevel;
        AppState.analysis.investmentHorizon = typeInfo.timeHorizon;
        AppState.analysis.cashflowPreference = typeInfo.cashflow;

        // 결과 화면 표시
        displayPreviewResults();
        showStep('preview');
    }, 2500);
}

// ===== 미리보기 결과 표시 =====
function displayPreviewResults() {
    const { investorType, portfolio } = AppState.analysis;
    const typeInfo = INVESTOR_TYPES[investorType];
    const returns = EXPECTED_RETURNS[investorType];

    // 투자 유형 표시
    const ageMap = { '20s': '20대', '30s': '30대', '40s': '40대', '50s': '50대' };
    const userTypeText = `${typeInfo.name} ${ageMap[AppState.userData.age] || ''}`;
    document.getElementById('userType').textContent = userTypeText;

    // 포트폴리오 차트 생성 (간단한 바 형태)
    const chartContainer = document.getElementById('portfolioChart');
    chartContainer.innerHTML = portfolio.map(item => `
        <div style="margin-bottom: 8px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                <span style="font-size: 14px; font-weight: 600;">${item.name}</span>
                <span style="font-size: 16px; font-weight: 700; color: ${item.color};">${item.percentage}%</span>
            </div>
            <div style="width: 100%; height: 12px; background: #F1F3F5; border-radius: 6px; overflow: hidden;">
                <div style="width: ${item.percentage}%; height: 100%; background: ${item.color}; border-radius: 6px; transition: width 0.6s ease;"></div>
            </div>
        </div>
    `).join('');

    // 포트폴리오 항목 표시
    const itemsContainer = document.getElementById('portfolioItems');
    itemsContainer.innerHTML = portfolio.slice(0, 3).map(item => `
        <div class="portfolio-item">
            <div class="portfolio-color" style="background: ${item.color};"></div>
            <div class="portfolio-name">${item.name}</div>
            <div class="portfolio-percentage">${item.percentage}%</div>
        </div>
    `).join('');

    // 예상 수익률 표시
    document.getElementById('expectedReturn').textContent = `+${returns.annual}%`;

    // 예상 자산 계산 (1,000만원 투자 기준)
    const initialAmount = 10000000; // 1,000만원
    const finalAmount = initialAmount * returns.tenYear;
    document.getElementById('expectedAsset').textContent =
        `${Math.round(finalAmount / 10000)}만원`;
}

// ===== 가입 화면 표시 =====
function showSignup() {
    showStep('signup');
}

function skipSignup() {
    // 가입을 건너뛰고 제한된 결과 표시
    alert('가입하지 않으면 전체 분석 결과를 볼 수 없습니다. 나중에 다시 방문해주세요!');
    showStep('splash');
}

// ===== 소셜 로그인 =====
function socialLogin(provider) {
    // 실제로는 OAuth 연동이 필요하지만, 데모에서는 시뮬레이션
    alert(`${provider} 로그인 기능은 실제 배포 시 연동됩니다.`);

    // 가입 완료로 처리 (데모)
    AppState.userData.name = '테스트 사용자';
    AppState.userData.email = 'test@moneyfit.com';

    displayFullResults();
    showStep('result');
}

// ===== 이메일 가입 =====
function emailSignup(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value || '사용자';

    AppState.userData.email = email;
    AppState.userData.name = name;

    // 전체 결과 표시
    displayFullResults();
    showStep('result');

    return false;
}

// ===== 전체 결과 표시 (가입 후) =====
function displayFullResults() {
    const { investorType, portfolio } = AppState.analysis;
    const typeInfo = INVESTOR_TYPES[investorType];
    const returns = EXPECTED_RETURNS[investorType];
    const userName = AppState.userData.name;

    // 사용자 이름 표시
    document.getElementById('resultUserName').textContent = userName;

    // 투자 유형 배지
    document.getElementById('investorTypeBadge').textContent = typeInfo.name;

    // 투자 유형 설명
    document.getElementById('typeDescription').textContent = typeInfo.description;

    // 포트폴리오 상세 항목 생성
    const detailedList = document.getElementById('detailedPortfolioList');
    detailedList.innerHTML = portfolio.map(item => `
        <div class="detailed-portfolio-item">
            <div class="portfolio-item-header">
                <div class="portfolio-item-name">
                    <div class="portfolio-color" style="background: ${item.color}; width: 12px; height: 12px; border-radius: 50%;"></div>
                    ${item.name}
                </div>
                <div class="portfolio-item-allocation">${item.percentage}%</div>
            </div>
            <div class="portfolio-item-desc">${item.description}</div>
            <div class="portfolio-bar">
                <div class="portfolio-bar-fill" style="width: ${item.percentage}%; background: ${item.color};"></div>
            </div>
        </div>
    `).join('');

    // Chart.js로 파이 차트 생성 (portfolio.js에서 처리)
    createPortfolioPieChart(portfolio);

    // 초대 코드 생성 (랜덤)
    const referralCode = 'MF' + Math.random().toString(36).substr(2, 7).toUpperCase();
    document.getElementById('referralCode').textContent = referralCode;
}

// ===== 약관 & 정책 모달 =====
function showTerms() {
    alert('서비스 이용약관 내용입니다. (실제로는 모달 창으로 표시)');
}

function showPrivacy() {
    alert('개인정보처리방침 내용입니다. (실제로는 모달 창으로 표시)');
}

function showLogin() {
    alert('로그인 기능은 실제 배포 시 구현됩니다.');
}

// ===== 다시 시작 =====
function restartAnalysis() {
    // 상태 초기화
    AppState.currentStep = 'splash';
    AppState.stepHistory = [];
    AppState.userData = {
        age: null,
        amount: null,
        goal: null,
        name: null,
        email: null
    };
    AppState.analysis = {
        investorType: null,
        portfolio: null,
        riskLevel: null,
        investmentHorizon: null,
        cashflowPreference: null
    };

    // 선택 상태 초기화
    document.querySelectorAll('.option-card').forEach(card => {
        card.classList.remove('selected');
    });

    showStep('splash');
}

// ===== 구독 플랜 선택 =====
function selectPlan(plan) {
    alert(`${plan.toUpperCase()} 플랜이 선택되었습니다. 7일 무료 체험이 시작됩니다!\n실제 결제는 배포 후 토스페이먼츠로 연동됩니다.`);
}

// ===== 소셜 공유 =====
function shareKakao() {
    // 실제로는 Kakao SDK 연동 필요
    alert('카카오톡 공유 기능은 실제 배포 시 연동됩니다.\n\n공유 내용:\n"나는 ' + INVESTOR_TYPES[AppState.analysis.investorType].name + '! 당신의 투자 유형은?"');
}

function shareTwitter() {
    const text = encodeURIComponent(`나는 ${INVESTOR_TYPES[AppState.analysis.investorType].name}! 당신의 투자 유형은? #MoneyFit #투자성향분석`);
    const url = encodeURIComponent(window.location.href);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
}

function shareFacebook() {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
}

function copyLink() {
    const url = window.location.href;

    // 클립보드 복사
    if (navigator.clipboard) {
        navigator.clipboard.writeText(url).then(() => {
            alert('링크가 복사되었습니다! 친구에게 공유해보세요.');
        });
    } else {
        // fallback
        const textarea = document.createElement('textarea');
        textarea.value = url;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        alert('링크가 복사되었습니다!');
    }
}

function copyReferralCode() {
    const code = document.getElementById('referralCode').textContent;

    if (navigator.clipboard) {
        navigator.clipboard.writeText(code).then(() => {
            alert('초대 코드가 복사되었습니다!');
        });
    } else {
        alert(`초대 코드: ${code}`);
    }
}

// ===== 다음 단계 액션 =====
function openBrokerage() {
    alert('추천 증권사 계좌 개설 페이지로 이동합니다.\n(실제로는 제휴 링크 연동)');
}

function startSmallInvestment() {
    alert('1,000원 챌린지를 시작합니다!\n소액으로 투자 경험을 쌓아보세요.');
}

function subscribeBriefing() {
    alert('모닝 브리핑 구독이 시작됩니다.\n매일 아침 7시에 맞춤 투자 정보를 받아보세요!');
}

// ===== 페이지 로드 시 초기화 =====
document.addEventListener('DOMContentLoaded', () => {
    console.log('MoneyFit 앱이 로드되었습니다.');

    // 스플래시 화면 표시
    showStep('splash');
});
