import React from 'react';

const ContentGrid = () => {
  const articles = [
    {
      category: 'INTERIORS',
      title: 'THE ART OF THE VOID',
      date: 'MAY 12, 2026',
      description: 'How negative space defines the most successful modern living environments.',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800'
    },
    {
      category: 'DESIGN',
      title: 'TYPE AS ARCHITECTURE',
      date: 'MAY 10, 2026',
      description: 'A deep dive into the structural integrity of neo-grotesque typefaces.',
      image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800'
    },
    {
      category: 'TRAVEL',
      title: 'THE HIGH LINE REVISITED',
      date: 'MAY 08, 2026',
      description: 'Walking the industrial path that changed urban landscaping forever.',
      image: 'https://images.unsplash.com/photo-1518173946687-a4c8a9833d8e?auto=format&fit=crop&q=80&w=800'
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
                <img src={article.image} alt={article.title} />
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
