import React from 'react';

const ContentGrid = () => {
  const articles = [
    {
      category: 'COMMUNITY',
      title: 'VRTUE: BRIDGING THE GAP',
      date: 'COMING SOON',
      description: 'Understanding the structural shifts needed to empower Black-led innovation in the modern tech landscape.',
      aspectRatio: '0.9'
    },
    {
      category: 'STRATEGY',
      title: 'FROM IDEA TO SERIES A',
      date: 'COMING SOON',
      description: 'The blueprint for connecting rare talent with rational capital to build lasting institutional power.',
      aspectRatio: '1.0'
    },
    {
      category: 'CULTURE',
      title: 'THE EXCELLENCE IMPERATIVE',
      date: 'COMING SOON',
      description: 'How we are transforming the technology space through a community-driven approach to talent.',
      aspectRatio: '0.85'
    },
    {
      category: 'GROWTH',
      title: 'SCALING BLACK EXCELLENCE',
      date: 'COMING SOON',
      description: 'Strategies for sustainable growth and long-term impact in the global tech ecosystem.',
      aspectRatio: '1.1'
    },
    {
      category: 'INNOVATION',
      title: 'THE NEW FRONTIER',
      date: 'COMING SOON',
      description: 'Exploring emerging technologies and the Black pioneers leading the charge.',
      aspectRatio: '0.95'
    }
  ];

  return (
    <section className="bg-white section">
      <div className="container">
        <header className="grid-header">
          <div className="eyebrow">LATEST STORIES</div>
          <div className="full-width-divider"></div>
        </header>

        <div className="masonry-grid">
          {articles.map((article, index) => (
            <div key={index} className="masonry-item">
              <article className="grid-card">
                <div className="card-image-wrapper" style={{ aspectRatio: article.aspectRatio }}>
                  <div className="card-placeholder"></div>
                </div>
                <div className="card-info">
                  <span className="card-category">{article.category}</span>
                  <h3 className="card-title">{article.title}</h3>
                  <time className="card-date">{article.date}</time>
                  <p className="card-description">{article.description}</p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentGrid;
