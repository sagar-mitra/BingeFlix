import React from "react";
import { LOGIN_BACKGROUND_IMG } from "../utils/constant";
import Header from "./Header";
import LoginForm from "./LoginForm";

const Login = () => {
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
      <div className="relative flex items-center justify-center">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
