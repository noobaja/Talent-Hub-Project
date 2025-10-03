// frontend/src/components/common/ProtectedRoute.jsx
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        // Tampilkan loading screen saat AuthProvider masih memverifikasi token
        return <div>Memverifikasi sesi...</div>;
    }

    if (!user) {
        // Jika tidak ada user, arahkan ke halaman login
        // Kirim state 'from' agar setelah login bisa kembali ke halaman asal
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    // Jika ada user, tampilkan halaman yang diminta
    return children;
};

export default ProtectedRoute;