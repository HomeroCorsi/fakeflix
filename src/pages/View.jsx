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
    const [isLoading, setisLoading] = useState(false);

 
    const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=c30ae912fb4c8df81ced17743c4657ea&language=en-US`;

    const getTrailer = async () => {
        // const res =  await axios.get(url);
        // setData(res.data.results[0].key);

         setisLoading(true);
         try{
             const res = await axios.get(url);
             setData(res.data.results[0].key);
         } catch(error){setError(true)}    
         finally{
             setisLoading(false)
         }

    }

    useEffect(() => {
        getTrailer();
      }, []);

      console.log(error)

  return (<>
       <div  
       style={{visibility: error === true ? 'visible' : 'hidden',
       position:'absolute',
        display:'flex',
        justifyContent:'center',
        width:'100%',
        height:'75%',
        fontSize:'5rem',
       }} >Lo sentimos, no pudimos encontrar el video</div>
       
    <ReactPlayer url={`https://www.youtube.com/watch?v=${data}`}
     playing={true}
     width={'100%'}
     height={'75rem'} /> 
 


</>
  )
}

export default View