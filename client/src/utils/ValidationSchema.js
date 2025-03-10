import * as yup from "yup";

export const signUpSchema = yup
  .object({
    fullName: yup.string().required("full name is required"),
    lastName: yup.string().required("last name is required"),
    email: yup
      .string()
      .required("email is required")
      .email("invalid email format"),
    password: yup
      .string()
      .required("password is required")
      .min(8, "minimum length of password should be at least 8 characters"),
    confirmPassword: yup
      .string()
      .required("confirm password is required")
      .min(
        8,
        "minimum length of confirm password should be at least 8 characters"
      )
      .oneOf([yup.ref("password")], "password do not match"),
  })
  .required();

export const signInSchema = yup
  .object({
    email: yup
      .string()
      .required("email is required")
      .email("invalid email format"),
    password: yup
      .string()
      .required("password is required")
      .min(8, "minimum length of password should be at least 8 characters"),
  })
  .required();
