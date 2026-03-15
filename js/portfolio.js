/**
 * MoneyFit - Chart.js 포트폴리오 차트
 */

function createPortfolioPieChart(portfolio) {
    const canvas = document.getElementById('portfolioPieChart');
    if (!canvas) return;

    if (window._portfolioChart) window._portfolioChart.destroy();

    const ctx = canvas.getContext('2d');

    window._portfolioChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: portfolio.map(p => p.name),
            datasets: [{
                data: portfolio.map(p => p.pct),
                backgroundColor: portfolio.map(p => p.color),
                borderWidth: 0,
                hoverOffset: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 1,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    padding: 10,
                    cornerRadius: 8,
                    titleFont: { family: 'Pretendard', size: 13, weight: '700' },
                    bodyFont: { family: 'Pretendard', size: 12 },
                    callbacks: {
                        label: function(ctx) {
                            return `${ctx.label}: ${ctx.parsed}%`;
                        }
                    }
                }
            },
            cutout: '62%',
            animation: {
                animateRotate: true,
                animateScale: true,
                duration: 800,
                easing: 'easeOutQuart'
            }
        }
    });
}
