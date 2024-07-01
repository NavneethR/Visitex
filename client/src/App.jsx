import {Route, Routes} from "react-router-dom"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Home from "./pages/Home"
import { AuthContextProvider } from "./context/AuthContext"
import HomeLayout from "./Components/Layouts/HomeLayout"

function App() {
  return (
    <AuthContextProvider>
      <HomeLayout>
        <Routes>
          <Route path="/root" element={<Home/>}/>
          <Route path="/root/login" element={<Login/>}/>
          <Route path="/root/signup" element={<Signup/>}/>
        </Routes>
      </HomeLayout>
    </AuthContextProvider>
  )
}

export default App
