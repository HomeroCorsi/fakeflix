import { useState, useEffect, useContext } from "react";
import "./NavBar.modules.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { TYPES } from "../../reducer/authReducer";


const NavBar = () => {
  const navigate = useNavigate();
  const [scroll, setScroll] = useState(false);
  const { dispatch } = useContext(AuthContext);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setScroll(true);
      } else setScroll(false);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.clear()

    dispatch({ type: TYPES.LOGOUT});

    navigate("/Login", {
      replace: false,
    });
  };

  const myListNavigate = () => {
  navigate('/myList')}

  const browseNavigate = () => {
    navigate('/browse')}

  const seriesNavigate = () => {
    navigate('/series')}

  const moviesNavigate = () => {
    navigate('/movies')}

  return (
    <div className={`nav ${scroll && "nav_black"}`}>
      <div className="NavIzquierdo">
        <img
          className="nav_logo"
          src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
          alt="Netflix Logo"
          onClick={browseNavigate}
        />
        <button className="navBarButton" onClick={myListNavigate}>Mi Lista</button>
        <button className="navBarButton" onClick={seriesNavigate}>Tv</button>
        <button className="navBarButton" onClick={moviesNavigate}>Películas</button>
      </div>
      <div className="NavDerecho">
        <button className="navBarButton" onClick={handleSubmit}>Salir</button>
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
