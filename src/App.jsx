import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Featured from './components/Featured';
import Stats from './components/Stats';
import ContentGrid from './components/ContentGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Nav />
      <main>
        <Hero />
        <Featured />
        <Stats />
        <ContentGrid />
        <Footer />
      </main>
    </div>
  );
}

export default App;
