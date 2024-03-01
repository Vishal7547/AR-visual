import React, { useEffect, useRef, useState } from "react";
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

const ProjectShare = ({ handleOpen1, open1, handleClose1 }) => {
  const qrCodeRef = useRef(null);
  const [build, setBuild] = useState({});
  const { buildId, project } = useContext(UserContext);
  console.log(project, "projectQrCode");
  useEffect(() => {
    setBuild(project[0]);
  }, [project]);
  const handleDownloadQRCode = () => {
    const canvas = qrCodeRef.current?.getElementsByTagName("canvas")[0];
    if (canvas) {
      const dataUrl = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = "qr-code.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  // const dataURLtoBlob = (dataURL) => {
  //   const parts = dataURL.split(";base64,");
  //   const contentType = parts[0].split(":")[1];
  //   const raw = window.atob(parts[1]);
  //   const rawLength = raw.length;
  //   const uInt8Array = new Uint8Array(rawLength);

  //   for (let i = 0; i < rawLength; ++i) {
  //     uInt8Array[i] = raw.charCodeAt(i);
  //   }

  //   return new Blob([uInt8Array], { type: contentType });
  // };

  return (
    <div>
      <Modal
        open={open1}
        onClose={handleClose1}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="cssCustomized">
          <div className="container-fluid m-0 p-0 g-0">
            <div className="cross px-2 bg-danger d-flex  justify-content-between align-items-center">
              <p>{build?.artWorkName}</p>
              <p className="closedThis" onClick={handleClose1}>
                X
              </p>
            </div>
            <div className="workBuild">
              <div className="leftWork text-center">
                <p>Preview Url</p>
                <a
                  key={buildId}
                  href={`https://ar-visual.vercel.app/scan/${build?._id}`}
                  target="_blank"
                  className="my-2"
                  rel="noopener noreferrer"
                >
                  {`https://ar-visual.vercel.app/scan/${build?._id}`}
                </a>

                <div id="qrcode" className="my-3" ref={qrCodeRef}>
                  <QRCode
                    size={256}
                    style={{ height: "250px", maxWidth: "100%", width: "100%" }}
                    value={`https://ar-visual.vercel.app/scan/${build?._id}`}
                    viewBox={`0 0 256 256`}
                  />
                </div>
                <p className="mt-2" onClick={handleDownloadQRCode}>
                  download QR code
                </p>
              </div>
              <div className="rightWork text-center">
                <p>Target Image</p>
                <img
                  src={build?.target?.url}
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
