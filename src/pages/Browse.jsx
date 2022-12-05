// import { useAuth } from "../../../auth/context/AuthProvider";
import Banner from "../components/banner/Banner";
// import Slider from "../../../common/components/slider/Slider";
// import useFetch from "../../../common/hooks/useFetch";
// import { getPopularMovies } from "../services/getPopularMovies";
import useFetch from "../customHooks/useFetch";
import getPopularMovies from "../features/movies/utils/getPopularMovies";
import SliderMovies from "../components/slider/SliderMovies";
import getTopRatedMovies from "../features/movies/utils/getTopRatedMovies";
import getPopularseries from "../features/series/utils/getPopularSeries";
import getTopRatedSeries from "../features/series/utils/getTopRatedSeries";
// import { AuthContext } from "../context/AuthContext";
// import { useContext } from "react";
import NavBar from "../components/navBar/NavBar";
import './Browse.module.css'
import SliderTv from "../components/slider/SliderTv";

const Browse = () => {
  const { data : popularMovies} = useFetch(getPopularMovies);

  const { data : topRatedMovies} = useFetch(getTopRatedMovies);

  const { data : popularSeries} = useFetch(getPopularseries);

  const { data : TopRatedSeries} = useFetch(getTopRatedSeries);

  

//   const { isAuth, login, logout } = useAuth();
//   console.log(isAuth, login, logout);

  
 /*  const [movie, setMovie] = useState<Movie | null>(null)
  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    );
  }, [netflixOriginals]); */
  
  /* Hace un useEffect que cambie de valor del array aleatoriamente */



  return (
    <>
      <NavBar/>
      <Banner item={popularMovies[0]} />
      <div className="body">
      <div style={titleStyle}>Películas más vistas</div>
      <SliderMovies items={popularMovies} />
      <div style={titleStyle}>Películas mejor valoradas</div>
      <SliderMovies items={topRatedMovies} />
      <div style={titleStyle}>Series más vistas</div>
      <SliderTv items={popularSeries} />
      <div style={titleStyle}>Series mejor valoradas</div>
      <SliderTv items={TopRatedSeries} />
      </div>
    </>
  );
};

const titleStyle = {
  color: "white",
  fontSize: "50px",
  padding: '2rem'
  };


export default Browse;