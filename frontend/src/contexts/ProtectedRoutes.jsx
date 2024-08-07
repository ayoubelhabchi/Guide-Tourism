// ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    console.log("user", user);
    return <Navigate to="/home" />;
  }

//   console.log("user.role", user.data?.user?.role);
  if (!allowedRoles.includes(user.data?.user?.role)) {
    return <Navigate to="/home" />;
  }

  return children;
};

export default ProtectedRoute;
