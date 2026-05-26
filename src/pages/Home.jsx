import React from 'react';
import Hero from '../components/Hero';
import TalentCard from '../components/TalentCard';
import Footer from '../components/Footer';

const talentData = [
  {
    id: 1,
    name: 'Ayo Adeyemi',
    location: 'Lagos, Nigeria',
    website: 'https://ayo.dev',
    role: 'Senior Software Engineer specializing in Distributed Systems and Cloud Infrastructure. Previously at Google.',
    socialLink: 'https://twitter.com/ayo',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400&h=500',
    aspectRatio: '0.85' 
  },
  {
    id: 2,
    name: 'Sarah Chen',
    location: 'London, UK',
    website: 'https://sarahchen.design',
    role: 'Product Designer focused on creating accessible and intuitive user experiences for fintech startups.',
    socialLink: 'https://linkedin.com/in/sarahchen',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400&h=400',
    aspectRatio: '1.0' 
  },
  {
    id: 3,
    name: 'Marcus Williams',
    location: 'New York, USA',
    website: 'https://marcus.io',
    role: 'AI Researcher and Engineering Lead. Building the next generation of LLMs for specialized industries.',
    socialLink: 'https://twitter.com/marcus',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=600',
    aspectRatio: '0.8' 
  },
  {
    id: 4,
    name: 'Nia Johnson',
    location: 'San Francisco, USA',
    website: 'https://niaj.me',
    role: 'Founder & CEO of Bloom Tech. Transforming how early-stage startups manage their equity.',
    socialLink: 'https://linkedin.com/in/niajohnson',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=400&h=450',
    aspectRatio: '0.95' 
  },
  {
    id: 5,
    name: 'Kofi Mensah',
    location: 'Accra, Ghana',
    website: 'https://kofimensah.tech',
    role: 'Full Stack Developer and Open Source Contributor. Passionate about Web3 and decentralized finance.',
    socialLink: 'https://github.com/kofimensah',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=550',
    aspectRatio: '0.9' 
  },
  {
    id: 6,
    name: 'Elena Rodriguez',
    location: 'Berlin, Germany',
    website: 'https://elena.design',
    role: 'Visual Designer and Brand Strategist. Helping tech companies find their unique voice and aesthetic.',
    socialLink: 'https://behance.net/elena',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400',
    aspectRatio: '1.0' 
  },
  {
    id: 7,
    name: 'Jasmine Okafor',
    location: 'Lagos, Nigeria',
    website: 'https://jasmine.io',
    role: 'Frontend Architect and UI Engineer. Specialist in React, Performance, and Design Systems.',
    socialLink: 'https://github.com/jasmine',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=400&h=550',
    aspectRatio: '0.75'
  },
  {
    id: 8,
    name: 'David Boateng',
    location: 'London, UK',
    website: 'https://davidb.tech',
    role: 'Backend Engineer focusing on Scalable Infrastructure and Cybersecurity. Ex-Amazon.',
    socialLink: 'https://linkedin.com/in/davidboateng',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=480',
    aspectRatio: '0.85'
  },
  {
    id: 9,
    name: 'Maya Peterson',
    location: 'Atlanta, USA',
    website: 'https://mayap.dev',
    role: 'Mobile Developer specializing in Swift and Kotlin. Building tools for the next generation of creatives.',
    socialLink: 'https://twitter.com/mayap',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400&h=600',
    aspectRatio: '0.65'
  },
  {
    id: 10,
    name: 'Tunde Smith',
    location: 'San Francisco, USA',
    website: 'https://tundes.me',
    role: 'Data Scientist and Machine Learning Engineer. Transforming complex data into actionable insights.',
    socialLink: 'https://linkedin.com/in/tundesmith',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400&h=450',
    aspectRatio: '0.9'
  },
  {
    id: 11,
    name: 'Zoe Williams',
    location: 'New York, USA',
    website: 'https://zoew.design',
    role: 'Motion Designer and 3D Artist. Bringing interfaces to life through movement and depth.',
    socialLink: 'https://behance.net/zoew',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400&h=400',
    aspectRatio: '1.0'
  },
  {
    id: 12,
    name: 'Isaac Newton',
    location: 'Nairobi, Kenya',
    website: 'https://isaac.dev',
    role: 'Full Stack Engineer and Tech Lead. Building fintech solutions for emerging markets.',
    socialLink: 'https://github.com/isaacn',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=520',
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
