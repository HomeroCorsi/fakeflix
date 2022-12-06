import React from 'react'
import styles from "../Banner.module.css";
import { useNavigate } from 'react-router-dom';

const BannerPlayButton = ({item}) => {

  const navigate = useNavigate();

  const navigateTrailer = () => {
    navigate("/view", {
     state: item,
   }); 

   navigate(`/view/${item?.id}`);
 };





  return (
  <button className={styles.button_grey} href={item?.homepage} onClick={navigateTrailer}>
<i className={styles.play}></i>Reproducir
</button>

  )
}

export default BannerPlayButton


