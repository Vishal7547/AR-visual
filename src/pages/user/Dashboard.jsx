import React from "react";
import Sidebar from "../../components/Sidebar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import { CiCircleQuestion } from "react-icons/ci";
import { useContext } from "react";
import { UserContext } from "../../context/MyContext";

const Dashboard = () => {
  return (
    <div>
      <div className=" sidebarcontainer container-fluid">
        <div className="row">
          <div className="sidebaroption col-3 ">
            <Sidebar />
          </div>
          <div className="sidebarcontent col-8 mx-1 my-4">
            {/* your code  */}
            <Container maxWidth="l">
              <Box 
              sx={{ bgcolor: "#fff", height: "100vh" }}
              className="sidebarcontentprofiles "
              >

               
                <div className="upperprofiledashboard my-4">
                  <Avatar src="#" className="upperprofileavtar" />
                  <div className="namedashboard">
                  <span>Mansi</span>
                  </div>
             
                <div className="emaildashboard">
              <span>mansi@gmail.com</span>
                </div>
                </div>

                <div className="cardashboard mx-4 my-4 px-5">
                  <div className="activecreator my-3 mx-2">
                    <span>Artivive Creator Account</span>
                  </div>
                  <div className="activesection my-5 mx-2">
                  <div className="activecreatorlive">
                    <span className="basicdashboard">Basic </span><CiCircleQuestion fontSize={20} className="mb-1"/>
                    <div className="div50con">
                     <span>50 Views/Month Included </span>
                     </div>

                  </div>
                  <div className=" activebtn mt-4">
                    <button> Manage Subscription</button>
                  </div>
                  </div>

                </div>
           
              </Box>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
