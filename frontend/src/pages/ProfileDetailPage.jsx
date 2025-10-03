// src/pages/ProfileDetailPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import apiClient from '../api/axiosConfig';
import ProfileHeader from '../components/profile/ProfileHeader';
import SkillsSection from '../components/profile/SkillsSection';   // <-- Impor
import PortfolioGrid from '../components/profile/PortfolioGrid'; // <-- Impor

const ProfileDetailPage = () => {
  const { talentId } = useParams();
  const [talent, setTalent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Data contoh, nanti ini akan diambil dari API juga
  const dummySkills = ["React", "JavaScript", "Node.js", "Tailwind CSS", "Figma", "UI/UX Design"];
  const dummyPortfolio = [{id: 1, title: "Proyek A"}, {id: 2, title: "Proyek B"}, {id: 3, title: "Proyek C"}];

  useEffect(() => {
    const fetchTalentDetail = async () => {
      setLoading(true);
      try {
        const response = await apiClient.get(`/profiles/${talentId}/`);
        setTalent(response.data);
      } catch (err) {
        setError('Gagal memuat detail talenta.');
      } finally {
        setLoading(false);
      }
    };
    fetchTalentDetail();
  }, [talentId]);

  if (loading) return <p className="text-center text-gray-500">Memuat profil...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!talent) return <p>Talenta tidak ditemukan.</p>;

  return (
    <div className="space-y-8">
      {/* 1. Komponen Header */}
      <ProfileHeader talent={talent} />

      {/* 2. Komponen Tentang Saya / Bio */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Tentang Saya</h2>
        <p className="text-gray-700 leading-relaxed">
          {talent.bio || "Bio belum diisi."}
        </p>
      </div>

      {/* 3. Komponen Keahlian */}
      <SkillsSection skills={dummySkills} />
      
      {/* 4. Komponen Portofolio */}
      <PortfolioGrid portfolioItems={dummyPortfolio} />
    </div>
  );
};

export default ProfileDetailPage;