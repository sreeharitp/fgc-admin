import React from "react";
import { MdLogout } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 h-[90px] box-shadow bg-white  w-full pl-[300px] pr-5 flex items-center justify-end">
      <button className="flex gap-2 items-center mr-2 font-medium">
        <MdLogout size={22} /> Logout
      </button>
    </div>
  );
};

export default Navbar;
