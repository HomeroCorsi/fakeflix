import { AuthContext } from "./AuthContext";
import { initialState, authReducer } from "../reducer/authReducer";
import { useReducer } from "react";

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // console.log(state)

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        token: state.token,
        isAuth: state.isAuth,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
