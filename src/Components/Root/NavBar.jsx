import React from "react";
import logo from "../../assets/images/icon.png"
import menu from "../../assets/images/hamburgerMenu.png"
import { Link } from "react-router-dom";
import "../../assets/css/styles.css"

const NavBar = () => {

    const user = "Navneeth Ramesh";

    return (
        <div className="Nav-bar">
            <div><img src={menu}/></div>
            <div>Visitex</div>
            <div className="login-signup-button-container">
                {(!user) ? <Link to='/root/signup'>Sign Up</Link>:<div>{user}</div>}
                {(!user) ? <Link to='/root/login'>Login</Link>:null}
            </div>
        </div>
    )
}

export default NavBar;