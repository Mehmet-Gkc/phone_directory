import React from "react";
import { BiLogOut } from "react-icons/bi";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="h-20 bg-gray-200 flex items-center justify-between px-5">
      <div className="flex">
        <p >
          <Link to="/api/users/register">Register</Link>
        </p>
        <p className="px-3">
          <Link to="/api/users/login">Login</Link>
        </p>
      </div>
      <BiLogOut size={30} className="cursor-pointer" />
    </div>
  );
}

export default Navbar;
