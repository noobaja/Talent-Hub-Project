// frontend/src/components/home/HeroSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import bgHeader from '../../assets/images/bg-header.jpeg';

const HeroSection = () => {
  return (
    <header 
      className="relative h-screen bg-cover bg-center flex items-center justify-center text-center text-white"
      style={{ backgroundImage: `url(${bgHeader})` }}
    >
      <div className="absolute inset-0 bg-dark-primary opacity-60"></div>
      
      <div className="relative z-10 font-kanit max-w-4xl px-4">
        <h1 
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight uppercase opacity-0 animate-fade-in-up"
          style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)', animationDelay: '0.2s' }}
        >
          Rekrut Talenta Teknologi Terbaik, <br/> Bukan Sekadar CV
        </h1>
        <p 
          className="my-6 text-lg sm:text-xl max-w-3xl mx-auto font-nunito tracking-normal opacity-0 animate-fade-in-up"
          style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5)', animationDelay: '0.4s' }}
        >
          Platform terkurasi yang menghubungkan perusahaan Anda dengan developer, desainer, dan ahli teknologi terverifikasi di Indonesia.
        </p>
        <Link 
          to="/talents" 
          className="inline-block bg-brand-yellow text-dark-primary py-4 px-10 rounded-md text-lg font-bold hover:bg-yellow-400 hover:shadow-lg transform hover:scale-105 transition-all duration-300 opacity-0 animate-fade-in-up"
          style={{ animationDelay: '0.6s' }}
        >
          Temukan Talenta Ideal Anda
        </Link>
      </div>
    </header>
  );
};

export default HeroSection;