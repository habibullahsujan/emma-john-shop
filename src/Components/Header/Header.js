import React from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";

const Header = () => {
  return (
    <div className="header-div">
      <div className="header">
        <img className="header-logo" src={logo} alt="" />
        <div>
          <a href="">Order</a>
          <a href="">Order Review</a>
          <a href="">Manage Inventory</a>
          <a href="">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
