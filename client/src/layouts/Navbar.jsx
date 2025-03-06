import React from "react";
import navLogo from "../assets/nav-logo.svg";
import locationIcon from "../assets/location-icon.svg";
import dropDown from "../assets/dropdown-icon.svg";
import searchBar from "../assets/searchBar-icon.svg";
import { Link } from "react-router-dom";
import cartIcon from "../assets/cart-icon.svg";
import profileIcon from "../assets/profile-icon.svg";
import LocationDropDownFN from "../utils/Dropdown";
const Navbar = () => {
  return (
    <main>
      <header className="bg-[#100101]">
        <nav className="wrapper flex justify-between items-center">
          {/* Eggy's logo  */}
          {/* div for location icon */}
          <div className="flex   gap-4 items-center">
            <img 
              className="w-[30px] h-auto hidden md:block"
              src={navLogo}
              alt="Eggy's palace logo"
            />
           
            {/* div for drop down  location  */}
            <div><LocationDropDownFN/></div>
            
          </div>
          {/* div for form search input  */}
          <div className="hidden lg:block">
            {/* form input for search bar  */}
            <form>
              <input
                type="text"
                name=""
                id=""
                placeholder="Search"
                className="w-[300px] h-[56px] rounded-[32px] bg-[#F0F0F0] placeholder:text-[#100101] outline-none ps-[30px] border font-[400] text-[20px]"
              />
              {/* <img className='ab' src={searchBar} alt="" /> */}
            </form>
          </div>

          {/* div for All products  */}
          <div className="flex gap-4 items-center">
            <h2 className="font-[500] text-[13px] text-[#FBFBFB] hidden md:block">
              All Products
            </h2>
            {/* Ul for cart and login section */}
            <ul className="flex gap-[28px]">
                <li className="flex gap-2 bg-[#B67B0F] md:rounded-[32px] rounded-full py-[15px] px-[20px] md:w-[142px] w-[80px] h-[50px] ">
                  <img src={cartIcon} alt="cartLogo" />
                  <Link>
                    {" "}
                    <span className="hidden md:inline-block ">Cart</span> 00{" "}
                  </Link>
                </li>
                <li className="flex items-center gap-2 bg-[#F0F0F0] md:rounded-[32px] rounded-full text-black py-[11px] px-[15px] md:w-[124px] w-[50px] h-[50px]">
                  <img src={profileIcon} alt="loginLogo" />
                  <Link>
                    {" "}
                    <span className="hidden md:block text-[13px]">Login</span>
                  </Link>
                </li>
              </ul>
          </div>
        </nav>
      </header>
    </main>
  );
};

export default Navbar;
