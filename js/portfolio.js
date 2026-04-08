/**
 * MoneyFit - Chart.js 포트폴리오 차트
 */

function createPortfolioPieChart(portfolio) {
    const canvas = document.getElementById('portfolioPieChart');
    if (!canvas) return;

    if (window._portfolioChart) window._portfolioChart.destroy();

    const ctx = canvas.getContext('2d');

    const labelPlugin = {
        id: 'moneyfitDoughnutLabels',
        afterDatasetsDraw(chart) {
            const { ctx } = chart;
            const meta = chart.getDatasetMeta(0);
            if (!meta || !meta.data) return;

            ctx.save();
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';

            meta.data.forEach((arc, i) => {
                const val = chart.data.datasets[0].data[i];
                const label = chart.data.labels[i];
                if (!val || val <= 0) return;

                // If slice too small, skip to avoid clutter
                const angle = arc.endAngle - arc.startAngle;
                if (angle < 0.25) return;

                const p = arc.getProps(['x', 'y', 'startAngle', 'endAngle', 'innerRadius', 'outerRadius'], true);
                const mid = (p.startAngle + p.endAngle) / 2;
                const r = (p.innerRadius + p.outerRadius) / 2;
                const x = p.x + Math.cos(mid) * r;
                const y = p.y + Math.sin(mid) * r;

                ctx.fillStyle = '#2D3436';
                ctx.font = '800 12px Pretendard, sans-serif';
                ctx.fillText(String(label), x, y - 8);
                ctx.font = '900 13px Pretendard, sans-serif';
                ctx.fillText(`${val}%`, x, y + 10);
            });

            ctx.restore();
        }
    };

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
        },
        plugins: [labelPlugin]
    });
}
