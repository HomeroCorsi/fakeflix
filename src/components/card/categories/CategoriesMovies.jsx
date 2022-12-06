import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const CategoriesMovies = ({item}) => {

  const urlMovieGenres = `https://api.themoviedb.org/3/movie/${item.id}?api_key=c30ae912fb4c8df81ced17743c4657ea&language=en-US`

  const [movieData, setMovieData] = useState([{genreMovie: null }]);
  
  const navigate = useNavigate();
  
  const navigateGenre = () => {
    navigate("/categoriesMovies", {
     state: item,
   }); 

   navigate(`/categoriesMovies/${item.id}`);
 };



  const getMovieGenres = async () => {

    const res = await axios.get(urlMovieGenres);
    const generosMovies = res.data.genres.slice(0,3).map(info => info);

    setMovieData([{genreMovie : generosMovies}])

  }

  useEffect(() => {
    getMovieGenres();
  }, []);


const infoMovieDataName = movieData[0]

  return (
    <><div style={{display:'flex',
    justifyContent:'space-around'}}>

           { 
           infoMovieDataName.genreMovie?.map(info => <span style={categoriesInd} onClick={navigateGenre}>{info.name}</span>)||
            "la id no coincide con ningún género"
            }


    </div>
    
    
    </>
  )
}



export default CategoriesMovies    



// ------------------------

const categoriesInd = {
    fontSize: '80%',
    marginTop: '5%',
    cursor: 'pointer'
}
