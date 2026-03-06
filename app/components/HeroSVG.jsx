export default function HeroSVG() {
  const leaks = [
    ['Skepticism-triggering', 'copy'],
    ['Weak demo', 'confirmations'],
    ['Sequences that', 'stop too soon'],
    ['Deliverability', 'leaks'],
    ['Comparison-', 'triggering CTAs'],
  ];

  return (
    <svg width="420" height="380" viewBox="0 0 420 380" xmlns="http://www.w3.org/2000/svg">
      <text x="210" y="14" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="600" fontSize="11" fill="rgba(255,255,255,0.8)">PIPELINE IN</text>
      <polygon points="90,22 330,22 275,340 145,340" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>

      {leaks.map((lines, i) => {
        const y = 55 + i * 58;
        const leftX = 105 + i * 13;
        const rightX = 315 - i * 13;
        const leakSide = i % 2 === 0 ? 'right' : 'left';
        const dotX = leakSide === 'right' ? rightX : leftX;
        const lineEnd = leakSide === 'right' ? dotX + 20 : dotX - 20;
        const textX = leakSide === 'right' ? dotX + 26 : dotX - 26;
        const textAnchor = leakSide === 'right' ? 'start' : 'end';
        const arrowPoints = leakSide === 'right'
          ? `${lineEnd},${y - 4} ${lineEnd + 7},${y} ${lineEnd},${y + 4}`
          : `${lineEnd},${y - 4} ${lineEnd - 7},${y} ${lineEnd},${y + 4}`;

        return (
          <g key={i}>
            <line x1={dotX} y1={y} x2={lineEnd} y2={y} stroke="#b34d19" strokeWidth="1.5" strokeDasharray="3,2"/>
            <circle cx={dotX} cy={y} r="5" fill="#b34d19"/>
            <polygon points={arrowPoints} fill="#b34d19"/>
            <text x={textX} y={y - 3} textAnchor={textAnchor} fontFamily="Inter, sans-serif" fontSize="10" fill="rgba(255,255,255,0.9)">{lines[0]}</text>
            <text x={textX} y={y + 10} textAnchor={textAnchor} fontFamily="Inter, sans-serif" fontSize="10" fill="rgba(255,255,255,0.9)">{lines[1]}</text>
          </g>
        );
      })}

      <text x="210" y="368" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="600" fontSize="11" fill="rgba(255,255,255,0.5)">CLOSED DEALS</text>
    </svg>
  );
}