import { AuthProvider } from "./context/AuthContext"
import Login from "./pages/login"

function App() {

  return (
   <AuthProvider>
    <Login/>
   </AuthProvider>
  )
}

export default App
