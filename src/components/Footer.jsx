import React from 'react';
import sheldenAltImage from '../assets/shelden-rattray-alt.png';

const Footer = () => {
  return (
    <footer className="massive-footer">
      <div className="creator-section">
        <div className="creator-container">
          <div className="creator-content">
            <div className="hero-label-static">/ Why I created VRTUE</div>
            <p className="creator-description">
              <a href="https://www.sheldenr.dev/blog-posts/04-28-26-21" target="_blank" rel="noopener noreferrer" className="inline-link">I created VRTUE</a> because at some point I wanted to look for an inspiration in tech and, looking for <span className="highlight">people like me</span> I realized there is genuinely very few who are motivated to the degree I was early in my college career. Looking at YC founders, only around <span className="highlight">4% of YC founders are black.</span> I wanted to <span className="highlight">aggregate the best of black talent</span> to provide the inspiration for people in similar scenarios as myself.
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
                  src={sheldenAltImage}
                  alt="Shelden Rattray"
                  className="talent-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-cta">
        <h3 className="footer-cta-title">Interested in <span className="highlight">joining the list</span>?</h3>
        <a href="mailto:bbshelden@gmail.com" className="footer-email-button">Email Me</a>
      </div>

      <div className="footer-bottom">
        <p className="copyright">&copy; 2026 VRTUE. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
