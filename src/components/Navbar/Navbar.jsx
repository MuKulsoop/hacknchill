import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul className="items">
      <Link to="/home"><div className="logo"><img src="/logo.png" alt="" /></div></Link>
        <li>
          <Link to="/" className="link">Products</Link>
          <ul>
            <li><Link to="#" className="link">Product </Link></li>
            <li><Link to="#" className="link">Product </Link></li>
            <li><Link to="#" className="link">Product </Link></li>
          </ul>
        </li>
        <li><Link to="#">Consult Us</Link></li>
        <li><Link to="#">Pricing </Link></li>
        <li>
          <Link to="#">Resources</Link>
          <ul>
            <li><Link to="#" className="link">Resources </Link></li>
            <li><Link to="#" className="link">Resources </Link></li>
            <li><Link to="#" className="link">Resources </Link></li>
          </ul>
        </li>
      </ul>
      <div className="customer-dropdown">
        <Link to="/contact" className="customer"><ion-icon name="globe"></ion-icon>Customer</Link>
      </div>
    </nav>
  );
};

export default Navbar;
