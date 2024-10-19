import React, { useState } from 'react';
import { FaFilter, FaSearch } from "react-icons/fa"
const Search = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <form className="max-w-lg mx-auto w-full">
      <div className="flex relative">
      <div className="relative w-88 mr-10 flex shadow-lg p-2 rounded-full">
  <div className="mt-3 text-gray-400 text-[20px] ml-3">
    <FaSearch />
  </div>
  <div className="flex-grow">
    <input
      type="search"
      id="search-dropdown"
      className="w-72 px-4 py-2 text-sm text-gray-900 outline-none focus:ring-0 mt-1" 
      placeholder="Search Documents..."
      required
    />
  </div>
</div>

      </div>
    </form>
  );
};

export default Search;
