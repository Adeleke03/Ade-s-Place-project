import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import navLogo from "/nav-logo.svg";
import cartIcon from "../assets/cart-icon.svg";
import LocationDropDownFN from "../utils/Dropdown";
import SignInOut from "../auth/SignInOut";
import Searchbar from "../utils/Searchbar";
import Cart from "../pages/Cart"
import CartContext from "../context/CartContext";
import SearchIcon from "../assets/search.svg";
import dropDrownIcon from "../assets/dropdown-icon.svg";
import HelloIcon from '../assets/helloicon.png';
import MailIcon from "../assets/mailicon.png";
import OrderIcon from "../assets/OrdersIcon.png";
import DashboardIcon from "../assets/dashboardicon.png";
import LogoutIcon from "../assets/LogoutIcon.png";


// const Navbar = ({cart, setIsCart}) => {
const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!false);
  // const [isDropdown, setIsDropDown] = useState(false)
  const {cart} = useContext(CartContext)

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
            <div className=" flex items-center">{<LocationDropDownFN />}  </div>
          </div>

          {/* Search Bar */}
          <div className="hidden lg:block">{<Searchbar />}</div>

          {/* Cart and Login Section */}
          <div className="flex gap-4 items-center">
            {/* <h2 className="font-[500] text-[13px] text-[#FBFBFB] hidden md:block">
              All Products
            </h2> */}
            <ul className="flex gap-[28px] items-center text-white">
                <Link to="Cart">
              <li className="flex gap-2 bg-[#B67B0F] md:rounded-[32px] rounded-full py-[15px] px-[20px] md:w-[142px] w-[80px] h-[50px]">
                <img src={cartIcon} alt="cartLogo" />
                  <span className="hidden md:inline-block">Cart</span>{cart.length}
              </li>
                </Link>

              {/* Login Button */}
              
              <li>
                {isLoggedIn ?  <div className="dropdown dropdown-center  ">
  <div tabIndex={0} role="button" className="flex  m-1 bg-black border-none text-white "><img src={HelloIcon} alt="" /><span> Hi, Eggys</span><img src={dropDrownIcon} alt="" /></div>
  <ul tabIndex={0} className="dropdown-content menu bg-[#252422] leading-[100%] rounded-box z-1 w-[243px] h-fit rounded-[7px] p-[8px] gap-[24px] shadow-sm">
    <li className="hidden lg:inline-block"><a><img src={DashboardIcon} alt="" /> Dashboard</a></li>
    <li><a><img src={HelloIcon} alt="" /> My Account</a></li>
    <li><a><img src={OrderIcon} alt="" />Orders</a></li>
    <li><a><img src={MailIcon} alt="" className="w-6 h-7" /> Inbox</a></li>
    <li className="text-[#FF0000]"><a><img src={LogoutIcon} alt="" />Log Out</a></li>
  </ul>
</div>   : <Link>
              {<SignInOut />}
              </Link> }
              
                </li>
            </ul>
          </div>
        </nav>
      </header>
    </main>
  );
};

export default Navbar;
