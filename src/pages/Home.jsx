import React from 'react';
import Hero from '../components/Hero';
import TalentCard from '../components/TalentCard';
import Footer from '../components/Footer';
import sheldenImage from '../assets/shelden.png';

const talentData = [
  {
    id: 1,
    name: 'Shelden Rattray',
    location: 'Atlanta, USA',
    website: 'https://www.sheldenr.dev',
    role: 'Cloud Platform Engineer at Fiserv. Building scalable infrastructure and automating global financial systems.',
    socialLink: 'https://linkedin.com/in/sheldenrattray',
    image: sheldenImage,
    aspectRatio: '0.85' 
  },
  {
    id: 2,
    name: 'TBD',
    location: 'Coming Soon',
    website: '#',
    role: 'Community member spotlight. We are currently vetting and aggregating the next wave of Black excellence in tech.',
    socialLink: '#',
    aspectRatio: '1.0' 
  },
  {
    id: 3,
    name: 'TBD',
    location: 'Coming Soon',
    website: '#',
    role: 'Community member spotlight. We are currently vetting and aggregating the next wave of Black excellence in tech.',
    socialLink: '#',
    aspectRatio: '0.8' 
  },
  {
    id: 4,
    name: 'TBD',
    location: 'Coming Soon',
    role: 'Community member spotlight. We are currently vetting and aggregating the next wave of Black excellence in tech.',
    socialLink: '#',
    aspectRatio: '0.95' 
  },
  {
    id: 5,
    name: 'TBD',
    location: 'Coming Soon',
    role: 'Community member spotlight. We are currently vetting and aggregating the next wave of Black excellence in tech.',
    socialLink: '#',
    aspectRatio: '0.9' 
  },
  {
    id: 6,
    name: 'TBD',
    location: 'Coming Soon',
    role: 'Community member spotlight. We are currently vetting and aggregating the next wave of Black excellence in tech.',
    socialLink: '#',
    aspectRatio: '1.0' 
  },
  {
    id: 7,
    name: 'TBD',
    location: 'Coming Soon',
    role: 'Community member spotlight. We are currently vetting and aggregating the next wave of Black excellence in tech.',
    socialLink: '#',
    aspectRatio: '0.75'
  },
  {
    id: 8,
    name: 'TBD',
    location: 'Coming Soon',
    role: 'Community member spotlight. We are currently vetting and aggregating the next wave of Black excellence in tech.',
    socialLink: '#',
    aspectRatio: '0.85'
  },
  {
    id: 9,
    name: 'TBD',
    location: 'Coming Soon',
    role: 'Community member spotlight. We are currently vetting and aggregating the next wave of Black excellence in tech.',
    socialLink: '#',
    aspectRatio: '0.65'
  },
  {
    id: 10,
    name: 'TBD',
    location: 'Coming Soon',
    role: 'Community member spotlight. We are currently vetting and aggregating the next wave of Black excellence in tech.',
    socialLink: '#',
    aspectRatio: '0.9'
  },
  {
    id: 11,
    name: 'TBD',
    location: 'Coming Soon',
    role: 'Community member spotlight. We are currently vetting and aggregating the next wave of Black excellence in tech.',
    socialLink: '#',
    image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&q=80&w=400&h=400',
    aspectRatio: '1.0'
  },
  {
    id: 12,
    name: 'TBD',
    location: 'Coming Soon',
    role: 'Community member spotlight. We are currently vetting and aggregating the next wave of Black excellence in tech.',
    socialLink: '#',
    aspectRatio: '0.8'
  }
];

const Home = () => {
  return (
    <>
      <Hero />
      <div className="talent-grid-full">
        {talentData.map(talent => (
          <TalentCard key={talent.id} {...talent} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Home;
