import React, { useContext } from 'react'
import NavBar from '../components/navBar/NavBar';
import { MoviesIdContext } from '../context/MoviesIdContext';
import { TvIdContext } from '../context/TvIdContext';
import SliderMyListMovies from '../components/slider/SliderMyListMovies';
import SliderMyListTv from '../components/slider/SliderMyListTv';

export const MyList = () => {

const {moviesId} = useContext(MoviesIdContext)
const {TvId} = useContext(TvIdContext)

  return (
    <>
        <NavBar/>
        <div style={divListas}>
        <div style={titleStyle}>Mis películas</div>
        <SliderMyListMovies items={moviesId}/>
        <div style={titleStyle}>Mis programas de televisión</div>
        <SliderMyListTv items={TvId}/>
        </div>
    </>
  )
}

export default MyList;


const divListas = {
  paddingTop: '3rem',

}

const titleStyle = {
  marginTop: '10rem',
  color: "white",
  fontSize: "50px",
  padding: '2rem'
  };