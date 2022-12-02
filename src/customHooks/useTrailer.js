// hacer custom hook para ir al trailer,
// es una accion que se repite en 
// varios componentes

// import React from "react";
import { useNavigate } from "react-router-dom";

const useTrailer = (item) => {

    const navigate = useNavigate();


      navigate("/view", {
       state: item,
     }); 
 




  return (
     navigate(`/view/${item.id}`)
  )
}

export default useTrailer;