import React, { useState } from 'react';
import { ArrowRightIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import a CSS file for styling

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="navbar bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/" className="title-font font-medium text-white mb-4 md:mb-0">
          <span className="ml-3 text-xl">Shaketa Giles</span> {/* Shaketa Giles/}
        </Link>
        <nav className={`md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center ${isMenuOpen ? 'menu-open' : ''}`}>
          <button className="md:hidden" onClick={toggleMenu}>
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>
          <ul className="md:flex md:items-center md:justify-center">
            <li className="mr-5 hover:text-white"><Link to="/projects">Past Work</github.com/KG8905></li>
            <li className="mr-5 hover:text-white"><Link to="/resume">Resume</Link></li>
          </ul>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
        >
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}

export default Navbar;
