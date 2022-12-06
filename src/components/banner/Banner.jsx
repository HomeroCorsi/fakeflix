// import React from "react";
// import { moviesAdapter } from "../../features/movies/utils/moviesAdapter";
import styles from "./Banner.module.css";
import BannerAddButton from "./BannerButtons.jsx/BannerAddButton";
import BannerPlayButton from "./BannerButtons.jsx/BannerPlayButton";

const Banner = ({ item }) => {

  
  return (
    <div
      style={{ backgroundImage: `url(${item?.backdrop})` }}
      className={styles.bannerprincipal}
    >
      <div className={styles.container}>
        <div className={styles.w_90}>
          <h3>
            <span className={styles.n}>N</span> Movie
          </h3>
          <h2>{item?.name}</h2>
          <p className={styles.spacing} >{item?.overview || item?.description || <p>Cargando</p>}</p>

          <BannerPlayButton item={item}/>
          {/* <button className={styles.button_grey} href={item?.homepage}>
            <i className={styles.play}></i>Play
          </button> */}
          {/* <button className={styles.button_grey} href={item?.homepage}>
            <i className={styles.play}></i>Mi list
          </button> */}
          <BannerAddButton item={item}/>
        </div>
      </div>
    </div>
  );
};

export default Banner;