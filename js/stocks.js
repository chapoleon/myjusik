/**
 * MoneyFit - Country-specific Portfolio & Stock Recommendations
 */

const PORTFOLIOS_BY_COUNTRY = {
  en: {
    aggressive_growth: [
      { name: 'QQQ (Nasdaq 100)', pct: 35, color: '#667eea', desc: 'Tech-focused growth ETF' },
      { name: 'Tesla / Nvidia', pct: 20, color: '#764ba2', desc: 'Top growth stocks' },
      { name: 'S&P 500 ETF', pct: 25, color: '#f093fb', desc: 'US market index' },
      { name: 'Emerging Markets ETF', pct: 15, color: '#4facfe', desc: 'High-growth markets' },
      { name: 'Bitcoin ETF', pct: 5, color: '#fa709a', desc: 'Alternative asset' },
    ],
    growth: [
      { name: 'S&P 500 ETF', pct: 35, color: '#667eea', desc: 'US market index' },
      { name: 'Nasdaq 100 ETF', pct: 25, color: '#764ba2', desc: 'Tech growth' },
      { name: 'Dividend Growth ETF', pct: 20, color: '#f093fb', desc: 'Dividends + growth' },
      { name: 'REITs', pct: 10, color: '#4facfe', desc: 'Real estate exposure' },
      { name: 'Bond ETF', pct: 10, color: '#43e97b', desc: 'Stability anchor' },
    ],
    balanced: [
      { name: 'S&P 500 ETF', pct: 30, color: '#667eea', desc: 'US market index' },
      { name: 'Dividend Growth ETF', pct: 25, color: '#764ba2', desc: 'Stable dividends' },
      { name: 'Bond ETF', pct: 20, color: '#f093fb', desc: 'Capital preservation' },
      { name: 'REITs', pct: 15, color: '#4facfe', desc: 'Real estate income' },
      { name: 'Nasdaq 100 ETF', pct: 10, color: '#43e97b', desc: 'Tech participation' },
    ],
    conservative: [
      { name: 'High Dividend ETF (SCHD)', pct: 35, color: '#667eea', desc: 'Stable dividend income' },
      { name: 'Bond ETF (BND)', pct: 25, color: '#764ba2', desc: 'Capital preservation' },
      { name: 'REITs (VNQ)', pct: 20, color: '#f093fb', desc: 'Real estate dividends' },
      { name: 'S&P 500 ETF', pct: 15, color: '#4facfe', desc: 'Minimum growth' },
      { name: 'Short-term Bond ETF', pct: 5, color: '#43e97b', desc: 'Cash-like asset' },
    ],
    very_conservative: [
      { name: 'Short-term Bond ETF', pct: 35, color: '#667eea', desc: 'Deposit alternative' },
      { name: 'High Dividend ETF', pct: 25, color: '#764ba2', desc: 'Stable dividends' },
      { name: 'Bond ETF (BND)', pct: 25, color: '#f093fb', desc: 'Capital preservation' },
      { name: 'S&P 500 ETF', pct: 10, color: '#4facfe', desc: 'Minimum growth' },
      { name: 'Cash / MMF', pct: 5, color: '#43e97b', desc: 'Liquidity' },
    ],
  },

  ko: {
    aggressive_growth: [
      { name: 'KODEX 나스닥100', pct: 30, color: '#667eea', desc: '미국 기술주 ETF' },
      { name: '삼성전자 / SK하이닉스', pct: 25, color: '#764ba2', desc: '반도체 대표주' },
      { name: 'TIGER S&P500', pct: 20, color: '#f093fb', desc: '미국 대표 지수' },
      { name: 'NAVER / 카카오', pct: 15, color: '#4facfe', desc: '국내 플랫폼 성장주' },
      { name: '신흥국 ETF', pct: 10, color: '#fa709a', desc: '고성장 시장' },
    ],
    growth: [
      { name: 'KODEX 200', pct: 30, color: '#667eea', desc: '코스피 대표 ETF' },
      { name: 'TIGER S&P500', pct: 25, color: '#764ba2', desc: '미국 대표 지수' },
      { name: '삼성전자', pct: 20, color: '#f093fb', desc: '국내 대장주' },
      { name: 'KODEX 배당성장', pct: 15, color: '#4facfe', desc: '배당+성장' },
      { name: '채권 ETF', pct: 10, color: '#43e97b', desc: '안정성 확보' },
    ],
    balanced: [
      { name: 'KODEX 200', pct: 25, color: '#667eea', desc: '코스피 대표 ETF' },
      { name: 'TIGER S&P500', pct: 25, color: '#764ba2', desc: '미국 대표 지수' },
      { name: 'KODEX 고배당', pct: 20, color: '#f093fb', desc: '안정적 배당' },
      { name: '채권 ETF', pct: 20, color: '#4facfe', desc: '원금 보존' },
      { name: 'TIGER 리츠', pct: 10, color: '#43e97b', desc: '부동산 간접' },
    ],
    conservative: [
      { name: 'KODEX 고배당', pct: 30, color: '#667eea', desc: '안정적 배당 수익' },
      { name: 'TIGER 국채', pct: 25, color: '#764ba2', desc: '원금 보존' },
      { name: 'KT&G / 신한지주', pct: 20, color: '#f093fb', desc: '고배당 우량주' },
      { name: 'KODEX 200', pct: 15, color: '#4facfe', desc: '최소 성장' },
      { name: '단기채 ETF', pct: 10, color: '#43e97b', desc: '현금성 자산' },
    ],
    very_conservative: [
      { name: 'KODEX 단기채권', pct: 35, color: '#667eea', desc: '예금 대안' },
      { name: 'TIGER 국채', pct: 25, color: '#764ba2', desc: '원금 보존' },
      { name: 'KODEX 고배당', pct: 20, color: '#f093fb', desc: '안정 배당' },
      { name: 'KT&G', pct: 10, color: '#4facfe', desc: '배당킹' },
      { name: '현금/MMF', pct: 10, color: '#43e97b', desc: '유동성 확보' },
    ],
  },

  zh: {
    aggressive_growth: [
      { name: '创业板ETF', pct: 30, color: '#667eea', desc: '高成长科技ETF' },
      { name: '宁德时代/比亚迪', pct: 25, color: '#764ba2', desc: '新能源龙头' },
      { name: '沪深300 ETF', pct: 20, color: '#f093fb', desc: 'A股核心指数' },
      { name: '腾讯/阿里巴巴', pct: 15, color: '#4facfe', desc: '互联网巨头' },
      { name: '黄金ETF', pct: 10, color: '#fa709a', desc: '另类资产' },
    ],
    growth: [
      { name: '沪深300 ETF', pct: 30, color: '#667eea', desc: 'A股核心指数' },
      { name: '中证500 ETF', pct: 25, color: '#764ba2', desc: '中小盘成长' },
      { name: '贵州茅台/招商银行', pct: 20, color: '#f093fb', desc: '核心蓝筹' },
      { name: '红利ETF', pct: 15, color: '#4facfe', desc: '分红+增长' },
      { name: '债券ETF', pct: 10, color: '#43e97b', desc: '稳定锚定' },
    ],
    balanced: [
      { name: '沪深300 ETF', pct: 25, color: '#667eea', desc: 'A股核心指数' },
      { name: '红利ETF', pct: 25, color: '#764ba2', desc: '稳定分红' },
      { name: '国债ETF', pct: 20, color: '#f093fb', desc: '本金保全' },
      { name: '招商银行/平安保险', pct: 20, color: '#4facfe', desc: '金融蓝筹' },
      { name: 'REITs基金', pct: 10, color: '#43e97b', desc: '不动产收益' },
    ],
    conservative: [
      { name: '红利ETF', pct: 30, color: '#667eea', desc: '稳定分红收益' },
      { name: '国债ETF', pct: 25, color: '#764ba2', desc: '本金保全' },
      { name: '长江电力/工商银行', pct: 20, color: '#f093fb', desc: '高股息蓝筹' },
      { name: '沪深300 ETF', pct: 15, color: '#4facfe', desc: '最低增长' },
      { name: '货币基金', pct: 10, color: '#43e97b', desc: '流动性管理' },
    ],
    very_conservative: [
      { name: '货币基金', pct: 35, color: '#667eea', desc: '存款替代' },
      { name: '国债ETF', pct: 25, color: '#764ba2', desc: '本金保全' },
      { name: '红利ETF', pct: 20, color: '#f093fb', desc: '稳定分红' },
      { name: '长江电力', pct: 10, color: '#4facfe', desc: '高股息蓝筹' },
      { name: '短期理财', pct: 10, color: '#43e97b', desc: '流动性' },
    ],
  },

  ja: {
    aggressive_growth: [
      { name: 'eMAXIS Slim 米国株式', pct: 30, color: '#667eea', desc: 'S&P500連動ファンド' },
      { name: 'ソニー/東京エレクトロン', pct: 25, color: '#764ba2', desc: '成長テック株' },
      { name: 'TOPIX ETF (1306)', pct: 20, color: '#f093fb', desc: '日本株式指数' },
      { name: 'キーエンス/ソフトバンクG', pct: 15, color: '#4facfe', desc: '日本成長株' },
      { name: '新興国株式ファンド', pct: 10, color: '#fa709a', desc: '高成長市場' },
    ],
    growth: [
      { name: 'TOPIX ETF (1306)', pct: 30, color: '#667eea', desc: '日本株式指数' },
      { name: 'eMAXIS Slim S&P500', pct: 25, color: '#764ba2', desc: '米国株式' },
      { name: 'トヨタ/ソニー', pct: 20, color: '#f093fb', desc: '日本代表銘柄' },
      { name: '高配当ETF (1489)', pct: 15, color: '#4facfe', desc: '配当+成長' },
      { name: '債券ファンド', pct: 10, color: '#43e97b', desc: '安定性確保' },
    ],
    balanced: [
      { name: 'TOPIX ETF', pct: 25, color: '#667eea', desc: '日本株式指数' },
      { name: 'eMAXIS Slim S&P500', pct: 25, color: '#764ba2', desc: '米国株式' },
      { name: '高配当ETF', pct: 20, color: '#f093fb', desc: '安定配当' },
      { name: '国内債券ETF (2510)', pct: 20, color: '#4facfe', desc: '元本保全' },
      { name: 'J-REIT ETF (1343)', pct: 10, color: '#43e97b', desc: '不動産収益' },
    ],
    conservative: [
      { name: '高配当ETF (1489)', pct: 30, color: '#667eea', desc: '安定配当収益' },
      { name: '国内債券ETF (2510)', pct: 25, color: '#764ba2', desc: '元本保全' },
      { name: 'NTT / KDDI', pct: 20, color: '#f093fb', desc: '高配当ディフェンシブ' },
      { name: 'TOPIX ETF', pct: 15, color: '#4facfe', desc: '最低限の成長' },
      { name: 'MRF/MMF', pct: 10, color: '#43e97b', desc: '流動性確保' },
    ],
    very_conservative: [
      { name: '国内債券ETF', pct: 35, color: '#667eea', desc: '預金代替' },
      { name: '高配当ETF', pct: 25, color: '#764ba2', desc: '安定配当' },
      { name: 'NTT / KDDI', pct: 20, color: '#f093fb', desc: '高配当優良株' },
      { name: 'TOPIX ETF', pct: 10, color: '#4facfe', desc: '最低限の成長' },
      { name: 'MRF/現金', pct: 10, color: '#43e97b', desc: '流動性' },
    ],
  },

  hi: {
    aggressive_growth: [
      { name: 'Nifty 50 ETF', pct: 25, color: '#667eea', desc: 'भारत टॉप 50 कंपनियाँ' },
      { name: 'Reliance / TCS', pct: 25, color: '#764ba2', desc: 'भारत की प्रमुख ग्रोथ कंपनियाँ' },
      { name: 'Nifty IT ETF', pct: 20, color: '#f093fb', desc: 'IT सेक्टर ग्रोथ' },
      { name: 'HDFC Bank / Bajaj Finance', pct: 20, color: '#4facfe', desc: 'फाइनेंस ग्रोथ' },
      { name: 'Gold ETF', pct: 10, color: '#fa709a', desc: 'वैकल्पिक संपत्ति' },
    ],
    growth: [
      { name: 'Nifty 50 ETF', pct: 30, color: '#667eea', desc: 'भारत का प्रमुख इंडेक्स' },
      { name: 'HDFC Bank / Infosys', pct: 25, color: '#764ba2', desc: 'ब्लू-चिप शेयर' },
      { name: 'Nifty Next 50 ETF', pct: 20, color: '#f093fb', desc: 'मिड-कैप ग्रोथ' },
      { name: 'Bharat Bond ETF', pct: 15, color: '#4facfe', desc: 'सरकारी बॉन्ड' },
      { name: 'Gold ETF', pct: 10, color: '#43e97b', desc: 'सुरक्षा' },
    ],
    balanced: [
      { name: 'Nifty 50 ETF', pct: 25, color: '#667eea', desc: 'कोर इंडेक्स' },
      { name: 'SBI ETF Nifty', pct: 20, color: '#764ba2', desc: 'विविध निवेश' },
      { name: 'Bharat Bond ETF', pct: 20, color: '#f093fb', desc: 'सरकारी बॉन्ड' },
      { name: 'ITC / Hindustan Unilever', pct: 20, color: '#4facfe', desc: 'FMCG डिविडेंड' },
      { name: 'Gold ETF', pct: 15, color: '#43e97b', desc: 'सुरक्षित संपत्ति' },
    ],
    conservative: [
      { name: 'Bharat Bond ETF', pct: 30, color: '#667eea', desc: 'सरकारी बॉन्ड - सुरक्षित' },
      { name: 'ITC / Power Grid', pct: 25, color: '#764ba2', desc: 'उच्च डिविडेंड' },
      { name: 'Nifty 50 ETF', pct: 20, color: '#f093fb', desc: 'न्यूनतम विकास' },
      { name: 'Gold ETF', pct: 15, color: '#4facfe', desc: 'सुरक्षित संपत्ति' },
      { name: 'Liquid Fund', pct: 10, color: '#43e97b', desc: 'तरलता' },
    ],
    very_conservative: [
      { name: 'Liquid Fund', pct: 30, color: '#667eea', desc: 'FD विकल्प' },
      { name: 'Bharat Bond ETF', pct: 25, color: '#764ba2', desc: 'सरकारी बॉन्ड' },
      { name: 'Gold ETF', pct: 20, color: '#f093fb', desc: 'सुरक्षित संपत्ति' },
      { name: 'ITC / NTPC', pct: 15, color: '#4facfe', desc: 'उच्च डिविडेंड' },
      { name: 'PPF / FD', pct: 10, color: '#43e97b', desc: 'गारंटीड रिटर्न' },
    ],
  },
};

const STOCK_RECOMMENDATIONS_BY_COUNTRY = {
  en: {
    aggressive_growth: [
      { icon: '🚀', name: 'Tesla (TSLA)', reason: 'AI, robotics & energy integrated growth', tag: 'Growth' },
      { icon: '🤖', name: 'Nvidia (NVDA)', reason: 'AI semiconductor market leader', tag: 'AI' },
      { icon: '☁️', name: 'Amazon (AMZN)', reason: 'AWS + e-commerce dual engine', tag: 'Big Tech' },
      { icon: '📱', name: 'Apple (AAPL)', reason: 'Ecosystem-driven stable growth', tag: 'Big Tech' },
      { icon: '💊', name: 'Eli Lilly (LLY)', reason: 'Obesity & diabetes drug breakout', tag: 'Biotech' },
    ],
    growth: [
      { icon: '📊', name: 'S&P 500 ETF (VOO)', reason: 'Top 500 US companies diversified', tag: 'ETF' },
      { icon: '💻', name: 'Microsoft (MSFT)', reason: 'AI + cloud stable growth', tag: 'Big Tech' },
      { icon: '🤖', name: 'Nvidia (NVDA)', reason: 'AI semiconductor core beneficiary', tag: 'AI' },
      { icon: '🏠', name: 'Realty Income (O)', reason: 'Monthly dividend REIT leader', tag: 'REIT' },
      { icon: '📈', name: 'QQQ ETF', reason: 'Nasdaq 100 tech growth', tag: 'ETF' },
    ],
    balanced: [
      { icon: '📊', name: 'S&P 500 ETF (VOO)', reason: 'US large-cap diversification', tag: 'ETF' },
      { icon: '💰', name: 'SCHD ETF', reason: 'US dividend growth ETF', tag: 'Dividend' },
      { icon: '💻', name: 'Microsoft (MSFT)', reason: 'Essential AI-era company', tag: 'Big Tech' },
      { icon: '🏠', name: 'VNQ (Real Estate ETF)', reason: 'REIT diversification', tag: 'REIT' },
      { icon: '🏥', name: 'Johnson & Johnson (JNJ)', reason: 'Defensive + steady dividends', tag: 'Dividend' },
    ],
    conservative: [
      { icon: '💰', name: 'SCHD ETF', reason: 'Top dividend growth ETF', tag: 'Dividend' },
      { icon: '🏠', name: 'Realty Income (O)', reason: 'Monthly dividend REIT', tag: 'Monthly Div' },
      { icon: '🏦', name: 'JP Morgan (JPM)', reason: 'Financial leader + high dividend', tag: 'Dividend' },
      { icon: '⚡', name: 'Coca-Cola (KO)', reason: '62 years of dividend increases', tag: 'Div King' },
      { icon: '📦', name: 'P&G (PG)', reason: 'Consumer staples stable dividend', tag: 'Div King' },
    ],
    very_conservative: [
      { icon: '🏦', name: 'BND (Bond ETF)', reason: 'Total US bond diversification', tag: 'Bond' },
      { icon: '💰', name: 'SCHD ETF', reason: 'Stable dividend growth', tag: 'Dividend' },
      { icon: '⚡', name: 'Coca-Cola (KO)', reason: 'Dividend King 62 years', tag: 'Div King' },
      { icon: '📦', name: 'P&G (PG)', reason: 'Recession-proof + steady dividends', tag: 'Staples' },
      { icon: '🏠', name: 'Realty Income (O)', reason: 'Monthly dividends for cash flow', tag: 'Monthly Div' },
    ],
  },

  ko: {
    aggressive_growth: [
      { icon: '🔬', name: '삼성전자 (005930)', reason: '반도체·AI 글로벌 리더', tag: '반도체' },
      { icon: '💾', name: 'SK하이닉스 (000660)', reason: 'HBM 메모리 핵심 수혜', tag: 'AI' },
      { icon: '🌐', name: 'NAVER (035420)', reason: '검색·AI·커머스 플랫폼', tag: '플랫폼' },
      { icon: '💬', name: '카카오 (035720)', reason: '생활 플랫폼 생태계', tag: '플랫폼' },
      { icon: '🔋', name: 'POSCO홀딩스 (005490)', reason: '이차전지 소재·철강', tag: '소재' },
    ],
    growth: [
      { icon: '📊', name: 'KODEX 200', reason: '코스피 대표 200종목 분산', tag: 'ETF' },
      { icon: '🔬', name: '삼성전자', reason: '국내 대장주 안정 성장', tag: '대장주' },
      { icon: '💾', name: 'SK하이닉스', reason: 'AI 반도체 수혜', tag: 'AI' },
      { icon: '🔋', name: '삼성SDI (006400)', reason: '이차전지 핵심 기업', tag: '2차전지' },
      { icon: '💊', name: '셀트리온 (068270)', reason: '바이오시밀러 글로벌 진출', tag: '바이오' },
    ],
    balanced: [
      { icon: '📊', name: 'KODEX 200', reason: '코스피 대표 ETF', tag: 'ETF' },
      { icon: '🇺🇸', name: 'TIGER S&P500', reason: '미국 시장 분산투자', tag: 'ETF' },
      { icon: '🔬', name: '삼성전자', reason: '국내 1등 기업', tag: '대장주' },
      { icon: '💰', name: 'KODEX 고배당', reason: '배당 수익 + 안정성', tag: '배당ETF' },
      { icon: '🏦', name: 'KB금융 (105560)', reason: '금융 대표주 + 배당', tag: '금융' },
    ],
    conservative: [
      { icon: '💰', name: 'KODEX 고배당', reason: '배당 중심 안정 ETF', tag: '배당ETF' },
      { icon: '🏦', name: 'TIGER 국채', reason: '국채 안정 수익', tag: '채권' },
      { icon: '🏢', name: '신한지주 (055550)', reason: '금융 안정 + 고배당', tag: '배당' },
      { icon: '🚬', name: 'KT&G (033780)', reason: '배당킹 + 방어주', tag: '배당킹' },
      { icon: '🔥', name: '삼성화재 (000810)', reason: '보험 대표 + 고배당', tag: '배당' },
    ],
    very_conservative: [
      { icon: '📄', name: 'KODEX 단기채권', reason: '예금 수준 안정성', tag: '단기채' },
      { icon: '🏦', name: 'TIGER 국채', reason: '국채 원금 보존', tag: '채권' },
      { icon: '🚬', name: 'KT&G', reason: '꾸준한 배당 지급', tag: '배당킹' },
      { icon: '🔥', name: '삼성화재', reason: '안정 배당 + 방어주', tag: '배당' },
      { icon: '💰', name: 'KOSEF 국고채', reason: '국고채 안전 투자', tag: '채권' },
    ],
  },

  zh: {
    aggressive_growth: [
      { icon: '🔋', name: '宁德时代 (300750)', reason: '全球动力电池龙头', tag: '新能源' },
      { icon: '🚗', name: '比亚迪 (002594)', reason: '新能源汽车领军企业', tag: '新能源' },
      { icon: '🍷', name: '贵州茅台 (600519)', reason: '消费品之王', tag: '消费' },
      { icon: '💬', name: '腾讯 (00700.HK)', reason: '互联网+游戏生态', tag: '互联网' },
      { icon: '🛒', name: '阿里巴巴 (09988.HK)', reason: '电商+云计算双引擎', tag: '互联网' },
    ],
    growth: [
      { icon: '📊', name: '沪深300 ETF (510300)', reason: 'A股核心300只个股', tag: 'ETF' },
      { icon: '🍷', name: '贵州茅台', reason: '消费蓝筹龙头', tag: '蓝筹' },
      { icon: '🏦', name: '招商银行 (600036)', reason: '零售银行龙头', tag: '金融' },
      { icon: '🏠', name: '美的集团 (000333)', reason: '家电龙头+智能制造', tag: '制造' },
      { icon: '☀️', name: '隆基绿能 (601012)', reason: '光伏产业龙头', tag: '新能源' },
    ],
    balanced: [
      { icon: '📊', name: '沪深300 ETF', reason: 'A股核心指数', tag: 'ETF' },
      { icon: '💰', name: '红利ETF', reason: '稳定分红收益', tag: '红利' },
      { icon: '🏦', name: '招商银行', reason: '金融蓝筹代表', tag: '金融' },
      { icon: '🛡️', name: '平安保险 (601318)', reason: '保险龙头+综合金融', tag: '保险' },
      { icon: '🏠', name: '格力电器 (000651)', reason: '家电龙头+高分红', tag: '消费' },
    ],
    conservative: [
      { icon: '💰', name: '红利ETF', reason: '高股息稳定收益', tag: '红利' },
      { icon: '🏦', name: '工商银行 (601398)', reason: '国有四大行+高分红', tag: '银行' },
      { icon: '⚡', name: '长江电力 (600900)', reason: '水电龙头+稳定分红', tag: '公用' },
      { icon: '🛡️', name: '平安保险', reason: '保险+综合金融', tag: '保险' },
      { icon: '🚂', name: '大秦铁路 (601006)', reason: '铁路运输+高分红', tag: '交运' },
    ],
    very_conservative: [
      { icon: '💵', name: '货币基金', reason: '活期存款替代', tag: '货基' },
      { icon: '📄', name: '国债ETF', reason: '国债安全投资', tag: '国债' },
      { icon: '🏦', name: '工商银行', reason: '国有银行+稳定分红', tag: '银行' },
      { icon: '⚡', name: '长江电力', reason: '公用事业+稳定现金流', tag: '公用' },
      { icon: '🏦', name: '中国银行 (601988)', reason: '国有银行安全边际', tag: '银行' },
    ],
  },

  ja: {
    aggressive_growth: [
      { icon: '🚗', name: 'トヨタ自動車 (7203)', reason: 'EV・水素で成長加速', tag: '自動車' },
      { icon: '🎮', name: 'ソニーG (6758)', reason: 'エンタメ・半導体の成長', tag: 'テック' },
      { icon: '🔬', name: 'キーエンス (6861)', reason: 'FA・センサー世界トップ', tag: '精密' },
      { icon: '💾', name: '東京エレクトロン (8035)', reason: '半導体製造装置リーダー', tag: '半導体' },
      { icon: '📱', name: 'ソフトバンクG (9984)', reason: 'AI投資ポートフォリオ', tag: 'IT' },
    ],
    growth: [
      { icon: '📊', name: 'TOPIX ETF (1306)', reason: '日本株式市場全体', tag: 'ETF' },
      { icon: '🎮', name: 'ソニーG', reason: 'エンタメ+半導体成長', tag: 'テック' },
      { icon: '🚗', name: 'トヨタ自動車', reason: '日本代表企業', tag: '自動車' },
      { icon: '🧪', name: '信越化学 (4063)', reason: '半導体素材世界シェア', tag: '化学' },
      { icon: '❄️', name: 'ダイキン工業 (6367)', reason: '空調世界トップ', tag: '機械' },
    ],
    balanced: [
      { icon: '📊', name: 'TOPIX ETF', reason: '日本株式全体', tag: 'ETF' },
      { icon: '🇺🇸', name: 'eMAXIS Slim S&P500', reason: '米国株式分散', tag: 'ファンド' },
      { icon: '🚗', name: 'トヨタ自動車', reason: '安定成長代表', tag: '自動車' },
      { icon: '📞', name: 'NTT (9432)', reason: '通信大手+安定配当', tag: '通信' },
      { icon: '🏦', name: '三菱UFJ (8306)', reason: '金融最大手+配当', tag: '金融' },
    ],
    conservative: [
      { icon: '📞', name: 'NTT (9432)', reason: '通信インフラ+安定配当', tag: '通信' },
      { icon: '📮', name: '日本郵政 (6178)', reason: '安定配当+ディフェンシブ', tag: '配当' },
      { icon: '📱', name: 'KDDI (9433)', reason: '通信大手+株主優待', tag: '通信' },
      { icon: '🏦', name: '三菱UFJ', reason: '金融最大手+高配当', tag: '金融' },
      { icon: '📄', name: '国内債券ETF (2510)', reason: '債券安定運用', tag: '債券' },
    ],
    very_conservative: [
      { icon: '📄', name: '国内債券ETF (2510)', reason: '預金代替の安定性', tag: '債券' },
      { icon: '💰', name: '高配当ETF (1489)', reason: '安定配当収益', tag: '配当' },
      { icon: '📞', name: 'NTT', reason: '通信+安定配当', tag: '通信' },
      { icon: '📱', name: 'KDDI', reason: '通信+株主優待', tag: '通信' },
      { icon: '📮', name: '日本郵政', reason: '安定+配当', tag: '配当' },
    ],
  },

  hi: {
    aggressive_growth: [
      { icon: '🛢️', name: 'Reliance Industries', reason: 'टेलीकॉम, रिटेल, एनर्जी विविधता', tag: 'कॉंग्लोमरेट' },
      { icon: '💻', name: 'TCS', reason: 'IT सर्विसेज़ ग्लोबल लीडर', tag: 'IT' },
      { icon: '💻', name: 'Infosys', reason: 'डिजिटल ट्रांसफॉर्मेशन', tag: 'IT' },
      { icon: '🏦', name: 'HDFC Bank', reason: 'प्राइवेट बैंकिंग लीडर', tag: 'बैंकिंग' },
      { icon: '🏢', name: 'Adani Enterprises', reason: 'इन्फ्रा + ग्रीन एनर्जी', tag: 'इन्फ्रा' },
    ],
    growth: [
      { icon: '📊', name: 'Nifty 50 ETF', reason: 'भारत टॉप 50 कंपनियाँ', tag: 'ETF' },
      { icon: '🏦', name: 'HDFC Bank', reason: 'प्रीमियम बैंकिंग फ्रैंचाइज़', tag: 'बैंकिंग' },
      { icon: '💻', name: 'Infosys', reason: 'IT ग्लोबल सर्विसेज़', tag: 'IT' },
      { icon: '🛢️', name: 'Reliance Industries', reason: 'विविध व्यवसाय पोर्टफोलियो', tag: 'कॉंग्लोमरेट' },
      { icon: '💳', name: 'Bajaj Finance', reason: 'फिनटेक + कंज्यूमर लेंडिंग', tag: 'NBFC' },
    ],
    balanced: [
      { icon: '📊', name: 'Nifty 50 ETF', reason: 'कोर इंडेक्स निवेश', tag: 'ETF' },
      { icon: '📊', name: 'SBI ETF Nifty', reason: 'SBI द्वारा विविध ETF', tag: 'ETF' },
      { icon: '🏦', name: 'HDFC Bank', reason: 'भारत का सबसे बड़ा प्राइवेट बैंक', tag: 'बैंकिंग' },
      { icon: '🚬', name: 'ITC', reason: 'FMCG + उच्च डिविडेंड', tag: 'FMCG' },
      { icon: '🧴', name: 'Hindustan Unilever', reason: 'कंज्यूमर स्टेपल्स लीडर', tag: 'FMCG' },
    ],
    conservative: [
      { icon: '📄', name: 'Bharat Bond ETF', reason: 'सरकारी PSU बॉन्ड', tag: 'बॉन्ड' },
      { icon: '🚬', name: 'ITC', reason: 'उच्च डिविडेंड + FMCG', tag: 'डिविडेंड' },
      { icon: '🧴', name: 'Hindustan Unilever', reason: 'स्थिर कंज्यूमर डिमांड', tag: 'FMCG' },
      { icon: '⚡', name: 'Power Grid Corp', reason: 'ट्रांसमिशन मोनोपॉली + डिविडेंड', tag: 'यूटिलिटी' },
      { icon: '⛏️', name: 'Coal India', reason: 'PSU + उच्चतम डिविडेंड', tag: 'PSU' },
    ],
    very_conservative: [
      { icon: '💵', name: 'Liquid Fund', reason: 'FD से बेहतर, तुरंत निकासी', tag: 'लिक्विड' },
      { icon: '📄', name: 'Bharat Bond ETF', reason: 'AAA रेटेड PSU बॉन्ड', tag: 'बॉन्ड' },
      { icon: '⚡', name: 'Power Grid Corp', reason: 'स्थिर कैश फ़्लो + डिविडेंड', tag: 'यूटिलिटी' },
      { icon: '🚬', name: 'ITC', reason: 'डिविडेंड किंग', tag: 'डिविडेंड' },
      { icon: '⚡', name: 'NTPC', reason: 'पावर सेक्टर PSU + डिविडेंड', tag: 'PSU' },
    ],
  },
};

// Helper functions
function getPortfolios(type) {
  const lang = getLang();
  return PORTFOLIOS_BY_COUNTRY[lang]?.[type] || PORTFOLIOS_BY_COUNTRY['en'][type];
}

function getStockRecommendations(type) {
  const lang = getLang();
  return STOCK_RECOMMENDATIONS_BY_COUNTRY[lang]?.[type] || STOCK_RECOMMENDATIONS_BY_COUNTRY['en'][type];
}
