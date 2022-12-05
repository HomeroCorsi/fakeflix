import { MoviesIdContext } from "./MoviesIdContext";
import React from 'react'
import { useState } from "react";

const MoviesIdProvider = ({children}) => {

    const [moviesId, setMoviesId] = useState([])

  return (
    <MoviesIdContext.Provider value={{moviesId, setMoviesId}}
    >{children}</MoviesIdContext.Provider>
  )
}

export default MoviesIdProvider