import { moviesAdapter } from "./moviesAdapter";
import { TMDB } from "../../../config/tmdb";


const getTrailer = async (id) => {
    const res = await TMDB.api.get(TMDB.path.movies.getTrailer(id));
    const moviesAdapted = moviesAdapter(res.data.results);
  
    return moviesAdapted;
  };

export default getTrailer


  
    // console.log(

    // )

    // const link = youtube + key;


    // const [data, setData] = useState([]);
    // const [error, setError] = useState(null);
    // const [isLoading, setisLoading] = useState(false);

    // const getTrailer = async () => {
    //     setisLoading(true);
    //     try{
    //         const {data} = await axios.get(url);
    //         setData(data);
    //     } catch(error){setError(console.log("no se pudo obtener el video"))}    
    //     finally{
    //         setisLoading(false)
    //     }
    //     console.log(data)
        
    // }

    // getTrailer()


    ---------------------------

    import React from 'react'
import { useParams } from 'react-router-dom'
import ReactPlayer from 'react-player';
import { TMDB } from '../config/tmdb';
// import { moviesAdapter } from '../features/movies/utils/moviesAdapter';
import axios from 'axios';
import { useState, useEffect } from 'react';

const View =  () => {
    const params = useParams();
    const {id}=params;

    const [data, setData] = useState([]);
    const [error, setError] = useState(false)
 
    const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=c30ae912fb4c8df81ced17743c4657ea&language=en-US`;

    const getTrailer = async () => {
        const res =  await axios.get(url);
        setData(res.data.results[0].key);

    }

    getTrailer()

console.log(error)
  return (<>
   
    <div>Hola! estás viendo:{data}</div>
    <ReactPlayer url={`https://www.youtube.com/watch?v=${data}`}
     playing={true}
     width={'100%'}
     height={'75rem'} /> 
    <div  
    //    style={{visibility: data.length = 0 ? 'visible' : 'hidden',}}  
>weps</div>

</>
  )
}

export default View