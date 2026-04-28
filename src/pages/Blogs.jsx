import React from 'react';
import ContentGrid from '../components/ContentGrid';
import Footer from '../components/Footer';

const Blogs = () => {
  return (
    <div className="page-content">
      <section className="section bg-white" style={{ paddingTop: '200px' }}>
        <div className="container">
          <h1 className="hero-wordmark">BLOGS</h1>
        </div>
      </section>
      <ContentGrid />
      <Footer />
    </div>
  );
};

export default Blogs;
