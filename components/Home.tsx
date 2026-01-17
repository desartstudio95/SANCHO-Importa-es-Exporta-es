import React from 'react';
import Hero from './Hero';
import Services from './Services';
// About is now a separate page
import Catalog from './Catalog';
import Contact from './Contact';

const Home: React.FC = () => {
  return (
    <main className="flex-grow">
      <Hero />
      <Services />
      {/* About Section removed from Home flow */}
      <Catalog />
      <Contact />
    </main>
  );
};

export default Home;