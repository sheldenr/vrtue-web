import React from 'react';

const Footer = () => {
  return (
    <footer className="footer full-bleed" style={{ minHeight: 'auto', padding: '60px 0', backgroundColor: '#111111' }}>
      <div className="container">
        <div className="footer-bottom" style={{ marginTop: 0 }}>
          <p className="copyright">
            © {new Date().getFullYear()} VRTUE PROJECT. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
