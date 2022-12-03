export const initialState = {
  name: null,
  isAuth: false,
};
export const initialAuthReducer = () => {
  return JSON.parse(localStorage.getItem("auth")) || initialState;
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
        name: action.payload.name,
        isAuth: true,
      };
    case TYPES.LOGOUT:
      return {
        ...state,
        name: null,
        isAuth: false,
      };
    default:
      return state;
  }
};
