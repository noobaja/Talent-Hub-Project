// frontend/src/pages/EditProfilePage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import apiClient from '../api/axiosConfig';
import Button from '../components/common/Button';

const EditProfilePage = () => {
    const { user } = useAuth();
    const [formData, setFormData] = useState({ full_name: '', headline: '', bio: '' });
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    // === BLOK useEffect YANG DIPERBAIKI ===
    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                // Gunakan endpoint /me/ untuk mengambil data profil
                const response = await apiClient.get('/profiles/me/');
                setFormData({
                    full_name: response.data.full_name,
                    headline: response.data.headline,
                    bio: response.data.bio,
                });
            } catch (error) {
                console.error("Gagal mengambil data profil", error);
            } finally {
                setLoading(false);
            }
        };

        // Panggil fungsi di dalam useEffect
        fetchProfileData();

    }, []); // <-- Array dependensi kosong agar hanya berjalan sekali saat komponen dimuat

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Gunakan endpoint /me/ untuk memperbarui data
            await apiClient.put('/profiles/me/', formData);
            navigate('/dashboard'); // Kembali ke dashboard setelah berhasil
        } catch (error) {
            console.error("Gagal memperbarui profil", error);
            alert("Gagal memperbarui profil!");
        }
    };

    if (loading) return <p>Memuat form...</p>;

    return (
        <div className="container mx-auto px-6 py-8 max-w-2xl">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Edit Profil</h1>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md space-y-6">
                <div>
                    <label htmlFor="full_name" className="block text-sm font-medium text-gray-700">Nama Lengkap</label>
                    <input type="text" name="full_name" id="full_name" value={formData.full_name || ''} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" />
                </div>
                <div>
                    <label htmlFor="headline" className="block text-sm font-medium text-gray-700">Headline</label>
                    <input type="text" name="headline" id="headline" value={formData.headline || ''} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" />
                </div>
                <div>
                    <label htmlFor="bio" className="block text-sm font-medium text-gray-700">Bio</label>
                    <textarea name="bio" id="bio" rows="4" value={formData.bio || ''} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"></textarea>
                </div>
                <div className="text-right">
                    <Button type="submit">Simpan Perubahan</Button>
                </div>
            </form>
        </div>
    );
};

export default EditProfilePage;