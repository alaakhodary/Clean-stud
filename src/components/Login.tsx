import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import useAuth from "../hooks/useAuth";

import { useState } from "react";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface LoginFormValues {
  email: string;
  password: string;
}

const regularExpression =
  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

const LoginPage = () => {
  const { authorized, error, loading, login, logout, setError, setLoading } =
    useAuth();

  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (values: LoginFormValues) => {
    try {
      setLoading(true);

      const response = await axios.post("", values);

      const { token } = response.data;

      // Update authentication state and store the token
      login(token);

      console.log("Login successful!");
    } catch (error: any) {
      if (error.response) {
        // API error
        console.log("Login error:", error.response.data.message);
        setError(error.response.data.message);
      } else {
        // Other error
        console.log("An error occurred during login");
        setError("An error occurred during login");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      {authorized ? (
        <div>
          <p>You are already logged in.</p>
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
            initialValues={{ email: "", password: "" }}
            validationSchema={Yup.object({
              email: Yup.string()
                .email("Invalid email")
                .required("Email is required"),
              password: Yup.string()
                .min(8, "Password must be at least 8 characters long")
                .matches(regularExpression, "Invalid Password")
                .required("Password is required"),
            })}
            onSubmit={(values) => handleLogin(values)}
          >
            <Form>
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
                    className="cursor-pointer rounded p-2"
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
              <button
                type="submit"
                disabled={loading}
                className="mt-8 h-14 w-[22.5rem] rounded-full bg-blue-500 px-4 py-2 text-lg text-white"
              >
                {loading ? "دخول..." : "دخول"}
              </button>
              {error && <p className="mt-2 text-red-500">{error}</p>}
            </Form>
          </Formik>
        </div>
      )}
    </div>
  );
};

export default LoginPage;