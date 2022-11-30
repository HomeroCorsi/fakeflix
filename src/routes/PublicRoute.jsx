import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children, url }) => {
    const {isAuth} = useContext(AuthContext)

    if (isAuth) {
        return <Navigate to={url} />;
        }
        
        return children;
      
      };


export default PublicRoute;