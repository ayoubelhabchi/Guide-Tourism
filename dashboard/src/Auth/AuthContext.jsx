import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token') || null);

  const login = (newToken) => {
    setToken(newToken);
    localStorage.setItem('token', newToken);
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem('token');
  };

  const value = { token, login, logout };

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AuthContext, AuthProvider };
