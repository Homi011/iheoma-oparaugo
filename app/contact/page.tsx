'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Contact() {
  const [formData, setFormData] = useState({ fullName: '', email: '', company: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async () => {
    setStatus('submitting');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ fullName: '', email: '', company: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    border: '1px solid #dddddd',
    borderRadius: '4px',
    fontFamily: 'Inter, sans-serif',
    fontSize: '17px',
    color: '#4b4b4b',
    backgroundColor: '#ffffff',
    boxSizing: 'border-box' as const,
    outline: 'none',
  };

  const labelStyle = {
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 600,
    fontSize: '15px',
    color: '#003366',
    display: 'block',
    marginBottom: '8px',
  };

  return (
    <>
      {/* 6.1 HERO */}
      <section style={{ backgroundColor: '#fcfcfc', padding: '80px 24px' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 'clamp(38px, 5vw, 58px)', color: '#003366', lineHeight: 1.2, marginBottom: '24px' }}>
            Let's Talk Strategy
          </h1>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px', lineHeight: 1.6, color: '#4b4b4b' }}>
            Have a question, a project in mind, or just want to explore what's possible? I'm all ears.
          </p>
        </div>
      </section>

      {/* 6.2 THREE WAYS TO REACH ME */}
      <section style={{ backgroundColor: '#ffffff', padding: '80px 24px' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px', lineHeight: 1.6, color: '#4b4b4b', textAlign: 'center', marginBottom: '48px' }}>
            Here are 3 ways to reach me:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

            {/* Email */}
            <a href="mailto:iheoma@iheomaoparaugo.com"
              style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '32px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', textDecoration: 'none', display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" style={{ minWidth: '28px', marginTop: '2px' }}>
                <rect x="2" y="4" width="20" height="16" rx="2" stroke="#003366" strokeWidth="1.5"/>
                <path d="M2 7l10 7 10-7" stroke="#003366" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <div>
                <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '18px', color: '#003366', margin: '0 0 8px' }}>Send an email</p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', lineHeight: 1.6, color: '#4b4b4b', margin: 0 }}>
                  Drop me a line at <span style={{ color: '#b34d19' }}>iheoma@iheomaoparaugo.com</span> and I'll get back to you within 1–2 working days.
                </p>
              </div>
            </a>

            {/* Calendly */}
            <a href="https://tidycal.com/iheomaoparaugo1/email-revenue-diagnosis-call" target="_blank" rel="noopener noreferrer"
              style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '32px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', textDecoration: 'none', display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" style={{ minWidth: '28px', marginTop: '2px' }}>
                <rect x="3" y="4" width="18" height="18" rx="2" stroke="#003366" strokeWidth="1.5"/>
                <path d="M3 9h18" stroke="#003366" strokeWidth="1.5"/>
                <path d="M8 2v4M16 2v4" stroke="#003366" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <div>
                <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '18px', color: '#003366', margin: '0 0 8px' }}>Book a free strategy call</p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', lineHeight: 1.6, color: '#4b4b4b', margin: 0 }}>
                  Prefer to talk it through directly? Book a free 30-minute call and we'll map out where your conversion gaps are and what it would take to fix them.
                </p>
              </div>
            </a>

            {/* Form */}
            <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '32px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" style={{ minWidth: '28px', marginTop: '2px' }}>
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="#003366" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div>
                <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '18px', color: '#003366', margin: '0 0 8px' }}>Fill in the form below</p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', lineHeight: 1.6, color: '#4b4b4b', margin: 0 }}>
                  Not ready for a call yet? Leave your details and a message and I'll follow up within 1–2 working days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6.3 CONTACT FORM */}
      <section style={{ backgroundColor: '#fcfcfc', padding: '80px 24px' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

            <div>
              <label style={labelStyle}>Full Name</label>
              <input type="text" value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                style={inputStyle} />
            </div>

            <div>
              <label style={labelStyle}>Email Address</label>
              <input type="email" value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                style={inputStyle} />
            </div>

            <div>
              <label style={labelStyle}>Company</label>
              <input type="text" value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                style={inputStyle} />
            </div>

            <div>
              <label style={labelStyle}>Message</label>
              <textarea value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                style={{ ...inputStyle, resize: 'vertical' }} />
            </div>

            <button onClick={handleSubmit} disabled={status === 'submitting'}
              style={{ backgroundColor: '#b34d19', color: '#ffffff', fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '16px', padding: '16px 32px', borderRadius: '6px', border: 'none', cursor: status === 'submitting' ? 'not-allowed' : 'pointer', opacity: status === 'submitting' ? 0.7 : 1, alignSelf: 'flex-start' }}>
              {status === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px', color: '#2d7a2d', margin: 0 }}>
                Thanks! I'll be in touch within 1–2 working days.
              </p>
            )}
            {status === 'error' && (
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px', color: '#cc0000', margin: 0 }}>
                Something went wrong. Please email me directly at <a href="mailto:iheoma@iheomaoparaugo.com" style={{ color: '#b34d19' }}>iheoma@iheomaoparaugo.com</a>
              </p>
            )}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ backgroundColor: '#003366', padding: '80px 24px' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 'clamp(30px, 4vw, 38px)', color: '#ffffff', marginBottom: '24px' }}>
            Ready to Stop Leaking Pipeline?
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px', lineHeight: 1.6, color: 'rgba(255,255,255,0.9)', marginBottom: '40px' }}>
            Book a free 30-minute strategy call and I'll show you exactly where your conversion infrastructure is broken — and what it takes to fix it.
          </p>
          <Link href="https://tidycal.com/iheomaoparaugo1/email-revenue-diagnosis-call" target="_blank" rel="noopener noreferrer"
            style={{ backgroundColor: '#b34d19', color: '#ffffff', fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '16px', padding: '16px 32px', borderRadius: '6px', textDecoration: 'none', display: 'inline-block' }}>
            Book Your Strategy Call
          </Link>
        </div>
      </section>
    </>
  );
}