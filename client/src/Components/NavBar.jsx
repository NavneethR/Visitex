import {Link, NavLink} from "react-router-dom"

const Navbar = () => {
    return (
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/root">Visitex</Link>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <div className="me-auto"/>
          <div className="navbar-nav">
            <NavLink to="/root/login" className="nav-link">Login</NavLink>
            <NavLink to="/root/signup" className="nav-link">Signup</NavLink>
          </div>
        </div>
      </div>
    </nav>
)};

export default Navbar;