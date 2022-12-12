import React, { useState, useReducer } from 'react'
import { authReducer } from '../reducer/authReducer'
import { AuthContext } from './AuthContext'
import { TYPES } from '../reducer/authReducer'
import { initialAuthReducer } from '../reducer/authReducer'
import { initialState } from '../reducer/authReducer'

const AuthProvider = ({children}) => {

  const [userForm, setUserForm] = useState({username: '', password:''})
  
  const [state, dispatch] = useReducer(authReducer, initialState, initialAuthReducer)

  const login = (userData) => {
    localStorage.setItem('auth', JSON.stringify(userData))
    dispatch({type: TYPES.LOGIN, payload: userData})
  }

  const logout = () => {
    localStorage.clear()
    dispatch({type: TYPES.LOGOUT})
  }

  return (
    <AuthContext.Provider value={{userForm, setUserForm, state, login, logout}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
