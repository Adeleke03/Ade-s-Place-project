import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInSchema } from "../utils/ValidationSchema";
import { signUpSchema } from "../utils/ValidationSchema";
import { Link } from "react-router-dom";
import * as yup from "yup";
import navLogo from "../assets/nav-logo.svg";
import visibilityon from "../assets/visibilityon.svg";
import visibilityoff from "../assets/visibilityoff.svg";
import SignUp from "./Signup";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ resolver: yupResolver(signInSchema) });
  const onSubmit = (data) => console.log(data);

  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className="bg-[#100101]">
        {/* Sign in Section */}
        <section className="wrapper">
          {/* logo div for sign up section */}
          <div className="flex justify-center py-8">
            <img className="h-[127.8px]" src={navLogo} alt="Nav logo" />
          </div>
          {/* div for sign in form  */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="text-white text-[32px] leading-[100%] py-1.5">
              Welcome Back
            </h2>
            <h4 className="text-white text-base">Sign In to Your Account</h4>
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
                    className="absolute right-3 bottom-4"
                    src={showPassword ? visibilityon : visibilityoff}
                    alt="Toggle password visibility"
                  />
                </button>
              </div>
              <p className="text-red-600">{errors.password?.message}</p>
            </div>
            <p className="text-white pb-4 underline">Forgot Password?</p>
            {/* div for sign  in button */}
            <div className="py-4">
              <button
              type="submit"
              disabled={!isValid}
                className={`w-full py-[15px] px-[56px] rounded-[31px] text-white text-[20px] font-bold ${
                  isValid
                    ? "bg-[#B67B0F] hover:bg-[#a56d0d]"
                    : "bg-gray-500 cursor-not-allowed"
                }`}
              >
                Sign In
              </button>
              <p className="text-white py-1.5 text-[20px] font-[700]">
                Don't have an account?{" "}{/* You can open the modal using document.getElementById('ID').showModal() method */}
                <button
  type="button"  // Ensure it's not treated as a submit button
  className="btn text-[#B67B0F] font-[700] text-[20px]"
  onClick={(e) => {
    e.preventDefault(); // Prevent unintended form submission
    console.log("Opening modal...");
    document.getElementById("my_modal_3").showModal();
  }}
>
  Sign Up
</button>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <SignUp/>
  </div>
</dialog>

              </p>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default SignIn;