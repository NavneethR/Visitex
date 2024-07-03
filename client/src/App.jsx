import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import { AuthContextProvider } from "./context/AuthContext";
import HomeLayout from "./Components/Layouts/HomeLayout";
import ClientLayout from "./Components/Layouts/ClientLayout";
import VisitorRegister from "./pages/VisitorRegister";
import VisitorLogout from "./pages/VisitorLogout";
import VisitorLogin from "./pages/VisitorLogin";

function App() {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/root" element={<HomeLayout />}>
          <Route path="" element={<Home />} />
          <Route path="/root/login" element={<Login />} />
          <Route path="/root/signup" element={<Signup />} />
        </Route>
        <Route path="/" element={<ClientLayout />}>
          <Route path="register-user" element={<VisitorRegister />} />
          <Route path="login-user" element={<VisitorLogin />} />
          <Route path="logout-user" element={<VisitorLogout />} />
        </Route>
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
