import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);


  const [isOpen, setIsOpen] = useState(false);
  const handleLoginButtonClick = () => {
    setShowModal(true);
  };

  const handleLoginOptionClick = (option) => {
    // Handle login option click (e.g., redirect to the respective login page)
    console.log("Selected option:", option);
    setShowModal(false);
  };
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav>
      <ul className="items">
        <Link to="/home"><div className="logo"><img src="/images/logo.png" alt="" /></div></Link>
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
          <Link to="/details" className="flex flex-row justify-evenly items-center">Resources <ion-icon name="chevron-down-outline"></ion-icon></Link>
          <ul className="relative">
            <li><Link to="#" className="link">Resources </Link></li>
            <li><Link to="#" className="link">Resources </Link></li>
            <li><Link to="#" className="link">Resources </Link></li>
          </ul>
        </li>
      </ul>
      <div className="flex flex-row items-center justify-centre">
      <div className="relative">
      <div className="customer-dropdown flex items-center text-gray-800 hover:text-gray-600">
        <Link to="/contact" className="customer flex items-center">
          <ion-icon name="earth-outline" className="mr-1"></ion-icon>
          Customer
          <ion-icon name="chevron-down-outline" className="ml-1"></ion-icon>
        </Link>
        {/* Dropdown Content */}
        <ul className="absolute hidden bg-gray-200 shadow-md py-2 px-2 rounded-md mt-5 w-35 text-gray-800 customer-dropdown-menu top-5 flex items-center">
          <li><Link to="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md">Seller</Link></li>
        </ul>
      </div>
    </div>
        <div>{/* Modal */}</div>
        <div className="customer-dropdown">
        <Link to="/login" className="logIn" onClick={handleLoginButtonClick}>
          Log In
        </Link>


        <Link to="/signup" className="signUp">
          Sign Up
        </Link>
      </div>
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
        </div>
    </nav>
  );
};

export default Navbar;