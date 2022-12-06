import React from 'react'
import { useState } from 'react';
import { TMDB } from '../../config/tmdb';
import PlayButton from './Buttons/PlayButton';
import { useNavigate } from 'react-router-dom';



const CardMyListMovies = ({item}) => {

const [data, setData] = useState([])
const [hover, setHover] = useState(false);

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

  return moviesDetails;
};

getMovieDetails(item)

console.log(data)



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
    zIndex: '700',
  }
  
  