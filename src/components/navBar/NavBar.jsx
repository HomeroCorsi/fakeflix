import { useState, useEffect, useContext } from "react";
import "./NavBar.modules.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
/* import { TYPES } from "../../reducer/authReducer"; */

const NavBar = () => {
  const navigate = useNavigate();
  const [scroll, setScroll] = useState(false);
  const { state, logout } = useContext(AuthContext);



  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setScroll(true);
      } else setScroll(false);
    });
  }, []);


  const myListNavigate = () => {
  navigate('/myList')}

  const browseNavigate = () => {
    navigate('/browse')}

  const seriesNavigate = () => {
    navigate('/series')}

  const moviesNavigate = () => {
    navigate('/movies')}

  const {user} = useContext(AuthContext)


  return (
    <div className={`nav ${scroll && "nav_black"}`}>
      <div className="NavIzquierdo">
        <img
          className="nav_logo"
          src="https://cdn.jsdelivr.net/gh/Th3Wall/assets-cdn/Fakeflix/Fakeflix_logo.png"
          alt="Netflix Logo"
          onClick={browseNavigate}
        />
        <button className="navBarButton" onClick={myListNavigate}>Mi Lista</button>
        <button className="navBarButton" onClick={seriesNavigate}>Tv</button>
        <button className="navBarButton" onClick={moviesNavigate}>Películas</button>
      </div>
      <div className="NavDerecho">
        <button className="navBarButtonR" >Bienvenido/a {state.username} </button>
        <button className="navBarButtonR" onClick={logout}>Salir</button>
        <img
          className="user"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="user"
        />
      </div>
    </div>
  );
};

export default NavBar;
