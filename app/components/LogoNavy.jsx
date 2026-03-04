export default function LogoNavy() {
    return (
      <svg width="220" height="44" viewBox="0 0 220 44" xmlns="http://www.w3.org/2000/svg">
        {/* Iheoma - Bold */}
        <text x="0" y="28" fontFamily="Montserrat, sans-serif" fontWeight="700" fontSize="22" fill="#003366">
          Iheoma
        </text>
        {/* Oparaugo - Light weight */}
        <text x="0" y="28" fontFamily="Montserrat, sans-serif" fontWeight="300" fontSize="22" fill="#003366" dx="95">
          Oparaugo
        </text>
        {/* Thin line under Oparaugo only */}
        <line x1="95" y1="32" x2="218" y2="32" stroke="#cccccc" strokeWidth="1"/>
      </svg>
    );
  }