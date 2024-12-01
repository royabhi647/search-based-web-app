import React, { useState } from "react";
import Profile from '../../assets/profile.svg';
import locationIcon from '../../assets/location.svg';
import phoneIcon from '../../assets/phone.svg';
import UserDetailsDialog from "./UserDetailsDialog";

function Card({user, index}) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDialogOpen = () => setIsDialogOpen(true);
  const handleDialogClose = () => setIsDialogOpen(false);

  return (
    <div
      key={index}
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out"
    >
      <div className="flex">
        <img
          src={Profile}
          alt={`${user.first_name} ${user.last_name}`}
          className="w-20 h-20 rounded-full object-cover border-4 border-gray-300"
        />
      </div>

      <div className="text-left">
        <h3 className="font-semibold text-gray-900 text-[32px]">
          {user.first_name} {user.last_name}
        </h3>
        <p className="flex items-center text-gray-600 mb-1">
          <img src={locationIcon} alt="Location Icon" className="w-4 h-4 mr-1" />
          {user.city}
        </p>
      </div>

      <hr className='mt-4' />

      <div className="flex justify-between mt-4">
        <div className='flex flex-col'>
          <p className="text-sm text-gray-400">Available on phone</p>
          <p className="flex items-center text-gray-600 mb-2">
            <img src={phoneIcon} alt="Phone Icon" className="w-4 h-4 mr-1" />
            {user.contact_number}
          </p>
        </div>
        <button
          className="bg-black text-white py-2 px-6 rounded-lg hover:bg-gray-800 transition duration-200"
          aria-label={`Fetch details for ${user.first_name} ${user.last_name}`}
          onClick={handleDialogOpen}
        >
          Fetch Details
        </button>
      </div>

      <UserDetailsDialog open = {isDialogOpen} onOpenChange = {setIsDialogOpen} close = {handleDialogClose} user = {user} />
    </div>
  )
}

export default Card;
