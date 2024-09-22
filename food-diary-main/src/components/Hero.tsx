import React from 'react';
import backgroundImage from '../assets/images/hero-bg.png'; 

const HeroSection: React.FC = () => {
  return (
    <section
    className="bg-cover bg-center h-[70vh] sm:h-[30vh] md:h-[60vh]"
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    <div className="h-full max-w-[1180px] mx-auto px-4 md:pt-32 pt-20">
      <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-light font-montserrat">
        Food Diary
      </h1>
    </div>
  </section>
  
  );
};

export default HeroSection;
