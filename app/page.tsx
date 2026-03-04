import Link from 'next/link';
import HeroSVG from './components/HeroSVG';

export default function Home() {
  return (
    <>
      {/* 3.1 HERO */}
      <section style={{ backgroundColor: '#003366', padding: '120px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '48px', flexWrap: 'wrap' }}>
          
          {/* Left: Copy */}
          <div style={{ flex: '1', minWidth: '300px', maxWidth: '620px' }}>
            <h1 style={{ color: '#ffffff', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 'clamp(38px, 5vw, 58px)', lineHeight: 1.2, marginBottom: '24px' }}>
              Plug the 40% Revenue Leak in Your Sales Pipeline
            </h1>
            <p style={{ color: '#ffffff', fontFamily: 'Inter, sans-serif', fontSize: '17px', lineHeight: 1.6, marginBottom: '40px', maxWidth: '560px' }}>
              I help HR Tech and Health Tech companies plug the 5 critical gaps between "demo request" and "closed deal" — so you stop wasting pipeline you've already earned.
            </p>
            <Link
              href="https://calendly.com/fixyouremailmarketing/30mins"
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundColor: '#b34d19', color: '#ffffff', fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '16px', padding: '16px 32px', borderRadius: '6px', textDecoration: 'none', display: 'inline-block' }}>
              Book My Free Diagnostic Call
            </Link>
          </div>

          {/* Right: SVG Funnel */}
          <div style={{ flex: '1', minWidth: '280px', display: 'flex', justifyContent: 'center' }}>
            <HeroSVG />
          </div>
        </div>
      </section>

      {/* 3.2 THE 5 GAPS */}
      <section style={{ backgroundColor: '#fcfcfc', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px', lineHeight: 1.6, color: '#4b4b4b', maxWidth: '720px', marginBottom: '40px' }}>
            I've audited 50+ B2B SaaS conversion funnels and found the same 5 places where qualified leads quietly disappear:
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '720px', marginBottom: '48px' }}>
            {[
              'Feature-focused messaging that triggers skepticism instead of "Positive Silence"',
              'Demo confirmations that don\'t reinforce why prospects booked in the first place',
              'Follow-up sequences that stop at 2 touches — when 60% of deals close between touches 4 and 12',
              'Deliverability leaks that route your best emails straight to spam',
              '"See Our Features" CTAs that send prospects comparison shopping instead of forward',
            ].map((gap, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', borderLeft: '3px solid #b34d19', paddingLeft: '20px' }}>
                <span style={{ color: '#b34d19', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '18px', minWidth: '24px', lineHeight: 1.6 }}>{i + 1}</span>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px', lineHeight: 1.6, color: '#4b4b4b', margin: 0 }}>{gap}</p>
              </div>
            ))}
          </div>

          <div style={{ maxWidth: '720px' }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px', lineHeight: 1.6, color: '#4b4b4b', marginBottom: '16px' }}>
              If you're getting 50+ demo requests per month but closing fewer than 20%, you don't have a lead gen problem. You have a conversion infrastructure problem.
            </p>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '22px', color: '#003366', margin: 0 }}>
              That's what I fix.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}