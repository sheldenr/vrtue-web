import React from 'react';

const Stats = () => {
  const data = [
    {
      value: '$171K',
      label: 'Median white family net worth',
      source: 'Federal Reserve, 2022'
    },
    {
      value: '$44K',
      label: 'Median Black family net worth',
      source: 'Federal Reserve, 2022'
    },
    {
      value: '1%',
      label: 'YC-funded founders who are Black',
      source: 'YC founder data'
    },
    {
      value: '2.3%',
      label: 'VC funding goes to Black founders',
      source: 'BLCK VC, 2023'
    }
  ];

  return (
    <section className="stats bg-black full-bleed section">
      <div className="container">
        <div className="stats-header">
          <div className="eyebrow">THE REALITY OF EQUITY</div>
          <div className="full-width-divider white-divider"></div>
        </div>
        
        <div className="stats-grid">
          {data.map((item, index) => (
            <div key={index} className="stat-item">
              <div className="stat-value">{item.value}</div>
              <div className="stat-label">{item.label}</div>
              <div className="stat-source">{item.source}</div>
            </div>
          ))}
        </div>

        <div className="stats-cta">
          <a href="#" className="cta-button">SUPPORT THE MISSION</a>
        </div>
      </div>

      <style jsx>{`
        .stats-header {
          display: flex;
          align-items: center;
          gap: 40px;
          margin-bottom: 80px;
        }
        .white-divider {
          background-color: var(--color-white);
          opacity: 0.1;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 40px;
          margin-bottom: 80px;
        }
        .stat-item {
          display: flex;
          flex-direction: column;
        }
        .stat-value {
          font-family: var(--font-display);
          font-size: 5rem;
          line-height: 1;
          color: var(--color-gold);
          margin-bottom: 1rem;
          letter-spacing: -0.02em;
        }
        .stat-label {
          font-family: var(--font-body);
          font-size: 0.9rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.5rem;
          line-height: 1.2;
        }
        .stat-source {
          font-family: var(--font-body);
          font-size: 0.75rem;
          opacity: 0.5;
        }
        .stats-cta {
          display: flex;
          justify-content: center;
          margin-top: 40px;
        }
        .cta-button {
          font-family: var(--font-body);
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          padding: 20px 60px;
          border: 1px solid var(--color-white);
          transition: all 0.3s ease;
        }
        .cta-button:hover {
          background-color: var(--color-white);
          color: var(--color-black);
        }

        @media (max-width: 1024px) {
          .stats-grid {
            grid-template-columns: 1fr 1fr;
            gap: 60px;
          }
        }
        @media (max-width: 600px) {
          .stats-grid {
            grid-template-columns: 1fr;
          }
          .stat-value {
            font-size: 4rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Stats;
