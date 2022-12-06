import React from 'react'
import { useParams } from 'react-router-dom';

const CategoriesSeries = () => {

    const params = useParams();
    const {id}=params;

  return (
    <div>CategoriesSeries {id}</div>
  )
}

export default CategoriesSeries