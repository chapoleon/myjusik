/**
 * MoneyFit - Internationalization (i18n)
 * Supported: en, ko, zh, ja, hi
 */

const TRANSLATIONS = {
  en: {
    meta_description: "Find the right investment for you in 10 questions",
    page_title: "MoneyFit - Find Your Investment Fit",
    tagline: "What's your Investment MBTI?",
    headline: "3-Minute Investment Test<br>Find your investing personality!",
    stat_time: "3 min",
    stat_time_label: "Time needed",
    stat_questions: "10 Qs",
    stat_questions_label: "Expert analysis",
    stat_custom: "Custom",
    stat_custom_label: "Stock picks",
    badge_free: "Free",
    badge_no_signup: "No signup needed",
    btn_start: "Get Started",
    btn_back: "Back",
    result_celebration: "Your Investor Type",
    char_risk: "Risk Tolerance",
    char_horizon: "Time Horizon",
    char_cashflow: "Cash Flow",
    score_title: "Profile Analysis Detail",
    score_total_label: "Overall Score",
    score_unit: "pts",
    score_labels: {
      age: "Age", amount: "Investment", goal: "Goal", experience: "Experience",
      income_stability: "Income", horizon: "Horizon", loss_reaction: "Loss Response",
      preference: "Preference", knowledge: "Knowledge", savings: "Savings",
    },
    portfolio_title: "Recommended Portfolio",
    stock_title: "Personalized Stock Picks",
    report_title: "AI Investment Consulting Report",
    report_desc: 'AI analyzes your investment profile and<br>creates a <strong>personalized investment strategy report</strong>.',
    btn_report: "Get Free Report",
    report_loading: "AI is writing your report... (~10 sec)",
    report_error: "Report generation failed. Please try again.",
    btn_retry: "Try Again",
    report_success_toast: "Report generated!",
    subscribe_title: "Subscribe to Stock News",
    subscribe_desc: 'Get news about recommended stocks via<br><strong>Email</strong> notifications!',
    method_email: "Email",
    subscribe_frequency_label: "Frequency",
    freq_daily: "Daily",
    freq_weekly: "Weekly",
    freq_realtime: "Real-time",
    btn_subscribe: "Start Free Subscription",
    subscribe_note: "Cancel anytime / No spam",
    email_placeholder: "Email address",
    subscribe_select_stock: "Please select at least 1 stock to subscribe",
    subscribe_select_method: "Please select email",
    subscribe_enter_email: "Please enter your email",
    subscribe_success: " stock news subscribed!",
    share_title: "Share with Friends",
    share_link: "Copy Link",
    link_copied: "Link copied!",
    link_copy_fail: "Copy failed",
    btn_restart: "Retake Analysis",
    nav_analysis: "Investment Profile",
    nav_guide: "Investment Guide",
    nav_etf: "ETF 101",
    nav_dividend: "Dividend Investing",
    nav_about: "About",
    footer_desc: "Find the right investment for you.<br>10-question analysis for personalized portfolio.",
    footer_services: "Services",
    footer_beginner: "Beginner's Guide",
    footer_etf: "ETF Masterclass",
    footer_dividend: "Dividend Strategy",
    footer_insights: "Investment Insights",
    footer_risk: "Risk Management",
    footer_rebalancing: "Portfolio Rebalancing",
    footer_psychology: "Investment Psychology",
    footer_info: "Information",
    footer_about: "About",
    footer_privacy: "Privacy Policy",
    footer_terms: "Terms of Service",
    footer_contact: "Contact",
    footer_disclaimer: "<strong>Investment Disclaimer:</strong> This service is for informational purposes only, not investment advice. All investment decisions are your own responsibility. Past performance does not guarantee future results. Financial products are not protected by deposit insurance.",
    unsubscribe_toast: " unsubscribed",
    subscribe_toast: " subscribed",
    // MBTI
    mbti_label: "My Investment MBTI",
    mbti_axis_safe: "Safe", mbti_axis_risk: "Risk",
    mbti_axis_short: "Short", mbti_axis_long: "Long",
    mbti_axis_dividend: "Income", mbti_axis_growth: "Growth",
    mbti_axis_novice: "Novice", mbti_axis_expert: "Expert",
    // Share
    mbti_share_prefix: "My investment MBTI is",
    mbti_share_suffix: "What's your investment MBTI? Find out in 3 minutes!",
    share_twitter: "Twitter / X",
    share_whatsapp: "WhatsApp",
    share_native: "Share",
    // Premium
    premium_deep_report_title: "Deep AI Report",
    premium_deep_report_desc: "30-page professional investment strategy<br>Custom portfolio + Action plan + Risk analysis",
    premium_deep_report_price: "$9.99",
    premium_deep_report_badge: "Best Seller",
    premium_rebalancing_title: "Portfolio Rebalancing",
    premium_rebalancing_desc: "1:1 AI portfolio optimization<br>Monthly rebalancing alerts + Performance tracking",
    premium_rebalancing_price: "$19.00",
    premium_rebalancing_badge: "Pro",
    premium_btn_buy: "Get Now",
    premium_coming_soon: "Coming soon! Sign up for early access.",
    premium_section_title: "Premium Services",
    premium_section_desc: "Take your investment to the next level",
    questions: [
      {
        title: "What is your age group?",
        subtitle: "Optimal strategies differ by age",
        options: [
          { text: "20s", desc: "Time is your greatest asset" },
          { text: "30s", desc: "Prime wealth-building years" },
          { text: "40s", desc: "Balancing growth and stability" },
          { text: "50+", desc: "Stable cash flow focus" },
        ]
      },
      {
        title: "How much can you invest?",
        subtitle: "Starting small is perfectly fine",
        options: [
          { text: "Under $500", desc: "Small diversified investment" },
          { text: "$500 - $5,000", desc: "Portfolio starting point" },
          { text: "$5,000 - $20,000", desc: "Serious asset allocation" },
          { text: "Over $20,000", desc: "Strategic investing" },
        ]
      },
      {
        title: "What's your investment goal?",
        subtitle: "Strategy varies by goal",
        options: [
          { text: "Grow wealth fast", desc: "Aggressive growth pursuit" },
          { text: "Buy house / Retirement", desc: "Mid-to-long term goals" },
          { text: "Monthly income", desc: "Dividends & cash flow" },
          { text: "Not sure yet", desc: "Basic strategy recommendation" },
        ]
      },
      {
        title: "Any investment experience?",
        subtitle: "We'll match strategy to your level",
        options: [
          { text: "Complete beginner", desc: "Don't even have a brokerage account" },
          { text: "Studied but no practice", desc: "No real trades yet" },
          { text: "1-2 years", desc: "Know the basics" },
          { text: "3+ years", desc: "Fairly experienced" },
        ]
      },
      {
        title: "Is your income stable?",
        subtitle: "Income stability affects risk capacity",
        options: [
          { text: "Fixed monthly salary", desc: "Employee / Government" },
          { text: "Variable but steady", desc: "Freelancer / Self-employed" },
          { text: "Irregular", desc: "Income fluctuates a lot" },
          { text: "No income", desc: "Student / Unemployed" },
        ]
      },
      {
        title: "When will you need this money?",
        subtitle: "Time horizon shapes strategy",
        options: [
          { text: "Within 1 year", desc: "Short-term parking" },
          { text: "1-3 years", desc: "Medium-term goal" },
          { text: "3-5 years", desc: "Mid-to-long term" },
          { text: "5+ years / None", desc: "Long-term hold" },
        ]
      },
      {
        title: "If your investment drops -20%?",
        subtitle: "Be honest with yourself",
        options: [
          { text: "Sell everything now", desc: "Can't handle losses" },
          { text: "Reduce some", desc: "Anxious but keep some" },
          { text: "Just wait", desc: "Expect long-term recovery" },
          { text: "Buy more", desc: "Opportunity to buy cheap!" },
        ]
      },
      {
        title: "Returns vs Safety - what matters more?",
        subtitle: "You can only pick one!",
        options: [
          { text: "Safety first", desc: "Low returns OK, protect principal" },
          { text: "Balanced", desc: "Some volatility is OK" },
          { text: "Returns first", desc: "Volatility OK for higher returns" },
          { text: "Maximize returns", desc: "Want to earn big" },
        ]
      },
      {
        title: "Do you know terms like ETF, P/E ratio?",
        subtitle: "Checking your investment knowledge",
        options: [
          { text: "Barely know anything", desc: "Not sure what stocks are" },
          { text: "Know the basics", desc: "ETF, dividends - got it" },
          { text: "Can read financials", desc: "P/E, P/B analysis capable" },
          { text: "Expert level", desc: "Technical analysis too" },
        ]
      },
      {
        title: "How much emergency fund do you have?",
        subtitle: "Investing without savings is risky",
        options: [
          { text: "Almost none", desc: "Barely enough for daily expenses" },
          { text: "1-3 months expenses", desc: "Minimum safety net" },
          { text: "3-6 months", desc: "Decent buffer" },
          { text: "6+ months", desc: "Solid safety net" },
        ]
      },
    ],
    investor_types: {
      aggressive_growth: {
        name: "Aggressive Growth Seeker", emoji: "🚀",
        description: "You're willing to take on high risk for high returns. You focus on growth and tech stocks, aiming for big long-term gains. Your strength is a strong mindset that doesn't waver with market swings.",
        riskLabel: "High", horizonLabel: "Long-term", cashflowLabel: "Low",
      },
      growth: {
        name: "Active Investor", emoji: "📈",
        description: "You actively pursue returns while maintaining some safety measures. You combine growth ETFs with quality individual stocks to consistently beat the market.",
        riskLabel: "Med-High", horizonLabel: "Mid-Long", cashflowLabel: "Medium",
      },
      balanced: {
        name: "Balanced Investor", emoji: "⚖️",
        description: "You balance growth and stability. You accept moderate risk while pursuing steady returns. You can expect reasonable performance in most market conditions.",
        riskLabel: "Medium", horizonLabel: "Medium", cashflowLabel: "Medium",
      },
      conservative: {
        name: "Stability Seeker", emoji: "🛡️",
        description: "You prioritize stable returns and principal protection. You favor dividend stocks and bonds, steadily growing your assets without major swings.",
        riskLabel: "Low", horizonLabel: "Mid-Short", cashflowLabel: "High",
      },
      very_conservative: {
        name: "Safety First", emoji: "🏦",
        description: "You strongly avoid any principal loss. You want deposit-level safety with slightly better returns. Bonds and high-dividend investments are your best fit.",
        riskLabel: "Very Low", horizonLabel: "Short", cashflowLabel: "Very High",
      },
    },
  },

  ko: {
    meta_description: "3분 투자 성향 테스트로 나에게 맞는 투자 스타일을 찾아보세요.",
    page_title: "MoneyFit - 나와 맞는 투자 찾기",
    tagline: "그래서, 뭘 사야 되는데?",
    headline: "남들 말 말고<br>나에게 맞는 투자부터",
    stat_time: "3분",
    stat_time_label: "소요 시간",
    stat_questions: "10문항",
    stat_questions_label: "전문 분석",
    stat_custom: "맞춤",
    stat_custom_label: "종목 추천",
    badge_free: "무료",
    badge_no_signup: "가입 불필요",
    btn_start: "무료 성향 테스트 시작하기",
    btn_back: "이전",
    result_celebration: "당신의 투자 유형",
    char_risk: "위험 감수도",
    char_horizon: "투자 기간",
    char_cashflow: "현금흐름",
    score_title: "성향 분석 상세",
    score_total_label: "종합 점수",
    score_unit: "점",
    score_labels: {
      age: "연령", amount: "투자금", goal: "목표", experience: "경험",
      income_stability: "수입 안정성", horizon: "투자 기간", loss_reaction: "손실 대응",
      preference: "수익 선호", knowledge: "지식 수준", savings: "비상금",
    },
    portfolio_title: "추천 포트폴리오",
    stock_title: "맞춤 추천 종목",
    report_title: "AI 투자 컨설팅 보고서",
    report_desc: 'AI가 당신의 투자 성향을 심층 분석하고<br><strong>맞춤 투자 전략 보고서</strong>를 작성해드립니다.',
    btn_report: "무료 보고서 받기",
    report_loading: "AI가 보고서를 작성하고 있어요... (약 10초)",
    report_error: "보고서 생성에 실패했습니다. 다시 시도해주세요.",
    btn_retry: "다시 시도",
    report_success_toast: "보고서가 생성되었습니다!",
    subscribe_title: "관심 종목 뉴스 구독",
    subscribe_desc: '추천 종목이나 내가 고른 종목의 소식을<br><strong>카카오톡 / 이메일</strong>로 받아보세요!',
    method_kakao: "카카오톡",
    method_email: "이메일",
    subscribe_frequency_label: "받는 주기",
    freq_daily: "매일",
    freq_weekly: "주 1회",
    freq_realtime: "실시간",
    btn_subscribe: "무료로 구독 시작하기",
    subscribe_note: "언제든 구독 취소 가능 / 스팸 없음",
    phone_placeholder: "카카오톡 연결 휴대폰 번호",
    email_placeholder: "이메일 주소",
    subscribe_select_stock: "구독할 종목을 1개 이상 선택해주세요",
    subscribe_select_method: "카카오톡 또는 이메일 중 하나를 선택해주세요",
    subscribe_enter_phone: "휴대폰 번호를 입력해주세요",
    subscribe_enter_email: "이메일을 입력해주세요",
    subscribe_success: "개 종목 뉴스 구독 완료!",
    share_title: "친구에게 공유하기",
    share_kakao: "카카오톡",
    share_link: "링크 복사",
    link_copied: "링크가 복사되었습니다!",
    link_copy_fail: "링크 복사 실패",
    btn_restart: "다시 분석하기",
    nav_analysis: "투자 성향 분석",
    nav_guide: "투자 가이드",
    nav_etf: "ETF 입문",
    nav_dividend: "배당 투자",
    nav_about: "소개",
    footer_desc: "나와 맞는 투자를 찾아드려요.<br>10문항 심층 분석으로 맞춤 포트폴리오를 추천합니다.",
    footer_services: "서비스",
    footer_beginner: "초보 투자 가이드",
    footer_etf: "ETF 완전정복",
    footer_dividend: "배당 투자 전략",
    footer_insights: "투자 인사이트",
    footer_risk: "리스크 관리법",
    footer_rebalancing: "포트폴리오 리밸런싱",
    footer_psychology: "투자 심리학",
    footer_info: "안내",
    footer_about: "서비스 소개",
    footer_privacy: "개인정보처리방침",
    footer_terms: "이용약관",
    footer_contact: "문의하기",
    footer_disclaimer: "<strong>투자 유의사항:</strong> 본 서비스는 투자 권유가 아닌 정보 제공 목적입니다. 모든 투자의 최종 결정은 본인의 책임이며, 과거의 수익률이 미래의 수익률을 보장하지 않습니다. 금융투자상품은 예금자보호법에 따라 보호되지 않습니다.",
    unsubscribe_toast: " 구독 해제",
    subscribe_toast: " 구독 추가",
    mbti_label: "나의 투자 MBTI",
    mbti_axis_safe: "안전", mbti_axis_risk: "공격",
    mbti_axis_short: "단기", mbti_axis_long: "장기",
    mbti_axis_dividend: "배당", mbti_axis_growth: "성장",
    mbti_axis_novice: "초보", mbti_axis_expert: "전문",
    mbti_share_prefix: "내 투자 MBTI는",
    mbti_share_suffix: "3분이면 알 수 있어요. 나에게 맞는 투자 스타일을 찾아보세요.",
    share_twitter: "트위터 / X",
    share_whatsapp: "WhatsApp",
    share_native: "공유하기",
    premium_deep_report_title: "Deep AI 리포트",
    premium_deep_report_desc: "30페이지 전문 투자 전략 보고서<br>맞춤 포트폴리오 + 실행 계획 + 리스크 분석",
    premium_deep_report_price: "9,900원",
    premium_deep_report_badge: "인기",
    premium_rebalancing_title: "포트폴리오 리밸런싱",
    premium_rebalancing_desc: "1:1 AI 포트폴리오 최적화<br>월간 리밸런싱 알림 + 성과 추적",
    premium_rebalancing_price: "19,000원",
    premium_rebalancing_badge: "Pro",
    premium_btn_buy: "구매하기",
    premium_coming_soon: "곧 오픈 예정! 사전 등록하세요.",
    premium_section_title: "프리미엄 서비스",
    premium_section_desc: "투자를 한 단계 업그레이드하세요",
    questions: [
      {
        title: "나이대가 어떻게 되세요?",
        subtitle: "연령대별 최적 투자 전략이 달라요",
        options: [
          { text: "20대", desc: "시간이 가장 큰 자산" },
          { text: "30대", desc: "본격 자산 증식기" },
          { text: "40대", desc: "성장과 안정의 균형" },
          { text: "50대 이상", desc: "안정적 현금흐름" },
        ]
      },
      {
        title: "투자 가능한 금액은?",
        subtitle: "작은 금액부터 시작해도 OK",
        options: [
          { text: "50만원 미만", desc: "소액 분산투자" },
          { text: "50만~500만원", desc: "포트폴리오 시작" },
          { text: "500만~2000만원", desc: "본격 자산 배분" },
          { text: "2000만원 이상", desc: "전략적 투자" },
        ]
      },
      {
        title: "투자 목표가 뭔가요?",
        subtitle: "목표에 따라 전략이 달라져요",
        options: [
          { text: "자산 크게 불리기", desc: "공격적 성장 추구" },
          { text: "집 사기 / 노후 준비", desc: "중장기 목표 달성" },
          { text: "매달 용돈 만들기", desc: "배당/현금흐름 중시" },
          { text: "잘 모르겠어요", desc: "기본 전략 추천" },
        ]
      },
      {
        title: "투자 경험이 있으세요?",
        subtitle: "경험에 맞는 전략을 추천해요",
        options: [
          { text: "완전 처음", desc: "주식 계좌도 없어요" },
          { text: "공부는 했어요", desc: "아직 실전은 없음" },
          { text: "1~2년 해봤어요", desc: "기본은 알아요" },
          { text: "3년 이상", desc: "나름 경험 풍부" },
        ]
      },
      {
        title: "수입이 안정적인가요?",
        subtitle: "수입 안정성에 따라 위험 감수 범위가 달라요",
        options: [
          { text: "매월 고정 월급", desc: "회사원/공무원" },
          { text: "변동 있지만 꾸준", desc: "프리랜서/자영업" },
          { text: "불규칙해요", desc: "수입이 들쭉날쭉" },
          { text: "수입 없음", desc: "학생/취준생/무직" },
        ]
      },
      {
        title: "이 돈을 언제 쓸 예정이에요?",
        subtitle: "투자 기간이 전략을 결정해요",
        options: [
          { text: "1년 이내", desc: "단기간 굴리기" },
          { text: "1~3년", desc: "중기 목표" },
          { text: "3~5년", desc: "중장기 투자" },
          { text: "5년 이상 / 없음", desc: "장기 묻어두기" },
        ]
      },
      {
        title: "투자금이 -20% 빠지면?",
        subtitle: "솔직한 마음을 골라주세요",
        options: [
          { text: "당장 전부 팔겠다", desc: "손실 못 참아요" },
          { text: "일부를 줄이겠다", desc: "불안하지만 일부 유지" },
          { text: "그냥 기다리겠다", desc: "장기적으로 회복 기대" },
          { text: "오히려 더 사겠다", desc: "싸게 살 기회!" },
        ]
      },
      {
        title: "수익률 vs 안정성, 뭐가 더 중요?",
        subtitle: "둘 다는 안 돼요, 하나만!",
        options: [
          { text: "안정이 최고", desc: "수익 낮아도 원금 보전" },
          { text: "적당히 균형", desc: "약간의 변동은 OK" },
          { text: "수익이 우선", desc: "변동 있어도 높은 수익" },
          { text: "수익 극대화", desc: "크게 벌고 싶어요" },
        ]
      },
      {
        title: "ETF, PER 같은 용어 알아요?",
        subtitle: "투자 지식 수준을 체크해요",
        options: [
          { text: "거의 모른다", desc: "주식이 뭔지도 애매" },
          { text: "기본 용어는 안다", desc: "ETF, 배당 정도는 OK" },
          { text: "재무제표도 본다", desc: "PER, PBR 분석 가능" },
          { text: "전문가 수준", desc: "기술적 분석도 함" },
        ]
      },
      {
        title: "비상금이 얼마나 있으세요?",
        subtitle: "비상금 없이 투자하면 위험해요",
        options: [
          { text: "거의 없다", desc: "당장 쓸 돈도 빠듯" },
          { text: "1~3개월치 생활비", desc: "최소한의 안전망" },
          { text: "3~6개월치", desc: "어느 정도 여유" },
          { text: "6개월 이상", desc: "든든한 안전망" },
        ]
      },
    ],
    investor_types: {
      aggressive_growth: {
        name: "공격적 성장 추구형", emoji: "🚀",
        description: "높은 수익을 위해 위험도 감수하는 타입이에요. 성장주와 기술주 중심으로 투자하고, 장기적으로 큰 수익을 노립니다. 시장 변동에도 흔들리지 않는 강한 멘탈이 강점입니다.",
        riskLabel: "높음", horizonLabel: "장기", cashflowLabel: "낮음",
      },
      growth: {
        name: "적극 투자형", emoji: "📈",
        description: "적극적으로 수익을 추구하지만 어느 정도의 안전장치도 갖추는 타입이에요. 성장 ETF와 우량 개별주를 조합해 꾸준히 시장을 이기려 합니다.",
        riskLabel: "중상", horizonLabel: "중장기", cashflowLabel: "보통",
      },
      balanced: {
        name: "균형 투자형", emoji: "⚖️",
        description: "성장과 안정 사이에서 균형을 잡는 타입이에요. 적당한 위험을 감수하면서 꾸준한 수익을 추구합니다. 대부분의 시장 상황에서 무난한 성과를 기대할 수 있어요.",
        riskLabel: "중간", horizonLabel: "중기", cashflowLabel: "보통",
      },
      conservative: {
        name: "안정 추구형", emoji: "🛡️",
        description: "안정적인 수익과 원금 보전을 중시하는 타입이에요. 배당주와 채권 비중을 높게 가져가고, 큰 변동 없이 꾸준히 자산을 불려갑니다.",
        riskLabel: "낮음", horizonLabel: "중단기", cashflowLabel: "높음",
      },
      very_conservative: {
        name: "안전 제일형", emoji: "🏦",
        description: "원금 손실을 극도로 꺼리는 타입이에요. 예금 수준의 안정성을 원하면서 조금 더 나은 수익을 추구합니다. 채권과 고배당 위주가 적합해요.",
        riskLabel: "매우 낮음", horizonLabel: "단기", cashflowLabel: "매우 높음",
      },
    },
  },

  zh: {
    meta_description: "10个问题帮你找到适合的投资方式",
    page_title: "MoneyFit - 找到适合你的投资",
    tagline: "你的投资MBTI是什么？",
    headline: "3分钟投资测试<br>发现你的投资性格！",
    stat_time: "3分钟",
    stat_time_label: "所需时间",
    stat_questions: "10题",
    stat_questions_label: "专业分析",
    stat_custom: "定制",
    stat_custom_label: "股票推荐",
    badge_free: "免费",
    badge_no_signup: "无需注册",
    btn_start: "开始测试",
    btn_back: "返回",
    result_celebration: "你的投资类型",
    char_risk: "风险承受度",
    char_horizon: "投资期限",
    char_cashflow: "现金流",
    score_title: "性格分析详情",
    score_total_label: "综合得分",
    score_unit: "分",
    score_labels: {
      age: "年龄", amount: "投资额", goal: "目标", experience: "经验",
      income_stability: "收入稳定", horizon: "投资期限", loss_reaction: "损失应对",
      preference: "收益偏好", knowledge: "知识水平", savings: "应急金",
    },
    portfolio_title: "推荐投资组合",
    stock_title: "个性化股票推荐",
    report_title: "AI投资咨询报告",
    report_desc: 'AI深度分析你的投资性格<br>为你撰写<strong>个性化投资策略报告</strong>。',
    btn_report: "免费获取报告",
    report_loading: "AI正在撰写报告...（约10秒）",
    report_error: "报告生成失败，请重试。",
    btn_retry: "重试",
    report_success_toast: "报告已生成！",
    subscribe_title: "订阅股票资讯",
    subscribe_desc: '通过<strong>电子邮件</strong>获取推荐股票的最新资讯！',
    method_email: "电子邮件",
    subscribe_frequency_label: "频率",
    freq_daily: "每天",
    freq_weekly: "每周",
    freq_realtime: "实时",
    btn_subscribe: "免费开始订阅",
    subscribe_note: "随时可取消 / 无垃圾邮件",
    email_placeholder: "电子邮件地址",
    subscribe_select_stock: "请至少选择1只股票订阅",
    subscribe_select_method: "请选择电子邮件",
    subscribe_enter_email: "请输入电子邮件地址",
    subscribe_success: "只股票资讯订阅成功！",
    share_title: "分享给朋友",
    share_link: "复制链接",
    link_copied: "链接已复制！",
    link_copy_fail: "复制失败",
    btn_restart: "重新测试",
    nav_analysis: "投资性格分析",
    nav_guide: "投资指南",
    nav_etf: "ETF入门",
    nav_dividend: "分红投资",
    nav_about: "关于我们",
    footer_desc: "帮你找到适合的投资方式。<br>10题深度分析，推荐个性化投资组合。",
    footer_services: "服务",
    footer_beginner: "新手投资指南",
    footer_etf: "ETF完全攻略",
    footer_dividend: "分红投资策略",
    footer_insights: "投资洞察",
    footer_risk: "风险管理",
    footer_rebalancing: "投资组合再平衡",
    footer_psychology: "投资心理学",
    footer_info: "信息",
    footer_about: "关于我们",
    footer_privacy: "隐私政策",
    footer_terms: "使用条款",
    footer_contact: "联系我们",
    footer_disclaimer: "<strong>投资提示：</strong>本服务仅供信息参考，不构成投资建议。所有投资决策由您自行负责，过去的收益不保证未来的回报。金融投资产品不受存款保险法保护。",
    unsubscribe_toast: " 已取消订阅",
    subscribe_toast: " 已添加订阅",
    mbti_label: "我的投资MBTI",
    mbti_axis_safe: "安全", mbti_axis_risk: "冒险",
    mbti_axis_short: "短期", mbti_axis_long: "长期",
    mbti_axis_dividend: "分红", mbti_axis_growth: "成长",
    mbti_axis_novice: "新手", mbti_axis_expert: "专家",
    mbti_share_prefix: "我的投资MBTI是",
    mbti_share_suffix: "你的投资MBTI是什么？3分钟测出来！",
    share_twitter: "Twitter / X",
    share_whatsapp: "WhatsApp",
    share_native: "分享",
    premium_deep_report_title: "深度AI报告",
    premium_deep_report_desc: "30页专业投资策略报告<br>定制组合 + 行动计划 + 风险分析",
    premium_deep_report_price: "¥68",
    premium_deep_report_badge: "热销",
    premium_rebalancing_title: "投资组合再平衡",
    premium_rebalancing_desc: "1对1 AI组合优化<br>月度再平衡提醒 + 业绩追踪",
    premium_rebalancing_price: "¥128",
    premium_rebalancing_badge: "Pro",
    premium_btn_buy: "立即购买",
    premium_coming_soon: "即将上线！提前注册获取优惠。",
    premium_section_title: "高级服务",
    premium_section_desc: "将您的投资提升到新水平",
    questions: [
      {
        title: "你的年龄段？",
        subtitle: "不同年龄段有不同的最佳策略",
        options: [
          { text: "20多岁", desc: "时间是最大的资产" },
          { text: "30多岁", desc: "财富增长黄金期" },
          { text: "40多岁", desc: "增长与稳定的平衡" },
          { text: "50岁以上", desc: "稳定现金流" },
        ]
      },
      {
        title: "可投资金额是多少？",
        subtitle: "小额起步也没问题",
        options: [
          { text: "3000元以下", desc: "小额分散投资" },
          { text: "3000-3万元", desc: "组合起步" },
          { text: "3万-15万元", desc: "正式资产配置" },
          { text: "15万元以上", desc: "策略性投资" },
        ]
      },
      {
        title: "你的投资目标是什么？",
        subtitle: "目标不同策略不同",
        options: [
          { text: "大幅增值", desc: "追求激进增长" },
          { text: "买房/养老", desc: "中长期目标" },
          { text: "每月收入", desc: "重视分红/现金流" },
          { text: "还不确定", desc: "推荐基本策略" },
        ]
      },
      {
        title: "有投资经验吗？",
        subtitle: "根据经验推荐合适的策略",
        options: [
          { text: "完全新手", desc: "连证券账户都没有" },
          { text: "学习过但没实操", desc: "还没有实际交易" },
          { text: "1-2年经验", desc: "了解基本知识" },
          { text: "3年以上", desc: "经验比较丰富" },
        ]
      },
      {
        title: "收入稳定吗？",
        subtitle: "收入稳定性影响风险承受能力",
        options: [
          { text: "固定月薪", desc: "上班族/公务员" },
          { text: "有波动但稳定", desc: "自由职业/个体户" },
          { text: "不规律", desc: "收入时多时少" },
          { text: "没有收入", desc: "学生/待业" },
        ]
      },
      {
        title: "这笔钱什么时候要用？",
        subtitle: "投资期限决定策略",
        options: [
          { text: "1年以内", desc: "短期理财" },
          { text: "1-3年", desc: "中期目标" },
          { text: "3-5年", desc: "中长期投资" },
          { text: "5年以上/不确定", desc: "长期持有" },
        ]
      },
      {
        title: "投资亏损20%时你会？",
        subtitle: "请诚实选择",
        options: [
          { text: "立刻全部卖出", desc: "无法承受亏损" },
          { text: "减少一部分", desc: "焦虑但保留部分" },
          { text: "继续等待", desc: "期待长期回升" },
          { text: "反而加仓", desc: "低价买入的机会！" },
        ]
      },
      {
        title: "收益率vs安全性，哪个更重要？",
        subtitle: "只能选一个！",
        options: [
          { text: "安全第一", desc: "收益低也要保住本金" },
          { text: "适当平衡", desc: "可以接受小幅波动" },
          { text: "收益优先", desc: "有波动也要高收益" },
          { text: "收益最大化", desc: "想赚大钱" },
        ]
      },
      {
        title: "知道ETF、市盈率这些术语吗？",
        subtitle: "检测你的投资知识水平",
        options: [
          { text: "几乎不了解", desc: "不太清楚股票是什么" },
          { text: "知道基本术语", desc: "ETF、分红都了解" },
          { text: "会看财报", desc: "能分析市盈率、市净率" },
          { text: "专家水平", desc: "也做技术分析" },
        ]
      },
      {
        title: "有多少应急资金？",
        subtitle: "没有应急金投资很危险",
        options: [
          { text: "几乎没有", desc: "日常开销都紧张" },
          { text: "1-3个月生活费", desc: "最基本的安全网" },
          { text: "3-6个月", desc: "有一定余裕" },
          { text: "6个月以上", desc: "充足的安全网" },
        ]
      },
    ],
    investor_types: {
      aggressive_growth: {
        name: "激进增长型", emoji: "🚀",
        description: "你愿意承担高风险以追求高回报。以成长股和科技股为主，目标是长期获得大幅收益。面对市场波动也能保持坚定的心态是你的优势。",
        riskLabel: "高", horizonLabel: "长期", cashflowLabel: "低",
      },
      growth: {
        name: "积极投资型", emoji: "📈",
        description: "积极追求收益的同时也有一定的安全措施。通过成长ETF和优质个股的组合，持续追求超越市场的回报。",
        riskLabel: "中高", horizonLabel: "中长期", cashflowLabel: "中等",
      },
      balanced: {
        name: "均衡投资型", emoji: "⚖️",
        description: "在增长和稳定之间寻求平衡。承受适度风险，追求稳定收益。在大多数市场环境中都能获得不错的表现。",
        riskLabel: "中等", horizonLabel: "中期", cashflowLabel: "中等",
      },
      conservative: {
        name: "稳健投资型", emoji: "🛡️",
        description: "重视稳定收益和本金保护。增加分红股和债券比重，在没有大幅波动的情况下稳步增长资产。",
        riskLabel: "低", horizonLabel: "中短期", cashflowLabel: "高",
      },
      very_conservative: {
        name: "安全至上型", emoji: "🏦",
        description: "极度厌恶本金损失。希望获得存款级别的安全性，同时追求稍高的收益。债券和高分红投资最适合你。",
        riskLabel: "很低", horizonLabel: "短期", cashflowLabel: "很高",
      },
    },
  },

  ja: {
    meta_description: "10の質問であなたに合った投資を見つけます",
    page_title: "MoneyFit - あなたに合った投資を見つける",
    tagline: "あなたの投資MBTIは？",
    headline: "3分投資テスト<br>投資パーソナリティを発見！",
    stat_time: "3分",
    stat_time_label: "所要時間",
    stat_questions: "10問",
    stat_questions_label: "専門分析",
    stat_custom: "カスタム",
    stat_custom_label: "銘柄推薦",
    badge_free: "無料",
    badge_no_signup: "登録不要",
    btn_start: "始める",
    btn_back: "戻る",
    result_celebration: "あなたの投資タイプ",
    char_risk: "リスク許容度",
    char_horizon: "投資期間",
    char_cashflow: "キャッシュフロー",
    score_title: "性格分析の詳細",
    score_total_label: "総合スコア",
    score_unit: "点",
    score_labels: {
      age: "年齢", amount: "投資額", goal: "目標", experience: "経験",
      income_stability: "収入安定性", horizon: "投資期間", loss_reaction: "損失対応",
      preference: "収益志向", knowledge: "知識レベル", savings: "緊急資金",
    },
    portfolio_title: "おすすめポートフォリオ",
    stock_title: "パーソナル銘柄推薦",
    report_title: "AI投資コンサルティングレポート",
    report_desc: 'AIがあなたの投資性格を深く分析し<br><strong>カスタム投資戦略レポート</strong>を作成します。',
    btn_report: "無料レポートを取得",
    report_loading: "AIがレポートを作成中...（約10秒）",
    report_error: "レポートの作成に失敗しました。もう一度お試しください。",
    btn_retry: "再試行",
    report_success_toast: "レポートが生成されました！",
    subscribe_title: "注目銘柄ニュース購読",
    subscribe_desc: 'おすすめ銘柄のニュースを<br><strong>メール</strong>でお届けします！',
    method_email: "メール",
    subscribe_frequency_label: "頻度",
    freq_daily: "毎日",
    freq_weekly: "週1回",
    freq_realtime: "リアルタイム",
    btn_subscribe: "無料で購読開始",
    subscribe_note: "いつでも解約可能 / スパムなし",
    email_placeholder: "メールアドレス",
    subscribe_select_stock: "1つ以上の銘柄を選択してください",
    subscribe_select_method: "メールを選択してください",
    subscribe_enter_email: "メールアドレスを入力してください",
    subscribe_success: "銘柄のニュース購読完了！",
    share_title: "友達にシェア",
    share_link: "リンクコピー",
    link_copied: "リンクがコピーされました！",
    link_copy_fail: "コピー失敗",
    btn_restart: "もう一度分析",
    nav_analysis: "投資性格分析",
    nav_guide: "投資ガイド",
    nav_etf: "ETF入門",
    nav_dividend: "配当投資",
    nav_about: "紹介",
    footer_desc: "あなたに合った投資を見つけます。<br>10問の深層分析でカスタムポートフォリオを推薦。",
    footer_services: "サービス",
    footer_beginner: "初心者投資ガイド",
    footer_etf: "ETF完全攻略",
    footer_dividend: "配当投資戦略",
    footer_insights: "投資インサイト",
    footer_risk: "リスク管理",
    footer_rebalancing: "ポートフォリオリバランス",
    footer_psychology: "投資心理学",
    footer_info: "情報",
    footer_about: "サービス紹介",
    footer_privacy: "プライバシーポリシー",
    footer_terms: "利用規約",
    footer_contact: "お問い合わせ",
    footer_disclaimer: "<strong>投資に関するご注意：</strong>本サービスは情報提供のみを目的としており、投資勧誘ではありません。すべての投資判断はご自身の責任で行ってください。過去の収益率は将来の収益を保証するものではありません。",
    unsubscribe_toast: " 購読解除",
    subscribe_toast: " 購読追加",
    mbti_label: "私の投資MBTI",
    mbti_axis_safe: "安全", mbti_axis_risk: "攻撃",
    mbti_axis_short: "短期", mbti_axis_long: "長期",
    mbti_axis_dividend: "配当", mbti_axis_growth: "成長",
    mbti_axis_novice: "初心者", mbti_axis_expert: "専門家",
    mbti_share_prefix: "私の投資MBTIは",
    mbti_share_suffix: "あなたの投資MBTIは？3分でわかる！",
    share_twitter: "Twitter / X",
    share_whatsapp: "WhatsApp",
    share_native: "シェア",
    premium_deep_report_title: "ディープAIレポート",
    premium_deep_report_desc: "30ページの専門投資戦略レポート<br>カスタムポートフォリオ + アクションプラン",
    premium_deep_report_price: "¥1,480",
    premium_deep_report_badge: "人気",
    premium_rebalancing_title: "ポートフォリオリバランス",
    premium_rebalancing_desc: "1対1 AIポートフォリオ最適化<br>月次リバランスアラート + パフォーマンス追跡",
    premium_rebalancing_price: "¥2,980",
    premium_rebalancing_badge: "Pro",
    premium_btn_buy: "今すぐ購入",
    premium_coming_soon: "まもなくオープン！事前登録で特典あり。",
    premium_section_title: "プレミアムサービス",
    premium_section_desc: "投資をワンランクアップ",
    questions: [
      {
        title: "年齢層は？",
        subtitle: "年齢によって最適な戦略が異なります",
        options: [
          { text: "20代", desc: "時間が最大の資産" },
          { text: "30代", desc: "本格的な資産形成期" },
          { text: "40代", desc: "成長と安定のバランス" },
          { text: "50代以上", desc: "安定的なキャッシュフロー" },
        ]
      },
      {
        title: "投資可能な金額は？",
        subtitle: "少額からでもOK",
        options: [
          { text: "5万円未満", desc: "少額分散投資" },
          { text: "5万〜50万円", desc: "ポートフォリオの始まり" },
          { text: "50万〜200万円", desc: "本格的な資産配分" },
          { text: "200万円以上", desc: "戦略的投資" },
        ]
      },
      {
        title: "投資の目標は？",
        subtitle: "目標によって戦略が変わります",
        options: [
          { text: "大きく増やしたい", desc: "積極的な成長追求" },
          { text: "住宅購入/老後資金", desc: "中長期目標の達成" },
          { text: "毎月のお小遣い", desc: "配当/キャッシュフロー重視" },
          { text: "まだわからない", desc: "基本戦略をおすすめ" },
        ]
      },
      {
        title: "投資経験はありますか？",
        subtitle: "経験に合った戦略をおすすめします",
        options: [
          { text: "全くの初心者", desc: "証券口座もない" },
          { text: "勉強はした", desc: "実践はまだ" },
          { text: "1〜2年やった", desc: "基本は知っている" },
          { text: "3年以上", desc: "それなりに経験豊富" },
        ]
      },
      {
        title: "収入は安定していますか？",
        subtitle: "収入の安定性がリスク許容度を左右します",
        options: [
          { text: "毎月固定給料", desc: "会社員/公務員" },
          { text: "変動あるが安定", desc: "フリーランス/自営業" },
          { text: "不規則", desc: "収入にムラがある" },
          { text: "収入なし", desc: "学生/求職中/無職" },
        ]
      },
      {
        title: "このお金はいつ使う予定？",
        subtitle: "投資期間が戦略を決めます",
        options: [
          { text: "1年以内", desc: "短期運用" },
          { text: "1〜3年", desc: "中期目標" },
          { text: "3〜5年", desc: "中長期投資" },
          { text: "5年以上/未定", desc: "長期保有" },
        ]
      },
      {
        title: "投資額が-20%下落したら？",
        subtitle: "正直な気持ちで選んでください",
        options: [
          { text: "すぐ全部売る", desc: "損失に耐えられない" },
          { text: "一部を減らす", desc: "不安だが一部は維持" },
          { text: "そのまま待つ", desc: "長期的な回復を期待" },
          { text: "むしろ買い増す", desc: "安く買えるチャンス！" },
        ]
      },
      {
        title: "リターンvs安定性、どちらが大事？",
        subtitle: "どちらか一つだけ！",
        options: [
          { text: "安全が一番", desc: "利益が低くても元本保全" },
          { text: "バランス重視", desc: "多少の変動はOK" },
          { text: "リターン優先", desc: "変動があっても高収益" },
          { text: "リターン最大化", desc: "大きく稼ぎたい" },
        ]
      },
      {
        title: "ETF、PERなどの用語を知っていますか？",
        subtitle: "投資知識レベルをチェック",
        options: [
          { text: "ほとんど知らない", desc: "株が何かも曖昧" },
          { text: "基本用語は知っている", desc: "ETF、配当くらいはOK" },
          { text: "財務諸表も読める", desc: "PER、PBR分析可能" },
          { text: "専門家レベル", desc: "テクニカル分析もする" },
        ]
      },
      {
        title: "緊急資金はどのくらいありますか？",
        subtitle: "緊急資金なしの投資は危険です",
        options: [
          { text: "ほとんどない", desc: "日々の出費もギリギリ" },
          { text: "1〜3ヶ月分の生活費", desc: "最低限のセーフティネット" },
          { text: "3〜6ヶ月分", desc: "ある程度の余裕" },
          { text: "6ヶ月以上", desc: "しっかりしたセーフティネット" },
        ]
      },
    ],
    investor_types: {
      aggressive_growth: {
        name: "積極的成長追求型", emoji: "🚀",
        description: "高いリターンのためにリスクも厭わないタイプです。成長株やテック株を中心に投資し、長期的に大きな利益を目指します。市場の変動にも動じない強いメンタルが強みです。",
        riskLabel: "高い", horizonLabel: "長期", cashflowLabel: "低い",
      },
      growth: {
        name: "積極投資型", emoji: "📈",
        description: "積極的にリターンを追求しながら、ある程度の安全策も備えるタイプです。成長ETFと優良個別株を組み合わせ、市場を上回るパフォーマンスを目指します。",
        riskLabel: "やや高い", horizonLabel: "中長期", cashflowLabel: "普通",
      },
      balanced: {
        name: "バランス投資型", emoji: "⚖️",
        description: "成長と安定のバランスを取るタイプです。適度なリスクを受け入れながら、安定したリターンを追求します。ほとんどの市場状況で無難な成果が期待できます。",
        riskLabel: "中程度", horizonLabel: "中期", cashflowLabel: "普通",
      },
      conservative: {
        name: "安定追求型", emoji: "🛡️",
        description: "安定した収益と元本保全を重視するタイプです。配当株と債券の比率を高く持ち、大きな変動なく着実に資産を増やしていきます。",
        riskLabel: "低い", horizonLabel: "中短期", cashflowLabel: "高い",
      },
      very_conservative: {
        name: "安全第一型", emoji: "🏦",
        description: "元本の損失を極端に嫌うタイプです。預金レベルの安全性を求めながら、少しでも良い収益を追求します。債券と高配当投資が最適です。",
        riskLabel: "とても低い", horizonLabel: "短期", cashflowLabel: "とても高い",
      },
    },
  },

  hi: {
    meta_description: "10 सवालों में अपने लिए सही निवेश खोजें",
    page_title: "MoneyFit - अपना निवेश मैच खोजें",
    tagline: "आपका निवेश MBTI क्या है?",
    headline: "3 मिनट निवेश टेस्ट<br>अपनी निवेश शख्सियत जानें!",
    stat_time: "3 मिनट",
    stat_time_label: "समय",
    stat_questions: "10 प्रश्न",
    stat_questions_label: "विशेषज्ञ विश्लेषण",
    stat_custom: "कस्टम",
    stat_custom_label: "स्टॉक सुझाव",
    badge_free: "मुफ़्त",
    badge_no_signup: "साइनअप ज़रूरी नहीं",
    btn_start: "शुरू करें",
    btn_back: "वापस",
    result_celebration: "आपका निवेश प्रकार",
    char_risk: "जोखिम सहनशीलता",
    char_horizon: "निवेश अवधि",
    char_cashflow: "कैश फ़्लो",
    score_title: "प्रोफ़ाइल विश्लेषण विवरण",
    score_total_label: "कुल स्कोर",
    score_unit: "अंक",
    score_labels: {
      age: "उम्र", amount: "निवेश", goal: "लक्ष्य", experience: "अनुभव",
      income_stability: "आय स्थिरता", horizon: "अवधि", loss_reaction: "हानि प्रतिक्रिया",
      preference: "प्राथमिकता", knowledge: "ज्ञान", savings: "बचत",
    },
    portfolio_title: "सुझाया गया पोर्टफोलियो",
    stock_title: "व्यक्तिगत स्टॉक सुझाव",
    report_title: "AI निवेश परामर्श रिपोर्ट",
    report_desc: 'AI आपकी निवेश प्रोफ़ाइल का गहन विश्लेषण करके<br><strong>व्यक्तिगत निवेश रणनीति रिपोर्ट</strong> तैयार करता है।',
    btn_report: "मुफ़्त रिपोर्ट प्राप्त करें",
    report_loading: "AI रिपोर्ट लिख रहा है... (~10 सेकंड)",
    report_error: "रिपोर्ट बनाने में विफल। कृपया पुनः प्रयास करें।",
    btn_retry: "पुनः प्रयास",
    report_success_toast: "रिपोर्ट तैयार हो गई!",
    subscribe_title: "स्टॉक समाचार सदस्यता",
    subscribe_desc: '<strong>ईमेल</strong> के माध्यम से सुझाए गए स्टॉक्स<br>की खबरें प्राप्त करें!',
    method_email: "ईमेल",
    subscribe_frequency_label: "आवृत्ति",
    freq_daily: "दैनिक",
    freq_weekly: "साप्ताहिक",
    freq_realtime: "रियल-टाइम",
    btn_subscribe: "मुफ़्त सदस्यता शुरू करें",
    subscribe_note: "कभी भी रद्द करें / कोई स्पैम नहीं",
    email_placeholder: "ईमेल पता",
    subscribe_select_stock: "कृपया कम से कम 1 स्टॉक चुनें",
    subscribe_select_method: "कृपया ईमेल चुनें",
    subscribe_enter_email: "कृपया ईमेल दर्ज करें",
    subscribe_success: " स्टॉक समाचार सदस्यता पूर्ण!",
    share_title: "दोस्तों के साथ साझा करें",
    share_link: "लिंक कॉपी",
    link_copied: "लिंक कॉपी हो गया!",
    link_copy_fail: "कॉपी विफल",
    btn_restart: "फिर से विश्लेषण करें",
    nav_analysis: "निवेश प्रोफ़ाइल",
    nav_guide: "निवेश गाइड",
    nav_etf: "ETF 101",
    nav_dividend: "डिविडेंड निवेश",
    nav_about: "परिचय",
    footer_desc: "आपके लिए सही निवेश खोजें।<br>10 प्रश्नों का गहन विश्लेषण, व्यक्तिगत पोर्टफोलियो सुझाव।",
    footer_services: "सेवाएँ",
    footer_beginner: "शुरुआती गाइड",
    footer_etf: "ETF मास्टरक्लास",
    footer_dividend: "डिविडेंड रणनीति",
    footer_insights: "निवेश अंतर्दृष्टि",
    footer_risk: "जोखिम प्रबंधन",
    footer_rebalancing: "पोर्टफोलियो रीबैलेंसिंग",
    footer_psychology: "निवेश मनोविज्ञान",
    footer_info: "जानकारी",
    footer_about: "परिचय",
    footer_privacy: "गोपनीयता नीति",
    footer_terms: "सेवा की शर्तें",
    footer_contact: "संपर्क करें",
    footer_disclaimer: "<strong>निवेश चेतावनी:</strong> यह सेवा केवल सूचना के उद्देश्य से है, निवेश सलाह नहीं है। सभी निवेश निर्णय आपकी अपनी जिम्मेदारी हैं। पिछला प्रदर्शन भविष्य के रिटर्न की गारंटी नहीं देता।",
    unsubscribe_toast: " सदस्यता रद्द",
    subscribe_toast: " सदस्यता जोड़ी",
    mbti_label: "मेरा निवेश MBTI",
    mbti_axis_safe: "सुरक्षित", mbti_axis_risk: "जोखिम",
    mbti_axis_short: "अल्पकालिक", mbti_axis_long: "दीर्घकालिक",
    mbti_axis_dividend: "आय", mbti_axis_growth: "विकास",
    mbti_axis_novice: "शुरुआती", mbti_axis_expert: "विशेषज्ञ",
    mbti_share_prefix: "मेरा निवेश MBTI है",
    mbti_share_suffix: "आपका निवेश MBTI क्या है? 3 मिनट में जानें!",
    share_twitter: "Twitter / X",
    share_whatsapp: "WhatsApp",
    share_native: "शेयर करें",
    premium_deep_report_title: "डीप AI रिपोर्ट",
    premium_deep_report_desc: "30 पृष्ठ पेशेवर निवेश रणनीति<br>कस्टम पोर्टफोलियो + एक्शन प्लान",
    premium_deep_report_price: "₹799",
    premium_deep_report_badge: "लोकप्रिय",
    premium_rebalancing_title: "पोर्टफोलियो रीबैलेंसिंग",
    premium_rebalancing_desc: "1:1 AI पोर्टफोलियो ऑप्टिमाइज़ेशन<br>मासिक रीबैलेंस अलर्ट",
    premium_rebalancing_price: "₹1,499",
    premium_rebalancing_badge: "Pro",
    premium_btn_buy: "अभी खरीदें",
    premium_coming_soon: "जल्द आ रहा है! शुरुआती एक्सेस के लिए साइन अप करें।",
    premium_section_title: "प्रीमियम सेवाएँ",
    premium_section_desc: "अपने निवेश को अगले स्तर पर ले जाएँ",
    questions: [
      {
        title: "आपकी उम्र क्या है?",
        subtitle: "उम्र के अनुसार सर्वोत्तम रणनीति अलग होती है",
        options: [
          { text: "20 के दशक", desc: "समय आपकी सबसे बड़ी संपत्ति" },
          { text: "30 के दशक", desc: "संपत्ति निर्माण का प्रमुख समय" },
          { text: "40 के दशक", desc: "विकास और स्थिरता का संतुलन" },
          { text: "50+", desc: "स्थिर कैश फ़्लो" },
        ]
      },
      {
        title: "कितना निवेश कर सकते हैं?",
        subtitle: "छोटी रकम से शुरू करना भी ठीक है",
        options: [
          { text: "₹25,000 से कम", desc: "छोटा विविध निवेश" },
          { text: "₹25,000 - ₹2,50,000", desc: "पोर्टफोलियो शुरुआत" },
          { text: "₹2.5L - ₹10L", desc: "गंभीर एसेट एलोकेशन" },
          { text: "₹10 लाख+", desc: "रणनीतिक निवेश" },
        ]
      },
      {
        title: "निवेश का लक्ष्य क्या है?",
        subtitle: "लक्ष्य के अनुसार रणनीति बदलती है",
        options: [
          { text: "तेज़ी से बढ़ाना", desc: "आक्रामक विकास" },
          { text: "घर/रिटायरमेंट", desc: "मध्य-दीर्घकालिक लक्ष्य" },
          { text: "मासिक आय", desc: "डिविडेंड और कैश फ़्लो" },
          { text: "अभी पक्का नहीं", desc: "बुनियादी रणनीति सुझाव" },
        ]
      },
      {
        title: "निवेश का अनुभव है?",
        subtitle: "अनुभव के अनुसार रणनीति सुझाएँगे",
        options: [
          { text: "बिल्कुल नया", desc: "डीमैट अकाउंट भी नहीं" },
          { text: "पढ़ा है पर प्रैक्टिस नहीं", desc: "असली ट्रेड नहीं किया" },
          { text: "1-2 साल", desc: "बेसिक्स जानता हूँ" },
          { text: "3+ साल", desc: "अच्छा अनुभव" },
        ]
      },
      {
        title: "आय स्थिर है?",
        subtitle: "आय स्थिरता जोखिम क्षमता प्रभावित करती है",
        options: [
          { text: "निश्चित मासिक वेतन", desc: "नौकरीपेशा/सरकारी" },
          { text: "उतार-चढ़ाव पर स्थिर", desc: "फ्रीलांसर/स्वरोजगार" },
          { text: "अनियमित", desc: "आय में उतार-चढ़ाव" },
          { text: "कोई आय नहीं", desc: "छात्र/बेरोजगार" },
        ]
      },
      {
        title: "यह पैसा कब चाहिए?",
        subtitle: "समय अवधि रणनीति तय करती है",
        options: [
          { text: "1 साल के भीतर", desc: "अल्पकालिक" },
          { text: "1-3 साल", desc: "मध्यम अवधि" },
          { text: "3-5 साल", desc: "मध्य-दीर्घकालिक" },
          { text: "5+ साल / नहीं पता", desc: "लंबी अवधि" },
        ]
      },
      {
        title: "निवेश -20% गिर जाए तो?",
        subtitle: "ईमानदारी से बताएँ",
        options: [
          { text: "तुरंत सब बेच दूँ", desc: "नुकसान बर्दाश्त नहीं" },
          { text: "कुछ कम करूँ", desc: "चिंतित पर कुछ रखूँ" },
          { text: "इंतज़ार करूँ", desc: "लंबे समय में रिकवरी" },
          { text: "और खरीदूँ", desc: "सस्ते में खरीदने का मौका!" },
        ]
      },
      {
        title: "रिटर्न vs सुरक्षा - क्या ज़्यादा ज़रूरी?",
        subtitle: "सिर्फ एक चुनें!",
        options: [
          { text: "सुरक्षा पहले", desc: "कम रिटर्न चलेगा, मूलधन बचाओ" },
          { text: "संतुलित", desc: "थोड़ा उतार-चढ़ाव चलेगा" },
          { text: "रिटर्न पहले", desc: "उतार-चढ़ाव चलेगा, ज़्यादा कमाओ" },
          { text: "अधिकतम रिटर्न", desc: "बड़ा कमाना है" },
        ]
      },
      {
        title: "ETF, P/E रेशियो जैसे शब्द जानते हैं?",
        subtitle: "निवेश ज्ञान की जाँच",
        options: [
          { text: "लगभग नहीं", desc: "शेयर क्या है ये भी अस्पष्ट" },
          { text: "बेसिक जानता हूँ", desc: "ETF, डिविडेंड समझता हूँ" },
          { text: "फाइनेंशियल्स पढ़ सकता हूँ", desc: "P/E, P/B विश्लेषण" },
          { text: "विशेषज्ञ स्तर", desc: "टेक्निकल एनालिसिस भी" },
        ]
      },
      {
        title: "इमरजेंसी फंड कितना है?",
        subtitle: "बचत के बिना निवेश जोखिमपूर्ण है",
        options: [
          { text: "लगभग नहीं", desc: "दैनिक खर्च भी मुश्किल" },
          { text: "1-3 महीने का खर्च", desc: "न्यूनतम सुरक्षा जाल" },
          { text: "3-6 महीने", desc: "ठीक-ठाक बफर" },
          { text: "6+ महीने", desc: "मज़बूत सुरक्षा जाल" },
        ]
      },
    ],
    investor_types: {
      aggressive_growth: {
        name: "आक्रामक विकास चाहने वाला", emoji: "🚀",
        description: "आप उच्च रिटर्न के लिए उच्च जोखिम लेने को तैयार हैं। ग्रोथ और टेक स्टॉक्स पर फोकस करते हैं, लंबी अवधि में बड़े मुनाफ़े का लक्ष्य। बाज़ार के उतार-चढ़ाव में भी अडिग रहना आपकी ताकत है।",
        riskLabel: "उच्च", horizonLabel: "दीर्घकालिक", cashflowLabel: "कम",
      },
      growth: {
        name: "सक्रिय निवेशक", emoji: "📈",
        description: "सक्रिय रूप से रिटर्न का पीछा करते हुए कुछ सुरक्षा उपाय भी रखते हैं। ग्रोथ ETF और गुणवत्ता वाले शेयरों का मिश्रण करके बाज़ार से बेहतर प्रदर्शन का लक्ष्य।",
        riskLabel: "मध्य-उच्च", horizonLabel: "मध्य-दीर्घ", cashflowLabel: "मध्यम",
      },
      balanced: {
        name: "संतुलित निवेशक", emoji: "⚖️",
        description: "विकास और स्थिरता के बीच संतुलन बनाते हैं। मध्यम जोखिम स्वीकार करते हुए स्थिर रिटर्न का पीछा करते हैं। अधिकांश बाज़ार स्थितियों में अच्छा प्रदर्शन।",
        riskLabel: "मध्यम", horizonLabel: "मध्यम", cashflowLabel: "मध्यम",
      },
      conservative: {
        name: "स्थिरता चाहने वाला", emoji: "🛡️",
        description: "स्थिर रिटर्न और मूलधन सुरक्षा को प्राथमिकता देते हैं। डिविडेंड स्टॉक्स और बॉन्ड्स का अधिक अनुपात, बड़े उतार-चढ़ाव के बिना संपत्ति बढ़ाना।",
        riskLabel: "कम", horizonLabel: "मध्य-अल्प", cashflowLabel: "उच्च",
      },
      very_conservative: {
        name: "सुरक्षा सर्वोपरि", emoji: "🏦",
        description: "मूलधन हानि से बहुत डरते हैं। FD जैसी सुरक्षा चाहते हैं पर थोड़ा बेहतर रिटर्न भी। बॉन्ड और उच्च डिविडेंड निवेश सबसे उपयुक्त।",
        riskLabel: "बहुत कम", horizonLabel: "अल्पकालिक", cashflowLabel: "बहुत उच्च",
      },
    },
  },
};

// ===== i18n Helper =====
let currentLang = localStorage.getItem('lang') || 'en';

function t(key) {
  const keys = key.split('.');
  let val = TRANSLATIONS[currentLang];
  for (const k of keys) {
    val = val?.[k];
  }
  return val ?? TRANSLATIONS['en']?.[key] ?? key;
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang;

  // Update lang selector
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Update meta
  document.title = t('page_title');
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.content = t('meta_description');

  // Apply translations to all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const val = t(key);
    if (val && typeof val === 'string') {
      if (el.dataset.i18nHtml) {
        el.innerHTML = val;
      } else if (key.includes('desc') || key.includes('headline') || key.includes('disclaimer')) {
        el.innerHTML = val;
      } else {
        el.textContent = val;
      }
    }
  });

  // Re-render dynamic content if app is loaded
  if (typeof renderCurrentView === 'function') {
    renderCurrentView();
  }
}

function getLang() { return currentLang; }

function isKorean() { return currentLang === 'ko'; }
