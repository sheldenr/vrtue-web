import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import SmoothScroll from 'smooth-scroll';
import Lenis from 'lenis';
import TopBar from './components/TopBar';
import Nav from './components/Nav';
import Home from './pages/Home';
import Membership from './pages/Membership';
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
    // Initialize Lenis for scroll inertia
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

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Initialize Smooth Scroll for anchor links
    const scroll = new SmoothScroll('a[href*="#"]', {
      speed: 500,
      speedAsDuration: true,
      easing: 'easeInOutQuart'
    });

    return () => {
      lenis.destroy();
      if (scroll.destroy) scroll.destroy();
    };
  }, []);

  return (
    <Router>
      <div className="app">
        <ScrollToTop />
        <TopBar />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/membership" element={<Membership />} /> */}
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
