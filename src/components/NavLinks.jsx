import React from "react";
import SignOutButton from "./SignOutButton";

const NavLinks = ({clicked, handleSignOut}) => {
  return (
    <div>
      <ul className={`flex ${clicked  && "flex-col"} text-lg font-medium gap-9`}>
        <li>Home</li>
        <li>Movies</li>
        <li>TV Shows</li>
        <li>New & Popular</li>
        {clicked && <li><SignOutButton handleSignOut={handleSignOut}/></li>}
      </ul>
    </div>
  );
};

export default NavLinks;
