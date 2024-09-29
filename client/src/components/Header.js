import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaBell,
} from "react-icons/fa";
import { FiMail, FiClock, FiPhone, FiMenu, FiX } from "react-icons/fi";
import logo from "../images/agency-Logo.png"; // Ensure the correct path

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-gradient-to-r from-blue-700 via-teal-500 to-teal-600 text-white shadow-md fixed w-full top-0 left-0 z-50 transition-colors">
      <div className="container mx-auto px-4 py-2 border-b border-gray-700">
        <div className="flex justify-between items-center text-sm">
          {/* Mobile View Top Bar */}
          <div className="md:hidden flex flex-col space-y-2">
            <div className="flex items-center text-gray-200">
              <FiMail className="mr-2" />
              <a
                href="mailto:roshanfiremarshal@gmail.com"
                className="hover:underline"
              >
                roshanfiremarshal@gmail.com
              </a>
            </div>
            <a
              href="tel:+919033409781"
              className="flex items-center text-gray-200 cursor-pointer"
            >
              <FiPhone className="mr-2" />
              <span>+91 9033409781</span>
            </a>
          </div>

          {/* Desktop View Top Bar */}
          <div className="hidden md:flex justify-between w-full">
            <div className="flex space-x-4 text-gray-200">
              <a
                href="https://www.facebook.com/roshan.chauhan.3705?mibextid=ZbWKwL"
                className="transition-transform transform hover:scale-110 hover:text-gray-300"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="/twitter"
                className="transition-transform transform hover:scale-110 hover:text-gray-300"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="/linkedin"
                className="transition-transform transform hover:scale-110 hover:text-gray-300"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.instagram.com/_rosh_11_03?igsh=YzJ1aDI1MTZhOWYw"
                className="transition-transform transform hover:scale-110 hover:text-gray-300"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
            <div className="flex space-x-4 text-gray-200">
              <a href="/apply" className="transition-colors hover:text-gray-300">
                Best Loan Services Provider
              </a>
              <span>/</span>
              <a href="/faqs" className="transition-colors hover:text-gray-300">
                FAQs
              </a>
            </div>
            <div className="flex items-center space-x-4 text-gray-200">
              <div className="flex items-center">
                <FiMail className="mr-2" />
                <a
                  href="mailto:roshanfiremarshal@gmail.com"
                  className="hover:underline"
                >
                  roshanfiremarshal@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <FiClock className="mr-2" />
                <span>AnyTime 9:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>

          {/* Mobile Menu Icon */}
          <button
            className="md:hidden p-2 transition-transform transform hover:scale-110"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white text-gray-800 shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo Section */}
          <Link to="/" className="text-2xl font-bold">
            <img
              src={logo}
              alt="Logo"
              className="w-[210px] h-[50px] transition-transform duration-500 ease-in-out hover:scale-110 hover:shadow-lg"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link
              smooth
              to="#"
              className="relative transition-colors hover:text-teal-500 group"
            >
              Home
            </Link>
            <Link
              smooth
              to="#about-us"
              className="relative transition-colors hover:text-teal-500 group"
            >
              About Us
            </Link>
            <Link
              smooth
              to="#services"
              className="relative transition-colors hover:text-teal-500 group"
            >
              Services
            </Link>
            <Link
              smooth
              to="/feedback"
              className="relative transition-colors hover:text-teal-500 group"
            >
              Feedback
            </Link>
            <Link
              smooth
              to="#testimonials"
              className="relative transition-colors hover:text-teal-500 group"
            >
              Testimonials
            </Link>
            <Link
              smooth
              to="#contact-us"
              className="relative transition-colors hover:text-teal-500 group"
            >
              Contact Us
            </Link>
          </div>

          {/* Notification Bell and Contact */}
          <div className="flex items-center space-x-4">
            {/* Notification Bell */}
            <Link to="/notification">
              <button
                className="transition-colors hover:text-teal-500 p-2 rounded-full hover:bg-gray-200"
                aria-label="Notifications"
              >
                <FaBell size={24} />
              </button>
            </Link>

            {/* Phone Contact */}
            <a href="tel:9033409781" className="hidden md:flex items-center">
              <FiPhone className="mr-2 text-teal-500" />
              <span className="text-gray-800">+91 9033409781</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white text-gray-800 p-6 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end">
          <button onClick={toggleMenu} aria-label="Close Menu">
            <FiX size={24} />
          </button>
        </div>
        <div className="mt-6 flex flex-col space-y-4">
          <Link smooth to="#" className="text-lg font-semibold" onClick={toggleMenu}>
            Home
          </Link>
          <Link smooth to="#about-us" className="text-lg font-semibold" onClick={toggleMenu}>
            About Us
          </Link>
          <Link smooth to="#services" className="text-lg font-semibold" onClick={toggleMenu}>
            Services
          </Link>
          <Link smooth to="/feedback" className="text-lg font-semibold" onClick={toggleMenu}>
            Feedback
          </Link>
          <Link smooth to="#testimonials" className="text-lg font-semibold" onClick={toggleMenu}>
            Testimonials
          </Link>
          <Link smooth to="#contact-us" className="text-lg font-semibold" onClick={toggleMenu}>
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
