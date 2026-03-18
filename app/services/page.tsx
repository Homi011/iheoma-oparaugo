'use client';
import { useState } from 'react';
import Link from 'next/link';

const packages = [
  {
    tab: '01 | The Blueprint',
    whatItIs: 'A deep diagnostic of your conversion funnel — so you know exactly what\'s broken and where to focus first.',
    whatIDo: [
      'Voice of Customer research — I pull the exact language your buyers use when they\'re frustrated, uncertain, or ready to move, and map where trust is breaking down in your funnel',
      'Messaging strategy — I identify the gaps between what your emails are saying and what your buyers actually need to hear',
      'Deliverability audit — SPF, DKIM, DMARC, and sender reputation check to ensure your emails are landing in inboxes',
    ],
    whatYouGet: [
      '15–20 page diagnostic report',
      'Prioritized fix recommendations',
      '60-minute strategic walkthrough',
    ],
    whoFor: 'Companies who want a clear picture of what\'s broken before committing to a full rebuild — and who have internal resources to implement the fixes.',
    timeline: 'Timeline: 1–2 weeks',
  },
  {
    tab: '02 | The Foundation',
    whatItIs: 'Custom-written email sequences built on real buyer psychology — so your emails stop being ignored and start moving people to act.',
    whatIDo: [
      'Voice of Customer research — the same rigorous process as The Blueprint, applied directly to your copy',
      'Deliverability audit and fixes — ensuring your sequences actually reach the inbox before we worry about what\'s inside them',
      'Write email sequences based on your diagnosed conversion gaps — sequences may include pre-demo, post-demo, trial conversion, or nurture emails, depending strictly on where your leaks are',
    ],
    whatYouGet: [
      'Complete email sequence copy, ready for implementation',
      'Segmentation strategy document',
      'Behavioral trigger recommendations — which emails to send, to whom, and when',
    ],
    whoFor: 'Companies ready to rebuild their conversion emails with research-backed copy, and equipped to handle ESP setup and implementation internally.',
    timeline: 'Timeline: 2–3 weeks',
  },
  {
    tab: '03 | The Build-Out',
    whatItIs: 'A fully built, tested, and automated email conversion system — delivered ready to run inside your platform.',
    whatIDo: [
      'Voice of Customer research and messaging strategy',
      'Deliverability audit and infrastructure hardening',
      'Write email sequences based on your diagnosed needs — pre-demo, post-demo, trial conversion, nurture, and others as indicated',
      'Build and configure all sequences directly in your ESP — HubSpot, Marketo, ActiveCampaign, and others',
      'Set up list management, segmentation, and behavioral triggers',
      'Integrate data and analytics tracking',
      'Test everything end-to-end before handoff',
      'Provide full documentation for your team',
    ],
    whatYouGet: [
      'Complete email sequences written and implemented in your ESP',
      'Fully automated conversion system with segmentation and triggers',
      'Data and analytics integration',
      'Team documentation and handoff',
      '30-day post-delivery support — weekly check-ins, performance review, and iterative fixes (fixed deliverable, not optional)',
    ],
    whoFor: 'Companies who want the entire system — strategy, copy, and implementation — built and handed over ready to run, without pulling internal resources off other priorities.',
    timeline: 'Timeline: 3–4 weeks (4–6 weeks for full end-to-end across all stages)',
  },
];

const faqs = [
  { q: 'How long does a project take?', a: 'The Blueprint: 1–2 weeks. The Foundation: 2–3 weeks. The Build-Out: 3–4 weeks. Full end-to-end across all three stages: 4–6 weeks depending on scope.' },
  { q: 'What does it cost?', a: 'Pricing is customized based on your specific situation and which package makes sense. Investment starts at $1,200. On our discovery call, I\'ll recommend the right scope and send a transparent proposal before you commit to anything.' },
  { q: 'How does payment work?', a: '50% upfront to kick off the project, 50% on delivery. You\'ll know the full investment before we start.' },
  { q: 'Can I start with The Blueprint and move into The Foundation or Build-Out after?', a: 'Yes. Each package is self-contained, so if you\'ve already completed The Blueprint, we carry that research and diagnostic work forward rather than repeating it.' },
  { q: 'Do you work outside HR Tech and Health Tech?', a: 'I specialize in these industries because they share the characteristics that make conversion hard — high-stakes decisions, compliance concerns, multi-stakeholder sales, and long consideration cycles. If you\'re in a different B2B SaaS vertical but recognize that profile, let\'s talk.' },
  { q: 'Which email platforms do you work with?', a: 'HubSpot, Marketo, ActiveCampaign, MailerLite, ConvertKit, and most major ESPs. If you use something else, I can most likely work with it.' },
  { q: 'How do you handle revisions?', a: 'Revisions are included within the agreed scope and direction of the project. Anything outside that scope is a separate conversation.' },
  { q: 'Do you offer ongoing support after delivery?', a: 'The Build-Out includes 30 days of post-delivery support as a fixed deliverable — weekly check-ins, performance review, and iterative fixes. For ongoing optimization or list management beyond that, retainer arrangements are available and we can discuss what makes sense for your situation.' },
  { q: 'Do you write other types of copy?', a: 'I write landing pages that are directly part of the email conversion journey — demo request pages, trial sign-up pages, newsletter opt-in forms. I don\'t handle advertising copy, blog content, or SEO copywriting. My focus is the conversion infrastructure inside your funnel.' },
  { q: 'Do you handle list management and other email services?', a: 'Yes. While conversion infrastructure is my core offering, I also handle list management, segmentation, newsletter setup, and standalone email campaigns. These are typically scoped as separate engagements or retainer arrangements.' },
  { q: 'Can you accommodate a custom scope or rushed timeline?', a: 'Yes. If your situation calls for a combination of deliverables that doesn\'t fit neatly into one package, I can scope a custom engagement. Rushed timelines are accommodated but attract an additional fee of 30–50% depending on scope and urgency.' },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* 4.1 HERO */}
      <section style={{ backgroundColor: '#003366', padding: '80px 24px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 'clamp(38px, 5vw, 58px)', color: '#ffffff', lineHeight: 1.2, marginBottom: '24px' }}>
            Conversion Infrastructure for HR Tech and Health Tech
          </h1>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px', lineHeight: 1.6, color: 'rgba(255,255,255,0.9)', marginBottom: '40px', maxWidth: '620px', margin: '0 auto 40px' }}>
            I rebuild the email systems between "demo request" and "closed deal" — so you stop leaking 30–40% of qualified pipeline.
          </p>
          <Link href="https://tidycal.com/iheomaoparaugo1/email-revenue-diagnosis-call" target="_blank" rel="noopener noreferrer"
            style={{ backgroundColor: '#b34d19', color: '#ffffff', fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '16px', padding: '16px 32px', borderRadius: '6px', textDecoration: 'none', display: 'inline-block' }}>
            Book My Diagnostic Call
          </Link>
        </div>
      </section>

      {/* 4.2 THE BRIDGE */}
      <section style={{ backgroundColor: '#ffffff', padding: '60px 24px' }}>
        <div style={{ maxWidth: '660px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '19px', lineHeight: 1.7, color: '#4b4b4b' }}>
            You already know something is breaking between the demo and the deal. The question is exactly where — and what it takes to fix it. Here's how I work.
          </p>
        </div>
      </section>

      {/* 4.3 TABBED PACKAGES */}
      <section style={{ backgroundColor: '#fcfcfc', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 'clamp(30px, 4vw, 38px)', color: '#003366', textAlign: 'center', marginBottom: '16px' }}>
            What I Build
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px', lineHeight: 1.6, color: '#4b4b4b', textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
            Each package is self-contained and built around your specific situation. If you've already completed The Blueprint, we carry that research forward rather than starting over.
          </p>

          {/* Tab Labels */}
          <div style={{ display: 'flex', borderBottom: '2px solid #e0e0e0', marginBottom: '0', overflowX: 'auto' }}>
            {packages.map((pkg, i) => (
              <button key={i} onClick={() => setActiveTab(i)}
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '15px', padding: '14px 28px', border: 'none', cursor: 'pointer', whiteSpace: 'nowrap', backgroundColor: 'transparent', color: activeTab === i ? '#b34d19' : '#4b4b4b', borderBottom: activeTab === i ? '3px solid #b34d19' : '3px solid transparent', marginBottom: '-2px', transition: 'all 0.2s' }}>
                {pkg.tab}
              </button>
            ))}
          </div>

          {/* Tab Panel */}
          <div style={{ backgroundColor: '#ffffff', padding: '48px', borderRadius: '0 0 8px 8px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px', lineHeight: 1.6, color: '#4b4b4b', marginBottom: '32px', fontStyle: 'italic' }}>
              {packages[activeTab].whatItIs}
            </p>

            <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '16px', color: '#003366', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>What I Do</h3>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '32px' }}>
              {packages[activeTab].whatIDo.map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '12px' }}>
                  <span style={{ color: '#b34d19', fontWeight: 700, minWidth: '16px' }}>→</span>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px', lineHeight: 1.6, color: '#4b4b4b', margin: 0 }}>{item}</p>
                </li>
              ))}
            </ul>

            <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '16px', color: '#003366', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>What You Get</h3>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '32px' }}>
              {packages[activeTab].whatYouGet.map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '12px' }}>
                  <span style={{ color: '#b34d19', fontWeight: 700, minWidth: '16px' }}>✓</span>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px', lineHeight: 1.6, color: '#4b4b4b', margin: 0 }}>{item}</p>
                </li>
              ))}
            </ul>

            <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '16px', color: '#003366', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Who It's For</h3>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px', lineHeight: 1.6, color: '#4b4b4b', marginBottom: '32px' }}>
              {packages[activeTab].whoFor}
            </p>

            <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '15px', color: '#003366', marginBottom: '32px' }}>
              {packages[activeTab].timeline}
            </p>

            <Link href="https://tidycal.com/iheomaoparaugo1/email-revenue-diagnosis-call" target="_blank" rel="noopener noreferrer"
              style={{ backgroundColor: '#b34d19', color: '#ffffff', fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '16px', padding: '16px 32px', borderRadius: '6px', textDecoration: 'none', display: 'inline-block' }}>
              Book My Diagnostic Call
            </Link>
          </div>
        </div>
      </section>

      {/* 4.4 THE FRAMEWORK */}
      <section style={{ backgroundColor: '#003366', padding: '80px 24px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 'clamp(30px, 4vw, 38px)', color: '#ffffff', textAlign: 'center', marginBottom: '64px' }}>
            How Every Engagement Works
          </h2>
          <div style={{ position: 'relative', paddingLeft: '48px', borderLeft: '2px solid #b34d19' }}>
            {[
              { n: '1', title: 'Discovery Call — Free', body: 'We diagnose your biggest conversion challenge in 30 minutes. I\'ll map where your emails and sequences are losing people and recommend the clearest path forward.' },
              { n: '2', title: 'Custom Proposal', body: 'Based on what we uncover, I\'ll send a tailored proposal — scope, deliverables, timeline, and investment. You\'ll know exactly what you\'re getting before you commit.' },
              { n: '3', title: 'Kickoff & Research', body: 'Once we\'re under contract, I gather everything I need: access to your reviews, current email sequences, any available data on where prospects drop off, and your team\'s insight on common objections.' },
              { n: '4', title: 'Build & Iterate', body: 'I analyse your buyers\' language, identify your funnel gaps, and build the sequences and systems. You\'ll receive regular updates throughout — no black box.' },
              { n: '5', title: 'Delivery & Handoff', body: 'I deliver everything, walk you through implementation — or handle it myself if that\'s the scope — and provide documentation so your team can maintain and build on the system going forward.' },
            ].map((step, i) => (
              <div key={i} style={{ position: 'relative', marginBottom: '48px' }}>
                <div style={{ position: 'absolute', left: '-60px', width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#b34d19', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '14px', color: '#ffffff' }}>{step.n}</span>
                </div>
                <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '20px', color: '#ffffff', marginBottom: '8px' }}>{step.title}</h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px', lineHeight: 1.6, color: 'rgba(255,255,255,0.85)', margin: 0 }}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4.5 IS THIS FOR YOU */}
      <section style={{ backgroundColor: '#ffffff', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 'clamp(30px, 4vw, 38px)', color: '#003366', textAlign: 'center', marginBottom: '48px' }}>
            Is This For You?
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>

            {/* For You */}
            <div style={{ borderLeft: '3px solid #003366', paddingLeft: '24px' }}>
              <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '20px', color: '#003366', marginBottom: '24px' }}>This Is For You If:</h3>
              {[
                'You\'re an HR Tech or Health Tech founder or revenue leader',
                'You\'re generating 50+ demo requests per month — you have pipeline',
                'You\'re closing fewer than 20% of those demos — you have conversion leaks',
                'You want email sequences that address compliance anxiety, not just feature benefits',
                'You value research-backed strategy over generic templates',
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '16px' }}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ minWidth: '20px', marginTop: '2px' }}>
                    <circle cx="10" cy="10" r="9" stroke="#003366" strokeWidth="1.5"/>
                    <path d="M6 10l3 3 5-5" stroke="#003366" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px', lineHeight: 1.6, color: '#4b4b4b', margin: 0 }}>{item}</p>
                </div>
              ))}
            </div>

            {/* Not For You */}
            <div style={{ borderLeft: '3px solid #cccccc', paddingLeft: '24px' }}>
              <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '20px', color: '#4b4b4b', marginBottom: '24px' }}>This Is Not For You If:</h3>
              {[
                'You\'re looking for a quick fix rather than a system that works',
                'You don\'t believe email influences enterprise buying decisions',
                'You\'re not ready to act on strategic recommendations',
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '16px' }}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ minWidth: '20px', marginTop: '2px' }}>
                    <circle cx="10" cy="10" r="9" stroke="#cccccc" strokeWidth="1.5"/>
                    <path d="M7 7l6 6M13 7l-6 6" stroke="#cccccc" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px', lineHeight: 1.6, color: '#4b4b4b', margin: 0 }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4.6 FAQ ACCORDION */}
      <section style={{ backgroundColor: '#fcfcfc', padding: '80px 24px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 'clamp(30px, 4vw, 38px)', color: '#003366', textAlign: 'center', marginBottom: '48px' }}>
            Frequently Asked Questions
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ borderBottom: '1px solid #e0e0e0' }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
                  <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '16px', color: '#003366', paddingRight: '16px' }}>{faq.q}</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ minWidth: '20px', transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>
                    <path d="M5 7l5 5 5-5" stroke="#b34d19" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                {openFaq === i && (
                  <div style={{ backgroundColor: '#f9f9f9', padding: '20px 24px', marginBottom: '0' }}>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px', lineHeight: 1.6, color: '#4b4b4b', margin: 0 }}>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4.7 FINAL CTA */}
      <section style={{ backgroundColor: '#003366', padding: '80px 24px' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 'clamp(30px, 4vw, 38px)', color: '#ffffff', marginBottom: '24px' }}>
            Ready to Stop Leaking Pipeline?
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px', lineHeight: 1.6, color: 'rgba(255,255,255,0.9)', marginBottom: '40px' }}>
            Book a free 30-minute strategy call and I'll show you exactly where your email conversion infrastructure is broken — and what it takes to fix it.
          </p>
          <Link href="https://tidycal.com/iheomaoparaugo1/email-revenue-diagnosis-call" target="_blank" rel="noopener noreferrer"
            style={{ backgroundColor: '#b34d19', color: '#ffffff', fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '16px', padding: '16px 32px', borderRadius: '6px', textDecoration: 'none', display: 'inline-block', marginBottom: '16px' }}>
            Book Your Strategy Call
          </Link>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: 'rgba(255,255,255,0.75)', marginTop: '16px' }}>
            Free call. No pitch. Just a clear diagnosis of your biggest leaks.
          </p>
        </div>
      </section>
    </>
  );
}