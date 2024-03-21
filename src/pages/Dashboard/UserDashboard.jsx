import React, { useState, useContext, useRef, useEffect } from "react";
import { TextField } from "@mui/material";
import { IoSearchOutline } from "react-icons/io5";
import { CiSquarePlus } from "react-icons/ci";
import { HiDotsVertical } from "react-icons/hi";
import {
  MdPausePresentation,
  MdOutlineDeleteOutline,
  MdOutlineEdit,
  MdOutlineSmartDisplay,
} from "react-icons/md";
import { UserContext } from "../../context/MyContext";
import { useNavigate } from "react-router-dom";
import "../../style/UserDashboard.css";
import { IoBuildOutline } from "react-icons/io5";
import { FiEdit2 } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { GrView } from "react-icons/gr";
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
    isUserBuild,
    handleEdit,
    setProjectEdit,
    handleProjectSaveEdit,
    handleCreatePayment,
    setIsUpdate,
    handleSubscription,
  } = useContext(UserContext);
  const videoRef = useRef(null);
  const [projectId, setProjectId] = useState("");

  useEffect(() => {
    const fetchProject = async () => {
      await getAllProjectController();
    };
    fetchProject();
  }, [isUpdate]);

  const togglePlay = async (play, id) => {
    const video = videoRef.current;
    console.log(play);
    if (play) {
      video.pause();
      video.currentTime = 0;
      handleEnded(id);
    } else {
      video.play();
    }
    await handleProjectSaveEdit({ isPlay: true }, id);
    // setIsPlay(!isPlay);
  };

  const handleEnded = async (id) => {
    // setIsPlay(false);
    await handleProjectSaveEdit({ isPlay: false }, id);

    videoRef.current.currentTime = 0;
  };
  const handleDelete = async (id) => {
    await deleteProject(id);
    setProjectEdit(null);
  };

  const handleUpdate = async (p) => {
    await handleEdit(p);
    navigate("/project");
  };
  const payment = async (p, status) => {
    console.log(p, status);
    // await handleCreatePayment(p);
    // await handleSubscription(p);
    if (status === "create") {
      await handleCreatePayment(p);
    } else if (status === "expired") {
      await handleSubscription(p);
    }
  };
  return (
    <div className="row  m-0 p-0 g-0 ">
      {(isDelete || isUserBuild) && <Loader />}

      <div className="projectDashboardMain">
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
                    id={p?.isPlay ? "aboveWork" : "innerWork"}
                  ></video>
                </div>
                <div className="playerWorking">
                  <div className="row m-0 p-0 g-0">
                    {!p?.subscriptionId?.planId && (
                      <button
                        className="btn btn-success upgrade_btn"
                        onClick={() => payment(p, p?.subscriptionId?.status)}
                      >
                        Upgrade
                      </button>
                    )}
                  </div>
                  <div className="row m-0 p-0 g-0">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="artWorkNameWorking">
                        <span>{p.artWorkName}</span>
                      </div>
                      <div className="iconWorking d-flex justify-content-between align-items-center ">
                        <span onClick={() => togglePlay(p?.isPlay, p?._id)}>
                          {p?.isPlay ? (
                            <MdPausePresentation color="rgb(150, 40, 58)" />
                          ) : (
                            <MdOutlineSmartDisplay color="rgb(150, 40, 58)" />
                          )}
                        </span>
                        <span onClick={() => handleDelete(p._id)}>
                          <MdOutlineDeleteOutline color="rgb(150, 40, 58)" />
                        </span>
                        {p?.mindArUpload && (
                          <span
                            onClick={() => {
                              setProjectId(p._id);
                              handleOpen1();
                            }}
                          >
                            <GrView fontSize={25} color="rgb(150, 40, 58)" />
                          </span>
                        )}

                        <span>
                          <MdOutlineEdit
                            onClick={() => handleUpdate(p)}
                            color="rgb(150, 40, 58)"
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className=" m-0 g-0 p-0 workingDate">
                    <span>
                      {new Date(p.createdAt).toLocaleDateString()} -
                      {new Date(p.createdAt).toLocaleTimeString()}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="row mt-2">
          <div
            className="lowersearch mx-5 my-2 p-0 m-0"
            onClick={() => {
              setProjectEdit(null);
              navigate("/project");
            }}
          >
            <div className="boxlower">
              <div className="icon">
                <CiSquarePlus fontSize={30} />
              </div>
              <div className="contenticon my-2">
                <span>Create New Artwork</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Build open={open} handleClose={handleClose} handleOpen={handleOpen} />
      <ProjectShare
        handleClose1={handleClose1}
        open1={open1}
        projectId={projectId}
      />
    </div>
  );
};

export default UserDashboard;
