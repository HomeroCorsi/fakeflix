import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

const ProtectedRoutes = ({ children, url }) => {
  const { auth } = useAuth();

  if (auth.isAuth) {
    return children;
  }

  return <Navigate to={url} />;
};

export default ProtectedRoutes;
