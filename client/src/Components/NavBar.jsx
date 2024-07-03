import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { toast } from "react-toastify";

const Navbar = ({ client = false }) => {
  let { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  let UserName = user;
  return (
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/root">
          Visitex
        </Link>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <div className="me-auto" />
          {client == true ? (
            <div
              className="navbar-brand"
              style={{ color: "white", fontSize: "16px" }}
            >
              {UserName == null ? null : UserName.name}
            </div>
          ) : (
            <div>
              {user == null ? (
                <div className="navbar-nav">
                  <NavLink to="/root/login" className="nav-link">
                    Login
                  </NavLink>
                  <NavLink to="/root/signup" className="nav-link">
                    Signup
                  </NavLink>
                </div>
              ) : (
                <button
                  className="btn btn-danger"
                  style={{
                    backgroundColor: "white",
                    border: "none",
                    color: "black",
                  }}
                  onClick={() => {
                    setUser(null);
                    localStorage.clear();
                    toast.success("User logged out!");
                    navigate("/root/login", { replace: true });
                  }}
                >
                  Logout
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
