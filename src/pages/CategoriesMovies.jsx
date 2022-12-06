import React from 'react'
import { useParams } from 'react-router-dom';

const CategoriesMovies = () => {

    const params = useParams();
    const {id}=params;

  return (
    <div>CategoriesMovies {id}</div>
  )
}

export default CategoriesMovies