// frontend/src/pages/RegisterPage.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import apiClient from '../api/axiosConfig';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    password1: '',
    password2: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password1 !== formData.password2) {
      setError('Password dan konfirmasi password tidak cocok.');
      return;
    }
    
    setLoading(true);
    try {
      await apiClient.post('/auth/registration/', formData);
      navigate('/login', { 
        state: { message: 'Pendaftaran berhasil! Silakan login.' } 
      });
    } catch (err) {
      const errorData = err.response?.data;
      if (errorData) {
        const errorMessages = Object.entries(errorData)
          .map(([key, value]) => `${key.replace("_", " ")}: ${value.join(', ')}`)
          .join(' | ');
        setError(errorMessages);
      } else {
        setError('Terjadi kesalahan saat pendaftaran. Silakan coba lagi.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Kolom Kiri: Formulir Registrasi */}
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900 font-kanit">
              Buat Akun Baru
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Sudah punya akun?{' '}
              <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">
                Login di sini
              </Link>
            </p>
          </div>
          <div className="mt-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="full_name" className="block text-sm font-medium text-gray-700">Nama Lengkap</label>
                <div className="mt-1">
                  <input id="full_name" name="full_name" type="text" required value={formData.full_name} onChange={handleChange} className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Alamat Email</label>
                <div className="mt-1">
                  <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                </div>
              </div>
              <div>
                <label htmlFor="password1" className="block text-sm font-medium text-gray-700">Password</label>
                <div className="mt-1">
                  <input id="password1" name="password1" type="password" required value={formData.password} onChange={handleChange} className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                </div>
              </div>
              <div>
                <label htmlFor="password2" className="block text-sm font-medium text-gray-700">Konfirmasi Password</label>
                <div className="mt-1">
                  <input id="password2" name="password2" type="password" required value={formData.password2} onChange={handleChange} className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                </div>
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <div>
                <button type="submit" disabled={loading} className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-400 mt-4">
                  {loading ? 'Mendaftarkan...' : 'Daftar Akun'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Kolom Kanan: Gambar & Branding */}
      <div className="hidden lg:block relative flex-1">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80')"}}></div>
        <div className="absolute inset-0 bg-blue-900 bg-opacity-75 flex flex-col justify-end p-12 text-white">
            <h3 className="text-4xl font-bold leading-tight font-kanit">Satu Langkah Lagi Menuju Karier Impian Anda</h3>
            <p className="mt-4 text-lg text-blue-100">
              Buat akun gratis untuk mulai membangun profil Anda dan ditemukan oleh perusahaan-perusahaan terbaik.
            </p>
            <ul className="mt-6 space-y-4 text-lg text-blue-100">
                <li className="flex items-start"><CheckCircleIcon className="h-6 w-6 mr-3 mt-1 flex-shrink-0" /><span>Bangun portofolio profesional Anda.</span></li>
                <li className="flex items-start"><CheckCircleIcon className="h-6 w-6 mr-3 mt-1 flex-shrink-0" /><span>Dapatkan akses ke ratusan peluang karier.</span></li>
                <li className="flex items-start"><CheckCircleIcon className="h-6 w-6 mr-3 mt-1 flex-shrink-0" /><span>Bergabung dengan komunitas talenta teknologi terdepan.</span></li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;