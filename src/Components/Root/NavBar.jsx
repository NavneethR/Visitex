import React from "react";
import menu from "../../assets/images/hamburgerMenu.png"
import { NavLink } from "react-router-dom";
import "../../assets/css/styles.css"

const NavBar = () => {
    return (
        <nav className="Nav-bar">
            <img src={menu} className="menu-icon"/>
            <h1>Visitex</h1>
            <div className="login-signup-button-container">
                <NavLink to='/root/signup'  className="signup">Sign Up</NavLink>
                <div className="signup"><NavLink to='/root/login'>Login</NavLink></div>
            </div>
        </nav>
    )
}

export default NavBar;