import { TMDB } from "../../../config/tmdb";
import { seriesAdapter } from "./seriesAdapter";


const getTopRatedSeries = async () => {
    const res = await TMDB.api.get(TMDB.path.series.top_rated);
    const seriesAdapted = seriesAdapter(res.data.results);
  
    return seriesAdapted;
  };

export default getTopRatedSeries