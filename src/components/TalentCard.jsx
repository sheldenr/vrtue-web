import React from 'react';

const TalentCard = ({ name, location, website, role, socialLink, image, aspectRatio }) => {
  return (
    <div className="talent-card">
      <div 
        className="talent-image-wrapper" 
        style={{ aspectRatio: aspectRatio || '1/1' }}
      >
        <img src={image || 'https://placehold.co/600x600'} alt={name} className="talent-image" />
      </div>
      <div className="talent-info-static">
        <h3 className="talent-name">{name}</h3>
        <p className="talent-location">{location}</p>
        <p className="talent-role">{role}</p>
        <div className="talent-links">
          <a href={socialLink} className="talent-social-link" target="_blank" rel="noopener noreferrer">
            Connect
          </a>
        </div>
      </div>
    </div>
  );
};

export default TalentCard;
