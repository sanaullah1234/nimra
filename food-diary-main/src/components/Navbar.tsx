import React, { useState } from 'react';
import { FaUserPlus, FaSignInAlt, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/images/CP-Logo 1.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-black">
      <nav className="max-w-7xl mx-auto text-white uppercase font-montserrat text-xs px-4 py-3 font-semibold flex flex-col md:flex-row justify-between items-center">
        {/* Logo */}
        <div className="flex justify-between items-center w-full lg:hidden md:w-auto">
          <div className="w-[60px]">
            <img src={logo} alt="Logo" className="w-full h-auto" />
          </div>
          <button className="md:hidden text-white" onClick={toggleMenu}>
            {isOpen ? <FaTimes size={15} /> : <FaBars size={15} />}
          </button>
        </div>

        {/* Menu Items for Desktop */}
        <ul className={`md:flex flex-col md:flex-row space-y-4  md:space-y-0 md:space-x-12 items-center ${isOpen ? 'block' : 'hidden md:block'}`}>
          <li><a href="#" className="hover:text-primary ">Community</a></li>
          <li><a href="#" className="hover:text-primary">Books</a></li>
          <li><a href="#" className="hover:text-primary">Recipe Index</a></li>
          <li><a href="#" className="hover:text-primary">Popular</a></li>
        </ul>

        {/* Register and Login for Desktop */}
        <div className={`flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 mt-4 md:mt-0 lg:items-center ${isOpen ? 'block' : 'hidden md:flex'}`}>
          <a href="#" className="flex items-center hover:text-primary">
            <FaSignInAlt className="mr-2 text-primary" /> Register
          </a>
          <a href="#" className="flex lg:items-center hover:text-primary">
            <FaUserPlus className="mr-2 text-primary" /> Login
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

