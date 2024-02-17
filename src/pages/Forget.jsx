import React from "react";
import TextField from "@mui/material/TextField";
import "../style/Forgot.css";
import { useNavigate } from "react-router-dom";

const Forget = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="row py-5 bg-light px-2 logoUp">
        <h4 onClick={() => navigate("/")}>Godspeed</h4>
      </div>
      <div className="outerfor">
        <div className="outerdivfor mx-5 px-4 py-3">
          <span className="headerupperforeg mt-4 mb-5 m-auto">
            Reset Password
          </span>
          <p className="headingpara mt-3">
            Please enter your email address.You will recieve a link to create a
            new password via email.
          </p>
          <form className="row m-0 p-0 g-0">
            <div className="emailogin mb-3">
              <TextField
                label="Email"
                multiline
                maxRows={1}
                variant="filled"
                className="insidemailog  w-100"
              />
            </div>
            <button className="btn m-auto btnlogin my-2">Next</button>
            <button
              className="btn m-auto btnlogin my-2"
              onClick={() => navigate("/signin")}
            >
              Back
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Forget;
