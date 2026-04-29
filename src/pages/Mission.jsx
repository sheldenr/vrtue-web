import React from 'react';
import Footer from '../components/Footer';

const Mission = () => {
  return (
    <div className="page-content">
      <section className="mission-hero bg-white section">
        <div className="container">
          <div className="eyebrow">OUR MISSION</div>
          <h1 className="mission-title">EQUITY THROUGH EXCELLENCE</h1>
          
          <div className="mission-content">
            <p className="mission-lead">
              VRTUE is dedicated to redefining the technology landscape by surfacing and supporting the highest caliber of Black talent. We believe that innovation thrives when access to capital is as exceptional as the talent it seeks to empower.
            </p>
            
            <p className="mission-text">
              Our mission is to close the funding gap by creating a direct pipeline between rare talent and rational capital. From the initial spark of an idea to Series A and beyond, VRTUE provides the structural support necessary to transform visionary concepts into institutional power. By fostering a community of excellence, we are making the success of Black-led startups a structural inevitability.
            </p>
          </div>
        </div>
      </section>
      
      <style jsx>{`
        .mission-hero {
          min-height: 80vh;
          display: flex;
          align-items: center;
          padding-top: clamp(100px, 15vh, 160px);
        }
        .mission-title {
          font-size: clamp(2.5rem, 8vw, 5rem);
          margin-top: 20px;
          line-height: 1;
        }
        .mission-content {
          max-width: 800px;
          margin-top: clamp(40px, 8vh, 60px);
        }
        .mission-lead {
          font-family: var(--font-body);
          font-size: clamp(1.1rem, 3vw, 1.4rem);
          line-height: 1.5;
          margin-bottom: 40px;
          font-weight: 500;
        }
        .mission-text {
          font-family: var(--font-body);
          font-size: clamp(0.95rem, 2vw, 1.1rem);
          line-height: 1.7;
          opacity: 0.8;
        }
      `}</style>
      
      <Footer />
    </div>
  );
};

export default Mission;
