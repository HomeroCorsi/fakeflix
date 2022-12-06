import axios from "axios";
import { moviesAdapter } from "../moviesAdapter";

const url = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=16`

const getMoviesAimation = async () => {
  const res = await axios.get(url);
  const moviesDetails = moviesAdapter(res.data.results);


  return moviesDetails;
};

export default getMoviesAimation