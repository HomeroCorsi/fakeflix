import { TMDB } from "../../../config/tmdb";
import { seriesAdapter } from "./seriesAdapter";


const getPopularseries = async () => {
    const res = await TMDB.api.get(TMDB.path.series.popular);
    const seriesAdapted = seriesAdapter(res.data.results);
  
    return seriesAdapted;
  };

export default getPopularseries