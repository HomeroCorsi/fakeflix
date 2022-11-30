// import React from "react";
// import { moviesAdapter } from "../../features/movies/utils/moviesAdapter";
import styles from "./Banner.module.css";

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
          <p className={styles.spacing} >{item?.overview || item?.description || <p>404 not found</p>}</p>

          <button className={styles.button_grey} href={item?.homepage}>
            <i className={styles.play}></i>Play
          </button>
          <button className={styles.button_grey} href={item?.homepage}>
            <i className={styles.play}></i>Mi list
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;