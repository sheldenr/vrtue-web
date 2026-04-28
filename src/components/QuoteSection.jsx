import React from 'react';

const QuoteSection = () => {
  return (
    <section className="quote-section bg-black full-bleed" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <div className="pull-quote-container">
            <span className="quote-mark">“</span>
            <blockquote className="pull-quote" style={{ fontSize: 'clamp(1.2rem, 3.5vw, 2.4rem)', lineHeight: '1.3', textTransform: 'none', maxWidth: '800px', margin: '0 auto 1.5rem' }}>
              If you’re going to do it, don’t take any shortcuts; just do it the way it should be done and you’re bound to see results. One tree cannot make a forest, but one person can plant the seeds for a global ecosystem.
            </blockquote>
            <cite className="attribution">— Tope Awotona, CEO of Calendly</cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
