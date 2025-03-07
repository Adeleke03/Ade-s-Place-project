import React from "react";
import { Link } from "react-router-dom";
import profileIcon from "../assets/profile-icon.svg";

const AuthBtn = () => {
  return (
    <div>
        <Link to="/auth/sign-in" className="flex items-center gap-2">
          <img src={profileIcon} alt="loginLogo" />
          <span className="hidden md:block text-[13px]">Login</span>
        </Link>
    </div>
  );
};

export default AuthBtn;
