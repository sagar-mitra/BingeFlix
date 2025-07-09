import React, { useState } from "react";
import { LOGIN_BACKGROUND_IMG } from "../utils/constant";
import Header from "./Header";
import LoginForm from "./LoginForm";

const Login = () => {
  const [click, setClick] = useState(false);
  return (
    <div className="w-screen h-screen relative">
      {/* Header and background image */}
      <div>
        <Header />
        <img
          className="top-0 left-0 w-full h-full object-cover absolute -z-10"
          src={LOGIN_BACKGROUND_IMG}
          alt="background"
        />
        {/* black overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 -z-0" />
      </div>

      {/* Sign-In form  */}
      <div className="relative flex items-center justify-center border h-9/12">
        {click ? (
          <LoginForm />
        ) : (
          <div className="w-7/12 flex flex-col items-center gap-6">
            <h1 className="text-white text-6xl font-extrabold leading-20 text-center tracking-wide">
              Unlimited movies, TV shows and more
            </h1>
            <button
              className="w-2/12 px-9 bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-md transition duration-300 ease-in-out cursor-pointer "
              onClick={() => setClick((prev) => !prev)}
            >
              Sign In
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
