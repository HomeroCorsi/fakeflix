import React from 'react';
import netflixPlayButton from './netflixPlayButton.jpg'


const PlayButton = ({navigateTrailer}) => {


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
    // zIndex:'999 !important'
  }

  // onClick={()=>{wepa(); tuki()}}