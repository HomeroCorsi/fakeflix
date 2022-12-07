import React from 'react'
import { useState, useEffect } from 'react';
import { TMDB } from '../../config/tmdb';
import PlayButton from './Buttons/PlayButton';
import RemoveButtonTv from './Buttons/RemoveButtonTv';
import { useNavigate } from 'react-router-dom';



const CardMyListTv = ({item}) => {

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
  const res = await TMDB.api.get(TMDB.path.series.details(id));
  const TvDetails = res.data;
  setData(TvDetails)
  const generosTv = res.data.genres.slice(0,3).map(info => info);
  setMovieData([{genreMovie : generosTv}])

  return TvDetails;
};

useEffect(() => {getMovieDetails(item)}, [])

// console.log(data.genres.name)
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
      <RemoveButtonTv style={removeButton} item={item}>Quitar</RemoveButtonTv>
      </div>

      <div style={{display:'flex',
    justifyContent:'space-around'}}>

        {
          infoMovieDataName.genreMovie?.map(info => <span style={categoriesInd} onClick={
            () =>  navigate(`/categoriesSeries/${info.id}`)}>{info.name}</span>)||
          "cargando"
        }

      </div>

    </div>


  </div>    
  

</>
    
);
};

export default CardMyListTv;

const cardStyle = {
  height: "150px",
    width: "300px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  
  
    
  
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
    
    height: '45%',
    width: '95%',
    background: 'black',
    marginTop: '5rem',
    marginLeft: '0.75rem',
    // zIndex: '700',
  }
  
  const categoriesInd = {
    fontSize: '80%',
    marginTop: '5%',
    cursor: 'pointer'
}

const removeButton = {
  color : 'black',
  fontSize: '1.2rem',

}