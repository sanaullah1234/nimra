import React from 'react';


interface MenuItem {
  name: string;
  link: string;
}

const Cardnav: React.FC = () => {
  const menuItems: MenuItem[] = [
    { name: 'Home', link: '#home' },
    { name: 'Explore', link: '#explore' },
    { name: 'Help', link: '#help' },
    { name: 'Profile', link: '#profile' },
  ];

  return (
    <nav className="my-5">
      <div className="max-w-full sm:max-w-[600px] mx-auto px-4 border-t-2 border-b-2 border-[#D0C5C580]">
        <ul className="flex flex-wrap items-center text-primary justify-center space-x-10 sm:space-x-20">
          {menuItems.map((item, index) => (
            <li key={index} className="py-2 font-semibold text-sm sm:text-base">
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Cardnav;

