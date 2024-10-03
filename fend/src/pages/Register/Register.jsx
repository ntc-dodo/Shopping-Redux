import { React, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faUser,
  faLock,
  faHouse,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";

import { baseUrl } from "../../config";

const Register = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    confirmpassword: "",
    firstname: "",
    lastname: "",
    age: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const url = `${baseUrl}/register`;
      const res = await axios.post(url, data);
      Swal.fire({
        icon: "success",
        title: "Sign Up successful!",
        text: res.data.message,
        timer: 2000,
        showConfirmButton: false,
      }).then(() => {
        // Redirect to sign-in page after SweetAlert is closed
      });
    } catch (error) {
      console.error("Error signing up:", error);
      if (error.res && error.res.status >= 400 && error.res.status <= 500) {
        setError(error.res.data.message);
      }
    } finally {
      // Set loading state to false after completing
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen flex  justify-center ">
      <div className="max-w-[950px] w-full h-[450px] bg-white mt-10">
        <div className=" bg-white">
          <div className="flex justify-center ">
            <h1>Register</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col justify-center items-center">
              <div className="relative mt-5 flex items-center">
                <label
                  htmlFor="email"
                  className="text-black text-md bg-white px-1 rounded-lg"
                >
                  <FontAwesomeIcon icon={faUser} className="p-2" />
                </label>
                <div className="w-64 lg:w-80">
                  <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="block w-full bg-slate-50 rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={handleChange}
                    value={data.email}
                  />
                </div>
              </div>
              <div className="relative mt-5 flex items-center">
                <label
                  htmlFor="password"
                  className="text-black text-md bg-white px-1 rounded-lg"
                >
                  <FontAwesomeIcon icon={faLock} className="p-2" />
                </label>
                <div className="w-64 lg:w-80">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="password"
                    name="password"
                    onChange={handleChange}
                    value={data.password}
                    className="block w-full bg-slate-50 rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)} // Toggle showPassword state
                    className="absolute inset-y-0 right-0 flex items-center pr-3"
                  >
                    {showPassword ? (
                      <FontAwesomeIcon icon={faEye} className="size-4" />
                    ) : (
                      <FontAwesomeIcon icon={faEyeSlash} className="size-4" />
                    )}
                  </button>
                </div>
              </div>
              <div className="relative mt-5 flex items-center">
                <label
                  htmlFor="confirmpassword"
                  className="text-black text-md bg-white px-1 rounded-lg"
                >
                  <FontAwesomeIcon icon={faLock} className="p-2" />
                </label>
                <div className="w-64 lg:w-80">
                  <input
                    type="password"
                    placeholder="confirmpassword"
                    name="confirmpassword"
                    onChange={handleChange}
                    value={data.confirmpassword}
                    className="block w-full bg-slate-50 rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="relative mt-5 flex items-center">
                <label
                  htmlFor="firstname"
                  className="text-black text-md bg-white px-1 rounded-lg"
                >
                  <FontAwesomeIcon icon={faUser} className="p-2" />
                </label>
                <div className="w-64 lg:w-80">
                  <input
                    type="text"
                    placeholder="firstname"
                    name="firstname"
                    onChange={handleChange}
                    value={data.firstname}
                    className="block w-full bg-slate-50 rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="relative mt-5 flex items-center">
                <label
                  htmlFor="lastname"
                  className="text-black text-md bg-white px-1 rounded-lg"
                >
                  <FontAwesomeIcon icon={faUser} className="p-2" />
                </label>
                <div className="w-64 lg:w-80">
                  <input
                    type="text"
                    placeholder="lastname"
                    name="lastname"
                    className="block w-full bg-slate-50 rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={handleChange}
                    value={data.lastname}
                  />
                </div>
              </div>
              <div className="relative mt-5 flex items-center">
                <label
                  htmlFor="age"
                  className="text-black text-md bg-white px-1 rounded-lg"
                >
                  <FontAwesomeIcon icon={faUser} className="p-2" />
                </label>
                <div className="w-64 lg:w-80">
                  <input
                    type="number"
                    placeholder="age"
                    name="age"
                    className="block w-full bg-slate-50 rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={handleChange}
                    value={data.age}
                  />
                </div>
              </div>
            </div>

            {error && (
              <div className="bg-red-500 text-white p-3 rounded-md">
                {error}
              </div>
            )}
            <div className="flex justify-center items-center mt-10">
              <button
                type="submit"
                className="bg-green-500 text-white py-3 rounded-md w-[200px] hover:bg-green-600 transition duration-300"
                disabled={loading} // Disable the button when loading is true
              >
                {loading ? "Loading..." : "Sign Up"}{" "}
                {/* Show Loading... text when loading is true */}
              </button>
            </div>
          </form>
          <div className="mt-10">
            <p className="text-center">
              have account ?{" "}
              <Link to={"/login"} className="text-blue-400 hover:underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;