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

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  const locations = [
    'London',
    'New York',
    'San Francisco',
    'Lagos',
    'Nairobi',
    'Berlin'
  ];

  return (
    <nav className={`nav-container ${isVisible ? 'is-visible' : 'is-hidden'}`}>
      <div className="nav-inner">
        <Link to="/" className="nav-logo">VRTUE</Link>
        
        <div className="nav-links">
          <Link to="/mission" className={`nav-link ${isActive('/mission')}`}>Mission</Link>
          <Link to="/blogs" className={`nav-link ${isActive('/blogs')}`}>Blogs</Link>
          <Link to="/nominate" className={`nav-link ${isActive('/nominate')}`}>Nominate</Link>
          <Link to="/jobs" className={`nav-link ${isActive('/jobs')}`}>Jobs</Link>
          <Link to="/contact" className={`nav-link ${isActive('/contact')}`}>Contact</Link>
          
          <div className="nav-dropdown-container">
            <button className="nav-dropdown-trigger">
              Location
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="nav-dropdown-menu">
              {locations.map((loc) => (
                <a key={loc} href="#" className="nav-dropdown-item" onClick={(e) => e.preventDefault()}>
                  {loc}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
