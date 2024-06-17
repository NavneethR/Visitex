import React from "react";
import menu from "../../assets/images/hamburgerMenu.png"
import { NavLink } from "react-router-dom";
import "../../assets/css/styles.css"

const NavBar = ({need}) => {
    return (
        <div>
            <nav className="Nav-bar sticky has-navbar">
                <img src={menu} className="menu-icon"/>
                <h1>Visitex</h1>
                {(need==="false")?<div/>:
                <div className="login-signup-button-container">
                    <NavLink to='/root/signup'  className="signup">Sign Up</NavLink>
                    <div className="signup"><NavLink to='/root/login'>Login</NavLink></div>
                </div>
                }
            </nav>
        </div>
    )
}

export default NavBar;