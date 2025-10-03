// src/components/common/Button.jsx
import React from 'react';

// Komponen ini menerima 'children' (teks tombol) dan props lain seperti 'onClick'
const Button = ({ children, onClick, className = '' }) => {
  // Kelas dasar untuk semua tombol, digabung dengan kelas custom dari 'className'
  const baseClasses = "bg-blue-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50";

  return (
    <button onClick={onClick} className={`${baseClasses} ${className}`}>
      {children}
    </button>
  );
};

export default Button;