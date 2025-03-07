import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { signInSchema } from "../utils/ValidationSchema";
import { signUpSchema } from "../utils/ValidationSchema";
import navLogo from "../assets/nav-logo.svg";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <>
    <main>
      {/* Sign up Section */}
      <section>
        {/* logo div for sign up section */}
        <div>
          <img src={navLogo} alt="" />
        </div>
      </section>

    </main>
      
    </>
  )
}

export default SignUp
