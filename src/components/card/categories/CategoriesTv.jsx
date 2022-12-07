import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const CategoriesTv = ({item}) => {

  const urlTvGenres = `https://api.themoviedb.org/3/tv/${item.id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;

  const [tvData, setTvData] = useState([{genreTv: null }]);

  const navigate = useNavigate();
  

  const getTvGenres = async () => {

    const res = await axios.get(urlTvGenres);
    const generosTv = res.data.genres.slice(0,3).map(info => info);

setTvData([{genreTv : generosTv}])

  }

  useEffect(() => {
    getTvGenres();
  }, []);


const infoTvData = tvData[0]
// const infoMovieData = movieData[0]

  return (
    <><div style={{display:'flex',
    justifyContent:'space-around'}}>

           { 
            infoTvData.genreTv?.map(info => <span style={categoriesInd} onClick={() =>  navigate(`/categoriesSeries/${info.id}`)
            
            }>{info.name}</span>)||
            "la id no coincide con ningún género"
            }


    </div>
    
    
    </>
  )
}



export default CategoriesTv    





const categoriesInd = {
    fontSize: '80%',
    marginTop: '5%',
    cursor: 'pointer'
}
