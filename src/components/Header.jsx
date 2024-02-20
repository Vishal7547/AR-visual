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

  const { project } = useContext(UserContext);
  return (
    // <div>
    <nav className="navbar navbar-expand-lg navbar-light  px-2">
      <NavLink className="navbar-brand">ARTIFY</NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav   w-100 d-flex justify-content-end">
          <li className="nav-item">
            <NavLink className="nav-link" to="/userdashboard" exact>
              <LuHome fontSize={25} />
            </NavLink>
          </li>
          <li className="nav-item">
            <>
              {project.length > 0 ? (
                <span className="nav-link" onClick={handleOpen1}>
                  <MdOutlineAddBox fontSize={30} />
                </span>
              ) : (
                <NavLink className="nav-link" to="/project">
                  <MdOutlineAddBox fontSize={30} />
                </NavLink>
              )}
            </>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/link">
              <MdOutlineHelpOutline fontSize={30} />
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/dashboard">
              <FaRegCircleUser fontSize={25} />
            </NavLink>
          </li>
          <li className="nav-item" onClick={handleOpen}>
            <NavLink className="nav-link" to="#">
              <AiOutlineLogout fontSize={25} />
            </NavLink>
          </li>
        </ul>
      </div>
      <AreYouSure
        handleClose={handleClose}
        style={sureStyle}
        setOpen={setOpen}
        open={open}
        message="logged Out ?"
      />
      <Instruction handleClose={handleClose1} open={open1} />
    </nav>

    // </div>
  );
};

export default Header;
