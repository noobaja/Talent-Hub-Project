// src/components/common/SearchFilterBar.jsx
import React from 'react';

const SearchFilterBar = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-8">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Search Input */}
        <div className="flex-grow">
          <label htmlFor="search" className="sr-only">Cari</label>
          <input
            type="text"
            id="search"
            placeholder="Cari berdasarkan nama atau headline..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        {/* Filter Dropdown */}
        <div className="w-full md:w-1/4">
          <label htmlFor="specialty" className="sr-only">Keahlian</label>
          <select 
            id="specialty"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>Semua Keahlian</option>
            <option>UI/UX Designer</option>
            <option>Backend Developer</option>
            <option>Frontend Developer</option>
            <option>Video Editor</option>
          </select>
        </div>

        {/* Search Button */}
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Cari
        </button>
      </div>
    </div>
  );
};

export default SearchFilterBar;