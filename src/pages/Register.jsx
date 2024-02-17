import React from "react";
import TextField from "@mui/material/TextField";
import "../style/SignIn.css";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="row py-5 bg-light px-2 logoUp">
        <h4 onClick={() => navigate("/")}>Godspeed</h4>
      </div>
      <div className="outerSignin">
        <div className="logUpper">
          <video
            id="videoElement-1"
            src="https://fast.artivive.com/assets/uploads/2022/03/debadc9efc030d2093a265d50ccb0fd5.mp4"
            playsinline="true"
            autoplay="autoplay"
            loop="true"
            muted
            class="outerdivlogin"
          ></video>
        </div>
        <div className="outerdivlog mx-5 px-4">
          <span className="headerupperlogin">Welcome to Godspeed!</span>
          <form className="row m-0 p-0 g-0">
            <div className="emailogin my-2">
              <TextField
                label="Name"
                variant="filled"
                className="insidemailog w-100"
              />
            </div>
            <div className="emailogin my-2">
              <TextField
                label="Email"
                variant="filled"
                className="insidemailog w-100"
              />
            </div>
            <div className="passwordlogin my-2">
              <TextField
                id="filled-multiline-flexible"
                label="Password"
                variant="filled"
                className="insidepasslog w-100"
              />
            </div>

            <button className="btn m-auto btnlogin mt-4 my-2">LogIn</button>
          </form>
          <div className="signuplog w-100">
            <span onClick={() => navigate("/signin")}>
              Already Registered? Login
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
