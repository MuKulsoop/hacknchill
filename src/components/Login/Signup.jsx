import React from "react";

function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-600">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">
          Create an Account
        </h2>
        <form>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-gray-800 text-sm font-semibold mb-2"
            >
              Full Name
            </label>
            <input
              id="name"
              type="text"
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
              id="password"
              type="password"
              className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:border-purple-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 px-6 rounded-lg w-full focus:outline-none"
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
