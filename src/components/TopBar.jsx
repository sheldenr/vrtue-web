import React, { useState } from 'react';

const TopBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="top-bar">
      <div className="container top-bar-inner">
        <p className="top-bar-text">
          VRTUE IS STILL PRE-LAUNCH — PLANS ARE STILL A WORK IN PROGRESS.
        </p>
        <button 
          className="top-bar-close" 
          onClick={() => setIsVisible(false)}
          aria-label="Close announcement"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default TopBar;
