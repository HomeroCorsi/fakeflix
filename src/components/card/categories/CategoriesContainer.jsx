// import React from 'react'

// const CategoriesContainer = ({id, genre}) => {
//   return (

//     <span style={categoriesInd} key={id}>{genre}</span>
    
//   )
// }

// export default CategoriesContainer

// const categoriesInd = {
//     fontSize: '80%',
//     marginTop: '5%'
// }

import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';




const Categories = ({item}) => {

  const urlTvGenres = `https://api.themoviedb.org/3/tv/${item.id}?api_key=c30ae912fb4c8df81ced17743c4657ea&language=en-US`;

  const [data, setData] = useState([{genre: null }]);

  const getTvGenres = async () => {

    const res = await axios.get(urlTvGenres);
    const resTv = res.data.genres.slice(0,2).map(info => info.name);
    const generosTv = resTv

// setData(resTv.map(info => {return (console.log(info.name))}))

setData([{genre : generosTv}])

  }

  useEffect(() => {
    getTvGenres();
  }, []);

console.log(data[0].genre)


  return (
    <><div style={{display:'flex',
    justifyContent:'space-around'}}>
       {/* <span style={categoriesInd}>{data.genre}</span> */}
       {data[0].genre.map((info) => (<span>{info}</span>)
       )}


    </div>
    
    
    </>
  )
}

const categoriesInd = {
    fontSize: '80%',
    marginTop: '5%'
}


export default Categories    
