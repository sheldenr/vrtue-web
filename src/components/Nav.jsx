import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="nav-container">
      <div className="nav-pill">
        <div className="nav-links">
          <Link to="/" className={`nav-link ${isActive('/')}`}>Home</Link>
          <Link to="/mission" className={`nav-link ${isActive('/mission')}`}>Mission</Link>
          {/* <Link to="/membership" className={`nav-link ${isActive('/membership')}`}>Membership</Link> */}
          <Link to="/blogs" className={`nav-link ${isActive('/blogs')}`}>Blogs</Link>
          <Link to="/contact" className={`nav-link ${isActive('/contact')}`}>Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
