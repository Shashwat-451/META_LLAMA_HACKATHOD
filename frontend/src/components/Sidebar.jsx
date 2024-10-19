import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SiKnowledgebase } from "react-icons/si";
import { SiFiles } from "react-icons/si";
import { FaGuilded } from "react-icons/fa";
const Sidebar = () => {
  // State to manage sidebar visibility
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Toggle button for small screens */}
      <div className="fixed top-4 left-4 sm:hidden z-50">
        <button
          onClick={toggleSidebar}
          className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dar:text-gray-400 dar:hover:bg-gray-700 dar:focus:ring-gray-600"
        >
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            />
          </svg>
          <span className="sr-only">Toggle sidebar</span>
        </button>
      </div>

      {/* Sidebar */}
      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } bg-gray-800 border-r border-gray-700 sm:translate-x-0 shadow-lg`}
        aria-label="Sidebar"
      >
        {/* Sidebar content */}
        <div className="h-full overflow-y-auto bg-gray-800">
          {/* Logo and brand name */}
          <div className="flex mt-6 z-30">
            <Link to="/" className="flex ms-2 md:me-24">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8 me-3"
                alt="FlowBite Logo"
              />
              <h1
                style={{
                  fontSize: "28px",
                  fontWeight: "700",
                  letterSpacing: "0.1rem",
                  color: "white",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
                }}
                className="self-center mt-[-5px] font-sans"
              >
                BIOSIMILAR
              </h1>
            </Link>
          </div>

          {/* Navigation links */}
          <ul className="space-y-4 mt-10">
            <li>
              <Link
                to="/knowledge-management"
                className="flex items-center p-3 text-lg font-semibold text-gray-300 rounded-lg hover:bg-gray-700 hover:text-white transition-all duration-200"
              >
                <SiKnowledgebase />
                <span className="ml-4 font-sans text-white">Knowledge Base</span>
              </Link>
            </li>
            <li>
              <Link
                to="/my-files"
                className="flex items-center p-3 text-lg font-semibold text-gray-300 rounded-lg hover:bg-gray-700 hover:text-white transition-all duration-200"
              >
               <SiFiles />
                <span className="ml-4 text-white">My Files</span>
              </Link>
            </li>
            <li>
              <Link
                to="/guidelinePage"
                className="flex items-center p-3 text-lg font-semibold text-gray-300 rounded-lg hover:bg-gray-700 hover:text-white transition-all duration-200"
              >
                <FaGuilded />
                <span className="ml-4 text-white">Guidelines</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>

      {/* Background overlay when sidebar is open on small screens */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 z-30 bg-black opacity-50 sm:hidden"
        ></div>
      )}
    </>
  );
};

export default Sidebar;
