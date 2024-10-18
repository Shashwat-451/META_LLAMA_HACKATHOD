import React, { useState } from 'react';

const Search = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <form className="max-w-lg mx-auto w-full">
      <div className="flex relative">
        <div className="relative w-96 mr-5">
          <input
            type="search"
            id="search-dropdown"
            className="block w-full px-4 py-2 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-none"
            placeholder="Search Documents..."
            required
          />
          <button
            type="submit"
            className="absolute inset-y-0 right-0 px-4 py-2 text-white bg-blue-600 rounded-r-lg hover:bg-blue-700 transition duration-150"
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M10.5 18.5A7.5 7.5 0 1 1 18 10.5 7.5 7.5 0 0 1 10.5 18.5z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default Search;
