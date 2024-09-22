import React from 'react';
import footerBackgroundImage from '../assets/images/footer.png'; 
import logo from '../assets/images/footerlogo.png'; 

const Footer: React.FC = () => {
  return (
    <footer
      className="relative bg-cover bg-center"
      style={{ backgroundImage: `url(${footerBackgroundImage})`, height: '30vh' }}
    >
      <div className="flex items-center h-full max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 md:pt-14">
        <div className="text-white text-left">
          <img src={logo} alt="Footer Logo" className="mb-4 w-28 md:w-32" />
          <p className="text-sm sm:text-base md:text-xl font-light font-montserrat capitalize">
            All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
