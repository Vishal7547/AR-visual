import React, { useEffect } from "react";
import Box from "@mui/material/Box";

import Modal from "@mui/material/Modal";
import QRCode from "react-qr-code";
import { UserContext } from "../../context/MyContext";
import { useContext } from "react";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
};

const ProjectShare = ({ handleOpen1, open1, handleClose1, imgPreview }) => {
  useEffect(() => {}, [imgPreview, open1]);
  const { buildId } = useContext(UserContext);
  return (
    <div>
      <Modal
        open={open1}
        onClose={handleClose1}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="container-fluid m-0 p-0 g-0">
            <div className="cross px-2 bg-danger d-flex  justify-content-between align-items-center">
              <p>App</p>
              <p className="closedThis" onClick={handleClose1}>
                X
              </p>
            </div>
            <div className="workBuild">
              <div className="leftWork text-center">
                <p>Preview Url</p>
                <a
                  href={`ar-visual.vercel.app/scan/${buildId}`}
                  target="_blank"
                  className="my-2"
                  rel="noopener noreferrer"
                >
                  {`ar-visual.vercel.app/scan/${buildId}`}
                </a>

                <div id="qrcode my-3">
                  <QRCode
                    size={256}
                    style={{ height: "250px", maxWidth: "100%", width: "100%" }}
                    value={`ar-visual.vercel.app/scan/${buildId}`}
                    viewBox={`0 0 256 256`}
                  />
                </div>
                <p className="mt-2">download QR code</p>
              </div>
              <div className="rightWork text-center">
                <p>Target Image</p>
                <img
                  src={imgPreview}
                  alt="imgPreview"
                  height="250"
                  width="300"
                />
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default ProjectShare;
