// frontend/src/components/home/FeaturedTalentsSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedTalentsSection = () => {
  const featured = [
    { name: 'Frontend Experts', detail: 'Spesialis React & Next.js', link: '/talents?search=frontend' },
    { name: 'Desainer Produk Senior', detail: 'Figma, Riset UX, Sistem Desain', link: '/talents?search=uiux' },
    { name: 'Backend Engineer Python', detail: 'Django, FastAPI, Arsitektur Cloud', link: '/talents?search=backend' },
  ];

  return (
    <section id="featured-talents" className="bg-dark-primary text-white py-20">
      <div className="container mx-auto px-6 text-center max-w-6xl">
        <h4 className="text-4xl font-kanit mb-3 font-semibold">
          Talenta <span className="text-brand-yellow">Unggulan</span> Kami
        </h4>
        <p className="mb-14 text-lg text-gray-300 max-w-2xl mx-auto">
          Lihat profil dari beberapa talenta terbaik yang siap bergabung dengan proyek Anda.
        </p>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-10">
          {featured.map(({ name, detail, link }, idx) => (
            <div 
              key={idx} 
              className="bg-dark-secondary border border-gray-700 rounded-lg p-8 text-left flex flex-col transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-yellow/20"
            >
              <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-2">{name}</h3>
                <p className="text-gray-400">{detail}</p>
              </div>
              <div className="mt-6">
                <Link 
                  to={link}
                  className="bg-brand-yellow text-dark-primary px-5 py-2 rounded-md font-bold hover:bg-yellow-400 transition-colors"
                >
                  Lihat Profil
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTalentsSection;