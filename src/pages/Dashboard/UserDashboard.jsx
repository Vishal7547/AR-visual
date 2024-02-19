import React, { useState } from "react";
import { TextField } from "@mui/material";
import { IoSearchOutline } from "react-icons/io5";
import { CiSquarePlus } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import "../../style/UserDashboard.css";
const UserDashboard = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="row outerdashboardsearch">
        <div className="uppersearch">
          <div className="innersearch">
            <div className="textfield">
              <TextField
                id="outlined-basic"
                label="Search in GodSpeed"
                variant="outlined"
                className="textOutsearch "
              />
            </div>
          </div>
        </div>

        {/* <h1>hello</h1>  */}
        <div
          className="lowersearch mx-5 p-0 m-0"
          onClick={() => navigate("/project")}
        >
          <div className="boxlower">
            <div className="icon">
              <CiSquarePlus
                fontSize={30}
                onClick={() => navigate("/project")}
              />
            </div>
            <div className="contenticon">
              <span>Create New Artwork</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
