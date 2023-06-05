import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";

import { useState } from "react";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

interface LoginFormValues {
  email: string;
  password: string;
}

const regularExpression =
  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

const LoginPage = () => {
  const { error, loading, login, setError, setLoading } = useAuth();

  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (values: LoginFormValues) => {
    try {
      setLoading(true);
      const response = await axios.post(
        "https://student.valuxapps.com/api/login",
        values
      );
      const { token } = response.data.data;
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
          <div className="relative mb-4">
            <label
              htmlFor="email"
              className="mb-1 block text-start text-[1rem] text-[#1D1D35]"
            >
              الايميل
            </label>
            <div className="absolute mr-[0.6rem] mt-[0.4rem] rounded-r p-2">
              <FontAwesomeIcon icon={faEnvelope} className=" text-[#c4c6ca]" />
            </div>
            <Field
              type="email"
              id="email"
              name="email"
              className="h-[50px] w-full rounded-xl border-2 border-[#F2F2F2] p-2 pr-10 text-base outline-none placeholder:text-[#CCD2E3]"
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
              htmlFor="password"
              className="mb-1 block text-start text-[1rem] text-[#1D1D35]"
            >
              كلمة المرور
            </label>
            <div className="flex items-center rounded-xl border-2 border-[#F2F2F2]">
              <div className="absolute mr-[0.6rem] mt-[0.1rem] rounded-r p-2">
                <FontAwesomeIcon icon={faLock} className=" text-[#c4c6ca]" />
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
                className="cursor-pointer rounded p-2"
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
          <button
            type="submit"
            disabled={loading}
            className="mt-8 h-14 w-full rounded-full bg-[#00ADEE] px-4 py-2 text-lg text-white"
          >
            {loading ? "دخول..." : "دخول"}
          </button>
          {error && <p className="mt-2 text-center text-red-500">{error}</p>}
        </Form>
      </Formik>
    </div>
  );
};

export default LoginPage;
