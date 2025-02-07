import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

const ProtectedRoute = ({ role, children }) => {
  const { user } = useAuth();

  if (!user || user.role !== role) {
    alert('Access denied! Only admins can access this page.');
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
