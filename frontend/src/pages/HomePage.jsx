import React from 'react';
import HeroSection from '../components/home/HeroSection';
import StatsSection from '../components/home/StatsSection';
import FeaturedTalentsSection from '../components/home/FeaturedTalentsSection';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <FeaturedTalentsSection />
      <section id="about-platform" className="bg-white py-20">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-kanit">
            Tentang Kami
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            TalentHub lahir dari keyakinan bahwa talenta teknologi terbaik ada di mana-mana. Misi kami adalah menjembatani kesenjangan antara perusahaan inovatif dengan para profesional berbakat di seluruh Indonesia, menciptakan peluang dan mendorong pertumbuhan ekonomi digital.
          </p>
        </div>
      </section>
    </>
  );
};

export default HomePage;