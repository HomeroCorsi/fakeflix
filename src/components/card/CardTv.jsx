import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import PlusButtonTv from "./Buttons/PlusButtonTv";
import PlayButton from "./Buttons/PlayButton";
// import useTrailer from "../../customHooks/useTrailer";
import CategoriesTv from "./categories/CategoriesTv";

const CardTv = ({ item }) => {


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
        transition: hover ? "all 0.3s ease-in-out" : null,
        transform: hover ? 'scale(1.1)' : null,
        
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
        <PlusButtonTv item={item}/>

        </div>
          <CategoriesTv item={item}/>
      </div>


    </div>    
    

</>
      
  );
};

export default CardTv;

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

