import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import emptyData from '../assets/emptyData.svg';
import Card from '@/components/common/Card';
import Navbar from '@/components/common/Navbar';

const SearchResultsPage = () => {
  const location = useLocation();
  const { users: initialUsers } = location.state || {};
  const [users, setUsers] = useState(initialUsers || []);

  const handleSearch = (searchTerm) => {
    if (!searchTerm.trim()) {
      setUsers(initialUsers);
      return;
    }
    const filteredUsers = initialUsers.filter((user) =>
      user.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.last_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setUsers(filteredUsers);
  };

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    handleSearch(searchTerm);
  };

  return (
    <>
      <Navbar onSearch={handleSearch} />
      <div className='mt-9 block md:hidden px-10'>
        <input
          type="text"
          placeholder="Search for users"
          className="w-full sm:w-[300px] lg:w-[400px] px-4 py-2 border border-gray-300 rounded-lg shadow-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          onChange={handleInputChange}
        />
      </div>
      <div className="container mx-auto px-10 sm:px-6 lg:px-8 py-8">
        {users && users.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {users.map((user, index) => (
              <Card user={user} key={index} />
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center mt-10 sm:mt-20">
            <img src={emptyData} alt='no_data' className="w-[350px] h-[350px]" />
          </div>
        )}
      </div>
    </>
  );
};

export default SearchResultsPage;