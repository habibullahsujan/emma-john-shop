import React from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-div">
      <div className="header">
        <img className="header-logo" src={logo} alt="" />
        <div>
          <Link to={'/'}>Shop</Link>
          <Link to={'/orders'}>Orders</Link>
          <Link to={'/inventory'}>Inventory</Link>
          <Link to={'/manage-inventory'}>Manage Inventory</Link>
          <Link to={'/login'}>Login</Link>
          <Link to={'/signup'}>Sign Up</Link>
          <Link to={'/about'}>About</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
