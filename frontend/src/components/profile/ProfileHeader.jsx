// src/components/profile/ProfileHeader.jsx
import React from 'react';
import { MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';

// Anggap kita menerima data 'talent' dari API
const ProfileHeader = ({ talent }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Profile Picture */}
        <img 
          className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-lg"
          src={`https://i.pravatar.cc/300?u=${talent.id}`} 
          alt={talent.full_name} 
        />
        {/* Profile Info */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">{talent.full_name}</h1>
          <p className="text-lg text-blue-600 font-semibold mt-1">{talent.headline}</p>
          
          <div className="flex justify-center md:justify-start items-center space-x-4 mt-4 text-gray-500">
            <div className="flex items-center space-x-1">
              <MapPinIcon className="h-5 w-5" />
              <span>Jakarta, Indonesia</span>
            </div>
            <div className="flex items-center space-x-1">
              <EnvelopeIcon className="h-5 w-5" />
              <span>kontak@email.com</span>
            </div>
          </div>
          
          <div className="mt-6">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700 transition-colors">
              Hubungi Saya
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;