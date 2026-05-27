import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Only apply the scroll behavior on the Home page
    if (location.pathname !== '/') {
      setIsVisible(true);
      return;
    }

    const handleScroll = () => {
      // Show nav when scrolled past hero section (75vh)
      const heroHeight = window.innerHeight * 0.7;
      if (window.scrollY > heroHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial scroll position

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  return (
    <nav className={`nav-container ${isVisible ? 'is-visible' : 'is-hidden'}`}>
      <div className="nav-inner">
        <Link to="/" className="nav-logo">VRTUE</Link>
        
        <div className="nav-links">
          {/* Unused pages removed */}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
