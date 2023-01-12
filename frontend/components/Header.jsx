import React from "react";
import "./Header.css";

function Header() {
  return (
    <div>
      <div className="header">
        <div className="headerLogo">
          <img src="../assets/logo.png" alt="logo" />
        </div>
        <div className="headerBtn">
          <button type="button">Home</button>
          <button type="button">Login</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
