// src/components/profile/TalentCard.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Kita akan gunakan ini untuk navigasi
import Button from '../common/Button'; // Impor tombol baru kita

const TalentCard = ({ talent }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <div className="p-6 flex flex-col h-full">
        <div className="flex items-center space-x-4 mb-4">
          <img 
            className="h-16 w-16 rounded-full object-cover"
            src={`https://i.pravatar.cc/150?u=${talent.id}`} 
            alt={talent.full_name}
          />
          <div>
            <h3 className="text-xl font-bold text-gray-800">{talent.full_name}</h3>
            <p className="text-sm text-gray-600">{talent.headline}</p>
          </div>
        </div>
        <div className="flex-grow">
          <p className="text-gray-700 text-base">
            {talent.bio ? `${talent.bio.substring(0, 100)}...` : "Bio tidak tersedia."}
          </p>
        </div>
        <div className="mt-6 text-right">
          {/* Link ini akan membawa kita ke halaman detail talenta */}
          <Link to={`/profile/${talent.id}`}>
            <Button>Lihat Profil</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TalentCard;