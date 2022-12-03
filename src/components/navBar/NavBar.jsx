import { useState, useEffect } from "react";
import "./NavBar.modules.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";

// import { AuthContext } from "../../context/AuthContext";
// import { TYPES } from "../../reducer/authReducer";

const NavBar = () => {
  // const navigate = useNavigate();
  const [scroll, setScroll] = useState(false);
  // const { dispatch } = useContext(AuthContext);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setScroll(true);
      } else setScroll(false);
    });
  }, []);

  const { logout } = useAuth();
  const handleSubmit = () => {
    logout("Nico");

    /* e.preventDefault();
    
    localStorage.removeItem('auth');

    dispatch({ type: TYPES.LOGOUT});

    navigate("/Login", {
      replace: false,
    }); */
  };

  return (
    <div className={`nav ${scroll && "nav_black"}`}>
      <div>
        <img
          className="nav_logo"
          src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
          alt="Netflix Logo"
        />
      </div>
      <div className="NavDerecho">
        <button className="salir" onClick={handleSubmit}>
          Salir
        </button>
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
