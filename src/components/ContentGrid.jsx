import React from 'react';

const ContentGrid = () => {
  const articles = [
    {
      category: 'COMMUNITY',
      title: 'VRTUE: BRIDGING THE GAP',
      date: 'COMING SOON',
      description: 'Understanding the structural shifts needed to empower Black-led innovation in the modern tech landscape.',
    },
    {
      category: 'STRATEGY',
      title: 'FROM IDEA TO SERIES A',
      date: 'COMING SOON',
      description: 'The blueprint for connecting rare talent with rational capital to build lasting institutional power.',
    },
    {
      category: 'CULTURE',
      title: 'THE EXCELLENCE IMPERATIVE',
      date: 'COMING SOON',
      description: 'How we are transforming the technology space through a community-driven approach to talent.',
    }
  ];

  return (
    <section className="content-grid bg-white full-bleed section">
      <div className="container">
        <header className="grid-header">
          <div className="eyebrow">LATEST STORIES</div>
          <div className="full-width-divider"></div>
        </header>

        <div className="grid">
          {articles.map((article, index) => (
            <article key={index} className="grid-card">
              <div className="card-image-wrapper">
                <div className="card-placeholder"></div>
              </div>
              <div className="card-info">
                <span className="card-category">{article.category}</span>
                <h3 className="card-title">{article.title}</h3>
                <time className="card-date">{article.date}</time>
                <p className="card-description">{article.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentGrid;
