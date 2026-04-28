import React from 'react';
import Footer from '../components/Footer';

const Mission = () => {
  return (
    <div className="page-content">
      <section className="section bg-white" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', paddingTop: '160px' }}>
        <div className="container">
          <div className="eyebrow">OUR MISSION</div>
          <h1 className="hero-wordmark" style={{ fontSize: 'clamp(2rem, 8vw, 5rem)', marginTop: '20px' }}>EQUITY THROUGH EXCELLENCE</h1>
          
          <div className="hero-mission-container" style={{ maxWidth: '800px', marginTop: '60px', marginLeft: '0' }}>
            <p className="hero-mission" style={{ fontSize: '1.4rem', opacity: 1 }}>
              VRTUE is dedicated to redefining the technology landscape by surfacing and supporting the highest caliber of Black talent. We believe that innovation thrives when access to capital is as exceptional as the talent it seeks to empower.
            </p>
            
            <p className="hero-mission" style={{ marginTop: '40px', fontSize: '1.1rem' }}>
              Our mission is to close the funding gap by creating a direct pipeline between rare talent and rational capital. From the initial spark of an idea to Series A and beyond, VRTUE provides the structural support necessary to transform visionary concepts into institutional power. By fostering a community of excellence, we are making the success of Black-led startups a structural inevitability.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Mission;
