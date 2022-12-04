import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import PublicRoute from "./PublicRoute";
import ProtectedRoutes from "./ProtectedRoutes";
import Browse from "../pages/Browse";
import View from "../pages/View";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="*"
          element={
            <ProtectedRoutes url={"/"}>
              <Routes>
                <Route exact path="/Browse" element={<Browse />} />
                <Route path="view/:id" element={<View />} />
              </Routes>
            </ProtectedRoutes>
          }
        />

        <Route
          exact
          path="/"
          element={
            <PublicRoute url={"/Browse"}>
              <Login />
            </PublicRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
