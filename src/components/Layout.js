import React from "react";
import SideNavbar from "./SideNavbar.js";

const Layout = ({ children }) => {
  return (
    <div className="h-screen flex flex-row justify-start">
      <SideNavbar />
      <div className="bg-white flex-1 p-4 text-black text-5xl shadow-2xl">
        <div className="h-200px">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
