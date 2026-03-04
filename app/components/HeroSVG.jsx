export default function HeroSVG() {
    const leaks = [
      'Skepticism-triggering copy',
      'Weak demo confirmations',
      'Sequences that stop too soon',
      'Deliverability leaks',
      'Comparison-triggering CTAs',
    ];
  
    return (
      <svg width="420" height="380" viewBox="0 0 420 380" xmlns="http://www.w3.org/2000/svg">
        {/* Funnel body */}
        <polygon points="60,20 360,20 300,340 120,340" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
        
        {/* Funnel fill */}
        <polygon points="60,20 360,20 300,340 120,340" fill="rgba(255,255,255,0.06)" />
  
        {/* Top label */}
        <text x="210" y="14" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="600" fontSize="12" fill="rgba(255,255,255,0.8)">PIPELINE IN</text>
  
        {/* 5 leak points */}
        {leaks.map((label, i) => {
          const y = 48 + i * 58;
          const leftX = 80 + i * 14;
          const rightX = 340 - i * 14;
          const leakSide = i % 2 === 0 ? 'right' : 'left';
          const dotX = leakSide === 'right' ? rightX : leftX;
          const textX = leakSide === 'right' ? dotX + 12 : dotX - 12;
          const textAnchor = leakSide === 'right' ? 'start' : 'end';
  
          return (
            <g key={i}>
              {/* Horizontal leak line */}
              <line
                x1={leakSide === 'right' ? dotX : dotX - 30}
                y1={y}
                x2={leakSide === 'right' ? dotX + 30 : dotX}
                y2={y}
                stroke="#b34d19" strokeWidth="1.5" strokeDasharray="3,2" />
              {/* Leak dot */}
              <circle cx={dotX} cy={y} r="5" fill="#b34d19" />
              {/* Drop indicator */}
              <polygon
                points={`${leakSide === 'right' ? dotX + 30 : dotX - 30},${y - 5} ${leakSide === 'right' ? dotX + 38 : dotX - 38},${y} ${leakSide === 'right' ? dotX + 30 : dotX - 30},${y + 5}`}
                fill="#b34d19" />
              {/* Label */}
              <text x={textX + (leakSide === 'right' ? 28 : -28)} y={y + 5} textAnchor={textAnchor} fontFamily="Inter, sans-serif" fontSize="10" fill="rgba(255,255,255,0.85)">{label}</text>
            </g>
          );
        })}
  
        {/* Bottom label */}
        <text x="210" y="368" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="600" fontSize="11" fill="rgba(255,255,255,0.5)">CLOSED DEALS</text>
      </svg>
    );
  }