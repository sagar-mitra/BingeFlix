import { useState } from "react";
import {
  checkValidDataEmail,
  checkValidDataName,
  checkValidDataPassword,
} from "../utils/validate";

const LoginForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  // Handle form submission
  const handleSubmit = () => {

    // validation
    const errorEmailMessage = checkValidDataEmail(email);
    const errorPasswordMessage = checkValidDataPassword(password);
    const errorNameMessage = checkValidDataName(fullName);

    if (errorEmailMessage) {
      setErrorMessage(errorEmailMessage);
    } else if (errorPasswordMessage) {
      setErrorMessage(errorPasswordMessage);
    } else if (!isSignInForm && errorNameMessage) {
      setErrorMessage(errorNameMessage);
    } else {
      setErrorMessage(null); 
    }
  };

  // Sign In or Sign Up
  const toggleSignInForm = () => {
    setIsSignInForm((prev) => !prev);
    setEmail("");
    setPassword("");
    setFullName("");
  };

  return (
    <div className="w-4/12 bg-black/60 p-8 sm:p-12 rounded-lg shadow-lg ">
      <h1 className="text-white text-3xl sm:text-4xl font-bold mb-8">
        {isSignInForm ? "Sign In" : "Sign Up"}
      </h1>

      <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
        {isSignInForm ? (
          ""
        ) : (
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-4 rounded-md bg-zinc-700/40 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-red-600"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        )}
        {/* Email or Mobile Number Input */}
        <input
          type="text"
          placeholder="Email Address"
          className="w-full p-4 rounded-md bg-zinc-700/40 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-red-600"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {/* Password Input */}
        <input
          type="password"
          placeholder="Password"
          className="w-full p-4 rounded-md bg-zinc-700/40 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-red-600"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {/* Error Message  */}
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}

        {/* Sign In/Out Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-md transition duration-300 ease-in-out cursor-pointer"
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
          <a href="#" className="text-blue-500 hover:underline text-sm">
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
          <label htmlFor="rememberMe" className="ml-2 text-zinc-400 text-sm">
            Remember me
          </label>
        </div>
      ) : (
        ""
      )}

      {/* New to Netflix? Sign up now. */}
      <p className="text-zinc-400 text-base mb-4">
        {isSignInForm ? "New to Bingeflix?" : "Already have an account?"}
        <span
          className="text-white hover:underline font-semibold cursor-pointer"
          onClick={toggleSignInForm}
        >
          {isSignInForm ? " Sign up now." : " Sign in now"}
        </span>
      </p>
    </div>
  );
};

export default LoginForm;
