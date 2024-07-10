import { createContext, useState } from 'react';

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  console.log("TTTTT",token);

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


export { AuthContext, AuthProvider };
