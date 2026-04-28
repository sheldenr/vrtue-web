import React from 'react';

const Sponsors = () => {
  const sponsors = [
    "TBD", "TBD", "TBD", "TBD"
  ];

  return (
    <section className="sponsors bg-white section">
      <div className="container">
        <div className="grid-header">
          <span className="eyebrow">SPONSORS & INSPIRATIONS</span>
          <div className="full-width-divider"></div>
        </div>
        <div className="sponsors-grid">
          {sponsors.map((sponsor, index) => (
            <div key={index} className="sponsor-item">
              <span className="sponsor-name">{sponsor}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
