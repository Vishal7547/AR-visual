import React, { useState, useContext, useRef, useEffect } from "react";
import { TextField } from "@mui/material";
import { IoSearchOutline } from "react-icons/io5";
import { CiSquarePlus } from "react-icons/ci";
import { HiDotsVertical } from "react-icons/hi";
import { MdOutlineSmartDisplay } from "react-icons/md";
import { MdPausePresentation } from "react-icons/md";
import { UserContext } from "../../context/MyContext";
import { useNavigate } from "react-router-dom";
import "../../style/UserDashboard.css";
import { IoBuildOutline } from "react-icons/io5";
import { FiEdit2 } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import Loader from "../../components/Loader";
import useModal from "../../components/hooks/useModel";
import Build from "../../components/model/Build";
import ProjectShare from "../../components/model/ProjectShare";

const UserDashboard = () => {
  const { open, handleOpen, handleClose, setOpen, sureStyle } = useModal();
  const {
    open: open1,
    handleOpen: handleOpen1,
    handleClose: handleClose1,
  } = useModal();

  const navigate = useNavigate();
  const {
    isDelete,
    project,
    getAllProjectController,
    isUpdate,
    deleteProject,
    requestForBuild,
    isUserBuild,
  } = useContext(UserContext);
  const videoRef = useRef(null);
  const [isPlay, setIsPlay] = useState(false);
  const [isShow, setIsShow] = useState(false);
  console.log("length87", project);
  useEffect(() => {
    const fetchProject = async () => {
      await getAllProjectController();
    };
    fetchProject();
  }, [isUpdate]);
  console.log(project);
  const togglePlay = () => {
    const video = videoRef.current;
    if (isPlay) {
      video.pause();
      video.currentTime = 0;
      handleEnded();
    } else {
      video.play();
    }
    setIsPlay(!isPlay);
  };
  const handleShow = () => {
    setIsShow(!isShow);
  };
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsShow(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleEnded = () => {
    setIsPlay(false);
    videoRef.current.currentTime = 0;
  };
  const handleDelete = async (id) => {
    await deleteProject(id);
  };
  const handleBuilder = async (status, id) => {
    if (status === "approved") {
      return handleOpen1();
    }
    if (status === "build") {
      const formData = new FormData();
      formData.append("status", "pending");
      formData.append("builder", true);

      await requestForBuild(id, formData);
    }
  };
  return (
    <div className="row  m-0 p-0 g-0 ">
      {(isDelete || isUserBuild) && <Loader />}
      {/* <div className="row g-0 p-0 m-0">
        <div className="d-flex justify-content-end align-items-center upperSearch m-0 p-0 g-0">
          <TextField
            id="outlined-basic"
            label="Search in GodSpeed"
            variant="outlined"
            className="textOutsearch mx-3"
          />
        </div>
      </div> */}
      {project.length > 0 ? (
        <div className="row mt-2">
          <div className="parentWorking">
            {project.map((p, i) => (
              <div className="childWork" key={p._id}>
                <div className="imgVideoWorking">
                  <img alt="" src={p?.target?.url} />
                  <video
                    ref={videoRef}
                    src={p?.content?.url}
                    controls={false}
                    onEnded={handleEnded}
                    id={isPlay ? "aboveWork" : "innerWork"}
                  ></video>
                </div>
                <div className="playerWorking">
                  <div className="row m-0 p-0 g-0">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="artWorkNameWorking">
                        <span>{p.artWorkName}</span>
                      </div>
                      <div className="iconWorking d-flex justify-content-between align-items-center ">
                        <span onClick={togglePlay}>
                          {isPlay ? (
                            <MdPausePresentation />
                          ) : (
                            <MdOutlineSmartDisplay />
                          )}
                        </span>
                        <div className="menuWorkingParent" ref={menuRef}>
                          {isShow && (
                            <div className="menuWorking">
                              <div
                                className="iconWork1 d-flex"
                                onClick={() => handleBuilder(p?.status, p._id)}
                              >
                                <span>
                                  <IoBuildOutline />
                                </span>
                                <span>
                                  {p?.status.charAt(0).toUpperCase() +
                                    p?.status.slice(1)}
                                </span>
                              </div>
                              <div className="iconWork1 d-flex">
                                <span>
                                  <FiEdit2 />
                                </span>
                                <span>Edit</span>
                              </div>
                              <div
                                className="iconWork1 d-flex"
                                onClick={() => handleDelete(p._id)}
                              >
                                <span>
                                  <AiOutlineDelete />
                                </span>
                                <span>Delete</span>
                              </div>
                            </div>
                          )}
                          <span onClick={handleShow}>
                            <HiDotsVertical />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" m-0 g-0 p-0 workingDate">
                    <span>Feb 18, 2024 - 11:01 PM</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div
          className="lowersearch mx-5 my-2 p-0 m-0"
          onClick={() => navigate("/project")}
        >
          <div className="boxlower">
            <div className="icon">
              <CiSquarePlus
                fontSize={30}
                onClick={() => navigate("/project")}
              />
            </div>
            <div className="contenticon my-2">
              <span>Create New Artwork</span>
            </div>
          </div>
        </div>
      )}
      <Build open={open} handleClose={handleClose} handleOpen={handleOpen} />
      <ProjectShare handleClose1={handleClose1} open1={open1} />
    </div>
  );
};

export default UserDashboard;
