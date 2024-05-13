import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showModal, setShowModal] = useState(false);

  const handleLoginButtonClick = () => {
    setShowModal(true);
  };

  const handleLoginOptionClick = (option) => {
    // Handle login option click (e.g., redirect to the respective login page)
    console.log("Selected option:", option);
    setShowModal(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-100 text-black flex justify-between items-center p-4 relative">
      <div className="logo flex flex-row">
        <Link to='/'>
          <img src="https://res.cloudinary.com/djoebsejh/image/upload/v1715609494/Prescription_Testres/gjrmf6kwvf74khab1fgr.png" alt="" className="w-12 h-12" />
        </Link>

        <ul className={"mx-5 flex items-center " + ((isMobileMenuOpen || windowWidth <= 1025) ? 'hidden' : 'block')}>
          <li className="relative mx-2">
            <Link to="/">Home</Link>
          </li>
          <li className="relative mx-2">
            <Link to="/posts" className="flex items-center">
              Products<ion-icon name="chevron-down-outline" className="ml-1"></ion-icon>
            </Link>
            <ul className="absolute hidden bg-gray-200 shadow-md py-2 px-2 rounded-md mt-5 w-35 text-gray-800">
              <li><Link to="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md">Product</Link></li>
              <li><Link to="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md">Product</Link></li>
              <li><Link to="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md">Product</Link></li>
            </ul>
          </li>
          <li className="relative mx-2">
            <Link to="/contact">Consult Us</Link>
          </li>
          <li className="relative mx-2">
            <Link to="#">Pricing</Link>
          </li>
          <li className="relative mx-2">
            <Link to="/details" className="flex items-center">Resources<ion-icon name="chevron-down-outline" className="ml-2"></ion-icon></Link>
            <ul className="absolute hidden bg-gray-200 shadow-md py-2 px-2 rounded-md mt-5 w-35 text-gray-800">
              <li><Link to="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md">Resources</Link></li>
              <li><Link to="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md">Resources</Link></li>
              <li><Link to="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md">Resources</Link></li>
            </ul>
          </li>
        </ul>

      </div>

      {/* Mobile Menu Button */}
      <button className="menuButton lg:hidden flex items-center justify-center" onClick={toggleMobileMenu}>
        <ion-icon name={isMobileMenuOpen ? "close" : "menu-outline"} className="text-white text-2xl"></ion-icon>
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobileMenu bg-gray-100 h-[90vh] p-10 sm:w-[500px] lg:w-full  absolute top-[10vh] right-0 flex flex-col items-center justify-center text-2xl transition-all duration-400 z-10">
          <ul className="text-center">
            <li className="my-4">
              <Link to="/" onClick={toggleMobileMenu}>Home</Link>
            </li>
            <li className="my-4">
              <Link to="/posts" onClick={toggleMobileMenu}>Products</Link>
            </li>
            <li className="my-4">
              <Link to="/contact" onClick={toggleMobileMenu}>Consult Us</Link>
            </li>
            <li className="my-4">
              <Link to="#" onClick={toggleMobileMenu}>Pricing</Link>
            </li>
            <li className="my-4">
              <Link to="/details" onClick={toggleMobileMenu}>Resources</Link>
            </li>
            <div className="customer-dropdown flex items-center text-gray-800 hover:text-gray-600 my-4" onClick={toggleMobileMenu}>
            <Link to="/contact" className="customer flex items-center">
              <ion-icon name="earth-outline" className="mr-1"></ion-icon>
              Customer
              <ion-icon name="chevron-down-outline" className="ml-1"></ion-icon>
            </Link>
            <ul className="absolute hidden bg-gray-200 shadow-md py-2 px-2 rounded-md mt-5 w-35 text-gray-800 customer-dropdown-menu top-5 flex items-center">
              <li><Link to="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md">Seller</Link></li>
            </ul>
          </div>
          <Link to="/login" className="logIn my-4" onClick={handleLoginButtonClick & toggleMobileMenu}>Log In</Link>
          <Link to="/signup" className="signUp my-4" onClick={toggleMobileMenu}>Sign Up</Link>
          </ul>
        </div>
      )}

      <div className="hidden lg:flex items-center">
        <div className="relative">
          <div className="customer-dropdown flex items-center text-gray-800 hover:text-gray-600">
            <Link to="/contact" className="customer flex items-center">
              <ion-icon name="earth-outline" className="mr-1"></ion-icon>
              Customer
              <ion-icon name="chevron-down-outline" className="ml-1"></ion-icon>
            </Link>
            <ul className="absolute hidden bg-gray-200 shadow-md py-2 px-2 rounded-md mt-5 w-35 text-gray-800 customer-dropdown-menu top-5 flex items-center">
              <li><Link to="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md">Seller</Link></li>
            </ul>
          </div>
        </div>
        <div className="customer-dropdown">
          <Link to="/login" className="logIn" onClick={handleLoginButtonClick}>Log In</Link>
          <Link to="/signup" className="signUp">Sign Up</Link>
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
