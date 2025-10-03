// frontend/src/contexts/AuthProvider.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import apiClient from '../api/axiosConfig';
import AuthContext from './AuthContext';

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [authToken, setAuthToken] = useState(() => localStorage.getItem('authToken'));
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            if (authToken) {
                apiClient.defaults.headers.common['Authorization'] = `Token ${authToken}`;
                try {
                    const response = await apiClient.get('/auth/user/');
                    setUser(response.data);
                } catch (error) {
                    console.error("Token tidak valid, melakukan logout.", error);
                    localStorage.removeItem('authToken');
                    setAuthToken(null);
                    setUser(null);
                }
            }
            setLoading(false);
        };
        fetchUser();
    }, [authToken]);

    // === FUNGSI LOGIN YANG DIPERBAIKI ===
    const login = async (email, password) => {
        try { // <-- Awal blok try
            const response = await apiClient.post('/auth/login/', { email, password });
            const token = response.data.key;
            localStorage.setItem('authToken', token);
            setAuthToken(token);
            navigate('/dashboard');
        } catch (error) { // <-- Blok catch langsung menyambung
            throw new Error('Email atau password salah.');
        } // <-- Akhir dari blok try...catch
    };

    const logout = () => {
        setUser(null);
        setAuthToken(null);
        localStorage.removeItem('authToken');
        delete apiClient.defaults.headers.common['Authorization'];
        navigate('/');
    };

    const register = async (payload) => {
        await apiClient.post('/auth/registration/', payload);
    };

    const value = { user, loading, login, logout, register };

    if (loading) {
        return <div>Memverifikasi sesi...</div>;
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};