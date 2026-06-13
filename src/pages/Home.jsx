import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import TalentCard from '../components/TalentCard';
import Footer from '../components/Footer';
import uyiosaImage from '../assets/uyiosa-nehikhuere.webp';
import sheldenImage from '../assets/shelden-rattray.webp';
import raphaelImage from '../assets/raphael-omorose.webp';
import seanImage from '../assets/sean-tolliver.webp';
import jermaineImage from '../assets/jermaine-washington.webp';
import kereithImage from '../assets/kereith-dyce.webp';
import romaneImage from '../assets/romane-marshall.webp';
import rodricousImage from '../assets/rodricous-cannady.webp';
import ikennaImage from '../assets/ikenna-okonkwo.webp';
import nickImage from '../assets/nick-bear.webp';
import georgeImage from '../assets/george-purnell.webp';
import rolandImage from '../assets/roland-saavedra.webp';

const talentData = [
  { id: 15, name: 'Roland Saavedra', location: 'San Francisco, USA', role: 'Co-Founder of MarkIt (YC F25)', socialLink: 'https://www.linkedin.com/in/rsaav/', image: rolandImage, aspectRatio: '1/1' },
  { id: 14, name: 'George Purnell', location: 'Atlanta, USA', role: 'Software Engineer at Google', socialLink: 'https://www.linkedin.com/in/georgewpurnell/', image: georgeImage, aspectRatio: '1/1' },
  { id: 9, name: 'Nick Bear', location: 'Atlanta, USA', role: 'Software Developer at Southern Company', socialLink: 'https://www.linkedin.com/in/nickbear/', image: nickImage, aspectRatio: '1/1' },
  { id: 5, name: 'Jermaine Washington Jr.', location: 'Atlanta, USA', role: 'Senior Software Engineer at Equifax. Florida State University Alumni.', socialLink: 'https://www.linkedin.com/in/jermainewashingtonjr/', image: jermaineImage, aspectRatio: '1.1/1' },
  { id: 7, name: 'Rodricous Cannady', location: 'Atlanta, USA', role: 'Senior Software Engineer at Equifax', socialLink: 'https://www.linkedin.com/in/rodricous-cannady-69221751/', image: rodricousImage, aspectRatio: '1/1' },
  { id: 8, name: 'Ikenna Okonkwo', location: 'Atlanta, USA', role: 'Software Engineer at Microsoft', socialLink: 'https://www.linkedin.com/in/ikenna-okonkwo/', image: ikennaImage, aspectRatio: '1/1' },
  { id: 4, name: 'Sean Tolliver', location: 'Atlanta, USA', role: 'Co-Founder of TRKGLOBAL LLC. Georgia Tech Alumni MBA Management Of Technology.', socialLink: 'https://www.linkedin.com/in/seantolliver/', image: seanImage, aspectRatio: '1/1' },
  { id: 13, name: 'Kereith Dyce', location: 'Atlanta, USA', role: 'Advanced Application Developer at Invesco Ltd, Auburn University Alumni', socialLink: 'https://www.linkedin.com/in/kareithdyce/', image: kereithImage, aspectRatio: '1/1' },
  { id: 6, name: 'Romane Marshall', location: 'Atlanta, USA', role: 'Full-Stack Engineer at Accenture', socialLink: 'https://www.linkedin.com/in/romane-m-30a6a31ab/', image: romaneImage, aspectRatio: '1/1' },
  { id: 1, name: 'Uyiosa Nehikhuere', location: 'Atlanta, USA', role: 'Software Engineer Intern @ New York Life, Prev SWE Intern @ FactSet, Computer Science student at Georgia State University.', socialLink: 'https://www.linkedin.com/in/uyiosa-nehikhuere-16406328b/', image: uyiosaImage, aspectRatio: '1/1' },
  { id: 3, name: 'Raphael Omorose', location: 'Atlanta, USA', role: '2x Software Engineer Intern @ Uber, Computer Science student at Georgia State University, GSU Colorstack Vice President', socialLink: 'https://www.linkedin.com/in/raphaelomorose/', image: raphaelImage, aspectRatio: '1.2/1' },
  { id: 2, name: 'Shelden Rattray', location: 'Atlanta, USA', role: 'Cloud Platform Engineer Intern at Fiserv. Computer Science student at Georgia State University.', socialLink: 'https://linkedin.com/in/shelden-rattray', image: sheldenImage, aspectRatio: '0.88/1' }
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
