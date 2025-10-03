// frontend/src/pages/LoginPage.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  
  const { login } = useAuth();
  const location = useLocation();

  useEffect(() => {
    // Menangkap pesan sukses jika ada redirect dari halaman registrasi
    if (location.state?.message) {
      setSuccessMessage(location.state.message);
      // Hapus state dari histori agar tidak muncul lagi saat refresh
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');
    setLoading(true);
    try {
      await login(formData.email, formData.password);
      // Navigasi ke dashboard sudah di-handle di dalam fungsi login
    } catch (err) {
      setError(err.message || 'Email atau password salah.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Kolom Kiri: Formulir Login */}
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900 font-kanit">
              Selamat Datang Kembali
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Belum punya akun?{' '}
              <Link to="/register" className="font-medium text-blue-600 hover:text-blue-500">
                Daftar di sini
              </Link>
            </p>
          </div>

          <div className="mt-8">
            {successMessage && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
                <span className="block sm:inline">{successMessage}</span>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Alamat Email
                </label>
                <div className="mt-1">
                  <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1">
                  <input id="password" name="password" type="password" required value={formData.password} onChange={handleChange}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              {error && <p className="text-red-500 text-sm">{error}</p>}

              <div>
                <button type="submit" disabled={loading} className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-400">
                  {loading ? 'Memproses...' : 'Login'}
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
            <h3 className="text-4xl font-bold leading-tight font-kanit">Platform Talenta #1 di Indonesia</h3>
            <ul className="mt-6 space-y-4 text-lg text-blue-100">
                <li className="flex items-start"><CheckCircleIcon className="h-6 w-6 mr-3 mt-1 flex-shrink-0" /><span>Akses ribuan profil talenta teknologi terverifikasi.</span></li>
                <li className="flex items-start"><CheckCircleIcon className="h-6 w-6 mr-3 mt-1 flex-shrink-0" /><span>Proses rekrutmen yang lebih cepat dan efisien.</span></li>
                <li className="flex items-start"><CheckCircleIcon className="h-6 w-6 mr-3 mt-1 flex-shrink-0" /><span>Temukan kandidat tepat untuk proyek temporer maupun permanen.</span></li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;