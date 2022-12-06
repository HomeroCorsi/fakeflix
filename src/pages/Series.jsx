import React from 'react'
import useFetch from '../customHooks/useFetch'
import getTvActionAndAdventure from '../features/series/utils/getCategories/getTvActionAndAdventure'
import SliderTv from '../components/slider/SliderTv'
import NavBar from '../components/navBar/NavBar'
import axios from 'axios'
import { useState, useEffect } from 'react'
import getTvCrime from '../features/series/utils/getCategories/getTvCrime'
import getTvSciFi from '../features/series/utils/getCategories/getTvSciFi'
import getTvReality from '../features/series/utils/getCategories/getTvReality'
import getTvComedy from '../features/series/utils/getCategories/getTvComedy'
import getTvDocumentary from '../features/series/utils/getCategories/getTvDocumentary'
import getTvDrama from '../features/series/utils/getCategories/getTvDrama'


function Series() {

const { data : TvActionAndAdventure } = useFetch(getTvActionAndAdventure)
const { data : TvCrime } = useFetch(getTvCrime)
const { data : TvSciFi } = useFetch(getTvSciFi)
const { data : TvReality } = useFetch(getTvReality)
const { data : TvComedy } = useFetch(getTvComedy)
const { data : TvDrama } = useFetch(getTvDrama)
const { data : TvDocumentary } = useFetch(getTvDocumentary)


// const urlGeneros = ` https://api.themoviedb.org/3/genre/tv/list?api_key=c30ae912fb4c8df81ced17743c4657ea&language=en-US`

// const [dataGeneros, setDataGeneros] = useState([])

// const getGenres = async () => {
//   const res = await axios.get(urlGeneros);
//   const moviesDetails = res.data;
//   setDataGeneros(moviesDetails)

//   return moviesDetails;
// };


// useEffect(() => {
//     getGenres();
//   }, []);
// console.log(dataGeneros)

const urlGeneros = ` https://api.themoviedb.org/3/genre/tv/list?api_key=c30ae912fb4c8df81ced17743c4657ea&language=en-US`




  return (<>
    <NavBar/>

    <div style={categories}>
    <div style={titleStyle}>Aventura</div>
    <SliderTv items={TvActionAndAdventure}/>

    <div style={titleStyle}>Comedia</div>
    <SliderTv items={TvComedy}/>

    <div style={titleStyle}>Drama</div>
    <SliderTv items={TvDrama}/>

    <div style={titleStyle}>Documentales</div>
    <SliderTv items={TvDocumentary}/>

    <div style={titleStyle}>Ciencia Ficción</div>
    <SliderTv items={TvSciFi}/>

    <div style={titleStyle}>Crimen</div>
    <SliderTv items={TvCrime}/>

    <div style={titleStyle}>Reality</div>
    <SliderTv items={TvReality}/>
    </div>
</>
  )
}

export default Series

const titleStyle = {
    color: "white",
    fontSize: "50px",
    padding: '2rem'
    };

const categories = {
    paddingTop: '10rem'
}
  