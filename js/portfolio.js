/**
 * MoneyFit - 포트폴리오 차트 생성
 * Chart.js를 이용한 시각화
 */

/**
 * 포트폴리오 파이 차트 생성
 * @param {Array} portfolio - 포트폴리오 데이터 배열
 */
function createPortfolioPieChart(portfolio) {
    const canvas = document.getElementById('portfolioPieChart');

    if (!canvas) {
        console.error('portfolioPieChart 캔버스를 찾을 수 없습니다.');
        return;
    }

    // 기존 차트가 있으면 파괴
    if (window.portfolioChart) {
        window.portfolioChart.destroy();
    }

    const ctx = canvas.getContext('2d');

    // 데이터 준비
    const labels = portfolio.map(item => item.name);
    const data = portfolio.map(item => item.percentage);
    const backgroundColor = portfolio.map(item => item.color);

    // Chart.js 차트 생성
    window.portfolioChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: backgroundColor,
                borderWidth: 0,
                hoverOffset: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 1,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 15,
                        font: {
                            family: 'Pretendard',
                            size: 13,
                            weight: '600'
                        },
                        color: '#191F28',
                        usePointStyle: true,
                        pointStyle: 'circle',
                        boxWidth: 8,
                        boxHeight: 8
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    padding: 12,
                    cornerRadius: 8,
                    titleFont: {
                        family: 'Pretendard',
                        size: 14,
                        weight: '700'
                    },
                    bodyFont: {
                        family: 'Pretendard',
                        size: 13,
                        weight: '500'
                    },
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.parsed || 0;
                            return `${label}: ${value}%`;
                        }
                    }
                }
            },
            cutout: '60%',
            animation: {
                animateRotate: true,
                animateScale: true,
                duration: 1000,
                easing: 'easeOutQuart'
            }
        }
    });
}

/**
 * 수익률 라인 차트 생성 (옵션 - 미래 확장용)
 * @param {Array} historicalData - 과거 수익률 데이터
 */
function createPerformanceLineChart(historicalData) {
    const canvas = document.getElementById('performanceLineChart');

    if (!canvas) {
        return;
    }

    const ctx = canvas.getContext('2d');

    const labels = historicalData.map(item => item.year);
    const data = historicalData.map(item => item.return);

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: '연간 수익률',
                data: data,
                borderColor: '#0066FF',
                backgroundColor: 'rgba(0, 102, 255, 0.1)',
                borderWidth: 3,
                tension: 0.4,
                fill: true,
                pointRadius: 4,
                pointHoverRadius: 6,
                pointBackgroundColor: '#0066FF',
                pointBorderColor: '#fff',
                pointBorderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 2,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    padding: 12,
                    cornerRadius: 8,
                    callbacks: {
                        label: function(context) {
                            return `수익률: ${context.parsed.y > 0 ? '+' : ''}${context.parsed.y}%`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        },
                        font: {
                            family: 'Pretendard',
                            size: 12
                        },
                        color: '#8B95A1'
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                },
                x: {
                    ticks: {
                        font: {
                            family: 'Pretendard',
                            size: 12
                        },
                        color: '#8B95A1'
                    },
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

/**
 * 애니메이션 숫자 카운터
 * @param {HTMLElement} element - 대상 엘리먼트
 * @param {number} start - 시작 값
 * @param {number} end - 종료 값
 * @param {number} duration - 애니메이션 시간 (ms)
 * @param {string} suffix - 접미사 (%, 원 등)
 */
function animateNumber(element, start, end, duration, suffix = '') {
    if (!element) return;

    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
            current = end;
            clearInterval(timer);
        }

        // 숫자 포맷팅
        const displayValue = current >= 1000
            ? (current / 10000).toFixed(1) + '만'
            : Math.round(current).toString();

        element.textContent = displayValue + suffix;
    }, 16);
}

/**
 * 포트폴리오 비교 차트 (막대 차트)
 * @param {Object} userPortfolio - 사용자 포트폴리오
 * @param {Object} benchmarkPortfolio - 벤치마크 포트폴리오
 */
function createComparisonChart(userPortfolio, benchmarkPortfolio) {
    const canvas = document.getElementById('comparisonChart');

    if (!canvas) {
        return;
    }

    const ctx = canvas.getContext('2d');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['연수익률', '위험도', '현금흐름'],
            datasets: [
                {
                    label: '내 포트폴리오',
                    data: [
                        userPortfolio.return,
                        userPortfolio.risk,
                        userPortfolio.cashflow
                    ],
                    backgroundColor: 'rgba(0, 102, 255, 0.8)',
                    borderRadius: 8
                },
                {
                    label: 'S&P500',
                    data: [
                        benchmarkPortfolio.return,
                        benchmarkPortfolio.risk,
                        benchmarkPortfolio.cashflow
                    ],
                    backgroundColor: 'rgba(139, 149, 161, 0.5)',
                    borderRadius: 8
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 1.5,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        font: {
                            family: 'Pretendard',
                            size: 13,
                            weight: '600'
                        },
                        usePointStyle: true,
                        padding: 15
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        font: {
                            family: 'Pretendard',
                            size: 12
                        }
                    }
                },
                x: {
                    ticks: {
                        font: {
                            family: 'Pretendard',
                            size: 12
                        }
                    }
                }
            }
        }
    });
}

/**
 * 자산 성장 시뮬레이션 차트
 * @param {number} initialAmount - 초기 투자금
 * @param {number} monthlyContribution - 월 적립금
 * @param {number} annualReturn - 연 수익률 (%)
 * @param {number} years - 투자 기간 (년)
 */
function createGrowthSimulationChart(initialAmount, monthlyContribution, annualReturn, years) {
    const canvas = document.getElementById('growthChart');

    if (!canvas) {
        return;
    }

    const ctx = canvas.getContext('2d');

    // 데이터 계산
    const monthlyReturn = annualReturn / 12 / 100;
    const months = years * 12;

    const labels = [];
    const data = [];

    let currentValue = initialAmount;

    for (let month = 0; month <= months; month++) {
        if (month % 12 === 0) {
            labels.push(`${month / 12}년`);
            data.push(Math.round(currentValue));
        }

        if (month > 0) {
            currentValue = (currentValue + monthlyContribution) * (1 + monthlyReturn);
        }
    }

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: '예상 자산',
                data: data,
                borderColor: '#00C896',
                backgroundColor: 'rgba(0, 200, 150, 0.1)',
                borderWidth: 3,
                tension: 0.4,
                fill: true,
                pointRadius: 4,
                pointHoverRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 2,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const value = context.parsed.y;
                            return `${(value / 10000).toFixed(0)}만원`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return (value / 10000) + '만';
                        },
                        font: {
                            family: 'Pretendard',
                            size: 12
                        }
                    }
                },
                x: {
                    ticks: {
                        font: {
                            family: 'Pretendard',
                            size: 12
                        }
                    }
                }
            }
        }
    });
}

// Export functions for global use
if (typeof window !== 'undefined') {
    window.createPortfolioPieChart = createPortfolioPieChart;
    window.createPerformanceLineChart = createPerformanceLineChart;
    window.animateNumber = animateNumber;
    window.createComparisonChart = createComparisonChart;
    window.createGrowthSimulationChart = createGrowthSimulationChart;
}
