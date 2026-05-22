import React from 'react';

const TalentCard = ({ name, location, website, role, socialLink, image }) => {
  return (
    <div className="talent-card">
      <div className="talent-image-wrapper">
        <img src={image || 'https://placehold.co/600x600'} alt={name} className="talent-image" />
      </div>
      <div className="talent-info">
        <h3 className="talent-name">{name}</h3>
        <p className="talent-location">{location}</p>
        <a href={website} className="talent-website" target="_blank" rel="noopener noreferrer">
          {website.replace(/^https?:\/\//, '')}
        </a>
        <p className="talent-role">{role}</p>
        <a href={socialLink} className="talent-social-button" target="_blank" rel="noopener noreferrer">
          Connect
        </a>
      </div>
    </div>
  );
};

export default TalentCard;
