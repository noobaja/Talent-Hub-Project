// frontend/src/components/home/StatsSection.jsx
import React from 'react';
import { UsersIcon, BuildingOffice2Icon, ClockIcon } from '@heroicons/react/24/solid';

const StatsSection = () => {
  const stats = [
    { icon: UsersIcon, value: '500+', label: 'Talenta Terverifikasi' },
    { icon: BuildingOffice2Icon, value: '120+', label: 'Perusahaan Mitra' },
    { icon: ClockIcon, value: '24 Jam', label: 'Waktu Rata-Rata Direspons' },
  ];

  return (
    <section className="bg-dark-secondary text-white font-kanit">
      <div className="container mx-auto px-6 py-20 flex flex-col md:flex-row justify-around text-center space-y-12 md:space-y-0">
        {stats.map(({ icon: Icon, value, label }) => (
          <div key={label} className="flex flex-col items-center">
            <p className="text-6xl font-bold flex items-center justify-center">
              <Icon className="h-14 w-14 mr-4 text-brand-yellow" />
              {value}
            </p>
            <small className="text-2xl mt-2 text-gray-300">{label}</small>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;