import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaMapMarkerAlt, FaEnvelope, FaPhone, FaClock } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 md:px-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 md:space-x-12">
        {/* Logo and Description */}
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-teal-400">Shree Gajanan Loan Services</h1>
          <p className="text-sm md:text-lg leading-relaxed">
            At Shree Gajanan Loan Services, we are dedicated to providing tailored financial solutions to help you achieve your financial goals. From personal and home loans to business financing, we offer competitive rates and exceptional service.
          </p>
        </div>

        {/* Contact Information */}
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-4 text-teal-300">Contact Us</h2>
          <ul className="space-y-3">
            <li className="flex items-center text-gray-300 hover:text-teal-400 transition-colors duration-300">
              <FaMapMarkerAlt size={20} className="mr-3" />
              <span>Location: Gujarat, Vadodara</span>
            </li>
            <li className="flex items-center text-gray-300 hover:text-teal-400 transition-colors duration-300">
              <FaEnvelope size={20} className="mr-3" />
              <a href="mailto:roshanfiremarshal@gmail.com" className="underline">roshanfiremarshal@gmail.com</a>
            </li>
            <li className="flex items-center text-gray-300 hover:text-teal-400 transition-colors duration-300">
              <FaPhone size={20} className="mr-3" />
              <a href="tel:+919033409781" className="underline">+91 9033409781</a>
            </li>
            <li className="flex items-center text-gray-300 hover:text-teal-400 transition-colors duration-300">
              <FaClock size={20} className="mr-3" />
              <span>Mon - Fri: 9 AM - 6 PM</span>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-4 text-teal-300">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/shreegananloanservices" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-teal-400 transition-transform transform hover:scale-110 duration-300">
              <FaFacebookF size={24} />
            </a>
            <a href="https://twitter.com/shreegananloan" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-teal-400 transition-transform transform hover:scale-110 duration-300">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.linkedin.com/company/shree-ganan-loan-services" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-teal-400 transition-transform transform hover:scale-110 duration-300">
              <FaLinkedinIn size={24} />
            </a>
            <a href="https://www.instagram.com/shreegananloanservices" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-teal-400 transition-transform transform hover:scale-110 duration-300">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center mt-8 border-t border-gray-700 pt-4">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Shree Gajanan Loan Services. All rights reserved. | 
          <a href="/privacy-policy" className="underline text-teal-400 hover:text-teal-300 transition-colors duration-300"> Privacy Policy</a> | 
          <a href="/terms-of-service" className="underline text-teal-400 hover:text-teal-300 transition-colors duration-300"> Terms of Service</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
