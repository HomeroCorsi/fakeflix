export const initialAuthReducer = () => {
    // return JSON.parse(localStorage.getItem("auth")) || initialState
  }
  
  export const initialState = {
    user: null,
    token: null,
    isAuth: false,
  };
  
  export const TYPES = {
    LOGIN: "[auth]LOGIN",
    LOGOUT: "[auth]LOGOUT",
  };
  
  export const authReducer = (state, action) => {
    switch (action.type) {
      case TYPES.LOGIN:
        return {
          ...state,
          user: action.payload.user,
          token: action.payload.token,
          isAuth: true,
        };
      case TYPES.LOGOUT:
        return {
          ...state,
          user: null,
          token: null,
          isAuth: false,
        };
      default:
        return state;
    }
  };
  