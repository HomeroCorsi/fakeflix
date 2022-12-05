import React from 'react'
import AuthProvider from './context/AuthProvider'
import { AppRoutes } from './routes/AppRoutes'
import MoviesIdProvider from './context/MoviesIdProvider'
import TvIdProvider from './context/TvIdProvider'

const App = () => {
  return (
    <TvIdProvider>
    <MoviesIdProvider>
      <AuthProvider>
        <AppRoutes/>
      </AuthProvider>
    </MoviesIdProvider>
    </TvIdProvider>
  )
}

export default App