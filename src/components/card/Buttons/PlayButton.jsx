import React from 'react';
import netflixPlayButton from './netflixPlayButton.jpg'


const PlayButton = ({navigateTrailer}) => {

  // const url = "https://api.themoviedb.org/3/genre/movie/list?api_key=c30ae912fb4c8df81ced17743c4657ea&language=en-US";
  // const url2 = "https://api.themoviedb.org/3/genre/tv/list?api_key=c30ae912fb4c8df81ced17743c4657ea&language=en-US"



  return (
    <button style={buttonStyle} onClick={navigateTrailer}>
    </button>
    )
}




export default PlayButton

const buttonStyle = {
    backgroundImage: `url(${netflixPlayButton})`,
    backgroundSize:"98%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: 'center',
     marginTop: '0.8rem',
    marginLeft: '2.5rem',
    height: '2rem',
    width: '2rem',
    borderRadius: '1rem',
    zIndex:'999 !important'
  }

  // onClick={()=>{wepa(); tuki()}}