
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';

import { config } from '../tools/config/config';

const renderApi = config.Render_Url

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        const userId = decodedToken.userid;
        // console.log("userId", userId);

        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        axios.get(`${renderApi}/api/users/user-profile`, config)
          .then(response => {
            setUser(response.data);
            // console.log("response", response);
          })
          .catch(error => {
            console.error('Failed to fetch user data:', error);
          })
          .finally(() => {
            setLoading(false);
          });
      } catch (error) {
        console.error('Failed to decode token:', error);
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  }, []);

  // console.log("usser", user);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
