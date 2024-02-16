import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import "../style/SignIn.css";
const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 700,
    bgcolor: "background.paper",
    border: "none",
    boxShadow: 24,
    outline: "none",
    transition: "transform 0.3s ease-in-out",
  };

const SignIn = () => {
  const navigate = useNavigate();
  return (
    <div className="outerSignin">
        <div className="logUpper">
        <video id="videoElement-1" src="https://fast.artivive.com/assets/uploads/2022/03/debadc9efc030d2093a265d50ccb0fd5.mp4" playsinline="true" autoplay="autoplay" loop="true" muted class="outerdivlogin"></video>
        </div>
     <div className="outerdivlog mx-5 px-4">
       <span className="headerupperlogin">Welcome to Godspeed!</span>      
        <form className="row m-0 p-0 g-0">
            <div className="emailogin">
            <TextField
                label="Email"
                multiline
                maxRows={1}
                variant="filled"
                className="insidemailog w-100"
              />
            </div>
            <div className="passwordlogin my-2">
            <TextField
                id="filled-multiline-flexible"
                label="Password"
                multiline
                maxRows={4}
                variant="filled"
                className="insidepasslog w-100"
              />

            </div>
            <span className="forgotlogin" onClick={()=>navigate('/forgot-password')}>Forgot Password?</span>
            <button className="btn m-auto btnlogin my-2">LogIn</button>
            <div className="signuplog " >
            <span onClick={()=>navigate('/register')}> Register here</span>
            </div>
     
        </form>
     </div>

 
  </div>
  )
}

export default SignIn
