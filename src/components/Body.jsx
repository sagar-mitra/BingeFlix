import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "../pages/Browse";
import Login from "../pages/Login";
import LoginForm from "./LoginForm";

const Body = () => {
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
