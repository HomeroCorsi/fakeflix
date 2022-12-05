import { moviesAdapter } from "./moviesAdapter";
import { TMDB } from "../../../config/tmdb";


const getMovieDetails = async ({id}) => {
    const res = await TMDB.api.get(TMDB.path.movies.details(id));
    const moviesAdapted = res.data.results;
  
    return moviesAdapted;
  };

export default getMovieDetails