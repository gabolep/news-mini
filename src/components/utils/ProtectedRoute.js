import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../lib/context/auth.context';

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to='/' />;
  }
  return children;
};

export default ProtectedRoute;
