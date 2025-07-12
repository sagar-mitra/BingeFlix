import { useState } from "react";
import { DEFAULT_PROFILE_PICTURE, LOGIN_BACKGROUND_IMG } from "../utils/constant";
import { auth } from "../utils/firebase";
import Header from "./Header";
import {
  checkValidDataEmail,
  checkValidDataName,
  checkValidDataPassword,
} from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const LoginForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  // Handle form submission
  const handleSubmit = () => {
    // validation
    const errorEmailMessage = checkValidDataEmail(email);
    const errorPasswordMessage = checkValidDataPassword(password);
    const errorNameMessage = checkValidDataName(fullName);

    // set the error message
    if (errorEmailMessage) {
      setErrorMessage(errorEmailMessage);
    } else if (errorPasswordMessage) {
      setErrorMessage(errorPasswordMessage);
    } else if (!isSignInForm && errorNameMessage) {
      setErrorMessage(errorNameMessage);
    } else {
      setErrorMessage(null);
    }

    if (errorEmailMessage || errorPasswordMessage) return;

    // Sign-up and Sign-in logic
    if (!isSignInForm && !errorNameMessage) {
      // Sign Up
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          // Updating user: Adding name
          updateProfile(user, {
            displayName: fullName, photoURL: DEFAULT_PROFILE_PICTURE
          })
            .then(() => {
              const { uid, displayName, email, photoURL } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, displayName: displayName, email: email, photoURL: photoURL })
              );
            })
            .catch((error) => {
              if (error.code === "auth/invalid-credential") {
                setErrorMessage("Invalid email or password.");
              } else {
                setErrorMessage("Something went wrong. Try again.");
              }
            });
        })
        .catch((error) => {
          if (error.code === "auth/invalid-credential") {
            setErrorMessage("Invalid email or password.");
          } else {
            setErrorMessage("Something went wrong. Try again.");
          }
        });
    } else {
      // Sign In
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          if (error.code === "auth/invalid-credential") {
            setErrorMessage("Invalid email or password.");
          } else {
            setErrorMessage("Something went wrong. Try again.");
          }
          console.log(error);
        });
    }
  };

  // Sign In or Sign Up link toggle
  const toggleSignInForm = () => {
    setIsSignInForm((prev) => !prev);
    setEmail("");
    setPassword("");
    setFullName("");
  };

  return (
    <div className="relative w-screen h-screen border overflow-hidden">
      {/* Header and Background image */}
      <div>
        <Header />
        <img
          className="top-0 left-0 w-full h-full object-cover absolute -z-10 "
          src={LOGIN_BACKGROUND_IMG}
          alt="background"
        />
        {/* black overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 -z-0" />
      </div>

      {/* Login form  outer*/}
      <div className="relative flex items-center justify-center mt-7 xs:mt-15 md:mt-10 lg:mt-7 h-11/12 lg:h-10/12">
        {/* Login form  */}
        <div className="relative w-11/12 xs:w-96 sm:w-7/12 md:w-6/12 lg:w-4/12 bg-black/60 p-8 sm:p-12 rounded-lg shadow-lg">
          <h1 className="text-white text-xl mb-4 xs:text-2xl sm:text-3xl md:text-4xl font-bold xs:mb-6 md:mb-8">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            {isSignInForm ? (
              ""
            ) : (
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 md:p-4 rounded-md bg-zinc-700/40 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-red-600"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            )}
            {/* Email or Mobile Number Input */}
            <input
              type="text"
              placeholder="Email Address"
              className="w-full p-3 md:p-4 rounded-md bg-zinc-700/40 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-red-600"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            {/* Password Input */}
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 md:p-4 rounded-md bg-zinc-700/40 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-red-600"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {/* Error Message  */}
            {errorMessage && <p className="text-red-500 text-sm sm:text-base">{errorMessage}</p>}

            {/* Sign In/Out Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 sm:py-3 rounded-md transition duration-300 ease-in-out cursor-pointer"
            >
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
          </form>

          {/* OR Separator */}
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-zinc-700"></div>
            <span className="mx-4 text-zinc-400">OR</span>
            <div className="flex-grow border-t border-zinc-700"></div>
          </div>

          {/* Forgot Password Link */}
          {isSignInForm ? (
            <div className="text-center mb-6">
              <a href="#" className="text-blue-500 hover:underline text-xs sm:text-sm">
                Forgot password?
              </a>
            </div>
          ) : (
            ""
          )}

          {/* Remember Me Checkbox */}
          {isSignInForm ? (
            <div className="flex items-center mb-8">
              <input
                type="checkbox"
                id="rememberMe"
                className="form-checkbox h-4 w-4 text-red-600 bg-zinc-700 border-zinc-700 rounded focus:ring-red-500"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label
                htmlFor="rememberMe"
                className="ml-2 text-zinc-400 text-sm"
              >
                Remember me
              </label>
            </div>
          ) : (
            ""
          )}

          {/* New to Netflix? Sign up now. */}
          <p className="text-zinc-400 text-sm sm:text-base mb-4">
            {isSignInForm ? "New to Bingeflix?" : "Already have an account?"}
            <span
              className="text-white hover:underline font-semibold cursor-pointer"
              onClick={toggleSignInForm}
            >
              {isSignInForm ? " Sign up now." : " Sign in now"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
