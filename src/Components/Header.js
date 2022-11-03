import React, { useContext } from "react";

import "./Header.css";
import logo from "../images/Logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";

const Header = () => {
  const { user, logOutUser } = useContext(AuthContext);

  return (
    <div className="header-div">
      <div className="header">
        <Link to={"/"}>
          <img className="header-logo" src={logo} alt="" />
        </Link>

        <div>
          <Link to={"/products"}>Shop</Link>
          <Link to={"/orders"}>Orders</Link>
          <Link to={"/inventory"}>Inventory</Link>
          <Link to={"/manage-inventory"}>Manage Inventory</Link>
          <Link to={'/shipping'}>Shipping</Link>
          <Link to={"/about"}>About</Link>
          {user?.uid ? (
            <Link to={""} onClick={logOutUser}>
              Log Out
            </Link>
          ) : (
            <>
              {" "}
              <Link to={"/login"}>Login</Link>
              <Link to={"/signup"}>Sign Up</Link>
            </>
          )}

      
        </div>
      </div>
    </div>
  );
};

export default Header;
