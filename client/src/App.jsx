import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import { AuthContextProvider } from "./context/AuthContext";
import HomeLayout from "./Components/Layouts/HomeLayout";
import ClientLayout from "./Components/Layouts/ClientLayout";
import VisitorRegister from "./pages/VisitorRegister";
import VisitorLogout from "./pages/VisitorLogout";
import { VisitorContextProvider } from "./context/VisitorContext";
import RootAuth from "./pages/RootAuth";
import { RootAuthContextProvider } from "./context/RootAuthContext";

function App() {
  return (
    <RootAuthContextProvider>
      <VisitorContextProvider>
        <AuthContextProvider>
          <Routes>
            <Route path="/root-auth" element={<RootAuth />} />
            <Route path="/root" element={<HomeLayout />}>
              <Route path="" element={<Home />} />
              <Route path="/root/login" element={<Login />} />
              <Route path="/root/signup" element={<Signup />} />
              <Route path="/root/*" element={<div>Error 404! Not Found</div>} />
            </Route>
            <Route path="/" element={<ClientLayout />}>
              <Route path="register-user" element={<VisitorRegister />} />
              <Route path="logout-user" element={<VisitorLogout />} />
              <Route path="*" element={<div>Error 404! Not Found</div>} />
            </Route>
          </Routes>
        </AuthContextProvider>
      </VisitorContextProvider>
    </RootAuthContextProvider>
  );
}

export default App;
