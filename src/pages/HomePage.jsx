import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavLogo from '../assets/navLogo.svg';
import HomeLogo from '../assets/homeLogo.svg';
import MenuIcon from '../assets/menu.svg';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchQuery.trim()) {
      fetch('/data.json')
        .then((response) => response.json())
        .then((data) => {
          const filtered = data.filter(
            (user) =>
              user.first_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              user.last_name.toLowerCase().includes(searchQuery.toLowerCase())
          );
          setSuggestions(filtered);
        });
    } else {
      setSuggestions([]);
    }
  }, [searchQuery]);

  const handleSelection = (selectedUser) => {
    navigate('/results', { state: { users: [selectedUser] } });
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      fetch('/data.json')
        .then((response) => response.json())
        .then((data) => {
          const filteredUsers = data.filter(
            (user) =>
              user.first_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              user.last_name.toLowerCase().includes(searchQuery.toLowerCase())
          );
          navigate('/results', { state: { users: filteredUsers } });
        });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 flex flex-col items-center">
      <header className="w-full bg-white shadow-md py-2 px-8 sm:px-10 lg:px-32 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <a href="/">
            <div className="h-[40px] sm:h-[52px]">
              <img src={NavLogo} alt="logo" className="h-full" />
            </div>
          </a>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="https://girmantech.com/" className="text-gray-700 hover:text-blue-500">
            WEBSITE
          </a>
          <a href="https://www.linkedin.com/company/girmantech/" className="text-gray-700 hover:text-blue-500">
            LINKEDIN
          </a>
          <a href="mailto:contact@girmantech.com" className="text-gray-700 hover:text-blue-500">
            CONTACT
          </a>
        </nav>

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
      </header>

      <main className="flex flex-col flex-grow mt-[100px] md:mt-36 px-8">
        <div className="flex flex-col items-center">
          <div className="h-[65px] md:h-[80px]">
            <img src={HomeLogo} alt="logo" className="h-full" />
          </div>
        </div>

        <div className="relative mt-8 w-full">
          <input
            type="text"
            placeholder="Search for users"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          {suggestions.length > 0 && (
            <ul className="absolute z-10 bg-white border border-gray-300 rounded-lg shadow-md mt-2 w-full">
              {suggestions.map((user, index) => (
                <li
                  key={index}
                  onClick={() => handleSelection(user)}
                  className="px-4 py-2 cursor-pointer hover:bg-blue-50"
                >
                  {user.first_name} {user.last_name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
    </div>
  );
};

export default HomePage;