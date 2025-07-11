import { useState } from "react";
import logo from "../assets/logo.png";
import NavLinks from "./NavLinks";
import { useSelector } from "react-redux";
import { RxCross1 } from "react-icons/rx";
import { RxHamburgerMenu } from "react-icons/rx";
import SignOutButton from "./SignOutButton";
import { auth } from "../utils/firebase";
import { useLocation, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { DEFAULT_PROFILE_PICTURE } from "../utils/constant";
import { useDispatch } from "react-redux";

const Header = () => {
  const [clicked, setClicked] = useState(false);
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation(); // we can get path location

  // Sign out button
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Firebase auth change
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            displayName: displayName,
            email: email,
            photoURL: DEFAULT_PROFILE_PICTURE,
          })
        );
        navigate("/browse");
        console.log("Auth state changed. User is:", user);
        console.log("Current location:", location.pathname);
      } else {
        // User is signed out
        dispatch(removeUser());
        // Only redirect to / if NOT on /login
        // const publicRoutes = ["/", "/login"];
        // if (!publicRoutes.includes(location.pathname)) {
        //   navigate("/");
        // }
        if (location.pathname !== "/" && location.pathname !== "/login") {
          navigate("/");
        }
      }
    });
  }, []);

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
          <NavLinks clicked={clicked} handleSignOut={handleSignOut} />
        </div>
      )}
    </div>
  );
};

export default Header;
