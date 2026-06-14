import React from 'react';
import ycIcon from '../assets/ycombinator-tile.svg';

const TalentCard = ({ name, location, role, socialLink, image, aspectRatio, isCTA, isYC }) => {
  const isPlaceholder = name === 'TBD' || !image;

  const renderRole = () => {
    if (isYC && role.includes('MarkIt')) {
      const parts = role.split('MarkIt');
      return (
        <>
          {parts[0]}MarkIt
          <img src={ycIcon} alt="YC" className="yc-badge" />
          {parts[1]}
        </>
      );
    }
    return role;
  };

  return (
    <div className={`talent-card ${isCTA ? 'talent-card-cta' : ''}`}>
      <div 
        className="talent-image-wrapper"
        style={{ aspectRatio: aspectRatio || '1/1' }}
      >
        {isPlaceholder ? (
          <div className="talent-placeholder">V</div>
        ) : (
          <img src={image} alt={name} className="talent-image" />
        )}
      </div>
      <div className="talent-info-static">
        <h3 className="talent-name">{name}</h3>
        <p className="talent-location">{location}</p>
        <p className="talent-role">{renderRole()}</p>
        <div className="talent-links">
          <a href={socialLink} className="talent-social-link" target="_blank" rel="noopener noreferrer">
            {isCTA ? 'Join Us' : 'Connect'}
          </a>
        </div>
      </div>
    </div>
  );
};


export default TalentCard;
