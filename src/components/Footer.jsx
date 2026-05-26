import React from 'react';

const Footer = () => {
  return (
    <footer className="massive-footer">
      <div className="creator-section">
        <div className="creator-container">
          <div className="creator-content">
            <div className="hero-label-static">/ Why I created VRTUE</div>
            <p className="creator-description">
              I created VRTUE because at some point I wanted to look for an inspiration in tech and, looking for people like me I realized there is genuinely very few who are motivated to the degree I was early in my college career. Looking at YC founders, only around 4% of YC founders are black. I wanted to aggregate the best of black talent to provide the inspiration for people in similar scenarios as myself.
            </p>
          </div>
          <div className="creator-portrait">
            <img 
              src="https://www.sheldenr.dev/assets/signature.svg" 
              alt="Signature" 
              className="creator-signature"
            />
            <div className="polaroid-card">
              <div className="talent-image-wrapper">
                <img 
                  src="https://www.sheldenr.dev/assets/portrait.png" 
                  alt="Shelden Redway" 
                  className="talent-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-cta">
        <h3 className="footer-cta-title">Interested in joining VRTUE?</h3>
        <a href="mailto:hello@vrtue.tech" className="footer-email-button">Email Me</a>
      </div>

      <div className="footer-bottom">
        <p className="copyright">&copy; 2026 VRTUE. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
