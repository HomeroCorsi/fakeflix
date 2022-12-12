import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import React, { useContext, useState } from "react";
import { TYPES } from "../reducer/authReducer";
import styles from "./Login.module.css";

const Login = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  // const {setUser : setUsername, setIsAuth} = useContext(AuthContext);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email } = user;
    const data = {
      user: {
        username: "default",
        email: email,
      },
      token: "1233324125145",
    };

    dispatch({ type: TYPES.LOGIN, payload: data });

    navigate("/Browse", {
      replace: true,
    });
  };

  return (
    <div className={styles.bodys}>
      <div className={styles.container}>
        <a className={styles.logo}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
            alt="logo"
            className={styles.logo_img}
          />
        </a>

        <div className={styles.login}>
          <h1 className={styles.login_title}>Iniciar Sesión</h1>
          <form onSubmit={handleSubmit} className={styles.login_group}>
            <input
              type="text"
              name="email"
              placeholder="Email"
              className={styles.login_input}
              onChange={handleChange}
              value={user.email}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className={styles.login_input}
              onChange={handleChange}
              value={user.password}
            />
            <button type="submit" className={styles.login_sing_in}>
              Iniciar sesión
            </button>
          </form>
          <div className={styles.login_secondary}>
            <p className={styles.footer_question}>
              <input type="checkbox" className={styles.checkbox}></input>Recordarme
            </p>
            <a href="#" className={styles.footer_question}>
              ¿Necitas ayuda?
            </a>
          </div>
        </div>

        <footer className={styles.footery}>
          <div className={styles.center}>
            <div className={styles.footer_links}>
              <p className={styles.footer_question}>
                ¿Preguntas? Llama al 0800 345 1593
              </p>
            </div>

            <div className={styles.footer_links}>
              <a href="#" className={styles.footer_question}>
                Preguntas frecuentes
              </a>
              <a href="#" className={styles.footer_question}>
                Centro de ayuda
              </a>
              <a href="#" className={styles.footer_question}>
                Términos de uso
              </a>
              <a href="#" className={styles.footer_question}>
                Privacidad
              </a>
            </div>
            <div className={styles.footer_links}>
              <a href="#" className={styles.footer_question}>
                Preferencias de cookies
              </a>
              <a href="#" className={styles.footer_question}>
                Información corporativa
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Login;