// src/components/profile/PortfolioGrid.jsx
import React from 'react';

// Anggap kita menerima array of portfolio items
const PortfolioGrid = ({ portfolioItems }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Portofolio</h2>
      {portfolioItems && portfolioItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {portfolioItems.map((item, index) => (
            <div key={index} className="group relative">
              <img 
                src={`https://picsum.photos/seed/${item.id || index}/400/300`} 
                alt={item.title || 'Portfolio Item'} 
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center rounded-lg">
                <p className="text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.title || 'Lihat Proyek'}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">Portofolio belum ditambahkan.</p>
      )}
    </div>
  );
};

export default PortfolioGrid;