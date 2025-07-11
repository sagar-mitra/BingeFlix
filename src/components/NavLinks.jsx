import React from "react";

const NavLinks = ({clicked}) => {
  return (
    <div>
      <ul className={`flex ${clicked  && "flex-col"} text-lg font-medium gap-9`}>
        <li>Home</li>
        <li>Movies</li>
        <li>TV Shows</li>
        <li>New & Popular</li>
      </ul>
    </div>
  );
};

export default NavLinks;
