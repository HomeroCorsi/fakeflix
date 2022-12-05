import React from 'react'
import { useState } from 'react';
import { TMDB } from '../../config/tmdb';

const CardMyListMovies = ({item}) => {

const [data, setData] = useState([])

const getMovieDetails = async (id) => {
  const res = await TMDB.api.get(TMDB.path.movies.details(id));
  const moviesDetails = res.data;
  setData(moviesDetails)

  return moviesDetails;
};

getMovieDetails(item)

console.log(data)



    return (
        <div
          style={{
            ...cardStyle,
            backgroundImage: `url(https://image.tmdb.org/t/p/w500${data.backdrop_path})`,
          }}
        >
          <div style={titleContainerStyle}>
            <h1 style={titleStyle}>{data.title}</h1>
          </div>
        </div>
      );  
}

export default CardMyListMovies


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
};