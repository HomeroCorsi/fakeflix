import { moviesAdapter } from "./moviesAdapter";
import { TMDB } from "../../../config/tmdb";


const getTopRatedMovies = async () => {
    const res = await TMDB.api.get(TMDB.path.movies.top_rated);
    const moviesAdapted = moviesAdapter(res.data.results);
  
    return moviesAdapted;
  };

export default getTopRatedMovies