import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import PlusButtonMovies from "./Buttons/PlusButtonMovies";
import PlayButton from "./Buttons/PlayButton";
// import useTrailer from "../../customHooks/useTrailer";
import CategoriesMovies from "./categories/CategoriesMovies";

const CardMovies = ({ item }) => {


   const navigate = useNavigate();

   const navigateTrailer = () => {
     navigate("/view", {
      state: item,
    }); 

    navigate(`/view/${item.id}`);
  };

const [hover, setHover] = useState(false);



  return (
    <>
    <div
      style={{
        ...cardStyle,
        transition: hover ? "all 250ms ease-in-out" : null,
        transform: hover ? 'scale(1.05)' : null,
        
        backgroundImage: `url(https://image.tmdb.org/t/p/w500${item.backdrop})`,
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div style={titleContainerStyle}       onClick={navigateTrailer}>
        <h1 style={titleStyle}>{item.name}</h1>
      </div> 
  
   
      <div style={{...bottomDiv,
      transform: hover ? 'scale(1.1)' : null,
      visibility: hover ? 'visible' : 'hidden',
      // zIndex: '999 !important',
    

      }}>
        <div style={{display:'flex',
      justifyContent:'space-between'}}>
        <PlayButton navigateTrailer={navigateTrailer}/>
        <PlusButtonMovies item={item}/>

        </div>
          <CategoriesMovies item={item}/>
      </div>


    </div>    
    

</>
      
  );
};

export default CardMovies;

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
