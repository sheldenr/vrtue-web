import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Mission from './pages/Mission';
import Contact from './pages/Contact';

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
        <ScrollToTop />
        <div className="main-layout">
          <Sidebar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/mission" element={<Mission />} />
              <Route path="/contact" element={<Contact />} />
              {/* Nominate and Jobs can be added later or link to external sites */}
              <Route path="/nominate" element={<div style={{padding: '40px'}}>Nominate Page (Coming Soon)</div>} />
              <Route path="/jobs" element={<div style={{padding: '40px'}}>Jobs Page (Coming Soon)</div>} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
