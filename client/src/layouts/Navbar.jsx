import React, { useState } from "react";
import { Link } from "react-router-dom";
import navLogo from "../assets/nav-logo.svg";
import cartIcon from "../assets/cart-icon.svg";
import LocationDropDownFN from "../utils/Dropdown";
import SignInOut from "../auth/SignInOut";
import Searchbar from "../utils/Searchbar";

const Navbar = () => {
  return (
    <main>
      <header className="bg-[#100101]">
        <nav className="wrapper flex justify-between items-center">
          {/* Logo and Location */}
          <div className="flex gap-4 items-center">
            <Link to="/">
              <img
                className="w-[30px] h-auto hidden md:block"
                src={navLogo}
                alt="Eggy's palace logo"
              />
            </Link>
            <div>{<LocationDropDownFN />}</div>
          </div>

          {/* Search Bar */}
          <div className="hidden lg:block">{<Searchbar />}</div>

          {/* Cart and Login Section */}
          <div className="flex gap-4 items-center">
            {/* <h2 className="font-[500] text-[13px] text-[#FBFBFB] hidden md:block">
              All Products
            </h2> */}
            <ul className="flex gap-[28px]">
              <li className="flex gap-2 bg-[#B67B0F] md:rounded-[32px] rounded-full py-[15px] px-[20px] md:w-[142px] w-[80px] h-[50px]">
                <img src={cartIcon} alt="cartLogo" />
                <Link>
                  <span className="hidden md:inline-block">Cart</span> 00
                </Link>
              </li>

              {/* Login Button */}
              <li>{<SignInOut />}</li>
            </ul>
          </div>
        </nav>
      </header>
    </main>
  );
};

export default Navbar;
