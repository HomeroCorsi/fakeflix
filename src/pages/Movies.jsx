import React from 'react'
import SliderMovies from '../components/slider/SliderMovies'
import useFetch from '../customHooks/useFetch'
import getMoviesAction from '../features/movies/utils/getMoviesCategories/getMoviesAction'
import getMoviesWestern from '../features/movies/utils/getMoviesCategories/getMoviesWestern'
import getMoviesAimation from '../features/movies/utils/getMoviesCategories/getMoviesAnimation'
import getMoviesMystery from '../features/movies/utils/getMoviesCategories/getMoviesMystery'
import getMoviesWar from '../features/movies/utils/getMoviesCategories/getMoviesWar'
import getMoviesHorror from '../features/movies/utils/getMoviesCategories/getMoviesHorror'
import getMoviesSciFi from '../features/movies/utils/getMoviesCategories/getMoviesSciFi'
import NavBar from '../components/navBar/NavBar'

function Movies() {

const {data :moviesAction} = useFetch(getMoviesAction)
const {data :moviesWestern} = useFetch(getMoviesWestern)
const {data :moviesAnimation} = useFetch(getMoviesAimation)
const {data :moviesMystery} = useFetch(getMoviesMystery)
const {data :moviesWar} = useFetch(getMoviesWar)
const {data :moviesHorror} = useFetch(getMoviesHorror)
const {data :moviesSciFi} = useFetch(getMoviesSciFi)




  return (<>
  <NavBar/>

<div style={categories}>

<div style={titleStyle}>Películas de Acción</div>
<SliderMovies items={moviesAction}/>

<div style={titleStyle}>Películas de Animación</div>
<SliderMovies items={moviesAnimation}/>

<div style={titleStyle}>Westerns</div>
<SliderMovies items={moviesWestern}/>

<div style={titleStyle}>Películas de Terror</div>
<SliderMovies items={moviesHorror}/>

<div style={titleStyle}>Películas de Ciencia Ficción</div>
<SliderMovies items={moviesSciFi}/>

<div style={titleStyle}>Películas de Guerra</div>
<SliderMovies items={moviesWar}/>

<div style={titleStyle}>Películas de Misterio</div>
<SliderMovies items={moviesMystery}/>

</div>

</>
  )
}

export default Movies

const titleStyle = {
    color: "white",
    fontSize: "50px",
    padding: '2rem'
    };

const categories = {
    paddingTop: '10rem'
}
  