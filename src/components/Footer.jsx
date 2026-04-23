import React from 'react';

const Footer = () => {
  return (
    <footer className="footer bg-black full-bleed section">
      <div className="container">
        <div className="eyebrow centered">FINIS</div>
        <div className="pull-quote-container">
          <span className="quote-mark">“</span>
          <blockquote className="pull-quote">
            THERE IS NO LUXURY WITHOUT TRUTH. <br />
            THERE IS NO TRUTH WITHOUT VRTUE.
          </blockquote>
          <cite className="attribution italic-serif">— FROM THE MANIFESTO</cite>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
