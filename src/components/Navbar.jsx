import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = ["Home", "About", "Services", "Projects", "Contact"];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/90 shadow-lg backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className={`text-3xl font-extrabold tracking-wide transition-colors ${
            isScrolled ? "text-gray-900" : "text-white"
          }`}
        >
          Tanwar<span className="text-blue-400">Construction</span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-10 items-center">
          {navLinks.map((link) => (
            <li key={link} className="relative group">
              <Link
                to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                className={`text-base font-semibold tracking-wide transition-colors duration-300 ${
                  isScrolled ? "text-gray-900" : "text-white"
                } group-hover:text-blue-400`}
              >
                {link}
              </Link>
              {/* Underline Animation */}
              <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-[2px] bg-blue-400 transition-all duration-300 rounded-full"></span>
            </li>
          ))}

          {/* Book Appointment Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/contact")}
            className={`ml-6 font-semibold px-6 py-2.5 rounded-full shadow-md transition-all duration-300 ${
              isScrolled
                ? "bg-blue-500 text-white hover:bg-blue-600"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            Book Appointment
          </motion.button>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {menuOpen ? (
            <FaTimes
              onClick={() => setMenuOpen(false)}
              className={`text-3xl cursor-pointer transition-colors ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}
            />
          ) : (
            <FaBars
              onClick={() => setMenuOpen(true)}
              className={`text-3xl cursor-pointer transition-colors ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={
          menuOpen
            ? { height: "auto", opacity: 1 }
            : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={`md:hidden overflow-hidden ${
          isScrolled
            ? "bg-white/95 shadow-lg backdrop-blur-md"
            : "bg-blue-900/90"
        }`}
      >
        <ul className="flex flex-col items-center space-y-6 py-6">
          {navLinks.map((link) => (
            <li key={link} className="relative group">
              <Link
                to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className={`text-lg font-semibold transition-colors ${
                  isScrolled ? "text-gray-900" : "text-white"
                } group-hover:text-blue-400`}
              >
                {link}
              </Link>
              <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-[2px] bg-blue-400 transition-all duration-300 rounded-full"></span>
            </li>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              navigate("/contact");
              setMenuOpen(false);
            }}
            className={`font-semibold px-8 py-2.5 rounded-full shadow-md transition-all duration-300 ${
              isScrolled
                ? "bg-blue-500 text-white hover:bg-blue-600"
                : "bg-blue-400 text-white hover:bg-blue-500"
            }`}
          >
            Get Quote
          </motion.button>
        </ul>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
