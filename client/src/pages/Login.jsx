import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import RootAuthContext from "../context/RootAuthContext";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const root = localStorage.getItem("root");
  const navigate = useNavigate();

  useEffect(() => {
    console.log(root);
    if (!root) {
      navigate("/root-auth");
    }
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    loginUser(credentials);
  };

  return (
    <>
      <div
        className="card border-primary mb-3 m-auto mt-5"
        style={{ maxWidth: "30rem" }}
      >
        <h3 className="card-header">
          <center>Login</center>
        </h3>
        <form className="card-body" onSubmit={handleSubmit}>
          <div id="email">
            <div className="col-sm-2 col-form-label">Email: </div>
            <input
              type="email"
              name="email"
              className="form-control"
              id="emailInput"
              placeholder="jhondoe@example.com"
              value={credentials.email || ""}
              onChange={handleInputChange}
            />
          </div>
          <div id="password">
            <div className="col-sm-2 col-form-label">Password: </div>
            <input
              type="password"
              name="password"
              className="form-control"
              id="passwordInput"
              placeholder="Enter password"
              value={credentials.password || ""}
              onChange={handleInputChange}
            />
          </div>
          <div className="mt-3">
            <p>
              Don't have an account?<Link to="/root/signup">Create One</Link>
            </p>
          </div>
          <div className="d-grid mt-3">
            <input
              className="btn btn-lg btn-primary"
              type="submit"
              value="Login"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
