import Webcam from "react-webcam";
import UserInputComponent from "./UserInputComponent";
import { useState } from "react";

const CustomWebcam = () => {

  const videoConstraints = {
    width: 375,
    height: 500,
    facingMode: "user"
  };

  const [webcamControl, setWebcamControl] = useState(false);

  return (
    <div style={{display:"flex",justifyContent:"center",height:"88.46vh"}} className="body" >
      <div className="webcam-container webcam">
        {(webcamControl)?<Webcam videoConstraints={videoConstraints} style={{borderRadius: "20px"}}/>:<div style={{width: "350px",display:"flex",justifyContent:"center",color: "black", alignItems:"center"}}><strong>Turn on the Camera</strong></div>}
      </div>
      <div className="webcam-container user-input">
        <UserInputComponent/>
      </div>
      <input type="submit" onClick={()=>{setWebcamControl(!webcamControl)}}/>
    </div>
  );
};

export default CustomWebcam;