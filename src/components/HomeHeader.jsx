import React from "react";
import { NavLink } from "react-router-dom";
import { LuHome } from "react-icons/lu";
import { MdOutlineHelpOutline, MdOutlineAddBox } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";
import { AiOutlineLogout } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const HomeHeader = () => {
  const navigate = useNavigate();
  return (
    // <div>
    <nav className="navbar navbar-expand-lg navbar-light  px-2" id="mainHeader">
      <NavLink className="navbar-brand secondHeader_logo" to="/">
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
        <ul className="navbar-nav   w-100 d-flex justify-content-end align-items-center">
          <li className="nav-item">
            <NavLink className="nav-link secondHeader" to="/" exact>
              Contact
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link secondHeader" to="/link">
              Pricing
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link secondHeader_btn" to="/signin">
              <button className="btn custom-btn btn-10" id="header_btn">
                Sign In
              </button>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link secondHeader_btn" to="#">
              <button className="btn custom-btn btn-10" id="header_btn">
                {" "}
                Register
              </button>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
    // </div>
  );
};

export default HomeHeader;
