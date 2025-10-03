// frontend/src/components/common/ProfileDropdown.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { ChevronDownIcon, ArrowRightOnRectangleIcon, UserCircleIcon, Cog6ToothIcon, Squares2X2Icon } from '@heroicons/react/24/solid';

const ProfileDropdown = () => {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownRef]);

  if (!user) return null;

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded-full transition-colors"
      >
        <UserCircleIcon className="h-6 w-6" />
        <span className="font-semibold">{user.username}</span>
        <ChevronDownIcon className={`h-5 w-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg py-1 z-20 text-gray-800 animate-fade-in-down">
          <div className="px-4 py-2 border-b">
            <p className="text-sm font-semibold">Signed in as</p>
            <p className="text-sm font-bold truncate">{user.username}</p>
          </div>
          <Link to="/dashboard" onClick={() => setIsOpen(false)} className="flex items-center px-4 py-2 text-sm hover:bg-gray-100">
            <Squares2X2Icon className="h-5 w-5 mr-3" /> Dashboard
          </Link>
          <Link to="/profile/edit" onClick={() => setIsOpen(false)} className="flex items-center px-4 py-2 text-sm hover:bg-gray-100">
            <Cog6ToothIcon className="h-5 w-5 mr-3" /> Edit Profile
          </Link>
          <div className="border-t border-gray-200 my-1"></div>
          <button 
            onClick={() => {
              logout();
              setIsOpen(false);
            }}
            className="w-full text-left flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50"
          >
            <ArrowRightOnRectangleIcon className="h-5 w-5 mr-2" />
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;