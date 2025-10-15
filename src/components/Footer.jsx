import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a] text-gray-400 px-6 py-12">
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-4">
        {/* Logo / Company Name */}
        <div className="flex flex-col space-y-4">
          <h1 className="text-2xl font-bold text-[#facc15]">Tanwar Construction</h1>
          <p className="text-gray-400 text-sm">
            Building dreams with precision and excellence.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-[#facc15] font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="block w-full hover:text-[#facc15] transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block w-full hover:text-[#facc15] transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="block w-full hover:text-[#facc15] transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="block w-full hover:text-[#facc15] transition-colors"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block w-full hover:text-[#facc15] transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-[#facc15] font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/services#residential"
                className="block w-full hover:text-[#facc15] transition-colors"
              >
                Residential
              </Link>
            </li>
            <li>
              <Link
                to="/services#commercial"
                className="block w-full hover:text-[#facc15] transition-colors"
              >
                Commercial
              </Link>
            </li>
            <li>
              <Link
                to="/services#infrastructure"
                className="block w-full hover:text-[#facc15] transition-colors"
              >
                Infrastructure
              </Link>
            </li>
            <li>
              <Link
                to="/services#design"
                className="block w-full hover:text-[#facc15] transition-colors"
              >
                Design
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-[#facc15] font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>123 Main Street, Jaipur, India</li>
            <li>Email: info@tanwarconstruction.com</li>
            <li>Phone: +91 81049 42875</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center text-gray-500 text-sm">
        © 2025 Tanwar Construction. All Rights Reserved.
      </div>

      {/* Floating Right Side Icons */}
      <div className="fixed bottom-16 right-6 flex flex-col space-y-4">
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#E1306C] p-4 rounded-full shadow-lg text-white hover:scale-110 transition-transform"
        >
          <FaInstagram size={20} />
        </a>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#1877F2] p-4 rounded-full shadow-lg text-white hover:scale-110 transition-transform"
        >
          <FaFacebookF size={20} />
        </a>
        <a
          href="https://wa.me/91810492875"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] p-4 rounded-full shadow-lg text-white hover:scale-110 transition-transform"
        >
          <FaWhatsapp size={20} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
