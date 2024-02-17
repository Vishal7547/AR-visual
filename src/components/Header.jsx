import React from "react";
import { NavLink } from "react-router-dom";
import { LuHome } from "react-icons/lu";
import { MdOutlineHelpOutline, MdOutlineAddBox } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";
import { AiOutlineLogout } from "react-icons/ai";
const Header = () => {
  return (
    // <div>
    <nav className="navbar navbar-expand-lg navbar-light  px-2">
      <NavLink className="navbar-brand" to="/">
        Godspeed
      </NavLink>
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
            <NavLink className="nav-link" to="/userDashborad" exact>
              <LuHome fontSize={25} />
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/project">
              <MdOutlineAddBox fontSize={30} />
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/link">
              <MdOutlineHelpOutline fontSize={30} />
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="#">
              <FaRegCircleUser fontSize={25} />
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="#">
              <AiOutlineLogout fontSize={25} />
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
    // </div>
  );
};

export default Header;
