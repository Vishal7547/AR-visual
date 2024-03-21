import React from "react";
import { NavLink } from "react-router-dom";
import { LuHome } from "react-icons/lu";
import { MdOutlineHelpOutline, MdOutlineAddBox } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";
import { AiOutlineLogout } from "react-icons/ai";
import useModal from "./hooks/useModel";
import AreYouSure from "./model/AreYouSure";
import { useContext } from "react";
import { UserContext } from "../context/MyContext";
import Instruction from "./model/Instruction";
const Header = () => {
  const { open, handleOpen, handleClose, setOpen, sureStyle } = useModal();
  const {
    open: open1,
    handleClose: handleClose1,
    handleOpen: handleOpen1,
  } = useModal();

  const { project, authenticate } = useContext(UserContext);
  return (
    <>
      <div id="mainHeader3" className=" px-2">
        <div>
          <NavLink className="artify">ARTIFY</NavLink>
        </div>

        <div>
          <ul
            id="atMobileViewHeader"
            className="w-100  d-flex justify-content-end align-items-center"
          >
            <li className="nav-item ">
              <NavLink
                className="nav-link secondHeaderIcon"
                to="/userdashboard"
                exact
              >
                <LuHome fontSize={25} />
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link secondHeaderIcon" to="/project">
                <MdOutlineAddBox fontSize={30} />
              </NavLink>
              {/* <>
                {project.length > 0 ? (
                  <span
                    className="nav-link secondHeaderIcon"
                    onClick={handleOpen1}
                  >
                    <MdOutlineAddBox fontSize={30} />
                  </span>
                ) : (
                  <NavLink className="nav-link secondHeaderIcon" to="/project">
                    <MdOutlineAddBox fontSize={30} />
                  </NavLink>
                )}
              </> */}
            </li>
            <li className="nav-item">
              <NavLink className="nav-link secondHeaderIcon" to="/link">
                <MdOutlineHelpOutline fontSize={30} />
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link secondHeaderIcon" to="/dashboard">
                <FaRegCircleUser fontSize={25} />
              </NavLink>
            </li>
            <li className="nav-item" onClick={handleOpen}>
              <NavLink className="nav-link secondHeaderIcon" to="#">
                <AiOutlineLogout fontSize={25} />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <AreYouSure
        handleClose={handleClose}
        style={sureStyle}
        setOpen={setOpen}
        open={open}
        message="logged Out ?"
      />
      {/* <Instruction handleClose={handleClose1} open={open1} /> */}
    </>
  );
};

export default Header;
