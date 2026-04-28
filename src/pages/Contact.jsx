import React from 'react';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div className="page-content">
      <section className="section bg-white">
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 className="hero-wordmark">CONTACT</h1>
          <div className="hero-mission-container" style={{ marginTop: '60px' }}>
            <p className="hero-mission">
              LOREM IPSUM DOLOR SIT AMET.<br />
              <a href="mailto:hello@vrtue.web" style={{ fontSize: '2rem', textDecoration: 'underline' }}>HELLO@VRTUEPROJECT.ORG</a>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
