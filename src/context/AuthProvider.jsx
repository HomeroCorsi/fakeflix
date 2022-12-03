import { useContext, useReducer } from "react";
import {
  initialAuthReducer,
  authReducer,
  TYPES,
  initialState,
} from "../reducer/authReducer";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [auth, dispatch] = useReducer(
    authReducer,
    initialState,
    initialAuthReducer
  );

  const login = (name) => {
    dispatch({
      type: TYPES.LOGIN,
      payload: { name },
    });
    const auth = {
      name,
      isAuth: true,
    };
    localStorage.setItem("auth", JSON.stringify(auth));
  };

  const logout = () => {
    dispatch({
      type: TYPES.LOGOUT,
    });

    localStorage.removeItem("auth");
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        auth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  const { login, logout, auth } = useContext(AuthContext);
  return {
    login,
    logout,
    auth,
  };
};
