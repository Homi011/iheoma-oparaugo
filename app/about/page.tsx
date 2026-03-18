'use client';
import { useEffect } from 'react';
import Link from 'next/link';


export default function About() {

  
  useEffect(() => {
    const container = document.getElementById('kit-embed');
    if (!container || container.querySelector('script')) return;
    const timer = setTimeout(() => {
      const script = document.createElement('script');
      script.src = 'https://iheoma-oparaugo.kit.com/bc5e0828cc/index.js';
      script.async = true;
      script.setAttribute('data-uid', 'bc5e0828cc');
      container.appendChild(script);
    }, 800);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {/* 5.1 OPENING SPLIT LAYOUT */}
      <section style={{ backgroundColor: '#ffffff', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'flex-start', gap: '64px', flexWrap: 'wrap' }}>
          <div style={{ flex: '0 0 auto', display: 'flex', justifyContent: 'center' }}>
            <img src="/images/headshot-about.jpg" alt="Iheoma Oparaugo"
              style={{ width: '380px', height: '440px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 4px 24px rgba(0,0,0,0.12)' }} />
          </div>
          <div style={{ flex: '1', minWidth: '280px', maxWidth: '620px' }}>
            <h1 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 'clamp(32px, 4vw, 46px)', color: '#003366', lineHeight: 1.2, marginBottom: '32px' }}>
              I Help HR and Health Tech Companies Stop Leaking Pipeline and Start Closing the Deals They've Already Earned
            </h1>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px', lineHeight: 1.6, color: '#4b4b4b', marginBottom: '20px' }}>
            My name is Iheoma Oparaugo — you can call me Homi. I'm a B2B email conversion strategist — and the way I work has less to do with templates and more to do with diagnosis.
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px', lineHeight: 1.6, color: '#4b4b4b', marginBottom: '20px' }}>
              A friend once called me the "family therapist." The one who hears what's not being said, finds the real friction underneath the surface problem, and moves calmly toward a solution. That instinct is exactly what I bring to conversion work.
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px', lineHeight: 1.6, color: '#4b4b4b', marginBottom: '20px' }}>
              I love solving problems. People tend to come to me to help them figure things out — and what I've learned is that the right questions matter more than ready-made answers. I'm the one asking what nobody else thought to ask, finding the question beneath the question, until the real problem surfaces and the solution becomes obvious.
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px', lineHeight: 1.6, color: '#4b4b4b' }}>
              That's what drew me to copywriting first, and then to conversion strategy. When I go through a funnel, I'm not looking for surface fixes. I'm eliminating the noise until I can see exactly where the leak is — and exactly what it takes to stop it.
            </p>
          </div>
        </div>
      </section>

      {/* 5.2 THE PROBLEM I KEEP SEEING */}
      <section style={{ backgroundColor: '#fcfcfc', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 'clamp(30px, 4vw, 38px)', color: '#003366', marginBottom: '48px' }}>
            Here's the problem I keep seeing:
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', marginBottom: '48px' }}>
            <div style={{ backgroundColor: '#ffffff', borderTop: '3px solid #b34d19', padding: '36px', borderRadius: '0 0 8px 8px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
              <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '20px', color: '#003366', marginBottom: '16px' }}>In HR Tech:</h3>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px', lineHeight: 1.6, color: '#4b4b4b', margin: 0 }}>
                Companies spend thousands getting demo sign-ups, but 40% never show up. The pre-demo emails don't address the real anxiety — "What if this doesn't integrate? What if we lose candidate data?" — so prospects talk themselves out of it before the call even happens.
              </p>
            </div>
            <div style={{ backgroundColor: '#ffffff', borderTop: '3px solid #b34d19', padding: '36px', borderRadius: '0 0 8px 8px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
              <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '20px', color: '#003366', marginBottom: '16px' }}>In Health Tech:</h3>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px', lineHeight: 1.6, color: '#4b4b4b', margin: 0 }}>
                Trial users sign up but go quiet by day three because the onboarding emails tour features instead of proving compliance and safety first. The product is solid. The emails aren't doing their job.
              </p>
            </div>
          </div>
          <div style={{ maxWidth: '720px' }}>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '20px', color: '#003366', marginBottom: '20px' }}>
              In both cases, it's not a product problem. It's a conversion infrastructure problem.
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px', lineHeight: 1.6, color: '#4b4b4b', marginBottom: '16px' }}>
              The gaps that cause it tend to look like this: demo confirmations that don't reinforce why prospects booked, follow-up sequences that stop too early, and messaging that sells features instead of addressing the anxiety your buyers won't say out loud.
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px', lineHeight: 1.6, color: '#4b4b4b' }}>
              Not because teams aren't working hard — but because conversion infrastructure falls through the cracks when everyone is busy building product and closing deals. That's where I come in.
            </p>
          </div>
        </div>
      </section>

      {/* 5.3 MY APPROACH */}
      <section style={{ backgroundColor: '#003366', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 'clamp(30px, 4vw, 38px)', color: '#ffffff', marginBottom: '16px', textAlign: 'center' }}>
            How I Actually Work
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px', lineHeight: 1.6, color: 'rgba(255,255,255,0.85)', maxWidth: '720px', margin: '0 auto 16px' }}>
            Most email marketers send you a questionnaire, write emails based on your answers, hand them over, and hope for the best.
          </p>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px', lineHeight: 1.6, color: 'rgba(255,255,255,0.85)', maxWidth: '720px', margin: '0 auto 48px' }}>
            I do it differently — because I've found that the answers to generic questions rarely reveal where the real problem is.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '860px', margin: '0 auto' }}>
            {[
              { n: '1', title: 'I read your customers reviews', body: 'I study how your buyers describe their pain before they found you — the exact language they use, the fears they name, the objections they carry. That\'s what your emails need to speak to.' },
              { n: '2', title: 'I map your funnel gaps', body: 'Where are prospects dropping off? Demo confirmations? Trial day three? Post-demo follow-up? I find the specific leaks, not generic ones — asking the questions that cut through the noise and point directly at the problem.' },
              { n: '3', title: 'I build the system', body: 'Sequences that activate users, handle unspoken objections, address compliance anxiety, and convert — using your customers exact language, not industry boilerplate.' },
              { n: '4', title: 'I set it up', body: 'I don\'t hand you copy and disappear. Depending on your scope, I either implement it in your ESP myself or walk you through it — so you end up with a working system, not just deliverables.' },
            ].map((step, i) => (
              <div key={i} style={{ backgroundColor: 'rgba(255,255,255,0.07)', borderRadius: '8px', padding: '32px', display: 'flex', alignItems: 'flex-start', gap: '24px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#b34d19', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '16px', color: '#ffffff' }}>{step.n}</span>
                </div>
                <div>
                  <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '18px', color: '#ffffff', marginBottom: '8px' }}>{step.title}</h3>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px', lineHeight: 1.6, color: 'rgba(255,255,255,0.85)', margin: 0 }}>{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5.4 FEATURED PERSPECTIVE */}
      <section style={{ backgroundColor: '#f5f5f5', padding: '80px 24px' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '48px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontStyle: 'italic', fontSize: '21px', lineHeight: 1.7, color: '#4b4b4b', marginBottom: '24px' }}>
              "She doesn't chase more leads. She studies what happens after someone raises their hand... The first three minutes of a demo. The structure of follow-up. The language on your homepage. And she asks a simple question: is this designed — or is it default?"
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#888888', margin: 0 }}>
              — Jeff Blanck, <a href="https://substack.com/@jeffblanck" target="_blank" rel="noopener noreferrer" style={{ color: '#b34d19', textDecoration: 'underline' }}>Love + Actions = Wins!</a>
            </p>
          </div>
        </div>
      </section>

      {/* 5.5 WHO I WORK WITH */}
      <section style={{ backgroundColor: '#ffffff', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 'clamp(30px, 4vw, 38px)', color: '#003366', marginBottom: '48px' }}>
            Who I Work With
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px', marginBottom: '40px' }}>
            <div>
              <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '20px', color: '#003366', marginBottom: '16px' }}>HR Tech:</h3>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px', lineHeight: 1.6, color: '#4b4b4b' }}>
                Applicant tracking systems, HRIS platforms, performance management tools, recruiting software, and people operations platforms.
              </p>
            </div>
            <div>
              <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '20px', color: '#003366', marginBottom: '16px' }}>Health Tech:</h3>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px', lineHeight: 1.6, color: '#4b4b4b' }}>
                EHR and EMR platforms, practice management software, patient engagement tools, telehealth platforms, and healthcare analytics software.
              </p>
            </div>
          </div>
          <p style={{ fontFamily: 'Inter, sans-serif', fontStyle: 'italic', fontSize: '17px', lineHeight: 1.6, color: '#4b4b4b' }}>
            If you're at 50–500 employees, generating pipeline but struggling to convert it — we should talk.
          </p>
        </div>
      </section>

      {/* 5.6 FINAL CTA */}
      <section style={{ backgroundColor: '#003366', padding: '80px 24px' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 'clamp(30px, 4vw, 38px)', color: '#ffffff', marginBottom: '24px' }}>
            Ready to Fix Your Conversion Leaks?
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px', lineHeight: 1.6, color: 'rgba(255,255,255,0.9)', marginBottom: '40px' }}>
            Book a free 30-minute strategy call. We'll walk through your funnel, I'll show you the gaps I see, and you'll leave with a clear picture of what needs fixing — whether you hire me or not.
          </p>
          <Link href="https://tidycal.com/iheomaoparaugo1/email-revenue-diagnosis-call" target="_blank" rel="noopener noreferrer"
            style={{ backgroundColor: '#b34d19', color: '#ffffff', fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '16px', padding: '16px 32px', borderRadius: '6px', textDecoration: 'none', display: 'inline-block', marginBottom: '32px' }}>
            Book Your Strategy Call
          </Link>
          <p style={{ fontFamily: 'Inter, sans-serif', fontStyle: 'italic', fontSize: '15px', color: 'rgba(255,255,255,0.75)', marginTop: '16px' }}>
            — Iheoma Oparaugo<br />
            Email Conversion Strategist for HR and Health Tech Companies
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