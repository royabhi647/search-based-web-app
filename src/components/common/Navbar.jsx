import React, { useState } from "react";
import NavLogo from '../../assets/navLogo.svg';
import MenuIcon from '../../assets/menu.svg';

function Navbar({ onSearch }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    onSearch(searchTerm);
  };

  return (
    <header className="w-full bg-white shadow-md py-2 px-8 sm:px-10 lg:px-32 flex flex-col sm:flex-row sm:justify-between items-center">
      <div className="w-full flex items-center justify-between mb-2 sm:mb-0">
        <a href="/">
          <div className="h-[40px] sm:h-[52px]">
            <img src={NavLogo} alt="logo" className="h-full" />
          </div>
        </a>
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <img src={MenuIcon} alt="menu" className="h-6 w-6" />
        </button>
        {isMenuOpen && (
          <div className="absolute top-16 right-4 bg-white shadow-lg rounded-lg py-2 z-20">
            <a
              href="https://girmantech.com/"
              className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-500"
            >
              WEBSITE
            </a>
            <a
              href="https://www.linkedin.com/company/girmantech/"
              className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-500"
            >
              LINKEDIN
            </a>
            <a
              href="mailto:contact@girmantech.com"
              className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-500"
            >
              CONTACT
            </a>
          </div>
        )}
      </div>
      <input
        type="text"
        placeholder="Search for users"
        className="hidden md:flex w-full sm:w-[300px] lg:w-[400px] px-4 py-2 border border-gray-300 rounded-lg shadow-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
        onChange={handleInputChange}
      />
    </header>
  )
}

export default Navbar;
