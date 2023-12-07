import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './Auth'; // Import your Auth context or authentication state

function PrivateRoute({ element, ...rest }) {
  const { isAuthenticated } = useAuth(); // Replace with your authentication logic

  return (
    <Route
      {...rest}
      element={isAuthenticated ? element : <Navigate to="/login" replace />}
    />
  );
}

export default PrivateRoute;
