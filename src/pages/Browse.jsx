// import { useAuth } from "../../../auth/context/AuthProvider";
import Banner from "../components/banner/Banner";
// import Slider from "../../../common/components/slider/Slider";
// import useFetch from "../../../common/hooks/useFetch";
// import { getPopularMovies } from "../services/getPopularMovies";
import useFetch from "../customHooks/useFetch";
import getPopularMovies from "../features/movies/utils/getPopularMovies";
import Slider from "../components/slider/Slider";
import getTopRatedMovies from "../features/movies/utils/getTopRatedMovies";
import getPopularseries from "../features/series/utils/getPopularSeries";
import getTopRatedSeries from "../features/series/utils/getTopRatedSeries";
// import { AuthContext } from "../context/AuthContext";
// import { useContext } from "react";
import NavBar from "../components/navBar/NavBar";


const Browse = () => {
  const { data : popularMovies} = useFetch(getPopularMovies);

  const { data : topRatedMovies} = useFetch(getTopRatedMovies);

  const { data : popularSeries} = useFetch(getPopularseries);

  const { data : TopRatedSeries} = useFetch(getTopRatedSeries);

//   const { isAuth, login, logout } = useAuth();
//   console.log(isAuth, login, logout);

  // const {isAuth, user} = useContext(AuthContext)
    // console.log(isAuth, user.email);
    // console.log('https://api.themoviedb.org/3/genre/movie/list?api_key=c30ae912fb4c8df81ced17743c4657ea&language=en-US')
    // console.log(' https://api.themoviedb.org/3/genre/tv/list?api_key=c30ae912fb4c8df81ced17743c4657ea&language=en-US')


  return (
    <>
      <NavBar/>
      <Banner item={popularMovies[0]} />
      <div style={titleStyle}>Películas más vistas</div>
      <Slider items={popularMovies} />
      <div style={titleStyle}>Películas mejor valoradas</div>
      <Slider items={topRatedMovies} />
      <div style={titleStyle}>Series más vistas</div>
      <Slider items={popularSeries} />
      <div style={titleStyle}>Series mejor valoradas</div>
      <Slider items={TopRatedSeries} />
    </>
  );
};

const titleStyle = {
    color: "white",
    fontSize: "4rem",
    padding: '2rem'
  };


export default Browse;