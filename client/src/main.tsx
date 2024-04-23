import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Providers from "./redux/redux-store/Providers";
import SignIn from "./components/auth/Signin";
import SignUp from "./components/auth/Signup";
import Navbar from "./components/static/Navbar";
import CreateBlogs from "./components/blogs/my-blogs/CreateBlogs";
import Protected from "./components/static/Protected";
import Blogs from "./components/blogs/Blogs";
import Blog from "./components/blogs/Blog";
import Signout from "./components/auth/Signout";
import Profile from "./components/profile/Profile";
import MyBlogs from "./components/blogs/my-blogs/MyBlogs";
import EditBlogs from "./components/blogs/my-blogs/EditBlogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Blogs />
      </>
    ),
  },
  {
    path: "/:blogId",
    element: (
      <>
        <Navbar />
        <Blog />
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
    path: "/my-blogs",
    element: (
      <Protected>
        <Navbar />
        <MyBlogs />
      </Protected>
    ),
  },
  {
    path: "/create-blog",
    element: (
      <Protected>
        <Navbar />
        <CreateBlogs />
      </Protected>
    ),
  },
  {
    path: "/edit-blog/:blogId",
    element: (
      <Protected>
        <Navbar />
        <EditBlogs />
      </Protected>
    ),
  },
  {
    path: "/auth/signout",
    element: (
      <Protected>
        <Navbar />
        <Signout />
      </Protected>
    ),
  },
  {
    path: "/profile",
    element: (
      <Protected>
        <Navbar />
        <Profile />
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
