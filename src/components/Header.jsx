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
    const unsubscribe = onAuthStateChanged(auth, (user) => {
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

    // Unsubscribe when the component unmounts
    return () => unsubscribe()

  }, []);

  return (
    <div
      className={`relative ${
        !user ? "px-5 xs:px-7 md:px-12 lg:px-32" : "px-2"
      } z-50 text-white flex justify-between items-center`}
    >
      <img
        className="w-15 xs:w-18 sm:w-24 md:w-28 lg:w-48"
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
              className="h-5 sm:h-5 md:h-7 lg:h-10 cursor-pointer rounded sm:rounded-sm lg:rounded-lg"
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
