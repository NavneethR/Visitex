import React from "react";
import {Routes, Route} from "react-router-dom";

import ViewVisitors from "./pages/root-view/ViewVisitors.jsx";
import Login from "./pages/root-view/Login.jsx";
import Signup from "./pages/root-view/SignUp.jsx";
import OldUser from "./pages/client-view/OldUser.jsx";
import NewUser from "./pages/client-view/NewUser.jsx";
import ClientLayout from "./pages/client-view/layout/ClientLayout.jsx";

const App = () => {
    return (
        <div style={{backgroundColor: "darkgray",width:"100%",height:"auto",marginBottom:"0px"}}>
            <Routes>
                <Route element={<ClientLayout/>}>
                    <Route path='/' element={<NewUser/>}/>
                    <Route path='/old-user' element={<OldUser/>}/>
                </Route>
                <Route path="/register" element={<NewUser/>}/>
                <Route path="/root" element={<ViewVisitors/>}/>
                <Route path="/root/signup" element={<Signup/>}/>
                <Route path="/root/login" element={<Login/>}/>
            </Routes>
        </div>
    )
};

export default App;  