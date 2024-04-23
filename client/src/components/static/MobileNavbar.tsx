import { useState } from "react";
import { navLinkData } from "./navData";
import { CloseIcon, OpenIcon } from "../../assets/icons";
import { Link } from "react-router-dom";

type Props = {};

const MobileNavbar = ({}: Props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  return (
    <div className={`  block md:hidden`}>
      <div className=" flex items-center justify-end ">
        <button onClick={() => setIsSidebarOpen((prev) => !prev)}>
          <OpenIcon className="h-7 w-7 sm:h-8 sm:w-8 text-slate-50" />
        </button>
      </div>
      {isSidebarOpen && (
        <div
          className="fixed top-0 left-0 block md:hidden z-10 bg-gray-800 bg-opacity-40 w-screen h-screen "
          onClick={() => setIsSidebarOpen((prev) => !prev)}
        />
      )}
      <div
        className={`${
          isSidebarOpen ? "w-full  min-[300px]:w-[70%] " : "w-0"
        }  absolute right-0 top-0 z-10 h-screen overflow-hidden bg-slate-900  py-3 transition-all duration-200`}
      >
        <div className="flex items-center justify-end px-3">
          <button onClick={() => setIsSidebarOpen(false)}>
            <CloseIcon className="h-7 w-7 text-slate-50 " />
          </button>
        </div>
        <div>
          {Array.isArray(navLinkData) &&
            navLinkData?.map((item, idx) => {
              return (
                <div className="border-b border-gray-200" key={idx}>
                  <Link to={item.link} className="w-full">
                    <p className="px-3 py-3 text-lg font-semibold text-gray-100">
                      {item.title}
                    </p>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
