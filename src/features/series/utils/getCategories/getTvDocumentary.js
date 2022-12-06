
import axios from "axios";
import { seriesAdapter } from "../seriesAdapter";

const url = `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10764`

const getTvDocumentary = async () => {
  const res = await axios.get(url);
  const seriesDetails = seriesAdapter(res.data.results);


  return seriesDetails;
};

export default getTvDocumentary