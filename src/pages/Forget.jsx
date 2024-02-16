import React from 'react'
import TextField from "@mui/material/TextField";
import "../style/Forgot.css";
const Forget = () => {
  return (
    <div>
          <div className="outerfor">
     <div className="outerdivfor p-4">
       <span className="headerupperforeg ">Reset Password</span>  
       <p className='headingpara'>Please enter your email address.You will receive a link to create a new password via email</p>  
        <form >
            <div className="emailogin">
            <TextField
                label="Email"
                multiline
                maxRows={1}
                variant="filled"
                className="insidemailog"
              />
            </div>


            <button className="btnlogin">Next</button>
          
     
        </form>
     </div>

 
  </div>
    </div>
  )
}

export default Forget
