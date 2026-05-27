import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import TalentCard from '../components/TalentCard';
import Footer from '../components/Footer';
import uyiosaImage from '../assets/uyiosa-nehikhuere.jpg';
import sheldenImage from '../assets/shelden-rattray.png';
import raphaelImage from '../assets/raphael-omorose.png';
import seanImage from '../assets/sean-tolliver.jpg';

const talentData = [
  { id: 1, name: 'Uyiosa Nehikhuere', location: 'Atlanta, USA', role: 'Software Engineer Intern @ New York Life, Prev SWE Intern @ FactSet, Computer Science student at Georgia State University.', socialLink: 'https://www.linkedin.com/in/uyiosa-nehikhuere-16406328b/', image: uyiosaImage, aspectRatio: '1/1' },
  { id: 2, name: 'Shelden Rattray', location: 'Atlanta, USA', role: 'Cloud Platform Engineer Intern at Fiserv. Computer Science student at Georgia State University.', socialLink: 'https://linkedin.com/in/shelden-rattray', image: sheldenImage, aspectRatio: '0.88/1' },
  { id: 3, name: 'Raphael Omorose', location: 'Atlanta, USA', role: '2x Software Engineer Intern @ Uber, Computer Science student at Georgia State University, GSU Colorstack Vice President', socialLink: 'https://www.linkedin.com/in/raphaelomorose/', image: raphaelImage, aspectRatio: '1.2/1' },
  { id: 4, name: 'Sean Tolliver', location: 'Atlanta, USA', role: 'Co-Founder of TRKGLOBAL LLC. Georgia Tech Alumni MBA Management Of Technology.', socialLink: 'https://www.linkedin.com/in/seantolliver/', image: seanImage, aspectRatio: '1/1' },
  { id: 5, name: 'TBD', location: 'Coming Soon', role: 'Community member spotlight. We are currently vetting and aggregating the next wave of Black excellence in tech.', socialLink: '#', aspectRatio: '1.1/1' },
  { id: 6, name: 'TBD', location: 'Coming Soon', role: 'Community member spotlight. We are currently vetting and aggregating the next wave of Black excellence in tech.', socialLink: '#', aspectRatio: '1/1' },
  { id: 7, name: 'TBD', location: 'Coming Soon', role: 'Community member spotlight. We are currently vetting and aggregating the next wave of Black excellence in tech.', socialLink: '#', aspectRatio: '0.85/1' },
  { id: 8, name: 'TBD', location: 'Coming Soon', role: 'Community member spotlight. We are currently vetting and aggregating the next wave of Black excellence in tech.', socialLink: '#', aspectRatio: '1.05/1' },
  { id: 9, name: 'TBD', location: 'Coming Soon', role: 'Community member spotlight. We are currently vetting and aggregating the next wave of Black excellence in tech.', socialLink: '#', aspectRatio: '0.75/1' },
  { id: 10, name: 'TBD', location: 'Coming Soon', role: 'Community member spotlight. We are currently vetting and aggregating the next wave of Black excellence in tech.', socialLink: '#', aspectRatio: '1.2/1' },
  { id: 11, name: 'TBD', location: 'Coming Soon', role: 'Community member spotlight. We are currently vetting and aggregating the next wave of Black excellence in tech.', socialLink: '#', image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&q=80&w=400&h=400', aspectRatio: '1/1' },
  { id: 12, name: 'TBD', location: 'Coming Soon', role: 'Community member spotlight. We are currently vetting and aggregating the next wave of Black excellence in tech.', socialLink: '#', aspectRatio: '0.95/1' }
];

const Home = () => {
  const [columns, setColumns] = useState(6);

  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth;
      if (width > 1400) setColumns(6);
      else if (width > 1100) setColumns(4);
      else if (width > 800) setColumns(3);
      else setColumns(2);
    };

    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, []);

  // Distribute items into columns to maintain visual order 1, 2, 3... left-to-right
  const distributedData = Array.from({ length: columns }, () => []);
  talentData.forEach((item, index) => {
    distributedData[index % columns].push(item);
  });

  return (
    <>
      <Hero />
      <div className="talent-masonry-container">
        {distributedData.map((columnItems, colIndex) => (
          <div key={colIndex} className="talent-masonry-column">
            {columnItems.map(talent => (
              <TalentCard key={talent.id} {...talent} />
            ))}
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Home;
