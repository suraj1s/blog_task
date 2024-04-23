import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Providers from "./redux/redux-store/Providers";
import SignIn from "./components/auth/Signin";
import SignUp from "./components/auth/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/auth/signin",
    element: <SignIn />,
  },
  {
    path: "/auth/signup",
    element: <SignUp />,
  },
  
]);

// @ts-expect-error - This is type warning
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  </React.StrictMode>
);
