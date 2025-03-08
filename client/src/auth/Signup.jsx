import React, { isValidElement, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { signInSchema } from "../utils/ValidationSchema";
import { signUpSchema } from "../utils/ValidationSchema";
import navLogo from "../assets/nav-logo.svg";
import visibilityon from "../assets/visibilityon.svg";
import visibilityoff from "../assets/visibilityoff.svg";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(signUpSchema),
    mode: "onChange",
  });
  const onSubmit = (data) => console.log(data);

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <>
      <main className="bg-[#100101] ">
        {/* Sign up Section */}
        <section className="wrapper">
          {/* logo div for sign up section */}
          <div className="flex justify-center py-8">
            <img src={navLogo} alt="" />
          </div>
          {/* div for sign up form */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="text-white text-[32px] leading-[100%] py-1.5">
              Create Account
            </h2>
            <h4 className="text-white text-base">
              Let's get you started so you can start joining and creating events
            </h4>
            {/* div for email,fullname,password,confirm password */}
            <div className="flex flex-col">
              {/* div for email */}
              <div className="py-2">
                {/* Label for email */}
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
              {/* div for fullname  */}
              <div className="py-2">
                {/* label for full name */}
                <label htmlFor="fullName" className="text-white">
                  Full Name :
                </label>
                <input
                  className="w-full h-[49px] rounded-[6px] bg-[#201F1E] p-[16px] text-white placeholder:text-[#c7c3c3]"
                  type="text"
                  name="fullName"
                  autoComplete="name"
                  id="fullName"
                  placeholder="Full Name"
                  {...register("fullName")}
                />
              </div>
              <p className="text-red-600">{errors.fullName?.message}</p>
              {/* div for password */}
              <div className="py-2 relative">
                {/* label for password */}
                <label htmlFor="password" className="text-white">
                  Password :
                </label>
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
                <label htmlFor="confirmPassword" className="text-white">
                  Confirm Password :
                </label>
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
            {/* div for sign up button */}
            <div className="py-4">
              <button
                type="submit"
                disabled={!isValid}
                className={`w-full py-[15px] px-[56px] rounded-[31px] text-white text-[20px] font-bold ${
                  isValid ? "bg-[#B67B0F] hover:bg-[#a56d0d]" : "bg-gray-500 cursor-not-allowed"
                }`}
              >
                Sign Up
              </button>
              <p className="text-white py-1.5 text-[20px] font-[700]">Already have an account? <Link to="/auth/sign-in"><span className="text-[#B67B0F] font-[700] text-[20px]"> Sign In</span></Link></p>
            </div>
          </form>
        </section>
      </main>
    </>
  );
};

export default SignUp;
