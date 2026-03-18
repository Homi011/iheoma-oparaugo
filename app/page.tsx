'use client';
import { useEffect } from 'react';
import Link from 'next/link';

import HeroSVG from './components/HeroSVG.jsx';

export default function Home() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://iheoma-oparaugo.kit.com/bc5e0828cc/index.js';
    script.async = true;
    script.setAttribute('data-uid', 'bc5e0828cc');
    document.getElementById('kit-embed')?.appendChild(script);
  }, []);
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
            <Link href="https://tidycal.com/iheomaoparaugo1/email-revenue-diagnosis-call" target="_blank" rel="noopener noreferrer"
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
      <section style={{ backgroundColor: '#fcfcfc', padding: '48px 24px' }}>
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

      {/* 3.3 WHO I WORK WITH */}
      <section style={{ backgroundColor: '#ffffff', padding: '48px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 'clamp(30px, 4vw, 38px)', color: '#003366', marginBottom: '16px' }}>
            Who I Work With
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px', lineHeight: 1.6, color: '#4b4b4b', maxWidth: '720px', marginBottom: '48px' }}>
            I specialize in conversion infrastructure for B2B SaaS companies in two verticals:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', maxWidth: '1000px' }}>
            <div style={{ backgroundColor: '#003366', borderRadius: '8px', padding: '40px', color: '#ffffff', boxShadow: '0 4px 16px rgba(0,0,0,0.10)' }}>
              <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '26px', color: '#ffffff', marginBottom: '16px' }}>HR Tech Platforms</h3>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px', lineHeight: 1.6, color: 'rgba(255,255,255,0.9)', marginBottom: '24px' }}>
                Your buyers aren't just evaluating software — they're managing internal resistance. Legal, IT, and HR leadership all have to sign off before anyone says yes. The objections that quietly kill HR Tech deals sound like:
              </p>
              {['"What if we lose candidate or employee data?"', '"What if this doesn\'t integrate with our HRIS?"', '"What if our team never actually adopts it?"'].map((o, i) => (
                <p key={i} style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', lineHeight: 1.6, color: 'rgba(255,255,255,0.75)', fontStyle: 'italic', marginBottom: '8px' }}>{o}</p>
              ))}
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px', lineHeight: 1.6, color: 'rgba(255,255,255,0.9)', marginTop: '24px' }}>
                These aren't feature questions. They're trust gaps. I build the sequences and messaging frameworks that close them before they become deal-blockers.
              </p>
            </div>
            <div style={{ backgroundColor: '#b34d19', borderRadius: '8px', padding: '40px', color: '#ffffff', boxShadow: '0 4px 16px rgba(0,0,0,0.10)' }}>
              <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '26px', color: '#ffffff', marginBottom: '16px' }}>Health Tech Platforms</h3>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px', lineHeight: 1.6, color: 'rgba(255,255,255,0.9)', marginBottom: '24px' }}>
                Health Tech buyers carry weight that most SaaS buyers don't. Their decisions touch patient outcomes, clinical workflows, and regulatory standing. The questions that stall Health Tech deals sound like:
              </p>
              {['"What if this violates HIPAA?"', '"What if it disrupts patient care or clinical workflows?"', '"How do we get our compliance team on board?"'].map((o, i) => (
                <p key={i} style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', lineHeight: 1.6, color: 'rgba(255,255,255,0.75)', fontStyle: 'italic', marginBottom: '8px' }}>{o}</p>
              ))}
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px', lineHeight: 1.6, color: 'rgba(255,255,255,0.9)', marginTop: '24px' }}>
                The stakes are high and the scrutiny is higher. I craft conversion sequences that speak directly to these anxieties — turning cautious, committee-driven buyers into confident ones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3.4 WHAT THESE INDUSTRIES SHARE */}
      <section style={{ backgroundColor: '#003366', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 'clamp(30px, 4vw, 38px)', color: '#ffffff', marginBottom: '16px' }}>
            What These Industries Share
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px', lineHeight: 1.6, color: 'rgba(255,255,255,0.9)', maxWidth: '720px', marginBottom: '40px' }}>
            These verticals aren't coincidentally similar — they're structurally alike in the ways that matter most for conversion:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '720px', marginBottom: '48px' }}>
            {[
              'High-stakes decisions that affect people\'s data, wellbeing, and compliance standing',
              'Risk-averse buyers with multiple internal stakeholders',
              'Regulatory exposure — GDPR, SOC2, HIPAA — that slows every "yes"',
              'Demo-driven or trial-based sales models where the handoff is everything',
              'Consideration cycles running 30 to 90+ days',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ minWidth: '24px', marginTop: '2px' }}>
                  <circle cx="12" cy="12" r="10" stroke="#b34d19" strokeWidth="2"/>
                  <path d="M8 12l3 3 5-5" stroke="#b34d19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px', lineHeight: 1.6, color: 'rgba(255,255,255,0.9)', margin: 0 }}>{item}</p>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px', lineHeight: 1.6, color: 'rgba(255,255,255,0.75)', fontStyle: 'italic', maxWidth: '720px', borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '32px' }}>
            If you're in a different B2B SaaS vertical but recognize this profile — complex sales, compliance-conscious buyers, high switching costs — my methodology can still apply. Let's talk.
          </p>
        </div>
      </section>

      {/* 3.5 SOLUTION STATEMENT */}
      <section style={{ backgroundColor: '#ffffff', padding: '80px 24px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: 'clamp(22px, 3vw, 26px)', color: '#b34d19', marginBottom: '24px' }}>
            What changes when your conversion infrastructure actually works
          </h3>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px', lineHeight: 1.6, color: '#4b4b4b', marginBottom: '24px' }}>
            Most HR Tech and Health Tech teams lose deals not because their product is weak — but because their emails don't speak to what their buyers are actually afraid of.
          </p>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px', lineHeight: 1.6, color: '#4b4b4b', marginBottom: '24px' }}>
            When your sequences are built around real buyer psychology — the specific anxieties, objections, and trust signals that move your ICP — something shifts. Prospects stop going quiet after the demo. Follow-ups get replies instead of silence. Trial users who were drifting start engaging. Deals that used to stall at the 30-day mark start closing.
          </p>
          <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '22px', color: '#003366' }}>
            That's not a pipeline problem solved. That's a revenue system rebuilt.
          </p>
        </div>
      </section>
      {/* 3.6 DIFFERENTIATOR */}
      <section style={{ backgroundColor: '#fcfcfc', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 'clamp(30px, 4vw, 38px)', color: '#003366', marginBottom: '16px' }}>
            Why this isn't like hiring a copywriter
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px', lineHeight: 1.6, color: '#4b4b4b', maxWidth: '720px', marginBottom: '48px' }}>
            Most email copywriters hand you polished words. I hand you a working conversion system.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '860px' }}>
            {[
              { title: 'I start with your buyers, not a blank doc.', body: 'Before I write a single line, I do Voice of Customer research — pulling the exact language your buyers use when they\'re frustrated, uncertain, or ready to move. Your emails end up sounding less like marketing and more like someone who genuinely understands the problem.' },
              { title: 'I build for your funnel specifically.', body: 'No templates. No recycled playbooks. Your competitors have different weaknesses. Your buyers have different fears. Your conversion system should reflect that — and mine does.' },
              { title: 'I operate in your buyer\'s world.', body: 'HR Tech and Health Tech aren\'t interchangeable with other SaaS verticals. The compliance anxieties, the stakeholder dynamics, the language that builds trust in these spaces — I know it, and I write for it.' },
            ].map((item, i) => (
              <div key={i} style={{ backgroundColor: '#ffffff', borderTop: '3px solid #b34d19', padding: '32px', borderRadius: '0 0 6px 6px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
                <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '18px', color: '#003366', marginBottom: '12px', lineHeight: 1.3 }}>
                  {item.title}
                </h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px', lineHeight: 1.6, color: '#4b4b4b', margin: 0 }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3.7 CREDIBILITY NOTE */}
      <section style={{ backgroundColor: '#f5f5f5', padding: '80px 24px' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 'clamp(24px, 3vw, 32px)', color: '#003366', marginBottom: '40px' }}>
            Methodology that holds up under scrutiny
          </h2>
          <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '48px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontStyle: 'italic', fontSize: '21px', lineHeight: 1.6, color: '#4b4b4b', marginBottom: '24px' }}>
              "This is really great stuff."
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#888888', marginBottom: '32px' }}>
              — VP, Leading HR Tech Firm
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px', lineHeight: 1.6, color: '#4b4b4b', marginBottom: '40px' }}>
              The conversion audit framework behind this work was reviewed by a VP at a leading HR Tech firm. Sometimes the right methodology finds the wrong timing. When you're ready, it'll be here.
            </p>
            <Link href="https://tidycal.com/iheomaoparaugo1/email-revenue-diagnosis-call" target="_blank" rel="noopener noreferrer"
              style={{ backgroundColor: '#b34d19', color: '#ffffff', fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '16px', padding: '16px 32px', borderRadius: '6px', textDecoration: 'none', display: 'inline-block' }}>
              Book My Free Diagnostic Call
            </Link>
          </div>
        </div>
      </section>

      {/* 3.9 MID-PAGE CTA */}
      <section style={{ backgroundColor: '#003366', padding: '80px 24px' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px', lineHeight: 1.6, color: 'rgba(255,255,255,0.9)', marginBottom: '16px' }}>
            If you're an HR or Health SaaS team tired of watching conversions stall after the demo — I can help.
          </p>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px', lineHeight: 1.6, color: 'rgba(255,255,255,0.9)', marginBottom: '40px' }}>
            Sharp strategy. Sequences built for real buying psychology. Emails that finally move people to act.
          </p>
          <Link href="https://tidycal.com/iheomaoparaugo1/email-revenue-diagnosis-call" target="_blank" rel="noopener noreferrer"
            style={{ backgroundColor: '#b34d19', color: '#ffffff', fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '16px', padding: '16px 32px', borderRadius: '6px', textDecoration: 'none', display: 'inline-block' }}>
            Book a Strategy Call
          </Link>
        </div>
      </section>

      {/* 3.10 ABOUT SNAPSHOT */}
      <section style={{ backgroundColor: '#fcfcfc', padding: '80px 24px' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 'clamp(30px, 4vw, 38px)', color: '#003366', marginBottom: '24px' }}>
            So who's behind this?
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px', lineHeight: 1.6, color: '#4b4b4b', marginBottom: '16px' }}>
          My name is Iheoma Oparaugo — you can call me Homi. I'm a B2B email conversion strategist who works specifically with HR Tech and Health Tech companies — the verticals where trust, compliance, and high-stakes decisions make or break every deal.
          </p>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px', lineHeight: 1.6, color: '#4b4b4b', marginBottom: '16px' }}>
            I don't do generic. I do specific: your buyers, your funnel, your gaps. And I stay until the system works.
          </p>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px', lineHeight: 1.6, color: '#4b4b4b', marginBottom: '32px' }}>
            Tired of leaving revenue on the table?
          </p>
          <a href="/about" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '15px', color: '#b34d19', textDecoration: 'underline' }}>
            Learn more about how I work →
          </a>
        </div>
      </section>

      {/* 3.11 FINAL CTA */}
      <section style={{ backgroundColor: '#4b4b4b', padding: '80px 24px' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px', lineHeight: 1.6, color: 'rgba(255,255,255,0.9)', marginBottom: '32px' }}>
            Every month you wait is another month of demos that don't close.
          </p>
          <Link href="https://tidycal.com/iheomaoparaugo1/email-revenue-diagnosis-call" target="_blank" rel="noopener noreferrer"
            style={{ backgroundColor: '#b34d19', color: '#ffffff', fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '16px', padding: '16px 32px', borderRadius: '6px', textDecoration: 'none', display: 'inline-block', marginBottom: '16px' }}>
            Fix My Conversion Leaks
          </Link>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', lineHeight: 1.6, color: 'rgba(255,255,255,0.75)', marginTop: '16px' }}>
            Free 30-minute call. No pitch, no pressure — just an honest look at where your pipeline is bleeding and what it would take to stop it.
          </p>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section style={{ backgroundColor: '#fcfcfc', padding: '80px 24px' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 'clamp(24px, 3vw, 32px)', color: '#003366', marginBottom: '40px' }}>
            Get Conversion Insights That Actually Move the Needle
          </h2>
          <div id="kit-embed" style={{ display: 'flex', justifyContent: 'center' }}>
          </div>
        </div>
      </section>

    </>
  );
}