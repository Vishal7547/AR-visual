import React from "react";
import AdminSidebar from "../../components/AdminSidebar";
const Builder = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <AdminSidebar />
          </div>
          <div className="col-9">{/* Your table  */}</div>
        </div>
      </div>
    </div>
  );
};

export default Builder;
