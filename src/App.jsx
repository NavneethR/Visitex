import React from "react";
import {Routes, Route} from "react-router-dom";

import ViewVisitors from "./pages/root-view/ViewVisitors.jsx";
import Login from "./pages/root-view/Login.jsx";
import Signup from "./pages/root-view/SignUp.jsx";
import OldUser from "./pages/client-view/OldUser.jsx";
import NewUser from "./pages/client-view/NewUser.jsx";
import ClientLayout from "./pages/client-view/layout/ClientLayout.jsx";
import WebCamComponent from "./Components/Client/WebCamComponent.jsx";

const App = () => {
    return (
        <div className="body">
            <Routes>
                <Route element={<ClientLayout/>}>
                    <Route path='/' element={<NewUser/>}/>
                    <Route path='/old-user' element={<OldUser/>}/>
                    <Route path="/webcam" element={<WebCamComponent/>}/>
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