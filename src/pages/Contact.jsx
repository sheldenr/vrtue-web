import React from 'react';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div className="page-content">
      <section className="contact-section bg-white section">
        <div className="container">
          <h1 className="contact-title">CONTACT</h1>
          <div className="contact-content">
            <p className="contact-lead">
              WE ARE ALWAYS LOOKING FOR EXCEPTIONAL TALENT AND PARTNERS.
            </p>
            <a href="mailto:hello@vrtueproject.org" className="contact-email">
              HELLO@VRTUEPROJECT.ORG
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        .contact-section {
          min-height: 70vh;
          display: flex;
          align-items: center;
          padding-top: clamp(100px, 15vh, 160px);
          text-align: center;
          width: 100%;
          overflow: hidden;
        }
        .contact-title {
          font-family: var(--font-serif);
          font-size: clamp(3rem, 12vw, 8rem);
          line-height: 0.8;
          margin-bottom: clamp(40px, 8vh, 60px);
          letter-spacing: -0.02em;
        }
        .contact-content {
          max-width: 100%;
          margin: 0 auto;
        }
        .contact-lead {
          font-family: var(--font-body);
          font-size: clamp(1rem, 3vw, 1.2rem);
          line-height: 1.5;
          font-weight: 500;
          margin-bottom: 30px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 0 10px;
        }
        .contact-email {
          font-family: var(--font-display);
          font-size: clamp(1.1rem, 5vw, 2.5rem);
          text-decoration: underline;
          color: var(--color-black);
          word-break: break-all;
          display: inline-block;
          line-height: 1.2;
          transition: opacity 0.2s ease;
        }
        .contact-email:hover {
          opacity: 0.6;
        }
      `}</style>
      
      <Footer />
    </div>
  );
};

export default Contact;
