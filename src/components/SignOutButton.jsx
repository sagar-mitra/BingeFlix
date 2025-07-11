import React from "react";

const SignOutButton = ({handleSignOut}) => {
  return <button className="text-white bg-red-500 px-4 py-2 text-sm sm:text-base sm:px-4 sm:py-2 rounded-lg cursor-pointer" onClick={handleSignOut}>Log Out</button>;
};

export default SignOutButton;
