import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  
  const [isOpen, setIsOpen] = useState(false);
  const handleLoginButtonClick = () => {
    setShowModal(true);
  };

  const handleLoginOptionClick = (option) => {
    // Handle login option click (e.g., redirect to the respective login page)
    console.log('Selected option:', option);
    setShowModal(false)
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
      <Link
        to="/contact"
        className="customer flex items-center text-gray-800 hover:text-gray-600"
        onClick={toggleDropdown}
      >
        <ion-icon name="earth-outline" className="mr-1"></ion-icon>
        Customer
        <ion-icon name="chevron-down-outline" className="ml-1"></ion-icon>
      </Link>
      {/* Dropdown Content */}
      <ul className={`absolute ${isOpen ? 'block' : 'hidden'} bg-gray-300 shadow-md py-2 rounded-md mt-5 w-40 text-gray-800 customer-dropdown-menu`}>
        <li><Link to="#" className="block px-4 py-2 hover:bg-gray-100">Resources</Link></li>
        <li><Link to="#" className="block px-4 py-2 hover:bg-gray-100">Resources</Link></li>
        <li><Link to="#" className="block px-4 py-2 hover:bg-gray-100">Resources</Link></li>
      </ul>
    </div>

      
    </div>
        <div className="customer-dropdown">
        <Link to="/home" className="signUp" onClick={handleLoginButtonClick}>
            Log In
          </Link>
        
      
          <Link to="/signup" className="signUp">
            Sign Up
          </Link>
        </div>
    
      
    </nav>
  );
};

export default Navbar;
