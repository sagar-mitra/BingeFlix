import logo from "../assets/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import NavLinks from "./NavLinks";
import { DEFAULT_PROFILE_PICTURE } from "../utils/constant";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";

const HeaderBrowse = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="relative flex  justify-between items-center px-2">
      {/* Left side  */}
      <img className="h-14 xs:h-16 lg:h-20" src={logo} alt="logo" />

      {/* Nav links */}
      <div className="max-lg:hidden">
        <NavLinks />
      </div>

      {/* Profile Picture and Burger Menu */}
      <div className="flex gap-5 items-center">
        <img
          className="h-8 sm:h-10 cursor-pointer"
          src={DEFAULT_PROFILE_PICTURE}
          alt=""
        />
        <button
          className=" cursor-pointer"
          onClick={() => setClicked(!clicked)}
        >
          {clicked ? (
            <RxCross1 className="lg:hidden text-lg font-extrabold" />
          ) : (
            <RxHamburgerMenu className="lg:hidden text-lg font-extrabold" />
          )}
        </button>
      </div>

        {/* NavLinks for mobile */}
      {clicked && (<div className="lg:hidden absolute top-14 left-1/2 transform -translate-x-1/2 text-center w-full py-4 ">
        <NavLinks clicked={clicked} />
      </div>)}
    </div>
  );
};

export default HeaderBrowse;
