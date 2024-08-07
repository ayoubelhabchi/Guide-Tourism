// AuthWrapper.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import Layout from '../../../components/layouts/layout';
import EmailConfirmation from '../../../pages/emailConfermation';
import ResetPassword from '../../../components/Modals/restPassword';
import Chat from '../../../components/Chat/Chat';

const AuthWrapper = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const { exp } = jwtDecode(token);
        const currentTime = Date.now() / 1000;

        if (exp < currentTime) {
          logout();
        } else {
          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        }
      } catch (error) {
        console.error('Failed to decode token:', error);
        logout();
      }
    }

    const responseInterceptor = axios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response && error.response.status === 401) {
          logout();
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axios.interceptors.response.eject(responseInterceptor);
    };
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem('token');
    axios.defaults.headers.common['Authorization'] = '';
    // navigate('/home');
  };

  return (
    <Routes>
      <Route path="/email-confirmation" element={<EmailConfirmation />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/rest-password/:token" element={<ResetPassword />} />
      <Route path="*" element={<Layout />} />
    </Routes>
  );
};

export default AuthWrapper;
