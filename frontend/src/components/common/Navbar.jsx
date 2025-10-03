// frontend/src/components/common/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import ProfileDropdown from './ProfileDropdown';
import logoAmikom from '../../assets/images/logo-amikom.png';
// 1. Impor ikon yang hilang
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // 2. Ambil 'logout' dari useAuth
  const { user, logout } = useAuth();

  // Komponen untuk link tamu (belum login)
  const GuestLinks = () => (
    <>
      <Link to="/login" className="hover:text-brand-yellow transition-colors duration-300">
        Login
      </Link>
      <Link to="/register" className="bg-brand-yellow text-dark-primary font-bold px-5 py-2 rounded-md hover:bg-yellow-400 transition-colors">
        Daftar
      </Link>
    </>
  );

  // Komponen untuk link pengguna terotentikasi (sudah login)
  const AuthLinks = () => (
    <>
      <Link to="/talents" className="hover:text-brand-yellow transition-colors duration-300">
        Cari Talenta
      </Link>
      <ProfileDropdown />
    </>
  );

  return (
    <nav className="bg-dark-primary text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3">
          <img src={logoAmikom} alt="Logo" className="h-11" />
          <span className="font-kanit font-bold text-xl tracking-wide">TalentHub</span>
        </Link>
        
        {/* Menu untuk Desktop */}
        <div className="hidden md:flex space-x-8 text-lg items-center font-semibold">
          <a href="/#featured-talents" className="hover:text-brand-yellow transition-colors duration-300">Talenta Unggulan</a>
          <a href="/#about-platform" className="hover:text-brand-yellow transition-colors duration-300">Tentang Kami</a>
          {user ? <AuthLinks /> : <GuestLinks />}
        </div>
        
        {/* Tombol Hamburger untuk Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />}
            </svg>
          </button>
        </div>
      </div>
      
      {/* Menu Dropdown untuk Mobile */}
      {isOpen && (
        <div className="md:hidden bg-dark-primary px-6 pb-6 pt-2 space-y-4 text-center font-semibold">
          <a href="/#featured-talents" className="block py-2 hover:text-brand-yellow" onClick={() => setIsOpen(false)}>Talenta Unggulan</a>
          <a href="/#about-platform" className="block py-2 hover:text-brand-yellow" onClick={() => setIsOpen(false)}>Tentang Kami</a>
          <div className="border-t border-gray-700 my-2"></div>
          {user ? (
            <>
              <Link to="/dashboard" className="block py-2 hover:text-brand-yellow" onClick={() => setIsOpen(false)}>Dashboard</Link>
              <button onClick={() => { logout(); setIsOpen(false); }} className="w-full justify-center flex items-center py-2 text-red-400 hover:text-red-300">
                <ArrowRightOnRectangleIcon className="h-5 w-5 mr-2" />
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="block py-2 hover:text-brand-yellow" onClick={() => setIsOpen(false)}>Login</Link>
              <Link to="/register" className="block bg-brand-yellow text-dark-primary font-bold py-2 rounded-md mt-2" onClick={() => setIsOpen(false)}>
                Daftar
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;