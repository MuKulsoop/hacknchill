import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul className="items">
      <Link to="/home"><div className="logo"><img src="/images/logo.png" alt="" /></div></Link>
        <li>
          <Link to="/" className="flex flex-row justify-evenly items-center">Products<ion-icon name="chevron-down-outline"></ion-icon></Link>
          <ul>
            <li><Link to="#" className="link">Product </Link></li>
            <li><Link to="#" className="link">Product </Link></li>
            <li><Link to="#" className="link">Product </Link></li>
          </ul>
        </li>
        <li><Link to="#">Consult Us</Link></li>
        <li><Link to="#">Pricing </Link></li>
        <li>
          <Link to="/details" className="flex flex-row justify-evenly items-center">Resources <ion-icon name="chevron-down-outline"></ion-icon></Link>
          <ul>
            <li><Link to="#" className="link">Resources </Link></li>
            <li><Link to="#" className="link">Resources </Link></li>
            <li><Link to="#" className="link">Resources </Link></li>
          </ul>
        </li>
      </ul>
      <div className="flex flex-row items-center justify-centre">
      <div className="customer-dropdown">
        <Link to="/contact" className="customer"><ion-icon name="earth-outline"></ion-icon>Customer<ion-icon name="chevron-down-outline"></ion-icon></Link>
      </div>
      <div className="customer-dropdown">
        <Link to="/log-in" className="logIn">Log In</Link>
      </div>
      <div className="customer-dropdown">
        <Link to="/sign-up" className="signUp">Sign Up</Link>
      </div>
      </div>
      
    </nav>
  );
};

export default Navbar;
