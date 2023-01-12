import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className="header">
        <div className="headerLogo">
          <img src="../assets/logo.png" alt="logo" />
        </div>
        <div className="headerBtn">
          <Link to="/">
            <button type="button">Home</button>
          </Link>
          <Link to="Login">
            <button type="button">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
