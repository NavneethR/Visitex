import { useEffect, useState, useCallback, useRef, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Webcam from "react-webcam";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import VisitorContext from "../context/VisitorContext";

const VisitorRegister = () => {
  const initial_credential = {
    visitorName: "",
    employeeName: "",
    reason: "",
    enterTime: "",
    photo: "",
  };
  const [credentials, setCredentials] = useState(initial_credential);
  const [webcamControl, setWebcamControl] = useState(false);
  const [time, setTime] = useState(new Date());
  const [imgSrc, setImgSrc] = useState(null);
  const webcamRef = useRef(null);
  const { registerUser } = useContext(VisitorContext);

  const root = localStorage.getItem("root");
  const navigate = useNavigate();
  useEffect(() => {
    if (!root) {
      navigate("/root-auth");
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  });

  useEffect(() => {
    setImgSrc(imgSrc);
    setCredentials(() => {
      return { ...credentials, photo: imgSrc };
    });
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
    setCredentials({
      ...credentials,
      [name]: value,
      enterTime: time.toLocaleTimeString(),
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let y = await registerUser(credentials);
    if (y == 1) {
      toast.success("Your response has been recorded!");
      setImgSrc(null);
      setCredentials(initial_credential);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "3px" }}>
      <ToastContainer autoClose={3000} />
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
        {imgSrc == null ? (
          <>
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
              className="btn btn-outline-primary"
              style={{ position: "absolute", bottom: "10px", right: "25%" }}
              onClick={capture}
            >
              Take photo
            </button>
            <button
              className="btn btn-outline-primary"
              style={{ position: "absolute", bottom: "10px", left: "10%" }}
              onClick={() => {
                setWebcamControl(!webcamControl);
              }}
            >
              Toggle Camera
            </button>
          </>
        ) : (
          <>
            <img src={imgSrc} />
            <button
              className="btn btn-outline-primary"
              onClick={() => {
                setImgSrc(null);
              }}
              style={{ position: "absolute", bottom: "10px" }}
            >
              retake
            </button>
          </>
        )}
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
              onChange={handleInputChange}
              value={credentials.visitorName}
            />
          </div>
          <div id="employeeName">
            <div className="col-form-label">Employee Name: </div>
            <input
              type="text"
              name="employeeName"
              className="form-control"
              id="emailInput"
              placeholder="Jane Doe"
              onChange={handleInputChange}
              value={credentials.employeeName}
            />
          </div>
          <div>
            <div className="col-form-label">Reason</div>
            <textarea
              className="form-control"
              id="exampleTextarea"
              name="reason"
              rows="3"
              style={{ resize: "none" }}
              placeholder="Who do you want to visit?"
              onChange={handleInputChange}
              value={credentials.reason}
            />
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
