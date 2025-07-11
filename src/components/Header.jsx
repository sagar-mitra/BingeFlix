import React, { useState } from "react";
import logo from "../assets/logo.png";
import NavLinks from "./NavLinks";
import { useSelector } from "react-redux";
import { RxCross1 } from "react-icons/rx";
import { RxHamburgerMenu } from "react-icons/rx";
import SignOutButton from "./SignOutButton";
import {auth} from "../utils/firebase"
import { useNavigate } from "react-router-dom";
import {signOut} from "firebase/auth"

const Header = () => {
  const [clicked, setClicked] = useState(false);
  // const [signOut, setSignOut] = useState(false);
  const user = useSelector((store) => store.user);

  const navigate = useNavigate()

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/")
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div
      className={`relative ${
        !user ? "px-5 xs:px-7 md:px-12 lg:px-32" : "px-2"
      } z-50 ${!user && "text-white"} flex justify-between items-center`}
    >
      <img
        className="w-24 xs:w-28 sm:w-32 md:w-40 lg:w-48"
        src={logo}
        alt="logo"
      />

      {/* user present then only showing nav links and profile picture */}
      {user && (
        <div className="relative flex w-7/12 items-center justify-end  lg:justify-between ">
          {/* Nav links */}
          <div className="max-lg:hidden">
            <NavLinks />
          </div>

          {/* Profile Picture and Burger Menu  */}
          <div className="flex gap-5 items-center">
            <img
              className="h-8 sm:h-10 cursor-pointer rounded-lg"
              src={user.photoURL}
              alt=""
            />

            <div className="max-lg:hidden">
              <SignOutButton handleSignOut={handleSignOut} />
            </div>

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
        </div>
      )}

      {/* NavLinks for mobile */}
      {clicked && (
        <div className="lg:hidden absolute top-14 left-1/2 transform -translate-x-1/2 text-center w-full py-4 ">
          <NavLinks clicked={clicked} handleSignOut={handleSignOut}/>
        </div>
      )}
    </div>
  );
};

export default Header;
