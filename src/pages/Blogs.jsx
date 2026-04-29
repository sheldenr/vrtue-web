import React from 'react';
import ContentGrid from '../components/ContentGrid';
import Footer from '../components/Footer';

const Blogs = () => {
  return (
    <div className="page-content">
      <section className="section bg-white" style={{ paddingTop: 'clamp(120px, 20vh, 200px)' }}>
        <div className="container">
          <h1 className="hero-wordmark" style={{ fontSize: 'clamp(3rem, 10vw, 6rem)' }}>BLOGS</h1>
        </div>
      </section>
      <ContentGrid />
      <Footer />
    </div>
  );
};

export default Blogs;
