import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import Home from './pages/Home';
import Banner from './components/Banner';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    let rafId = null;
    let destroyed = false;

    function raf(time) {
      if (destroyed) return;
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      destroyed = true;
      if (rafId !== null) cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <Router>
      <div className="app">
        <Banner />
        <ScrollToTop />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
