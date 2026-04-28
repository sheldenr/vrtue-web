import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const heroStageRef = useRef(null);

  useEffect(() => {
    const heroStage = heroStageRef.current;
    if (!heroStage) return undefined;

    let frameId = null;
    let nextX = 0;
    let nextY = 0.06;

    const setShadow = (x, y) => {
      heroStage.style.setProperty('--hero-shadow-x', `${x.toFixed(3)}em`);
      heroStage.style.setProperty('--hero-shadow-y', `${y.toFixed(3)}em`);
    };

    const handlePointerMove = (event) => {
      const rect = heroStage.getBoundingClientRect();
      const normalizedX = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      const normalizedY = ((event.clientY - rect.top) / rect.height - 0.5) * 2;

      nextX = normalizedX * 0.018;
      nextY = 0.06 + normalizedY * 0.018;

      if (frameId !== null) return;
      frameId = requestAnimationFrame(() => {
        setShadow(nextX, nextY);
        frameId = null;
      });
    };

    const handlePointerLeave = () => {
      setShadow(0, 0.06);
    };

    heroStage.addEventListener('pointermove', handlePointerMove);
    heroStage.addEventListener('pointerleave', handlePointerLeave);

    return () => {
      heroStage.removeEventListener('pointermove', handlePointerMove);
      heroStage.removeEventListener('pointerleave', handlePointerLeave);
      if (frameId !== null) cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <section className="hero bg-black full-bleed section">
      <div className="hero-stage" ref={heroStageRef}>
        <h1 className="hero-title">VRTUE</h1>
        <div className="hero-image-container">
          <img
            src="/Gemini_Generated_Image_nv4lxnnv4lxnnv4l.png"
            alt="VRTUE Hero"
            className="hero-image"
            draggable="false"
          />
        </div>
        <p className="hero-mission">
          VRTUE is a community showcasing the best of Black talent, engineered to bridge the funding gap seen in the current technology space. We connect rare talent with rational capital to move Black-led startups from Idea to Series A, transforming institutional power into a structural inevitability.
        </p>
      </div>
    </section>
  );
};

export default Hero;
