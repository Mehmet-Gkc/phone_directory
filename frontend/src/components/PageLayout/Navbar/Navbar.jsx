import React, { useContext } from "react";
import { BiLogOut } from "react-icons/bi";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";
import styles from "./navbar.module.scss";

function Navbar() {
  const { logoutUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    logoutUser();
    navigate("/");
    console.log("Logout successful");
  };

  return (
    <div className={`flex items-center justify-between px-5 ${styles.navbarContainer}`}>
      <div className="flex">
        <p>
          <Link to="/users/register">Register</Link>
        </p>
        <p className="px-3">
          <Link to="/users/login">Login</Link>
        </p>
      </div>
      <BiLogOut size={30} className="cursor-pointer" onClick={handleLogout} />
    </div>
  );
}

export default Navbar;
