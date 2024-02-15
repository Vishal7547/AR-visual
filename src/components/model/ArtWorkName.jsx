import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
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

const ArtWorkName = ({ open2, handleClose2, handleOpen2 }) => {
  return (
    <div>
      {" "}
      <Modal
        open={open2}
        onClose={handleClose2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="container-fluid p-4">
            <div className="row">
              <p>Artwork info</p>
            </div>
            <div className="row text-center p-2">
              <TextField
                id="filled-basic"
                className="w-100"
                label="Artwork Name"
                variant="filled"
              />
            </div>
            <div className="d-flex justify-content-end align-items-center ">
              <button className="btn btn-danger mx-2" onClick={handleClose2}>
                Cancel
              </button>
              <button className="btn btn-success ">Save</button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default ArtWorkName;
