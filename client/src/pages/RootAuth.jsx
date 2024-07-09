import { useContext, useState, useEffect } from "react";
import OtpInput from "react-otp-input";
import Navbar from "../Components/NavBar";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import rootpass from "../../public/config";

const RootAuth = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (otp == rootpass) {
      localStorage.setItem("root", true);
      navigate("/root/login", { replace: true });
    } else {
      toast.error("Password is not correct!");
    }
  };

  return (
    <div>
      <Navbar root_auth={true} />
      <div
        style={{
          width: "100vw",
          height: "88vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form
          style={{
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h3>Root Password</h3>
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={4}
            inputType="tel"
            containerStyle={{ gap: "5px" }}
            renderInput={(props) => <input {...props} />}
            inputStyle={{ width: "60px", height: "60px" }}
          />
          <br />
          <input
            type="submit"
            className="btn btn-primary"
            style={{ width: "100%" }}
            onClick={handleSubmit}
          />
        </form>
      </div>
    </div>
  );
};

export default RootAuth;
