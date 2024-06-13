import React from "react";
import logo from "../../assets/images/icon.png"
import menu from "../../assets/images/hamburgerMenu.png"
import { Link } from "react-router-dom";
import "../../assets/css/styles.css"

const NavBar = () => {

    const user = false;

    return (
        <div className="Nav-bar">
            <img src={menu} className="menu-icon"/>
            <h1>Visitex</h1>
            <div className="login-signup-button-container">
                {(!user) ? <div className="signup"><Link to='/root/signup'>Sign Up</Link></div>:<div>{user}</div>}
                {(!user) ? <div className="signup"><Link to='/root/login'>Login</Link></div>:null}
            </div>
        </div>
    )
}

export default NavBar;