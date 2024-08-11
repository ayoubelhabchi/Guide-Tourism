import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation, Route, Routes } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';
import axios from 'axios';
import Layout from '../../../components/layouts/layout';
import EmailConfirmation from '../../../pages/emailConfermation';
import ResetPassword from '../../../components/Modals/restPassword';
import Chat from '../../../components/Chat/Chat';
import LoginModal from '../../../components/Modals/login';

const AuthWrapper = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      try {
        const { exp } = jwtDecode(token);
        const currentTime = Date.now() / 1000;

        if (exp < currentTime) {
          handleLogoutAndModal();
        } else {
          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        }
      } catch (error) {
        console.error('Failed to decode token:', error);
        handleLogoutAndModal();
      }
    } 

    const responseInterceptor = axios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response && error.response.status === 401) {
          handleLogoutAndModal();
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axios.interceptors.response.eject(responseInterceptor);
    };
  }, [navigate, location]);

  const handleLogoutAndModal = () => {
    logout();
    if (location.pathname !== '/home') {
      setShowModal(true);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    axios.defaults.headers.common['Authorization'] = '';
  };

  const handleCloseModal = () => {
    if (location.pathname === '/home') {
      setShowModal(false);
    } else {
      navigate('/home');
    }
  };

  return (
    <>
      {showModal && <LoginModal handleCloseModal={handleCloseModal} setShowModal={setShowModal} />}

      <Routes>
        <Route path="/email-confirmation" element={<EmailConfirmation />} />
        <Route path="/rest-password/:token" element={<ResetPassword />} />
        <Route path="*" element={<Layout />} />
      </Routes>
    </>
  );
};

export default AuthWrapper;
