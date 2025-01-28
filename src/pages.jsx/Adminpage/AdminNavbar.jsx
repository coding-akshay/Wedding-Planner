import React, { useState } from "react";
import { Link } from "react-router-dom";

function AdminNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 w-full bg-pink-600 z-50 shadow-lg">
      {/* Navbar Container */}
      <div className="flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 h-20">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <img
            src="src/assets/Images/logo.png"
            alt="Logo"
            className="h-10 w-10"
          />
          <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white tracking-wide">
            WEDDING PLANNER
          </h1>
        </div>

        {/* Hamburger Button for Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none hover:text-yellow-400 transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
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

        {/* Menu Links */}
        <div
          className={`absolute top-16 left-0 w-full bg-pink-600 md:static md:bg-transparent md:flex md:space-x-6 md:items-center transition-all duration-300 ease-in-out ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6">
            <li>
              <Link
                to="/home"
                className="block py-3 px-4 text-white font-semibold hover:text-yellow-400 text-center md:text-sm lg:text-base"
              >
                Home
              </Link>
            </li>
           
            <li>
              <Link
                to="/Portfolio "
                className="block py-3 px-4 text-white font-semibold hover:text-yellow-400 text-center md:text-sm lg:text-base"
              >
Add Profile  </Link>
            </li>  
             <li>
              <Link
                to="/Information"
                className="block py-3 px-4 text-white font-semibold hover:text-yellow-400 text-center md:text-sm lg:text-base"
              >
             Information
             </Link>
            </li>  
          
         
          
          </ul>
        </div>
      </div>
    </nav>
  );
}



export default AdminNavbar
