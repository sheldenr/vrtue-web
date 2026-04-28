import React from 'react';
import Footer from '../components/Footer';

const Membership = () => {
  return (
    <div className="page-content">
      <section className="section bg-white">
        <div className="container">
          <h1 className="hero-wordmark">MEMBERSHIP</h1>
          <div className="hero-mission-container" style={{ maxWidth: '600px', marginTop: '40px' }}>
            <p className="hero-mission italic-serif">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          
          <div className="grid" style={{ marginTop: '80px' }}>
            {['ESSENTIAL', 'PRO', 'COLLECTOR'].map((tier) => (
              <div key={tier} className="sponsor-item" style={{ flexDirection: 'column', height: '400px' }}>
                <span className="eyebrow">{tier}</span>
                <span className="sponsor-name" style={{ fontSize: '2rem', marginTop: '20px' }}>$00 / MO</span>
                <p className="top-bar-text" style={{ marginTop: '40px', opacity: 0.5 }}>LOREM IPSUM DOLOR SIT AMET</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Membership;
