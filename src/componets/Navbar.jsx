import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="sticky top-0 w-full h-20 bg-pink-600 flex items-center justify-between px-6 md:px-20 z-50">
      {/* Logo and Heading */}
      <div className="flex items-center space-x-4">
        <img
          src="src/images/icons8-heart-64.png"
          alt="Logo"
          className="h-18 w-18"
        />
        <h1 className="text-2xl font-bold text-white tracking-wide">
          <span className="text-white">WEDDING PLANER</span>
        </h1>
      </div>

      {/* Hamburger Menu Button */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Navbar Links */}
      <div
        className={`absolute top-16 left-0 w-full bg-pink-700 md:static md:bg-transparent md:flex md:items-center md:space-x-20 ${
          isMenuOpen ? 'block' : 'hidden'
        }`}
      >
        <Link
          to="/home"
          className="block py-2 px-4 text-white hover:text-yellow-400"
        >
          Home
        </Link>
        <Link
          to="/plan"
          className="block py-2 px-4 text-white hover:text-yellow-400"
        >
          Plan
        </Link>
        <Link
          to="/services"
          className="block py-2 px-4 text-white hover:text-yellow-400"
        >
          Services
        </Link>
        <Link
          to="/albums"
          className="block py-2 px-4 text-white hover:text-yellow-400"
        >
          Albums
        </Link>
        <Link
          to="/portfolio"
          className="block py-2 px-4 text-white hover:text-yellow-400"
        >
          Portfolio
        </Link>
        <Link
          to="/contact"
          className="block py-2 px-4 text-white hover:text-yellow-400"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
