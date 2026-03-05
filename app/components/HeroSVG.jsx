export default function HeroSVG() {
  const leaks = [
    'Skepticism-triggering copy',
    'Weak demo confirmations',
    'Sequences that stop too soon',
    'Deliverability leaks',
    'Comparison-triggering CTAs',
  ];

  return (
    <svg width="480" height="400" viewBox="0 0 480 400" xmlns="http://www.w3.org/2000/svg">
      {/* Funnel body */}
      <polygon points="80,20 400,20 330,360 150,360" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />

      {/* Top label */}
      <text x="240" y="14" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="600" fontSize="12" fill="rgba(255,255,255,0.8)">PIPELINE IN</text>

      {/* 5 leak points */}
      {leaks.map((label, i) => {
        const y = 52 + i * 60;
        const leftX = 100 + i * 14;
        const rightX = 360 - i * 14;
        const leakSide = i % 2 === 0 ? 'right' : 'left';
        const dotX = leakSide === 'right' ? rightX : leftX;
        const lineStart = leakSide === 'right' ? dotX : dotX - 24;
        const lineEnd = leakSide === 'right' ? dotX + 24 : dotX;
        const textX = leakSide === 'right' ? dotX + 30 : dotX - 30;
        const textAnchor = leakSide === 'right' ? 'start' : 'end';

        return (
          <g key={i}>
            <line x1={lineStart} y1={y} x2={lineEnd} y2={y} stroke="#b34d19" strokeWidth="1.5" strokeDasharray="3,2" />
            <circle cx={dotX} cy={y} r="5" fill="#b34d19" />
            <polygon
              points={`${leakSide === 'right' ? lineEnd : lineStart},${y - 5} ${leakSide === 'right' ? lineEnd + 8 : lineStart - 8},${y} ${leakSide === 'right' ? lineEnd : lineStart},${y + 5}`}
              fill="#b34d19" />
            <text x={textX} y={y + 5} textAnchor={textAnchor} fontFamily="Inter, sans-serif" fontSize="11" fill="rgba(255,255,255,0.9)">{label}</text>
          </g>
        );
      })}

      {/* Bottom label */}
      <text x="240" y="385" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="600" fontSize="11" fill="rgba(255,255,255,0.5)">CLOSED DEALS</text>
    </svg>
  );
}