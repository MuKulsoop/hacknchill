import React from "react";
import { useState } from "react";
import { API } from "../services/api.js";
const SignupInitialValues = {
  type: "",
  first_name: "",
  last_name: "",
  email: "",
  mobile: "",
  password: "",
};

function SignupPage() {
  const [signup, setSignup] = useState(SignupInitialValues);
  const [error, seterror] = useState("");

  const onValueChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
    console.log(signup);
  };

  const signUpUser = async () => {
    console.log(signup)
    let response = await API.userSignUp(signup);
    if (response.isSuccess) {
      setSignup(SignupInitialValues);
      toggleAccount("login");
      seterror("");
    } else {
      seterror("Something went wrong. Please try again later. ");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-600 p-5">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">
          Create an Account
        </h2>
        <form>
          <div className="mb-6">
            <label
              htmlFor="first_name"
              className="block text-gray-800 text-sm font-semibold mb-2"
            >
              First Name
            </label>
            <input
              onChange={(e) => onValueChange(e)}
              name="first_name"
              id="first_name"
              type="text"
              className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:border-purple-500"
              placeholder="Enter your full name"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="last_name"
              className="block text-gray-800 text-sm font-semibold mb-2"
            >
              Last Name
            </label>
            <input
              onChange={(e) => onValueChange(e)}
              name="last_name"
              id="last_name"
              type="text"
              className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:border-purple-500"
              placeholder="Enter your full name"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="mobile"
              className="block text-gray-800 text-sm font-semibold mb-2"
            >
              Mobile No.
            </label>
            <input
              onChange={(e) => onValueChange(e)}
              name="mobile"
              id="mobile"
              type="tel"
              className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:border-purple-500"
              placeholder="Enter your full name"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-gray-800 text-sm font-semibold mb-2"
            >
              Email Address
            </label>
            <input
              onChange={(e) => onValueChange(e)}
              name="email"
              id="email"
              type="email"
              className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:border-purple-500"
              placeholder="Enter your email address"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-800 text-sm font-semibold mb-2"
            >
              Password
            </label>
            <input
              onChange={(e) => onValueChange(e)}
              name="password"
              id="password"
              type="password"
              className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:border-purple-500"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="last_name"
              className="block text-gray-800 text-sm font-semibold mb-2"
            >
              Register As:
            </label>
            <select
              onChange={(e) => onValueChange(e)}
              name="type"
              id="type"
              className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:border-purple-500"
            >
              <option value="customer" disabled defaultValue hidden>
                Choose
              </option>
              <option value="manufacturer">Customer</option>
              <option value="customer">Seller</option>
              
              {/* Add more options as needed */}
            </select>
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 px-6 rounded-lg w-full focus:outline-none"
            onClick={() => signUpUser()}
          >
            Sign Up
          </button>
        </form>
        <p className="text-gray-600 text-center text-sm mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-purple-500 hover:text-purple-700">
            Login now
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignupPage;
