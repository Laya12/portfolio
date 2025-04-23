import React from 'react';
import { Link } from 'react-router-dom';

const MobileMenu = ({ menuOpen }) => {
  if (!menuOpen) return null;

  return (
    <div className='absolute fixed border-1 z-50 top-full right-0 cursor-pointer w-40  bg-white text-white shadow-lg rounded-lg  md:hidden'>
      <Link
        to="/portfolio/skills"
        className="block px-4  py-2 text-sm text-gray-800 hover:bg-gray-100 rounded-md transition-colors"
      >
        Skills
      </Link>
      <Link
        to="/portfolio/experience"
        className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 rounded-md transition-colors"
      >
        Experiences
      </Link>
      <Link
        to="/portfolio/education"
        className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 rounded-md transition-colors"
      >
        Education+Certs
      </Link>
      <Link
        to="/portfolio/about"
        className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 rounded-md transition-colors"
      >
        About
      </Link>
      
      <Link
        to="/portfolio/contact"
        className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 rounded-md transition-colors"
      >
        Contact
      </Link>
    </div>
  );
};

export default MobileMenu;
