import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = ["Home", "About", "Services", "Projects", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className={`text-2xl font-bold tracking-wide transition-colors ${
            isScrolled ? "text-gray-900" : "text-white"
          }`}
        >
          Tawar construction company
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <li key={link}>
              <Link
                to={`/${link.toLowerCase()}`}
                className={`text-sm font-medium transition-colors duration-300 hover:text-yellow-400 ${
                  isScrolled ? "text-gray-900" : "text-white"
                }`}
              >
                {link}
              </Link>
            </li>
          ))}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="ml-4 bg-yellow-400 text-gray-900 font-semibold px-5 py-2 rounded-xl shadow hover:bg-yellow-500 transition-colors"
          >
            Book appointment
          </motion.button>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          {menuOpen ? (
            <FaTimes
              onClick={() => setMenuOpen(false)}
              className={`text-2xl cursor-pointer transition-colors ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}
            />
          ) : (
            <FaBars
              onClick={() => setMenuOpen(true)}
              className={`text-2xl cursor-pointer transition-colors ${
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
          isScrolled ? "bg-white shadow-md" : "bg-gray-900"
        }`}
      >
        <ul className="flex flex-col items-center space-y-5 py-5">
          {navLinks.map((link) => (
            <li key={link}>
              <Link
                to={`/${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className={`text-lg font-medium transition-colors hover:text-yellow-500 ${
                  isScrolled ? "text-gray-900" : "text-white"
                }`}
              >
                {link}
              </Link>
            </li>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-400 text-gray-900 font-semibold px-6 py-2 rounded-full shadow hover:bg-yellow-500 transition-colors"
          >
            Get Quote
          </motion.button>
        </ul>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
