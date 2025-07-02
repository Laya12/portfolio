import React from 'react';
import { Link } from 'react-router-dom';

const MobileMenu = ({ menuOpen, toggleMenu }) => {
  if (!menuOpen) return null;

  return (
    <div className='fixed border-1 z-50 top-full right-0 cursor-pointer w-40  bg-white text-white shadow-lg rounded-lg  md:hidden'>
      <Link
        to="/skills"
        onClick={toggleMenu}
        className="block px-4  py-2 text-sm text-gray-800 hover:bg-gray-100 rounded-md transition-colors"
      >
        Skills
      </Link>
      <Link
        to="/experience"
        onClick={toggleMenu}
        className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 rounded-md transition-colors"
      >
        Experiences
      </Link>
      <Link
        to="/projects"
        onClick={toggleMenu}
        className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 rounded-md transition-colors"
      >
        Projects
      </Link>
      <Link
        to="/education"
        onClick={toggleMenu}
        className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 rounded-md transition-colors"
      >
        Education+Certs
      </Link>
      <Link
        to="/about"
        onClick={toggleMenu}
        className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 rounded-md transition-colors"
      >
        About
      </Link>
      
      <Link
        to="/contact"
        onClick={toggleMenu}
        className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 rounded-md transition-colors"
      >
        Contact
      </Link>
    </div>
  );
};

export default MobileMenu;
