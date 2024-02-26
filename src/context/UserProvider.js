import React, { useState } from "react";
import axios from "axios";
import { UserContext } from "./MyContext";
const UserProvider = ({ children }) => {
  const [authenticate, setAuthenticate] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const [user, setUser] = useState(null);
  const [project, setProject] = useState([]);
  const [buildProject, setBuildProject] = useState([]);
  const [isBuild, setIsBuild] = useState(false);
  const [isApproved, setIsApproved] = useState(false);
  const [isUserBuild, setIsUserBuild] = useState(false);
  const [isAllUser, setIsAllUser] = useState(false);

  const [isUpdate, setIsUpdate] = useState(false);
  const [isUpload, setIsUpload] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [isProjectGet, setIsProjectGet] = useState(false);
  const [singleProject, setSingleProject] = useState({});
  const [totalUser, setTotalUser] = useState([]);
  const [totalProject, setTotalProject] = useState([]);

  const [isProfileUpload, setIsProfileUpload] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [buildId, setBuildId] = useState("63275325873593875");
  const [imgPreview, setImgPreview] = useState(null);

  axios.defaults.headers.common["Authorization"] =
    window.localStorage.getItem("token");
  console.log(window.localStorage.getItem("token"));

  const handleLoad = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_KEY}/user/me`,
        {
          withCredentials: true,
        }
      );
      console.log("kar diya", data);
      setUser(data?.user);
      setAuthenticate(data?.success);
      if (data?.user.role === "admin") {
        setIsAdmin(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const loLogOut = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_KEY}/user/logout`,
        {
          withCredentials: true,
        }
      );
      if (data.success) {
        console.log("logout", data);
        setUser(null);
        setIsAdmin(false);
        setAuthenticate(false);
        window.location.href = "/";
      }
    } catch (error) {
      console.log(error);
    }
  };
  const updateProfilePic = async (formData) => {
    setIsProfileUpload(true);
    try {
      const { data } = await axios.put(
        `${process.env.REACT_APP_API_KEY}/user/updateprofilepic`,
        formData,

        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      if (data.success) {
        setIsProfileUpload(false);

        console.log("kar diya", data);
      }
    } catch (error) {
      setIsProfileUpload(false);

      console.log(error);
    }
  };
  const handleForgetPassword = async (email) => {
    console.log(email);
    setIsLogin(true);
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_KEY}/user/forgetpassword`,
        { email },

        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (data?.success) {
        setIsLogin(false);

        console.log("kar diya", data);
      } else {
        setIsLogin(false);
      }
    } catch (e) {
      setIsLogin(false);

      console.log(e);
    }
  };
  const handleResetPassword = async (password, token) => {
    setIsLogin(true);

    try {
      const { data } = await axios.put(
        `${process.env.REACT_APP_API_KEY}/user/resetpassword/${token}`,
        { password },

        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (data.success) {
        setIsLogin(false);

        console.log("kar diya", data);
        window.location.href = "/signin";
      } else {
        setIsLogin(false);
      }
    } catch (e) {
      console.log(e);
      setIsLogin(false);
    }
  };
  const updateProfile = async (update) => {
    setIsProfileUpload(true);

    try {
      const { data } = await axios.put(
        `${process.env.REACT_APP_API_KEY}/user/updateprofile`,
        update,

        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (data.success) {
        setIsProfileUpload(false);

        console.log("kar diya", data);
      }
    } catch (e) {
      setIsProfileUpload(false);

      console.log(e);
    }
  };
  const handleProjectSave = async (formData) => {
    setIsUpload(true);
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_KEY}/user/uploadproject`,
        formData,

        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      if (data?.success) {
        console.log("kar diya", data);
        setIsUpload(false);

        return data;
      }
    } catch (e) {
      console.log(e.response.data);
      const error = e.response.data;
      setIsUpload(false);

      return error;
    }
  };
  const getAllProjectController = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_KEY}/user/allproject`,

        {
          withCredentials: true,
        }
      );
      if (data.success) {
        console.log("kar diya", data);
        setProject(data?.project?.project_report);
        return data;
      }
    } catch (e) {
      console.log(e);
    }
  };
  const deleteProject = async (id) => {
    setIsDelete(true);

    try {
      const { data } = await axios.delete(
        `${process.env.REACT_APP_API_KEY}/user/deletepropject/${id}`,

        {
          withCredentials: true,
        }
      );
      if (data?.success) {
        setIsDelete(false);
        console.log("kar diya", data);
        setIsUpdate(!isUpdate);
        return data;
      } else {
        setIsDelete(false);
      }
    } catch (e) {
      console.log(e);
      setIsDelete(false);

      const error = e.response.data;
      return error;
    }
  };
  const projectBuild = async () => {
    setIsBuild(true);
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_KEY}/user/buildproject`,

        {
          withCredentials: true,
        }
      );
      if (data.success) {
        setIsBuild(false);

        console.log("kar diya", data);
        setBuildProject(data?.project);
        //  setProject(data?.project?.project_report);
        return data;
      }
    } catch (e) {
      setIsBuild(false);

      console.log(e);
    }
  };
  // const handleBuild = () => {
  //   setBuildId(Date.now());
  // };
  const updateProject = async (formData, id) => {
    setIsApproved(true);
    try {
      console.log(formData, id, "server");
      const { data } = await axios.put(
        `${process.env.REACT_APP_API_KEY}/user/updatepropject/${id}`,
        formData,

        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      if (data.success) {
        //  setIsProfileUpload(false);
        setIsApproved(false);

        console.log("kar diya", data);

        return data;
      }
    } catch (e) {
      //  setIsProfileUpload(false);
      setIsApproved(false);

      console.log(e);
    }
  };
  const fetchProjectById = async (projectId) => {
    setIsProjectGet(true);
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_KEY}/user/projectget/${projectId}`,

        {
          withCredentials: true,
        }
      );
      if (data.success) {
        setIsProjectGet(false);

        console.log("kar diya", data);
        setSingleProject(data?.project);
        //  setProject(data?.project?.project_report);
        return data;
      }
    } catch (e) {
      setIsProjectGet(false);

      console.log(e);
    }
  };
  const requestForBuild = async (id, formData) => {
    setIsUserBuild(true);
    try {
      console.log("paragraph");
      const { data } = await axios.put(
        `${process.env.REACT_APP_API_KEY}/user/updatepropjectuser/${id}`,
        formData,

        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (data.success) {
        setIsUserBuild(false);
        setIsUpdate(!isUpdate);

        console.log("kar diya", data);

        return data;
      }
    } catch (e) {
      setIsUserBuild(false);

      console.log(e);
    }
  };
  const fetchUser = async () => {
    setIsAllUser(true);
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_KEY}/user/alluser`,

        {
          withCredentials: true,
        }
      );
      if (data.success) {
        setIsAllUser(false);
        setTotalUser(data?.user);
        console.log("kar diya", data);

        return data;
      }
    } catch (e) {
      setIsAllUser(false);

      console.log(e);
    }
  };
  const fetchProjectByAdmin = async () => {
    setIsAllUser(true);
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_KEY}/user/allprojectadmin`,

        {
          withCredentials: true,
        }
      );
      if (data.success) {
        setIsAllUser(false);
        setTotalProject(data.project);
        console.log("All Project", data);

        return data;
      }
    } catch (e) {
      setIsAllUser(false);

      console.log(e);
    }
  };
  return (
    <UserContext.Provider
      value={{
        handleLoad,
        setAuthenticate,
        authenticate,
        loLogOut,
        user,
        setUser,
        updateProfilePic,
        handleForgetPassword,
        handleResetPassword,
        updateProfile,
        handleProjectSave,
        project,
        setProject,
        getAllProjectController,
        deleteProject,
        isUpdate,
        setIsUpdate,
        isUpload,
        isDelete,
        isProfileUpload,
        setIsLogin,
        isLogin,
        // handleBuild,
        buildId,
        imgPreview,
        setImgPreview,
        setIsAdmin,
        isAdmin,
        projectBuild,
        buildProject,
        isBuild,
        updateProject,
        fetchProjectById,
        isProjectGet,
        singleProject,
        isApproved,
        requestForBuild,
        isUserBuild,
        fetchUser,
        isAllUser,
        totalUser,
        fetchProjectByAdmin,
        totalProject,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
