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
          path="*"
          element={
            <ProtectedRoutes url={"/login"}>
              <Routes>
                <Route exact path="/Browse" element={<Browse />} />
                <Route path="view/:id" element={<View />} />
              </Routes>
            </ProtectedRoutes>
          }
        />

        <Route
          exact
          path="/login"
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

// eslint-disable-next-line no-lone-blocks
{
  /* <Routes>
            <Route path='/login' element={<Login/>} />
            <Route path='/Browse' element={<Browse/>}/>
        </Routes> */
}
