import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black py-8 text-white border-t border-gray-700 font-['DM_Sans']">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Company Info */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h4 className="text-2xl font-bold mb-2">3D.XYZ</h4>
            <p className="text-gray-300">
              Your one-stop destination for thoughtful and unique gifts.
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mb-6 md:mb-0">
            <a
              href="https://www.facebook.com/3dxzy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://www.instagram.com/3dxzy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.twitter.com/3dxzy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition"
            >
              <FaTwitter size={24} />
            </a>
          </div>

          {/* Contact Information */}
          <div className="text-center md:text-right">
            <h5 className="text-xl font-semibold mb-2">Contact Us</h5>
            <p className="text-gray-300">
              3181 Street Name, City, India
              <br />
              Email:{' '}
              <a href="mailto:support@3dxzy.com" className="hover:underline text-white">
                support@3dxzy.com
              </a>
              <br />
              Phone:{' '}
              <a href="tel:+911234567890" className="hover:underline text-white">
                +91 1234567890
              </a>
            </p>
          </div>
        </div>

        {/* Additional Links */}
        <div className="mt-6 flex flex-col md:flex-row justify-center md:justify-end space-y-2 md:space-y-0 md:space-x-6">
          <a href="/privacy" className="text-white hover:text-gray-400 transition">
            Privacy Policy
          </a>
          <a href="/terms" className="text-white hover:text-gray-400 transition">
            Terms of Service
          </a>
          <a href="/about" className="text-white hover:text-gray-400 transition">
            About Us
          </a>
        </div>
      </div>
      <div className="mt-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} 3D.XYZ. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;