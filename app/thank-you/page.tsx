'use client';
import { useEffect } from 'react';
import Link from 'next/link';
export default function ThankYou() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const firstName = params.get('first_name');
    const headline = document.getElementById('thank-you-headline');
    if (headline) {
      if (firstName) {
        headline.textContent = `You're in, ${firstName}! Your Checklist is On Its Way.`;
      } else {
        headline.textContent = "You're in! Your Checklist is On Its Way.";
      }
    }
  }, []);

  return (
    <>
      {/* 7.2 HERO */}
      <section style={{ backgroundColor: '#fcfcfc', padding: '80px 24px' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <h1 id="thank-you-headline" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 'clamp(32px, 4vw, 46px)', color: '#003366', lineHeight: 1.2, marginBottom: '24px' }}>
            You're in! Your Checklist is On Its Way.
          </h1>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px', lineHeight: 1.6, color: '#4b4b4b' }}>
            Check your inbox — it should arrive in the next few minutes. If you don't see it, check your spam folder and mark it as "not spam" so future emails land where they should.
          </p>
        </div>
      </section>

      {/* 7.3 WHAT TO DO NEXT */}
      <section style={{ backgroundColor: '#ffffff', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 'clamp(30px, 4vw, 38px)', color: '#003366', textAlign: 'center', marginBottom: '48px' }}>
            Here's What to Do Next:
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {[
              { n: '1', title: 'Confirm your subscription', body: 'Check your email for a confirmation message and click the link inside. This ensures your checklist gets through and you stay on the list.' },
              { n: '2', title: 'Download your checklist', body: 'Open the checklist and run through all 5 pillars. It takes about 10 minutes — set aside focused time so you can be honest with yourself.' },
              { n: '3', title: 'Calculate your score', body: 'Each pillar has 3 checkboxes. Count how many you can check "yes" to. Your score is out of 15.' },
              { n: '4', title: 'Read your result', body: 'Below 10: Your conversion infrastructure has multiple active leaks — you\'re likely losing 30–40% of qualified pipeline. 10 or above: Your foundations are solid, but even one leaking pillar can cost you deals in a 30–90 day sales cycle.' },
            ].map((item, i) => (
              <div key={i} style={{ backgroundColor: '#ffffff', borderTop: '3px solid #003366', padding: '32px', borderRadius: '0 0 8px 8px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
                <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '32px', color: '#b34d19', display: 'block', marginBottom: '12px' }}>{item.n}</span>
                <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '18px', color: '#003366', marginBottom: '12px' }}>{item.title}</h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px', lineHeight: 1.6, color: '#4b4b4b', margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7.4 TRANSITION LINE */}
      <section style={{ backgroundColor: '#fcfcfc', padding: '64px 24px' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: 1.6, color: '#003366' }}>
            Either way, here's what's possible when the whole system works.
          </p>
        </div>
      </section>

      {/* 7.5 BOOKING SECTION */}
      <section style={{ backgroundColor: '#003366', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '64px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <div style={{ flexShrink: 0 }}>
            <img
              src="/images/headshot-thankyou.jpg"
              alt="Iheoma Oparaugo"
              style={{ width: '200px', height: '200px', borderRadius: '50%', objectFit: 'cover', objectPosition: 'top', border: '4px solid rgba(255,255,255,0.2)', boxShadow: '0 4px 24px rgba(0,0,0,0.2)' }}
            />
          </div>
          <div style={{ flex: '1', minWidth: '280px', maxWidth: '560px' }}>
            <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 'clamp(28px, 4vw, 38px)', color: '#ffffff', marginBottom: '8px' }}>
              Ready to Plug Those Leaks?
            </h2>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '16px', color: '#b34d19', marginBottom: '4px' }}>
              Iheoma Oparaugo
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: 'rgba(255,255,255,0.7)', marginBottom: '24px' }}>
              Conversion Infrastructure Specialist — HR Tech & Health Tech
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px', lineHeight: 1.6, color: 'rgba(255,255,255,0.9)', marginBottom: '16px' }}>
              I only take on 2 clients per month for full conversion engine rebuilds — complete audit and implementation in four weeks.
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px', lineHeight: 1.6, color: 'rgba(255,255,255,0.9)', marginBottom: '32px' }}>
              If you'd like to see what a full rebuild would look like for your pipeline, book a free 30-minute Revenue Leak Diagnostic below. We'll map your gaps and you'll leave with a clear picture of what needs fixing.
            </p>
            <Link href="https://calendly.com/fixyouremailmarketing/30mins" target="_blank" rel="noopener noreferrer"
              style={{ backgroundColor: '#b34d19', color: '#ffffff', fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '16px', padding: '16px 32px', borderRadius: '6px', textDecoration: 'none', display: 'inline-block' }}>
              Book My Diagnostic Call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}