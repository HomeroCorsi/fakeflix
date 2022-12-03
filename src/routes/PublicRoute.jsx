import React from 'react'
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';

const PublicRoute = ({ children, url }) => {
  const { auth } = useAuth();

    if (auth.isAuth) {
        return <Navigate to={url} />;
        }
        
        return children;
      
      };


export default PublicRoute;