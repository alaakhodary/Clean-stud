import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import useAuth from "../hooks/useAuth";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

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
    <div className="container mx-auto p-4">
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
            <Form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="mb-1 block text-start text-[1.4rem] text-[#1D1D35]"
                >
                  الاسم
                </label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className="w-full rounded border p-2"
                  placeholder="ادخل الاسم"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="mb-1 block text-start text-[1.4rem] text-[#1D1D35]"
                >
                  الايميل
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="w-full rounded border p-2"
                  placeholder="ادخل الايميل"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phoneNumber"
                  className="mb-1 block text-start text-[1.4rem] text-[#1D1D35]"
                >
                  رقم الجوال
                </label>
                <Field
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  className="w-full rounded border p-2"
                  placeholder="رقم الجوال"
                />
                <ErrorMessage
                  name="phoneNumber"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="password"
                  className="mb-1 block text-start text-[1.4rem] text-[#1D1D35]"
                >
                  كلمة المرور
                </label>
                <div className="flex items-center rounded border">
                  <Field
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    className="w-full rounded-r border-none p-2"
                    placeholder="ادخل كلمة المرور"
                    autoComplete="off"
                  />
                  <div
                    className="cursor-pointer rounded-l p-2"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <FontAwesomeIcon
                      icon={showPassword ? faEyeSlash : faEye}
                      className="text-[#a3a5a8]"
                    />
                  </div>
                </div>
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="mt-8 h-14 w-96 rounded-full bg-blue-500 px-4 py-2 text-lg text-white"
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
