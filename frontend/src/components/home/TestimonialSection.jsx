// frontend/src/components/home/TestimonialSection.jsx
import React from 'react';

const TestimonialSection = () => {
  const testimonials = [
    {
      quote: 'TalentConnect benar-benar mengubah cara kami merekrut. Prosesnya cepat dan kami menemukan desainer UX yang luar biasa dalam seminggu!',
      author: 'Andi Pratama',
      title: 'CEO, Kreativa Studio',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      quote: 'Sebagai seorang developer, saya sangat menghargai kurasi di TalentConnect. Saya mendapatkan tawaran pekerjaan yang relevan dengan cepat.',
      author: 'Siti Aminah',
      title: 'Senior Backend Developer',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      quote: 'Platform ini sangat intuitif. Kami berhasil mengisi posisi kritis di tim IT kami tanpa hambatan berarti. Sangat direkomendasikan!',
      author: 'Budi Hartono',
      title: 'HR Manager, TechInovasi',
      image: 'https://randomuser.me/api/portraits/men/47.jpg',
    },
  ];

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center mb-12">
          Apa Kata Mereka?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-blue-50 p-8 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300 animate-fade-in-right"> {/* Animasi */}
              <p className="text-lg leading-7 text-gray-700 italic">"{testimonial.quote}"</p>
              <div className="mt-6 flex items-center">
                <img className="h-12 w-12 rounded-full mr-4 object-cover" src={testimonial.image} alt={testimonial.author} />
                <div>
                  <p className="text-base font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-blue-600">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;