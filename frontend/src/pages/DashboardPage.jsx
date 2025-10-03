// frontend/src/pages/DashboardPage.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import apiClient from '../api/axiosConfig';
import Button from '../components/common/Button';

const DashboardPage = () => {
    const { user } = useAuth();
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);

    // === BLOK useEffect YANG DIPERBAIKI ===
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await apiClient.get('/profiles/me/'); 
                setProfile(response.data);
            } catch (error) {
                console.error("Gagal mengambil data profil", error);
            } finally {
                setLoading(false);
            }
        }; // <-- Definisi fungsi selesai di sini

        fetchProfile(); // Panggil fungsi di dalam useEffect

    }, []); // <-- useEffect ditutup dengan array dependensi kosong

    if (loading) return <p>Memuat dashboard...</p>;
    if (!profile) return <p>Gagal memuat profil. Silakan coba lagi.</p>;

    return (
        <div className="container mx-auto px-6 py-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard Anda</h1>
            
            {/* Bagian Profil */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <div className="flex justify-between items-start">
                    <div>
                        <h2 className="text-2xl font-semibold">{profile.full_name}</h2>
                        <p className="text-blue-600">{profile.headline}</p>
                        <p className="text-gray-600 mt-4">{profile.bio}</p>
                    </div>
                    <Link to="/profile/edit">
                        <Button>Edit Profile</Button>
                    </Link>
                </div>
            </div>

            {/* Bagian Portofolio */}
            <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-semibold">Portofolio Saya</h2>
                    <Link to="/portfolio/add">
                        <Button>+ Tambah Portofolio</Button>
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {profile.portfolio_items && profile.portfolio_items.map(item => (
                        <div key={item.id} className="border rounded-lg p-4">
                            <img src={item.image_url} alt={item.title} className="w-full h-32 object-cover rounded-md mb-2"/>
                            <h3 className="font-bold">{item.title}</h3>
                        </div>
                    ))}
                    {profile.portfolio_items?.length === 0 && <p>Anda belum memiliki portofolio.</p>}
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;