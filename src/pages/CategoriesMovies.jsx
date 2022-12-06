import React from 'react'
import { useParams } from 'react-router-dom';
import CardMovies from '../components/card/CardMovies';
import { useState, useEffect } from 'react';
import { moviesAdapter } from '../features/movies/utils/moviesAdapter';
import axios from 'axios';
import NavBar from '../components/navBar/NavBar';

const CategoriesMovies = () => {

    const params = useParams();
    const {id}=params;
    const [data, setData] = useState([])



    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=${id}`

    const getCategorie = async () => {
    const res = await axios.get(url);
    setData(moviesAdapter(res.data.results));}

    useEffect(() => {
        getCategorie();
      }, [{id}]);

console.log(data)

  return (<>
    <NavBar/>
    <div style={moviesConatiner}>
    {data.map((info) => <div style={cards}><CardMovies item={info}/></div>)}
    </div>
    </>
  )
}

export default CategoriesMovies

const moviesConatiner = {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
}

const cards = {
    paddingTop:'8rem'
}