import React, { useState } from "react";
import axios from "axios";
import { UserContext } from "./MyContext";
const UserProvider = ({ children }) => {
  const [authenticate, setAuthenticate] = useState(false);
  const [user, setUser] = useState(null);

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
        console.log("kar diya", data);
        setUser(null);
        setAuthenticate(false);
        window.location.href = "/";
      }
    } catch (error) {
      console.log(error);
    }
  };
  const updateProfilePic = async (formData) => {
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
        console.log("kar diya", data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleForgetPassword = async (email) => {
    console.log(email);
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
      if (data.success) {
        console.log("kar diya", data);
      }
    } catch (e) {
      console.log(e);
    }
  };
  const handleResetPassword = async (password, token) => {
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
        console.log("kar diya", data);
        window.location.href = "/signin";
      }
    } catch (e) {
      console.log(e);
    }
  };
  const updateProfile = async (update) => {
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
        console.log("kar diya", data);
      }
    } catch (e) {
      console.log(e);
    }
  };
  const handleProjectSave = async (formData) => {
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
      if (data.success) {
        console.log("kar diya", data);
        return data;
      }
    } catch (e) {
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
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
