import MobileNavbar from "./MobileNavbar";
import { navLinkData } from "./navData";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <nav className="container md:!px-14 md:mt-4 flex h-12 md:w-fit  items-center justify-end md:justify-normal rounded-3xl  fixed top-0 md:left-0 right-0 z-20 md:backdrop-blur-sm md:backdrop:bg-slate-200 md:border-slate-700  md:border ">
      <div className=" hidden py-3 md:flex items-center gap-x-8">
        {Array.isArray(navLinkData) &&
          navLinkData?.map((item, idx) => {
            return (
              <div key={idx}>
                {
                  <Link
                    to={item?.link}
                    className={`${
                      location.pathname === item?.link
                        ? "font-extrabold text-slate-100"
                        : "text-slate-200"
                    }`}
                  >
                    {item?.title}
                  </Link>
                }
              </div>
            );
          })}
        {user.username ? (
          <div>
            {
              <Link
                to={"/auth/signout"}
                className={`${
                  location.pathname === "/auth/signout"
                    ? "font-extrabold text-slate-100"
                    : "text-slate-200"
                }`}
              >
                Sign Out
              </Link>
            }
          </div>
        ) : (
          <div>
            {
              <Link
                to={"/auth/signin"}
                className={`${
                  location.pathname === "/auth/signin"
                    ? "font-extrabold text-slate-100"
                    : "text-slate-200"
                }`}
              >
                Sign In
              </Link>
            }
          </div>
        )}
      </div>
      <MobileNavbar />
    </nav>
  );
};

export default Navbar;
