import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Browse from "./Browse";
import Login from "./login";
import LoginForm from "./LoginForm";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";
import { DEFAULT_PROFILE_PICTURE } from "../utils/constant";

const Body = () => {
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/login",
      element: <LoginForm />,
    },
  ]);

 // Firebase auth change
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email, photoURL } = user;
        dispatch(addUser({ uid: uid, displayName: displayName, email: email, photoURL: DEFAULT_PROFILE_PICTURE }));
      } else {
        // User is signed out
        dispatch(removeUser());
      }
    });
  }, []);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;

/* 💡NOTE:
        - useEffect([]) ensures the onAuthStateChanged listener is set up only once, when the component first mounts — not on every re-render.
        
        -  onAuthStateChanged itself is responsible for reacting to auth changes, like sign in/out — not useEffect.
*/