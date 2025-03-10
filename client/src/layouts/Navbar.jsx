import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInSchema,  signUpSchema } from "../utils/ValidationSchema";
import * as yup from "yup";
import navLogo from "../assets/nav-logo.svg";
import cartIcon from "../assets/cart-icon.svg";
import profileIcon from "../assets/profile-icon.svg";
import LocationDropDownFN from "../utils/Dropdown";
import visibilityon from "../assets/visibilityon.svg";
import visibilityoff from "../assets/visibilityoff.svg";
import { allProducts } from "../product";

const Navbar = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Select validation schema dynamically
  const validationSchema = isSignUp ? signUpSchema : signInSchema;

  

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ resolver: yupResolver(validationSchema) });
  const onSubmit = (data) => console.log(data);



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
          <div className="hidden lg:block">
            <form>
              <input
                type="text"
                placeholder="Search"
                className="w-[300px] h-[56px] rounded-[32px] bg-[#F0F0F0] placeholder:text-[#100101] outline-none ps-[30px] border font-[400] text-[20px]"
              />
            </form>
          </div>

          {/* Cart and Login Section */}
          <div className="flex gap-4 items-center">
            <h2 className="font-[500] text-[13px] text-[#FBFBFB] hidden md:block">
              All Products
            </h2>
            <ul className="flex gap-[28px]">
              <li className="flex gap-2 bg-[#B67B0F] md:rounded-[32px] rounded-full py-[15px] px-[20px] md:w-[142px] w-[80px] h-[50px]">
                <img src={cartIcon} alt="cartLogo" />
                <Link>
                  <span className="hidden md:inline-block">Cart</span> 00
                </Link>
              </li>

              {/* Login Button */}
              <li>
                {/* Sign In and Sign Up modal  */}
                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <button
                  className="btn bg-white md:rounded-[32px] rounded-full py-[15px] px-[20px] md:w-[142px] w-[80px] h-[50px] flex items-center justify-center"
                  onClick={() => {
                    setIsOpenModal(true); // Tracks Open modal state 
                    document.getElementById("my_modal_3").showModal(); // Open modal
                    setIsSignUp(false); // Always start with Sign in 
                  }}
                >
                  <img
                    src={profileIcon}
                    alt="Profile Icon"
                    className=" w-5 h-5"
                  />
                  <span className="hidden md:block">Login</span>
                </button>
                <dialog id="my_modal_3" className="modal">
                  <div className="modal-box bg-[#100101]">
                      {/* if there is a button in form, it will close the modal */}
                      <button onClick={() => {setIsOpenModal(false); // Track close state 
                        document.getElementById("my_modal_3").close(); // Close modal
                      }} className="btn text-red btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                    {/* removing method dailog to prevent any button from closing this form  */}
                    {/* <form  method="dialog"> */}
                     {/* logo div for sign up section */}
    <div className="flex justify-center py-8">
            <img className="h-[127.8px]" src={navLogo} alt="Nav logo" />
          </div>
      <h3 className="text-white text-[32px] leading-[100%] py-1.5">{isSignUp ? "Create Account" : "Welcome Back" }</h3>
      <h4 className="text-white text-base">{isSignUp ? "Lets get you started so you can start joining and creating events" : "Sign In to Your Account"}</h4>
                    <form onSubmit={handleSubmit(onSubmit)} action="">
                    {isSignUp ? (
    <>
       <div className="flex flex-col">
              {/* div for email */}
              <div className="py-2">
                
                <input
                  placeholder="Email"
                  autoComplete="email"
                  className="w-full h-[49px] rounded-[6px] bg-[#201F1E] p-[16px] text-white placeholder:text-[#c7c3c3]"
                  type="email"
                  name="email"
                  id="email"
                  {...register("email")}
                />
                <p className="text-red-600">{errors.email?.message}</p>
              </div>
              {/* div for fullname  */}
              <div className="py-2">
               
                
                <input
                  className="w-full h-[49px] rounded-[6px] bg-[#201F1E] p-[16px] text-white placeholder:text-[#c7c3c3]"
                  type="text"
                  name="fullName"
                  autoComplete="given-name"
                  id="fullName"
                  placeholder="full Name"
                  {...register("fullName")}
                />
              </div>
              <p className="text-red-600">{errors.fullName?.message}</p>
              {/* div for password */}
              <div className="py-2 relative">
                
                
                <input
                  placeholder="Password"
                  autoComplete="new-password"
                  className="w-full outline-none h-[49px] rounded-[6px] bg-[#201F1E] p-[16px] text-white placeholder:text-[#c7c3c3]"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  {...register("password")}
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  type="button"
                  className=""
                  aria-label="Toggle password visibility"
                >
                  <img
                    className="absolute right-3 bottom-5"
                    src={showPassword ? visibilityon : visibilityoff}
                    alt="Toggle Password visibility"
                  />
                </button>
              </div>
              <p className="text-red-600">{errors.password?.message}</p>
              {/* div for confirm password */}
              <div className="py-2 relative">
                {/* label for confirm password */}
                
                <input
                  placeholder="Confirm Password"
                  autoComplete="new-password"
                  className="w-full outline-none h-[49px] rounded-[6px] bg-[#201F1E] p-[16px] text-white placeholder:text-[#c7c3c3]"
                  type={showPassword ? "text" : "password"}
                  name="confirmPassword"
                  id="confirmPassword"
                  {...register("confirmPassword")}
                />
                <button
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  type="button"
                  className=""
                  aria-label="Toggle Confirm Password visibility"
                >
                  <img
                    className="absolute right-3 bottom-5"
                    src={showConfirmPassword ? visibilityon : visibilityoff}
                    alt="Toggle confirm Password Visibility"
                  />
                </button>
              </div>
              <p className="text-red-600">{errors.confirmPassword?.message}</p>
            </div>
            {/* div for checkbox input for terms and conditions */}
            <div className="py-1">
              <input required type="checkbox" name="terms" id="terms" />
              <label className="text-white" htmlFor="terms">
                {" "}
                I agree to the <span className="underline">
                  Terms of Use{" "}
                </span>{" "}
                & <span className="underline">Conditions</span>
              </label>
            </div>

            {/* Submit Button */}
            <button
                        type="submit"
                        disabled={!isValid}
                        className={`w-full py-[15px] px-[56px] rounded-[31px] text-white text-[20px] font-bold ${
                          isValid ? "bg-[#B67B0F]" : "bg-gray-500 cursor-not-allowed"
                        }`}
                      >
                        Sign Up
                      </button>

                      {/* Toggle between Sign-In and Sign-Up */}
                      <p className="text-white py-1.5 text-[20px] font-[700]">
                        Already have an Account? 
                        <button
                          type="button"
                          className="text-[#B67B0F] font-[700]"
                          onClick={() => setIsSignUp(!isSignUp)}
                        >
                           Sign In
                        </button>
                      </p>
    </>
  ) : (
    <>
    

    
   
       {/* div for email&password  */}
       <div className="flex flex-col">
              {/* div for email  */}
              <div className="py-4">
                {/* label for email */}
                <label htmlFor="email" className="text-white">
                  Email :
                </label>
                <input
                  placeholder="Email"
                  autoComplete="email"
                  className="w-full h-[49px] rounded-[6px] bg-[#201F1E] p-[16px] text-white placeholder:text-[#c7c3c3]"
                  type="email"
                  name="email"
                  id="email"
                  {...register("email")}
                />
                <p className="text-red-600">{errors.email?.message}</p>
              </div>
              {/* div for password  */}
              <div className="py-2 relative">
                {/* label for password */}
                <label htmlFor="password" className="text-white">
                  Password :
                </label>
                <input
                  placeholder="Password"
                  autoComplete="current-password"
                  className="w-full h-[49px] rounded-[6px] bg-[#201F1E] p-[16px] text-white placeholder:text-[#c7c3c3]"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  {...register("password")}
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  type="button"
                  className=""
                >
                  <img
                    className="absolute right-3 bottom-5"
                    src={showPassword ? visibilityon : visibilityoff}
                    alt="Toggle password visibility"
                  />
                </button>
              </div>
              <p className="text-red-600">{errors.password?.message}</p>
            </div>
            <p className="text-white pb-4 underline">Forgot Password?</p>
             {/* Submit Button */}
             <button
                        type="submit"
                        disabled={!isValid}
                        className={`w-full py-[15px] px-[56px] rounded-[31px] text-white text-[20px] font-bold ${
                          isValid ? "bg-[#B67B0F]" : "bg-gray-500 cursor-not-allowed"
                        }`}
                      >
                        Sign In 
                      </button>

                      {/* Toggle between Sign-In and Sign-Up */}
                      <p className="text-white py-1.5 text-[20px] font-[700]">
                        Don't have an Account?
                        <button
                          type="button"
                          className="text-[#B67B0F] font-[700]"
                          onClick={() => setIsSignUp(!isSignUp)}
                        >
                          Sign Up
                        </button>
                      </p>
     
      
    </>
  )}
                    </form>
                    
                  </div>
                </dialog>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Login & Sign-Up Modal */}
    </main>
  );
};

export default Navbar;
