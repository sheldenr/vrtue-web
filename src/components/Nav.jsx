import React from 'react';

const Nav = () => {
  return (
    <nav className="nav-container">
      <div className="nav-pill">
        <div className="nav-logo">VRTUE</div>
        <div className="nav-links">
          <a href="#" className="nav-link active">Stories</a>
          <a href="#" className="nav-link">Directory</a>
          <a href="#" className="nav-link">About</a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
