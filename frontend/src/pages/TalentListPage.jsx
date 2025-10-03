// frontend/src/pages/TalentListPage.jsx
import React, { useState, useEffect } from 'react';
import apiClient from '../api/axiosConfig';
import TalentCard from '../components/profile/TalentCard';
import SearchFilterBar from '../components/common/SearchFilterBar';

const TalentListPage = () => {
  const [talents, setTalents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTalents = async () => {
      try {
        // UBAH ENDPOINT DI SINI
        const response = await apiClient.get('/profiles/');
        setTalents(response.data);
      } catch (err) {
        setError('Gagal mengambil data talenta.');
      } finally {
        setLoading(false);
      }
    };
    fetchTalents();
  }, []);

  if (loading) return <p className="text-center text-gray-500">Memuat data...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="container mx-auto px-6 py-8">
      <SearchFilterBar />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {talents.map((talent) => (
          <TalentCard key={talent.id} talent={talent} />
        ))}
      </div>
    </div>
  );
};

export default TalentListPage;