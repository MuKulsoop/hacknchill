import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  const handleLoginButtonClick = () => {
    setShowModal(true);
  };

  const handleLoginOptionClick = (option) => {
    // Handle login option click (e.g., redirect to the respective login page)
    console.log("Selected option:", option);
    setShowModal(false);
  };
  return (
    <nav>
      <ul className="items">
        <Link to="/home">
          <div className="logo">
            <img src="/images/logo.png" alt="" />
          </div>
        </Link>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link
            to="/posts"
            className="flex flex-row justify-evenly items-center rounded-sm"
          >
            Products<ion-icon name="chevron-down-outline"></ion-icon>
          </Link>
          <ul>
            <li>
              <Link to="#" className="link">
                Product{" "}
              </Link>
            </li>
            <li>
              <Link to="#" className="link">
                Product{" "}
              </Link>
            </li>
            <li>
              <Link to="#" className="link">
                Product{" "}
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/contact">Consult Us</Link>
        </li>
        <li>
          <Link to="#">Pricing </Link>
        </li>
        <li>
          <Link
            to="/home"
            className="flex flex-row justify-evenly items-center"
          >
            Resources <ion-icon name="chevron-down-outline"></ion-icon>
          </Link>
          <ul>
            <li>
              <Link to="#" className="link">
                Resources{" "}
              </Link>
            </li>
            <li>
              <Link to="#" className="link">
                Resources{" "}
              </Link>
            </li>
            <li>
              <Link to="#" className="link">
                Resources{" "}
              </Link>
            </li>
          </ul>
        </li>
      </ul>
      <div className="flex flex-row items-center justify-centre">
        <div className="customer-dropdown">
          <Link to="/details" className="customer">
            <ion-icon name="earth-outline"></ion-icon>Customer
            <ion-icon name="chevron-down-outline"></ion-icon>
          </Link>
        </div>
        <div>{/* Modal */}</div>
        <div className="customer-dropdown">
          <Link to="/home" className="signUp" onClick={handleLoginButtonClick}>
            Log In
          </Link>
          {showModal && (
            <div className="modal fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 ">
              <div className="modal-content bg-white p-8 rounded shadow-md">
                <h2 className="text-2xl font-semibold mb-4">
                  Login As :
                </h2>
                <Link
                  to="/login"
                  className="block w-full py-2 px-4 mb-2 bg-[#005D9C] text-white font-bold rounded hover:bg-blue-800 focus:outline-none focus:shadow-outline"
                  onClick={() => handleLoginOptionClick("Customer")}
                >
                  Seller
                </Link>
                <Link
                  to="/login"
                  className="block w-full py-2 px-4 bg-gray-300 text-gray-800 font-bold rounded hover:bg-gray-400 focus:outline-none focus:shadow-outline"
                  onClick={() => handleLoginOptionClick("Manufacturer")}
                >
                  Customer 
                </Link>
                {/* Close button */}
                <button
                  className="absolute top-0 right-0 mt-2 mr-2 text-gray-600 hover:text-gray-800"
                  onClick={() => setShowModal(false)}
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          )}
          <Link to="/signup" className="signUp" >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
