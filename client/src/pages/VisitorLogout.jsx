import { useContext, useState, useEffect } from "react";
import VisitorContext from "../context/VisitorContext";
import RootAuthContext from "../context/RootAuthContext";
import { useNavigate } from "react-router-dom";

const VisitorLogout = () => {
  const { logout } = useContext(VisitorContext);
  const [credentials, setCredentials] = useState({
    visitorName: "",
    employeeName: "",
  });

  const { root } = useContext(RootAuthContext);
  const navigate = useNavigate();
  useEffect(() => {
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
    logout(credentials);
  };

  return (
    <>
      <div
        className="card border-primary mb-3 m-auto mt-5"
        style={{ maxWidth: "30rem" }}
      >
        <h3 className="card-header">
          <center>Logout</center>
        </h3>
        <form className="card-body" onSubmit={handleSubmit}>
          <div id="email">
            <div className="col-form-label">Visitor Name: </div>
            <input
              type="text"
              name="visitorName"
              className="form-control"
              placeholder="Jhon Doe"
              value={credentials.visitorName || ""}
              onChange={handleInputChange}
            />
          </div>
          <div id="password">
            <div className="col-form-label">Employee Name: </div>
            <input
              type="text"
              name="employeeName"
              className="form-control"
              placeholder="Jane Doe"
              value={credentials.employeeName || ""}
              onChange={handleInputChange}
            />
          </div>
          <div className="d-grid mt-3">
            <input
              className="btn btn-lg btn-primary"
              type="submit"
              value="logout"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default VisitorLogout;
