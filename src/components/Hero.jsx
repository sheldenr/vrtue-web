import React from 'react';

const Hero = () => {
  return (
    <section className="hero bg-black full-bleed section">
      <div className="container hero-content">
        <h1 className="hero-wordmark">VRTUE</h1>
        <p className="hero-tagline">AN INDEPENDENT EDITORIAL FOR THE CURATED LIFE.</p>
        <div className="hero-mission-container">
          <p className="hero-mission italic-serif">
            We exist at the intersection of brutal honesty and refined aesthetics. 
            VRTUE is a documentation of the objects, spaces, and stories 
            that define our contemporary standard.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
