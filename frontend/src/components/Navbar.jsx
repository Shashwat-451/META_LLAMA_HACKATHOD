import React, { useState } from "react";
import Profile from "./Profile";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <>
      <nav className="fixed top-0 z-50 w-[82%] left-64 bg-white border-b border-gray-200 dar:bg-gray-800 dar:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            {/* Add any content or links on the left side */}
            

            {/* Profile Image aligned to the right */}
            <div className="flex items-center ml-auto">
              <button
                type="button"
                className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dar:focus:ring-gray-600"
                aria-expanded="false"
                onClick={toggleDropdown}
              >
                <span className="sr-only">Open user menu</span>
                <img
                  className="w-10 h-10 rounded-full"
                  src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  alt="user photo"
                />
              </button>

              {/* Dropdown content (visible when dropdownVisible is true) */}
              {dropdownVisible && <Profile />}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
