import React from 'react'
import TextField from "@mui/material/TextField";
import "../style/SignIn.css";
const Register = () => {
  return (
    <div>
          <div className="outerSignin">
        <div className="logUpper">
        <video id="videoElement-1" src="https://fast.artivive.com/assets/uploads/2022/03/debadc9efc030d2093a265d50ccb0fd5.mp4" playsinline="true" autoplay="autoplay" loop="true" muted class="outerdivlogin"></video>
        </div>
     <div className="outerdivlogregister">
       <span className="headerupperlogin">Welcome to Godspeed!</span>    
       
        <form action="">
        <div className="namelogin">
            <TextField
                label="Name"
                multiline
                maxRows={1}
                variant="filled"
                className="insidemailog"
              />
            </div>
            <div className="emailogin">
            <TextField
                label="Email"
                multiline
                maxRows={1}
                variant="filled"
                className="insidemailog"
              />
            </div>
            <div className="passwordlogin">
            <TextField
                id="filled-multiline-flexible"
                label="Password"
                multiline
                maxRows={4}
                variant="filled"
                className="insidepasslog"
              />

            </div>

            <button className="btnlogin">Signup</button>
        
        </form>
     </div>

 
  </div>
    </div>
  )
}

export default Register
