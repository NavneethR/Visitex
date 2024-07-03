import { useEffect, useState, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import Webcam from "react-webcam";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const VisitorRegister = () => {
  const [credentials, setCredentials] = useState({
    email: "test@example.com",
    password: "test123",
  });
  const [webcamControl, setWebcamControl] = useState(false);
  const [time, setTime] = useState(new Date());
  const [imgSrc, setImgSrc] = useState(null);
  const webcamRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  });

  useEffect(() => {
    const imageLink = imgSrc;
    if (imageLink != null) console.log(imageLink.length);
    setImgSrc(null);
  }, [imgSrc]);

  const capture = useCallback(() => {
    try {
      const imageSrc = webcamRef.current.getScreenshot();
      setImgSrc(imageSrc);
    } catch (error) {
      if (error instanceof TypeError) toast.error("Web cam is not turned on");
      else {
        console.log(error);
      }
      return;
    }
  }, [webcamRef, setImgSrc]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "3px" }}>
      <ToastContainer />
      <div
        className="card border-primary mb-3 mt-5"
        style={{
          width: "25rem",
          maxWidth: "35rem",
          padding: "0px",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {webcamControl ? (
          <Webcam
            audio={false}
            mirrored={true}
            style={{ width: "100%", margin: "10px" }}
            videoConstraints={{
              height: 1,
            }}
            ref={webcamRef}
          />
        ) : (
          <div>The web cam is turned off</div>
        )}
        <button
          style={{ position: "absolute", bottom: "10px", right: "25%" }}
          onClick={capture}
        >
          Take photo
        </button>
        <button
          style={{ position: "absolute", bottom: "10px", left: "10%" }}
          onClick={() => {
            setWebcamControl(!webcamControl);
            setImgSrc(null);
          }}
        >
          Turn {webcamControl ? "OFF" : "ON"} Camera
        </button>
      </div>
      <div
        className="card border-primary mb-3 mt-5"
        style={{ width: "25rem", maxWidth: "35rem" }}
      >
        <h3 className="card-header">
          <center>Register</center>
        </h3>
        <form className="card-body" onSubmit={handleSubmit}>
          <div id="visitorName">
            <div className="col-form-label">Visitor Name: </div>
            <input
              type="text"
              name="visitorName"
              className="form-control"
              id="nameInput"
              placeholder="Jhon Doe"
              value={credentials.name}
              onChange={handleInputChange}
            />
          </div>
          <div id="employeeName">
            <div className="col-form-label">Employee Name: </div>
            <input
              type="text"
              name="employeeName"
              className="form-control"
              id="emailInput"
              placeholder="jhondoe@example.com"
              value={credentials.email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <div className="col-form-label">Reason</div>
            <textarea
              className="form-control"
              id="exampleTextarea"
              rows="3"
              style={{ resize: "none" }}
            ></textarea>
          </div>
          <div>
            <div className=" col-form-label">Current Time: </div>
            <div id="confirmPasswordInput">{time.toLocaleTimeString()}</div>
          </div>
          <div className="mt-3">
            <p>
              Already Registered? <Link to="/root/login">Login</Link>
            </p>
          </div>
          <div className="d-grid mt-3">
            <input
              className="btn btn-lg btn-primary"
              type="submit"
              value="Signup"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default VisitorRegister;
