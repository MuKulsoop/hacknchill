import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-8 px-10 flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 ">
          {/* About Us */}
          <div>
            <h2 className="text-lg font-bold mb-4 ml-4">About Us</h2>
            <ul className="flex flex-col items-start mx-5 text-sm">
              <li>
                <Link to="/sign-up" className="text-white text-sm">
                  How it works
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/games" className="text-white">
                  Games
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white">
                  Sources
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-white">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h2 className="text-lg font-bold mb-4">Contact Us</h2>
            <ul className="flex flex-col items-start text-sm">
              <li>
                <Link to="/contact" className="text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-white">
                  Support
                </Link>
              </li>
              <li>
                <Link to="/report-bug" className="text-white">
                  Report a Bug
                </Link>
              </li>
            </ul>
          </div>

          {/* Games */}
          <div>
            <h2 className="text-lg font-bold mb-4">Games</h2>
            <ul className="flex flex-col items-start text-sm">
              <li>
                <Link to="/suggest-games" className="text-white">
                  Suggest Games
                </Link>
              </li>
              <li>
                <Link to="/games/minecraft" className="text-white">
                  Minecraft
                </Link>
              </li>
              <li>
                <Link to="/games/play-together" className="text-white">
                  Play Together
                </Link>
              </li>
              <li>
                <Link to="/games/influencer" className="text-white">
                  Influencer
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h2 className="text-lg font-bold mb-4">Social Media</h2>
            <ul className="flex flex-col items-start text-sm">
              <li>
                <a
                  href="https://instagram.com"
                  className="text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com"
                  className="text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com"
                  className="text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Youtube
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  className="text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-800 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link
            to="/home"
            className="text-xl font-bold text-white flex flex-row items-center"
          >
            {/* <img src="/images/logo.png" alt="" className='h-5 w-5 mx-2'/> */}
            ThreadHive
          </Link>
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} ThreadHive
          </p>
          <div className="social-icons">
            <a
              href="https://facebook.com"
              className="social-icon-link"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
            <a
              href="https://instagram.com"
              className="social-icon-link"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
            <a
              href="https://youtube.com"
              className="social-icon-link"
              aria-label="Youtube"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ion-icon name="logo-youtube"></ion-icon>
            </a>
            <a
              href="https://linkedin.com"
              className="social-icon-link"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
