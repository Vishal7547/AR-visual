import React from "react";
import { useNavigate } from "react-router-dom";
import HomeHeader from "./HomeHeader";
import { useContext } from "react";
import { UserContext } from "../context/MyContext";
const Hero = () => {
  const navigate = useNavigate();
  const { authenticate } = useContext(UserContext);
  return (
    <div className="backgroundSet">
      <div className="homeHeader">
        <HomeHeader />
      </div>
      <video autoPlay muted loop id="bgVideo" className="video">
        <source
          src="https://artivive.com/assets/uploads/2023/10/creatives-desktop.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="bg_set"></div>
      <div className="content">
        <h1>
          Create With <br /> Godspeed
        </h1>
        <p>
          An Easy-To-Use Augmented Reality Tool For Enhancing Creative
          Experiences
        </p>

        <button
          class="custom-btn btn-10 btn"
          onClick={() =>
            authenticate ? navigate("/project") : navigate("/signin")
          }
        >
          ARtify
        </button>
      </div>
    </div>
  );
};

export default Hero;
