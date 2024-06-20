import Webcam from "react-webcam";
import UserInputComponent from "./UserInputComponent";
import { useState } from "react";
import image from "../../assets/images/images.jpeg"
import videoTurnedOnIcon from "../../assets/icon/video-turned-on.png"
import videoTurnedOffIcon from "../../assets/icon/video-turned-off.png"
import cameraIcon from "../../assets/icon/camera.png"

const CustomWebcam = () => {

  const videoConstraints = {
    width: 380,
    height: 470,
    facingMode: "user"
  };

  const [webcamControl, setWebcamControl] = useState(false);

  return (
    <div style={{display:"flex",justifyContent:"center",height:"88.46vh"}} className="body" >
      <div className="webcam-container">
        {(webcamControl)?<Webcam mirrored={true} videoConstraints={videoConstraints} style={{borderRadius: "20px"}}/>:<div className="camera-off-text"><img style={{width: "100%",height: "100%", borderRadius:"20px"}} src={image}/></div>}
        <button className="capture-toggle-button" onClick={()=>{setWebcamControl(!webcamControl)}} value={"Click me"}>
          <img style={{height:"30px",borderRadius:"20px"}} src={(webcamControl)?videoTurnedOffIcon:videoTurnedOnIcon}/>
        </button>
        <button className="capture-button" value={"Click me"}>
          <img style={{height:"30px",borderRadius:"20px"}} src={cameraIcon}/>
        </button>
      </div>
      <div className="container user-input" style={{display:"flex",flexDirection:"column"}}>
        <UserInputComponent/>
        
      </div>
    </div>
  );
};

export default CustomWebcam;