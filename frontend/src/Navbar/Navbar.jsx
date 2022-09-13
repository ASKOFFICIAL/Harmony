import React from "react";
import "./Navbar.css";
import logo from "./Harmony_logo.png";
import user from "./User.svg"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar">
        <div className="navbar-logo">
          <img
            src={logo}
            alt="logo"
            style={{ width: "60px", height: "60px" }}
          />
        </div>
        <div className="navbar-links">
          <a href="#">Home &#9; </a>
          <a href="#">Playlist</a>
          {"  "}
          {/* <Link to="/aboutus">About Us</Link>
              {"  "} */}
        </div>
        <div className="user-logo">
          <img
            src={user}
            alt="user"
            style={{ width: "60px", height: "60px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
