import React, { useState } from "react";
import Profile from "./Profile";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-gray-700 border-b border-gray-200">
        <div className="px-4 py-3 lg:px-6 flex items-center justify-between">
          {/* Brand Name */}
          <div className="text-2xl font-bold text-white dark:text-white tracking-wide">
            <Link style={{fontSize:"30px"}} to="/" className="font-sans text-2xl lg:text-2xl transition-transform transform hover:scale-105">
              Atomix AI
            </Link>
          </div>

          {/* Toggle button for small screens */}
          <button
            type="button"
            className="lg:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>

          {/* Links and Profile for large screens */}
          <div className="hidden lg:flex items-center space-x-8 ml-auto">
           

            {/* Profile Image */}
            <div className="relative">
              <button
                type="button"
                className="flex items-center text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 focus:outline-none"
                aria-expanded="false"
                onClick={toggleDropdown}
              >
                <img
                  className="w-10 h-10 rounded-full border-2 border-gray-600"
                  src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  alt="user photo"
                />
              </button>

              {/* Dropdown content */}
              {dropdownVisible && (
                  <Profile />
              )}
            </div>
          </div>
        </div>

        {/* Mobile menu (visible when menuOpen is true) */}
        {menuOpen && (
          <div className="lg:hidden px-3 py-3 space-y-2 bg-white dark:bg-gray-800 border-t  dark:border-gray-700">
            <Link
              to="/my-files"
              className="block text-gray-800 dark:text-white text-lg font-medium hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              My Files
            </Link>
            <Link
              to="/knowledge-management"
              className="block text-gray-800 dark:text-white text-lg font-medium hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              Knowledge Management
            </Link>
            <Link
              to="/guidelinePage"
              className="block text-gray-800 dark:text-white text-lg font-medium hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              Guidelines
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
