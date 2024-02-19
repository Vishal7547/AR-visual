import React from "react";
import Sidebar from "../../components/Sidebar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
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
              <Box sx={{ bgcolor: "#fff", height: "100vh" }}>
                <h1>hello</h1>
              </Box>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
