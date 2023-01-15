import React from "react";
import "../assets/css/navbar.css";
import logo from "../assets/images/logo.png";

function NavBar() {
  return (
    <div className="navbar">
      <div className="btn">
      <input
        id="dropdown"
        className="input-box"
        type="checkbox"
        
      />

      <label for="dropdown" className="dropdown">
        <span className="hamburger">
          <span className="icon-bar top-bar"></span>
          <span className="icon-bar middle-bar"></span>
          <span className="icon-bar bottom-bar"></span>
        </span>
      </label>
      <div id="logo">
        <img src={logo} alt="logo"></img>
      </div>
      </div>
      <div className="elements" >
        <div>Kidz</div>
        <div>Vorphy Junior</div>
        <div>Champs</div>
        <div>About Us</div>
        <div>Contact Us</div>
      </div>
    </div>
  );
}

export default NavBar;
