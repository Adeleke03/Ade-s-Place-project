import React from "react";
import navLogo from "../assets/nav-logo.svg";
import locationIcon from "../assets/location-icon.svg";
import dropDown from "../assets/dropdown-icon.svg";

import searchBar from "../assets/searchBar-icon.svg";
import { Link } from "react-router-dom";
import cartIcon from "../assets/cart-icon.svg";
import profileIcon from "../assets/profile-icon.svg";
import LocationDropDownFN from "../utils/Dropdown";

import SignIn from "../components/SignIn";
const Navbar = () => {
  return (
    <main>
      <header className="bg-[#100101]">
        <nav className="wrapper flex justify-between items-center">
          {/* Eggy's logo  */}
          {/* div for location icon */}
          <div className="flex   gap-4 items-center">
            {/* Nav logo button */}

            <Link to="/">
              <img
                className="w-[30px] h-auto hidden md:block"
                src={navLogo}
                alt="Eggy's palace logo"
              />
            </Link>

            {/* div for drop down  location  */}
            <div>
              <LocationDropDownFN />
            </div>
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
              <li>
                {/* You can open the modal using document.getElementById('ID').showModal() method */}
<button className="btn flex gap-2 bg-white md:rounded-[32px] rounded-full py-[15px] px-[20px] md:w-[142px] w-[80px] h-[50px]" onClick={()=>document.getElementById('my_modal_3').showModal()}><img src={profileIcon} alt="loginLogo" /><span className="hidden md:inline-block ">Login</span></button>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box bg-black w-screen max-w-5xl">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 text-white top-2">✕</button>
    </form>
    <SignIn/>
  </div>
</dialog>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </main>
  );
};

export default Navbar;
