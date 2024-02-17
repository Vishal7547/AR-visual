import React from "react";
import Sidebar from "../../components/Sidebar";

const Dashboard = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <Sidebar />
          </div>
          <div className="col-8 mx-1">{/* your code  */}</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
