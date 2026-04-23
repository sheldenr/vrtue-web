import React from 'react';

const Featured = () => {
  return (
    <section className="featured bg-gray full-bleed section">
      <div className="container">
        <div className="featured-grid">
          {/* Main Article */}
          <div className="main-article">
            <div className="tags">
              <span className="tag">ARCHITECTURE</span>
              <span className="tag">MINIMALISM</span>
            </div>
            <h2 className="main-headline">THE SILENCE OF STRUCTURE: A STUDY IN BRUTALIST RESIDENCES</h2>
            <div className="byline">BY ARTHUR VANCE</div>
            <p className="excerpt">
              In the heart of the Swiss Alps, a new monolith emerges. 
              We explore the uncompromising vision of concrete and light.
            </p>
          </div>

          {/* Side Cards */}
          <div className="side-column">
            <div className="article-card">
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" alt="Building" />
              <div className="card-content">
                <h3>GLASS & STEEL</h3>
                <div className="byline">SARAH KOCH</div>
                <p>The transparency of modern executive spaces.</p>
              </div>
            </div>
          </div>

          <div className="side-column">
            <div className="article-card">
              <img src="https://images.unsplash.com/photo-1449156001935-d259cd2058c8?auto=format&fit=crop&q=80&w=800" alt="Interior" />
              <div className="card-content">
                <h3>OBJECT PERMANENCE</h3>
                <div className="byline">DAVID CHEN</div>
                <p>Curating for the next hundred years.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
