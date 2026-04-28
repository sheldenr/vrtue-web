import React from 'react';
import Hero from '../components/Hero';
import Sponsors from '../components/Sponsors';
import Stats from '../components/Stats';
import ContentGrid from '../components/ContentGrid';
import QuoteSection from '../components/QuoteSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <main>
      <div id="hero"><Hero /></div>
      <div id="membership"><Sponsors /></div>
      <div id="stats"><Stats /></div>
      <div id="stories"><ContentGrid /></div>
      <QuoteSection />
      <div id="contact"><Footer /></div>
    </main>
  );
};

export default Home;
