// 1:15:07

// import { TMDB } from "../../config/tmdb";
import { moviesAdapter } from "./moviesAdapter";
import { TMDB } from "../../../config/tmdb";


const getPopularMovies = async () => {
    const res = await TMDB.api.get(TMDB.path.movies.popular);
    const moviesAdapted = moviesAdapter(res.data.results);
  
    return moviesAdapted;
  };

export default getPopularMovies