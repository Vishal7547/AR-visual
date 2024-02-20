import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/MyContext";
const Scan = () => {
  const navigate = useNavigate();
  const { buildId } = useContext(UserContext);
  return (
    <div>
      <div className="container-fluid">
        <div className="row text-center py-2 bg-danger scanHeading">
          <p>
            This AR effect was designed with Godspeed.com - AR studio. Create
            your effect now for free.
            <span
              className="btn btn-success mx-2"
              onClick={() => {
                navigate("/");
              }}
            >
              Start Now
            </span>
          </p>
        </div>
        <div className="cameraOpenRequest">
          <div className="requestToOpen">
            <p>please allow camera access for AR effects</p>
            <a
              href={`https://ar-visual.vercel.app/projectbuild/${buildId}`}
              className="btn btn-danger "
            >
              Continue
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scan;
