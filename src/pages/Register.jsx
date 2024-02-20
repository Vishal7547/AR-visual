import React, { useContext, useState } from "react";
import { UserContext } from "../context/MyContext";
import TextField from "@mui/material/TextField";
import "../style/SignIn.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const { setAuthenticate, setUser, setIsLogin, isLogin } =
    useContext(UserContext);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  console.log(process.env.REACT_APP_API_KEY);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      return;
    }
    setIsLogin(true);
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_KEY}/user/register`,
        {
          name,
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (res.data.success) {
        //  login
        setIsLogin(false);

        setUser(res?.data?.user);
        setAuthenticate(res?.data?.success);
        console.log(res.data);
        navigate("/userdashboard");
      } else {
        setIsLogin(false);

        // toast.error("something went wrong");
        // error
        console.log("error");
      }
    } catch (error) {
      setIsLogin(false);

      console.log(error.response);
    }
  };
  return (
    <>
      <div className="row py-5 bg-light px-2 logoUp">
        <h4 onClick={() => navigate("/")}>Godspeed</h4>
      </div>
      <div className="outerSignin">
        <div className="logUpper">
          <video
            id="videoElement-1"
            src="https://fast.artivive.com/assets/uploads/2022/03/debadc9efc030d2093a265d50ccb0fd5.mp4"
            playsinline="true"
            autoplay="autoplay"
            loop="true"
            muted
            class="outerdivlogin"
          ></video>
        </div>
        <div className="outerdivlog mx-5 px-4">
          <span className="headerupperlogin">Welcome to Godspeed!</span>
          <form className="row m-0 p-0 g-0" onSubmit={handleSubmit}>
            <div className="emailogin my-2">
              <TextField
                label="Name"
                variant="filled"
                className="insidemailog w-100"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="emailogin my-2">
              <TextField
                label="Email"
                variant="filled"
                className="insidemailog w-100"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="passwordlogin my-2">
              <TextField
                id="filled-multiline-flexible"
                label="Password"
                variant="filled"
                className="insidepasslog w-100"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              className="btn m-auto btnlogin mt-4 my-2"
              disabled={isLogin}
            >
              {isLogin ? "Loading..." : "Register"}
            </button>
          </form>
          <div className="signuplog w-100">
            <span onClick={() => navigate("/signin")}>
              Already Registered? Login
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
