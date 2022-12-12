import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import PublicRoute from "./PublicRoute";
import ProtectedRoutes from "./ProtectedRoutes";
import Browse from "../pages/Browse";
import View from "../pages/View";
import MyList from "../pages/MyList";
import Series from "../pages/Series";
import Movies from "../pages/Movies";
import CategoriesMovies from "../pages/CategoriesMovies";
import CategoriesSeries from "../pages/CategoriesSeries";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={
            <ProtectedRoutes url={"/login"}>
              <Routes>
                <Route exact path="/browse" element={<Browse />} />
                <Route path="view/:id" element={<View />} />
                <Route exact path="/myList" element={<MyList/>}/>
                <Route path='/series' element={<Series/>}/>
                <Route path='/movies' element={<Movies/>}/>
                <Route path="categoriesMovies/:id" element={<CategoriesMovies />} />
                <Route path="categoriesSeries/:id" element={<CategoriesSeries />} />


              </Routes>
            </ProtectedRoutes>
          }
        />

        <Route
          exact
          path="/login"
          element={
            <PublicRoute url={"/browse"}>
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
