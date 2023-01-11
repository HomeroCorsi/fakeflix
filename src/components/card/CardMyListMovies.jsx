import React from 'react'
import { useState, useEffect } from 'react';
import { TMDB } from '../../config/tmdb';
import PlayButton from './Buttons/PlayButton';
import { useNavigate } from 'react-router-dom';
import RemoveButtonMovies from './Buttons/RemoveButtonMovies';


const CardMyListMovies = ({item}) => {

const [data, setData] = useState([])
const [hover, setHover] = useState(false);
const [movieData, setMovieData] = useState([{genreMovie: null }]);


const navigate = useNavigate();

const navigateTrailer = () => {
  navigate("/view", {
   state: item,
 }); 

 navigate(`/view/${item.id}`);
};

const getMovieDetails = async (id) => {
  const res = await TMDB.api.get(TMDB.path.movies.details(id));
  const moviesDetails = res.data;
  setData(moviesDetails)
  const generosMovies = res.data.genres.slice(0,3).map(info => info);
  setMovieData([{genreMovie : generosMovies}])

  return moviesDetails;
};

useEffect(() => {getMovieDetails(item)}, [])


const infoMovieDataName = movieData[0]



return (
  <>
  <div
    style={{
      ...cardStyle,
      transition: hover ? "all 0.3s ease-in-out" : null,
      transform: hover ? 'scale(1.1)' : null,
      
      backgroundImage: `url(https://image.tmdb.org/t/p/w500${data.backdrop_path})`,
    }}
    onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)}
  >
    <div style={titleContainerStyle}       onClick={navigateTrailer}>
      <h1 style={titleStyle}>{data.title}</h1>
    </div> 

 
    <div style={{...bottomDiv,
    transform: hover ? 'scale(1.1)' : null,
    visibility: hover ? 'visible' : 'hidden',
    // zIndex: '999 !important',
  

    }}>
      <div style={{display:'flex',
    justifyContent:'space-between'}}>
      <PlayButton navigateTrailer={navigateTrailer}/>
      <RemoveButtonMovies item={item}/>


      </div>

      <div style={{display:'flex',
    justifyContent:'space-around'}}>

        {
          infoMovieDataName.genreMovie?.map(info => <span style={categoriesInd} onClick={() =>  navigate(`/categoriesMovies/${info.id}`)}>{info.name}</span>)||
          "cargando"
        }

      </div>

    </div>


  </div>    
  

</>
    
);
};

export default CardMyListMovies;

const cardStyle = {
  height: "150px",
    width: "300px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    margin: "20px",
  };

  
  const titleContainerStyle = {
    height: "50%",
    width: "100%",
    //gradient
    background: "linear-gradient(360deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 60%)",
    display: "flex",
  };
  
  const titleStyle = {
    color: "white",
    fontSize: "2rem",
    margin: "1rem"
  };
  
  const bottomDiv = {
  
    height: '85%',
    width: '95%',
    background: ' rgba(0,0,0,0.85)',
    marginTop: '0.25rem',
    marginLeft: '0.75rem',
    // zIndex: '700',
  }
  
  const categoriesInd = {
    fontSize: '80%',
    marginTop: '5%',
    cursor: 'pointer'
}
