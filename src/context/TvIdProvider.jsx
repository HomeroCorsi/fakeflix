import { TvIdContext } from "./TvIdContext";
import React from 'react'
import { useState } from "react";

const TvIdProvider = ({children}) => {

    const [TvId, setTvId] = useState([])

  return (
    <TvIdContext.Provider value={{TvId, setTvId}}
    >{children}</TvIdContext.Provider>
  )
}

export default TvIdProvider