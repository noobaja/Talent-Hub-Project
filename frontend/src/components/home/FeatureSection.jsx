// frontend/src/components/home/FeatureSection.jsx
import React from 'react';
import { CheckCircleIcon, UsersIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'; // Contoh ikon

const FeatureSection = () => {
  const features = [
    {
      name: 'Talenta Terkurasi',
      description: 'Setiap profil talenta melewati proses seleksi ketat untuk memastikan kualitas dan profesionalisme.',
      icon: UsersIcon,
    },
    {
      name: 'Proses Cepat & Mudah',
      description: 'Sistem pencarian dan filter yang intuitif memungkinkan Anda menemukan kandidat ideal dalam hitungan menit.',
      icon: CheckCircleIcon,
    },
    {
      name: 'Keamanan Data Terjamin',
      description: 'Kami menjaga privasi dan keamanan data Anda dengan standar tertinggi, baik untuk perusahaan maupun talenta.',
      icon: ShieldCheckIcon,
    },
  ];

  return (
    <div className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Keunggulan Kami</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Solusi Terbaik untuk Kebutuhan Talenta Anda
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600 lg:mx-auto">
            Kami hadir untuk menjembatani kesenjangan antara perusahaan inovatif dan talenta terbaik.
          </p>
        </div>
        <div className="mt-16 sm:mt-20">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16 animate-fade-in-left"> {/* Animasi */}
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;