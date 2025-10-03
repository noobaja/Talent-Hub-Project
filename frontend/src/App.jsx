import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TalentListPage from './pages/TalentListPage';
import ProfileDetailPage from './pages/ProfileDetailPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import EditProfilePage from './pages/EditProfilePage';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import AddPortfolioPage from './pages/AddPortfolioPage';
import ProtectedRoute from './components/common/ProtectedRoute';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 font-nunito">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/talents" element={<TalentListPage />} />
          <Route path="/profile/:talentId" element={<ProfileDetailPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          
          <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
          <Route path="/profile/edit" element={<ProtectedRoute><EditProfilePage /></ProtectedRoute>} />
          <Route path="/portfolio/add" element={<ProtectedRoute><AddPortfolioPage /></ProtectedRoute>} />

        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;