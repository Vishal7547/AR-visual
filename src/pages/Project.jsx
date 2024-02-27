import React, { useRef, useState, useEffect, useContext } from "react";
import { MdOutlineSmartDisplay } from "react-icons/md";
import { MdPausePresentation } from "react-icons/md";

import { CiSquareInfo, CiImageOn } from "react-icons/ci";
import { GoVideo } from "react-icons/go";
import Build from "../components/model/Build";
import ArtWorkInfo from "../components/model/ArtWorkInfo";
import ArtWorkName from "../components/model/ArtWorkName";
import useModal from "../components/hooks/useModel";
import { UserContext } from "../context/MyContext";
import ArtWorkNameSave from "../components/model/ArtWorkNameSave";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

const Project = () => {
  const {
    handleProjectSave,
    setProject,
    project,
    isUpload,
    setImgPreview,
    imgPreview,
  } = useContext(UserContext);

  const navigate = useNavigate();
  const {
    open: modal1Open,
    handleOpen: handleOpen1,
    handleClose: handleClose1,
  } = useModal();
  const {
    open: modal2Open,
    handleOpen: handleOpen2,
    handleClose: handleClose2,
  } = useModal();
  const {
    open: modal3Open,
    handleOpen: handleOpen3,
    handleClose: handleClose3,
  } = useModal();
  const {
    open: modal4Open,
    handleOpen: handleOpen4,
    handleClose: handleClose4,
  } = useModal();
  const [videoPreview, setVideoPreview] = useState(null);
  const [artWorkName, setArtWorkName] = useState(null);
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);
  const [imhHeight, setImgHeight] = useState("");
  const [imgWidth, setImgWidth] = useState("");

  const [isSave, setIsSave] = useState(false);

  const [videoShow, setVideoShow] = useState(false);
  const [imageShow, setImageShow] = useState(false);
  const [bothUpload, setBothUplaod] = useState(false);
  const [resizeTarget, setResizeTarget] = useState(false);

  const [videoKey, setVideoKey] = useState(0);

  const fileInputRef = useRef(null);
  const videoInputRef = useRef(null);

  const handlePublish = () => {
    if (artWorkName) {
      handleOpen3();
    } else {
      handleOpen2();
    }
  };
  const handleSave = async () => {
    if (artWorkName) {
      const formData = new FormData();
      formData.append("artWorkName", artWorkName);
      formData.append("file2", image);
      formData.append("file1", video);
      formData.append("width", imgWidth);
      formData.append("height", imhHeight);
      formData.append("builder", false);
      formData.append("status", "build");

      const data = await handleProjectSave(formData);
      if (data.success) {
        return navigate("/userdashboard");
      } else {
        console.log(data);
      }
      console.log("data", data);
    } else {
      handleOpen4();
    }
  };
  useEffect(() => {
    if (imgPreview && videoKey) {
      setBothUplaod(true);
    }
    const handleResize = () => {
      console.log(window.innerWidth < 1300, window.innerWidth);
      return setResizeTarget(window.innerWidth < 1300);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [imgPreview, videoKey]);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleVideoClick = () => {
    videoInputRef.current.click();
  };
  const handleImageDrop = (event) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    if (droppedFile) {
      if (droppedFile.type.startsWith("image/")) {
        handleFileChange(droppedFile);
      } else {
        console.log("Please drop a image file.");
      }
    }
  };
  const handleFileChange = async (selectedFile) => {
    if (selectedFile) {
      const maxFileSize = 1048576;
      if (selectedFile.size <= maxFileSize) {
        setImage(selectedFile);
        console.log(URL.createObjectURL(selectedFile));
        setImgPreview(URL.createObjectURL(selectedFile));
        setImageShow(true);
        const img = new Image();
        img.src = URL.createObjectURL(selectedFile);
        img.onload = () => {
          setImgWidth(img.naturalWidth);
          setImgHeight(img.naturalHeight);
          console.log("Image width:", img.naturalWidth);
          console.log("Image height:", img.naturalHeight);
        };
      } else {
        console.log(
          "Selected file is too large. Please select a file less than or equal to 1MB."
        );
      }
    }
  };

  const handleVideoDrop = (event) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    if (droppedFile) {
      if (droppedFile.type.startsWith("video/")) {
        handleVideoChange(droppedFile);
      } else {
        console.log("Please drop a video file.");
      }
    }
  };

  const handleVideoChange = (selectedFile) => {
    if (selectedFile) {
      const maxFileSize = 10485760;
      if (selectedFile.size <= maxFileSize) {
        setVideo(selectedFile);
        const videoURL = URL.createObjectURL(selectedFile);
        console.log(videoURL);
        setVideoPreview(videoURL);
        setVideoShow(true);
        setVideoKey((prevKey) => prevKey + 1);
      } else {
        console.log(
          "Selected file is too large. Please select a file less than or equal to 10MB."
        );
      }
    }
  };

  return (
    <>
      <div className="profile">
        {isUpload && <Loader />}
        <div className="container-fluid m-0 g-0 p-0">
          <div className="row ">
            <div className="parentWork ">
              <div className="work1">
                <div className="sample1">
                  <span className="iconsSet">
                    {true ? (
                      <MdPausePresentation fontSize={30} />
                    ) : (
                      <MdOutlineSmartDisplay fontSize={30} />
                    )}
                  </span>
                </div>
                <div className="sample1" onClick={handleOpen1}>
                  <span className="iconsSet ">
                    <CiSquareInfo fontFamily={30} />
                  </span>
                  <span className="workInfo">Artwork Info</span>
                </div>
                <div className="sample1">
                  <div className=" row ">
                    <input
                      type="text"
                      className="form-control "
                      placeholder="Artwork Name"
                      value={artWorkName}
                      onChange={(e) => setArtWorkName(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="work2">
                <button
                  className="btn btn-success"
                  disabled={!bothUpload}
                  onClick={handleSave}
                >
                  Save
                </button>
                <button
                  className="btn btn-danger"
                  disabled={!bothUpload}
                  onClick={handlePublish}
                >
                  Publish
                </button>
              </div>
            </div>
          </div>

          <div className="row  ">
            <div
              className="parentUpload"
              style={{ height: bothUpload && "100%" }}
            >
              <div
                className="upload1"
                style={{
                  flexDirection: resizeTarget ? "column" : bothUpload && "row",
                }}
                onClick={handleClick}
                onDragOver={(event) => event.preventDefault()}
                onDrop={handleImageDrop}
              >
                <div className="img1">
                  {imageShow ? (
                    <img
                      src={imgPreview}
                      alt="preview"
                      height="250"
                      width="170"
                    />
                  ) : (
                    <CiImageOn fontSize={90} />
                  )}
                </div>
                <div className="img1 mx-1">
                  <h6>
                    Add <b>image</b> / <b>artwork</b> <br /> to be recognized{" "}
                  </h6>
                </div>
                <div className="img1 mx-2">
                  <button className="btn btn-outline-secondary">
                    {imageShow ? "Change file" : " Select File"}
                  </button>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  multiple={false}
                  ref={fileInputRef}
                  onChange={(e) => handleFileChange(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
              <div
                className="upload2 "
                style={{
                  flexDirection: resizeTarget ? "column" : bothUpload && "row",
                }}
                onClick={handleVideoClick}
                onDragOver={(event) => event.preventDefault()}
                onDrop={handleVideoDrop}
              >
                <div className="img1">
                  {videoShow ? (
                    <video
                      key={videoKey}
                      width="170"
                      height="250"
                      autoPlay
                      muted
                      loop
                    >
                      <source src={videoPreview} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <GoVideo fontSize={90} />
                  )}
                </div>
                <div className="img1 mx-2">
                  <h6>
                    Add <b>Video</b>
                  </h6>
                </div>
                <div className="img1">
                  <button className="btn btn-outline-secondary">
                    {videoShow ? "Change file" : " Select File"}
                  </button>
                </div>
                <input
                  type="file"
                  accept="video/*"
                  multiple={false}
                  ref={videoInputRef}
                  onChange={(e) => handleVideoChange(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
            </div>
            {bothUpload && (
              <div>
                <div className="buildProject">
                  <div className="projectSetUp">
                    <img src={imgPreview} alt="imgPreview" />
                    <video key={videoKey} autoPlay muted loop>
                      <source
                        src={videoPreview}
                        type="video/mp4"
                        className="w-set"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Build
        open={modal3Open}
        handleClose={handleClose3}
        handleOpen={handleOpen3}
        imgWidth={imgWidth}
        video={video}
        image={image}
        imhHeight={imhHeight}
        artWorkName={artWorkName}
      />
      <ArtWorkInfo
        open={modal1Open}
        handleClose={handleClose1}
        handleOpen={handleOpen1}
      />
      <ArtWorkName
        setArtWorkName={setArtWorkName}
        artWorkName={artWorkName}
        open={modal2Open}
        handleOpen={handleOpen2}
        handleClose={handleClose2}
        handleOpen3={handleOpen3}
      />
      <ArtWorkNameSave
        setArtWorkName={setArtWorkName}
        artWorkName={artWorkName}
        open={modal4Open}
        handleOpen={handleOpen4}
        handleClose={handleClose4}
        video={video}
        image={image}
        imgWidth={imgWidth}
        imhHeight={imhHeight}
      />
    </>
  );
};

export default Project;
