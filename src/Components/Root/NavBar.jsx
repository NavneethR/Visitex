import React from "react";
import "../../assets/css/styles.css";
import userIcon from "../../assets/icon/user.png"

const NavBar = ({user}) => {
    return (
        <div>
            <nav className="Nav-bar sticky">
                <h1 className="main-title">Visitex</h1>
                <div className="user">
                    <img src={userIcon} style={{width:"auto",height:"100%",borderRadius:"50%"}}/>
                    <div>{user}</div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;