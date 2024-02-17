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

const ArtWorkName = ({
  setArtWorkName,
  open,
  handleClose,
  handleOpen,
  artWorkName,
  handleOpen3,
}) => {
  const [error, setError] = useState(false);
  const handleSave = () => {
    if (artWorkName) {
      handleClose();
      handleOpen3();
    }
    setError(true);
  };
  return (
    <div>
      {" "}
      <Modal
        open={open}
        onClose={handleClose}
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
                error={error}
                id="filled-basic"
                className="w-100"
                label="Artwork Name"
                variant="filled"
                helperText={error && "Enter Artwork name"}
                onChange={(e) => setArtWorkName(e.target.value)}
              />
            </div>
            <div className="d-flex justify-content-end align-items-center ">
              <button className="btn btn-danger mx-2" onClick={handleClose}>
                Cancel
              </button>
              <button className="btn btn-success " onClick={handleSave}>
                Save
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default ArtWorkName;
