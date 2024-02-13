import React from "react";
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="backgroundSet">
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
          Create With <br /> Artivive
        </h1>
        <p>
          An Easy-To-Use Augmented Reality Tool For Enhancing Creative
          Experiences
        </p>
        <button
          className="btn bride px-4 py-2"
          onClick={() => navigate("/profile")}
        >
          Go To Bride
        </button>
      </div>
    </div>
  );
};

export default Hero;
