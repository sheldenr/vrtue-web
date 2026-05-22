import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const isActive = (path) => location.pathname === path ? 'active' : '';

  // Placeholder total count
  const totalProfessionals = 150;

  return (
    <>
      <aside className={`sidebar ${isFilterOpen ? 'mobile-open' : ''}`} data-lenis-prevent>
        <div className="sidebar-top">
          <Link to="/" className="sidebar-vrtue">VRTUE</Link>
          
          <div className="sidebar-horizontal-nav">
            <Link to="/mission" className={`sidebar-nav-link ${isActive('/mission')}`}>About →</Link>
            <Link to="/nominate" className={`sidebar-nav-link ${isActive('/nominate')}`}>Nominate →</Link>
            <Link to="/jobs" className={`sidebar-nav-link ${isActive('/jobs')}`}>Jobs →</Link>
            <Link to="/blogs" className={`sidebar-nav-link ${isActive('/blogs')}`}>Blogs →</Link>
            <Link to="/contact" className={`sidebar-nav-link ${isActive('/contact')}`}>Contact →</Link>
          </div>

          <p className="about-description">
            VRTUE is a community showcasing the best of Black tech talent.
          </p>
        </div>

        <div className="sidebar-filters-container">
          <div className="mobile-filter-header">
            <button className="mobile-close-icon" onClick={() => setIsFilterOpen(false)} aria-label="Close filters">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <h2 className="mobile-filter-heading">Filters</h2>
          </div>

          <div className="sidebar-filters">
            <div className="filter-group">
              <h3 className="filter-title">Expertise</h3>
              <div className="filter-options">
                {[
                  { name: 'Engineering', count: 42 },
                  { name: 'Product', count: 18 },
                  { name: 'Design', count: 12 },
                  { name: 'AI & Data', count: 24 },
                  { name: 'Security', count: 8 },
                  { name: 'Marketing', count: 15 }
                ].map(item => (
                  <label key={item.name} className="filter-checkbox">
                    <input type="checkbox" name="expertise" value={item.name.toLowerCase()} />
                    <span className="checkbox-custom"></span>
                    <span className="filter-label">{item.name}</span>
                    <span className="filter-count">{item.count}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="filter-group">
              <h3 className="filter-title">Position</h3>
              <div className="filter-options">
                {[
                  { name: 'Founder', count: 31 },
                  { name: 'C-Level', count: 14 },
                  { name: 'VP / Director', count: 22 },
                  { name: 'Lead', count: 38 },
                  { name: 'Senior', count: 56 }
                ].map(item => (
                  <label key={item.name} className="filter-checkbox">
                    <input type="checkbox" name="position" value={item.name.toLowerCase()} />
                    <span className="checkbox-custom"></span>
                    <span className="filter-label">{item.name}</span>
                    <span className="filter-count">{item.count}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="filter-group">
              <h3 className="filter-title">Location</h3>
              <div className="filter-options">
                {[
                  { name: 'London', count: 28 },
                  { name: 'New York', count: 35 },
                  { name: 'San Francisco', count: 42 },
                  { name: 'Lagos', count: 19 },
                  { name: 'Nairobi', count: 12 },
                  { name: 'Berlin', count: 14 }
                ].map(item => (
                  <label key={item.name} className="filter-checkbox">
                    <input type="checkbox" name="location" value={item.name.toLowerCase()} />
                    <span className="checkbox-custom"></span>
                    <span className="filter-label">{item.name}</span>
                    <span className="filter-count">{item.count}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mobile-filter-footer">
            <button className="mobile-view-results" onClick={() => setIsFilterOpen(false)}>
              View {totalProfessionals} Professionals
            </button>
          </div>
        </div>
      </aside>

      <button className="mobile-filter-pill" onClick={() => setIsFilterOpen(true)}>
        <span>Filter</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
        </svg>
      </button>
    </>
  );
};

export default Sidebar;
