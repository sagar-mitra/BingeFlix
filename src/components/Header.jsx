import React from "react";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="relative px-5 xs:px-7 md:px-12 lg:px-32 z-50">
      <img className="w-24 xs:w-28 sm:w-32 md:w-40 lg:w-48" src={logo} alt="logo" />
    </div>
  );
};

export default Header;
