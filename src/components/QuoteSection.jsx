import React from 'react';

const QuoteSection = () => {
  return (
    <section className="quote-section bg-black full-bleed section" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <div className="pull-quote-container">
            <span className="quote-mark">“</span>
            <blockquote className="pull-quote">
              If you’re going to do it, don’t take any shortcuts; just do it the way it should be done and you’re bound to see results. One tree cannot make a forest, but one person can plant the seeds for a global ecosystem.
            </blockquote>
            <cite className="attribution">— Tope Awotona, CEO of Calendly</cite>
          </div>
        </div>
      </div>
      <style jsx>{`
        .pull-quote {
          font-family: var(--font-serif);
          font-size: clamp(1.4rem, 4vw, 2.4rem);
          line-height: 1.3;
          text-transform: none;
          max-width: 800px;
          margin: 0 auto 1.5rem;
          text-align: center;
          font-style: italic;
        }
        .attribution {
          display: block;
          text-align: center;
          font-family: var(--font-body);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          font-size: clamp(0.7rem, 1.5vw, 0.8rem);
          opacity: 0.5;
          font-style: normal;
        }
        .pull-quote-container {
          position: relative;
          width: 100%;
        }
        .quote-mark {
          font-family: var(--font-serif);
          font-size: clamp(6rem, 15vw, 12rem);
          line-height: 1;
          display: block;
          margin-bottom: clamp(-40px, -8vw, -80px);
          opacity: 0.15;
          text-align: center;
        }
      `}</style>
    </section>
  );
};

export default QuoteSection;
