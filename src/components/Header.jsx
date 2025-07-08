import React from "react";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="relative border px-32 z-50">
      <img className="w-48" src={logo} alt="logo" />
    </div>
  );
};

export default Header;
