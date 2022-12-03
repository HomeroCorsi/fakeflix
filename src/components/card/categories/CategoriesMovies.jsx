import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';



const CategoriesMovies = ({item}) => {

  const urlMovieGenres = `https://api.themoviedb.org/3/movie/${item.id}?api_key=c30ae912fb4c8df81ced17743c4657ea&language=en-US`

  const [movieData, setMovieData] = useState([{genreMovie: null }]);


  const getMovieGenres = async () => {

    const res = await axios.get(urlMovieGenres);
    const generosMovies = res.data.genres.slice(0,3).map(info => info.name);

    setMovieData([{genreMovie : generosMovies}])

  }

  useEffect(() => {
    getMovieGenres();
  }, []);


const infoMovieData = movieData[0]

  return (
    <><div style={{display:'flex',
    justifyContent:'space-around'}}>

           { 
           infoMovieData.genreMovie?.map(info => <span style={categoriesInd}>{info}</span>)||
            "la id no coincide con ningún género"
            }


    </div>
    
    
    </>
  )
}



export default CategoriesMovies    





const categoriesInd = {
    fontSize: '80%',
    marginTop: '5%'
}
