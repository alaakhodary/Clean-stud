import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import useAuth from "../hooks/useAuth";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faUser,
  faEnvelope,
  faPhone,
  faLock,
} from "@fortawesome/free-solid-svg-icons";

interface SignupFormData {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
}

const regularExpression =
  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

const SignupPage = () => {
  const { authorized, error, loading, login, logout, setError, setLoading } =
    useAuth();

  const [showPassword, setShowPassword] = useState(false);

  const handleSignup = async (values: SignupFormData) => {
    try {
      setLoading(true);

      const response = await axios.post("", values);

      const { token } = response.data;

      // Update authentication state and store the token
      login(token);

      console.log("Signup successful!");
    } catch (error: any) {
      if (error.response) {
        // API error
        console.log("Signup error:", error.response.data.message);
        setError(error.response.data.message);
      } else if (error instanceof Yup.ValidationError) {
        // Validation error
        console.log("Validation error:", error.message);
        setError(error.message);
      } else {
        // Other error
        console.log("An error occurred during signup");
        setError("An error occurred during signup");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto">
      {authorized ? (
        <div>
          <p>You are already signed up.</p>
          <button
            className="rounded bg-blue-500 px-4 py-2 text-white"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="mx-auto max-w-md">
          <Formik
            initialValues={{
              name: "",
              email: "",
              phoneNumber: "",
              password: "",
            }}
            validationSchema={Yup.object({
              name: Yup.string().required("Name is required"),
              email: Yup.string()
                .email("Invalid email")
                .required("Email is required"),
              phoneNumber: Yup.string().required("Phone number is required"),
              password: Yup.string()
                .min(8, "Password must be at least 8 characters long")
                .matches(regularExpression, "Invalid Password")
                .required("Password is required"),
            })}
            onSubmit={(values) => handleSignup(values)}
          >
            <Form className="mt-[33px]">
              <div className="relative mb-4">
                <label
                  htmlFor="name"
                  className="mb-1 block text-start text-[1rem] text-[#1D1D35]"
                >
                  الاسم
                </label>
                <div className="absolute mr-[0.6rem] mt-[0.5rem] rounded-r p-2">
                  <FontAwesomeIcon icon={faUser} className=" text-[#c4c6ca]" />
                </div>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className="h-14 w-full rounded-xl border-2 border-[#F2F2F2] p-2 px-[0.5rem] pr-10 text-base outline-none placeholder:text-[#CCD2E3]"
                  placeholder="ادخل الاسم"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="flex justify-start text-red-500 max-lg:text-sm"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="mb-1 block text-start text-[1rem] text-[#1D1D35]"
                >
                  الايميل
                </label>
                <div className="absolute mr-[0.6rem] mt-[0.5rem] rounded-r p-2">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className=" text-[#b0bcd3]"
                  />
                </div>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="h-14 w-full rounded-xl border-2 border-[#F2F2F2] p-2 pr-10 text-base outline-none placeholder:text-[#CCD2E3]"
                  placeholder="ادخل الايميل"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="flex justify-start text-red-500 max-lg:text-sm"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="phoneNumber"
                  className="mb-1 block text-start text-[1rem] text-[#1D1D35]"
                >
                  رقم الجوال
                </label>
                <div className="absolute mr-[0.6rem] mt-[0.5rem] rounded-r p-2">
                  <FontAwesomeIcon icon={faPhone} className=" text-[#c4c6ca]" />
                </div>
                <Field
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  className="h-14 w-full rounded-xl border-2 border-[#F2F2F2] p-2 pr-10 text-base outline-none placeholder:text-[#CCD2E3]"
                  placeholder="رقم الجوال"
                />
                <ErrorMessage
                  name="phoneNumber"
                  component="div"
                  className="flex justify-start text-red-500 max-lg:text-sm"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="password"
                  className="mb-1 block text-start text-[1rem] text-[#1D1D35]"
                >
                  كلمة المرور
                </label>
                <div className="flex items-center rounded-xl border-2 border-[#F2F2F2]">
                  <div className="absolute mr-[0.6rem] mt-[0.1rem] p-2">
                    <FontAwesomeIcon
                      icon={faLock}
                      className=" text-[#c4c6ca]"
                    />
                  </div>
                  <Field
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    className="h-14 w-full rounded-r-xl p-2 pr-10 text-base outline-none placeholder:text-[#CCD2E3]"
                    placeholder="ادخل كلمة المرور"
                    autoComplete="off"
                  />
                  <div
                    className="cursor-pointer rounded-l p-2"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <FontAwesomeIcon
                      icon={showPassword ? faEye : faEyeSlash}
                      className="text-[#c4c6ca]"
                    />
                  </div>
                </div>
                <ErrorMessage
                  name="password"
                  component="div"
                  className="flex justify-start text-red-500 max-lg:text-sm"
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="mt-8 h-14 w-96 rounded-full bg-[#00ADEE] px-4 py-2 text-base text-white"
                  disabled={loading}
                >
                  {loading ? "انشاء حساب..." : "انشاء حساب"}
                </button>
              </div>
              {error && <div className="mt-2 text-red-500">{error}</div>}
            </Form>
          </Formik>
        </div>
      )}
    </div>
  );
};

export default SignupPage;
