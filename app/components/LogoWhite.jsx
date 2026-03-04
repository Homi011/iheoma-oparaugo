export default function LogoWhite() {
    return (
      <svg width="220" height="48" viewBox="0 0 220 48" xmlns="http://www.w3.org/2000/svg">
        {/* Iheoma - Bold */}
        <text x="0" y="26" fontFamily="Montserrat, sans-serif" fontWeight="700" fontSize="22" fill="#ffffff">
          Iheoma
        </text>
        {/* Oparaugo - Medium */}
        <text x="95" y="26" fontFamily="Montserrat, sans-serif" fontWeight="500" fontSize="22" fill="#ffffff">
          Oparaugo
        </text>
        {/* Thin line under Oparaugo — dropped below text */}
        <line x1="95" y1="34" x2="196" y2="34" stroke="rgba(255,255,255,0.6)" strokeWidth="1"/>
      </svg>
    );
  }