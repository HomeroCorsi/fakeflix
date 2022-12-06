import React from 'react'
import styles from "../Banner.module.css";
import { useContext, useState } from 'react'
import { MoviesIdContext } from '../../../context/MoviesIdContext'

const BannerAddButton = ({item}) => {

	const {MoviesId, setMoviesId} = useContext(MoviesIdContext)
	const itemid = item?.id


  return (          
  <button className={styles.button_grey} href={item?.homepage} onClick={() => 
			
    setMoviesId(prevState => {
        // check if it is already added
        if(prevState.includes(itemid)) { 
          // clone the prevState arr to prevent side effects  
           const clone = [...prevState];
         // Remove the existing id 
        //    clone.splice(prevState.indexOf(itemid), 1)
           return clone;
        } else {
           return [...prevState, itemid]
        }})}>
    <i className={styles.play}></i>Añadir a Mi lista
  </button>

  )
}

export default BannerAddButton