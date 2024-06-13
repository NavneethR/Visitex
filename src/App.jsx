import React from "react";
import ReactDOM from "react-dom/client";
import {Routes, Route} from "react-router-dom";

import VeiwVisitors from "./pages/root-view/ViewVisitors.jsx";
import Login from "./pages/root-view/Login.jsx";
import Signup from "./pages/root-view/SignUp.jsx";
import RootPassword from "./pages/root-view/RootMainPassword.jsx";

const App = () => {
    return (
        <div style={{backgroundColor: "darkgray",width:"100%",height:"100vh"}}>
            <Routes>
                <Route path='root' element={<VeiwVisitors/>}/>
                <Route path="root/login" element={<Login/>}/>
                <Route path="root/signup" element={<Signup/>}/>
                <Route path="root/password" element={<RootPassword/>}/>
            </Routes>
        </div>
    )
};

export default App;  