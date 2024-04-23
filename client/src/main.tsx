import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Providers from "./redux/redux-store/Providers";
import SignIn from "./components/auth/Signin";
import SignUp from "./components/auth/Signup";
import Navbar from "./components/static/Navbar";
import CreateBlogs from "./components/blogs/create-blogs/CreateBlogs";
import Protected from "./components/static/Protected";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <App />
      </>
    ),
  },
  {
    path: "/auth/signin",
    element: (
      <>
        <Navbar />
        <SignIn />
      </>
    ),
  },
  {
    path: "/auth/signup",
    element: (
      <>
        <Navbar />
        <SignUp />
      </>
    ),
  },
  {
    path: "/blogs/create",
    element: (
      <Protected>
        <Navbar />
        <CreateBlogs />
      </Protected>
    ),
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
