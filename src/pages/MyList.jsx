import React, { useContext } from 'react'
import NavBar from '../components/navBar/NavBar';
import { MoviesIdContext } from '../context/MoviesIdContext';
import { TvIdContext } from '../context/TvIdContext';
import useFetch from '../customHooks/useFetch';
import getMovieDetails from '../features/movies/utils/getMovieDetails';

export const MyList = () => {

const {moviesId} = useContext(MoviesIdContext)
const {TvId} = useContext(TvIdContext)

const { data : movieDetails} = useFetch(getMovieDetails);

console.log(movieDetails)
// (436270)


  return (
    <>
        <NavBar/>
        {/* <div>{moviesId.map((movie) => {return(<div>{movie}</div>)})}</div> */}
        <div>{moviesId}</div>
        <div>{TvId}</div>
    </>
  )
}

export default MyList;
