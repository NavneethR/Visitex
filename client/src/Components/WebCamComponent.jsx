import { useState, useRef } from "react";
import Webcam from "react-webcam";

const WebCamComponent = () => {
  const webcamRef = useRef(null);
  const [webcamControl, setWebcamControl] = useState(false);

  return (
    <div>
      {webcamControl ? (
        <Webcam
          mirrored={true}
          style={{ width: "100%" }}
          videoConstraints={{
            height: "500%",
          }}
          ref={webcamRef}
        />
      ) : (
        <div>The web cam is turned off</div>
      )}
      <button
        style={{ position: "absolute", bottom: "10px", right: "25%" }}
        onClick={() => {}}
      >
        Take photo
      </button>
      <button
        style={{ position: "absolute", bottom: "10px", left: "10%" }}
        onClick={() => {
          setWebcamControl(!webcamControl);
        }}
      >
        Turn {webcamControl ? "OFF" : "ON"} Camera
      </button>
    </div>
  );
};

export default WebCamComponent;
