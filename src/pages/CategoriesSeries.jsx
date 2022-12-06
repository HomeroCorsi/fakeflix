import React from 'react'
import { useParams } from 'react-router-dom';
import CardTv from '../components/card/CardTv';
import { useState, useEffect } from 'react';
import { seriesAdapter } from '../features/series/utils/seriesAdapter';
import axios from 'axios';
import NavBar from '../components/navBar/NavBar';

const CategoriesSeries = () => {

    const params = useParams();
    const {id}=params;
    const [data, setData] = useState([])
    const [categoria, setCategoria] = useState([])


    const url = `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=${id}`

    const getCategorie = async () => {
    const res = await axios.get(url);
    setData(seriesAdapter(res.data.results));}

    useEffect(() => {
        getCategorie();
      }, [{id}]);

console.log(data)

  return (<>
    <NavBar/>
    <div style={moviesConatiner}>
    {data.map((info) => <div style={cards}><CardTv item={info}/></div>)}
    </div>
    </>
  )
}

export default CategoriesSeries

const moviesConatiner = {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
}

const cards = {
    paddingTop:'8rem'
}