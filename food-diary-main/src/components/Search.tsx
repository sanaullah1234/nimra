import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import logo from '../assets/images/CP-Logo 1.png';

const Header: React.FC = () => {
  const [isSticky, setIsSticky] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`bg-white shadow-md w-full z-50 ${isSticky ? 'fixed top-0 left-0' : 'relative'}`}
    >
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0  md:space-x-28 py-3 max-w-[1180px] mx-auto px-4">
        {/* Logo and Site Name */}
        <div className="md:w-[120px] sm:w-[100px] w-[60px] ">
          <img src={logo} alt="Cookpal Logo" className="w-full h-auto" />
        </div>

        {/* Search Bar */}
        <div className="flex flex-col md:flex-row items-center space-y-4  md:space-y-0 w-full md:w-[50%]">
          <div className="flex items-center w-full border rounded-[20px] h-[38px] overflow-hidden">
            <select className="px-6 py-2 appearance-none bg-gray-100 border-r font-medium rounded-[20px] focus:outline-none">
              <option>All Categories</option>
              <option>Recipes</option>
              <option>Ingredients</option>
            </select>
            <input 
              type="text" 
              placeholder="Search" 
              className="w-full px-4 py-2 focus:outline-none font-semibold text-[#D9D9D9]"
            />
            <button className="px-3 py-3 rounded-full bg-[#D9D9D9] hover:bg-gray-200">
              <FaSearch />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
