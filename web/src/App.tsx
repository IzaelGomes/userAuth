import { useState } from 'react'
import { AuthProvider } from './context/AuthContext'
import Routers from './routes'
import { GlobalStyle } from './styles/globalStyle'



function App() {

  return (
    <AuthProvider>
    <GlobalStyle/>
    <Routers/>
   </AuthProvider>
  )
}

export default App
