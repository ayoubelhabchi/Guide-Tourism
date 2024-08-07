// contexts/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import {jwtDecode} from 'jwt-decode';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        const userId = decodedToken.id;

        // Fetch user details from the backend
        axios.get(`/api/users/${userId}`)
          .then(response => {
            setUser(response.data);
          })
          .catch(error => {
            console.error('Failed to fetch user data:', error);
          });
      } catch (error) {
        console.error('Failed to decode token:', error);
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
