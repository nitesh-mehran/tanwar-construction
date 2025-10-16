import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-blue-950 via-blue-900 to-blue-800 text-blue-100 px-6 py-16">
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-4">
        {/* Logo / Company Name */}
        <div className="flex flex-col space-y-4">
          <h1 className="text-3xl font-extrabold text-yellow-400">
            Tanwar Construction
          </h1>
          <p className="text-blue-200 text-sm">
            Building dreams with precision and excellence.
          </p>

         
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-yellow-400 font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/services", label: "Services" },
              { to: "/projects", label: "Projects" },
              { to: "/contact", label: "Contact" },
            ].map((link, i) => (
              <li key={i}>
                <Link
                  to={link.to}
                  className="block text-blue-100 hover:text-yellow-400 transition-all duration-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-yellow-400 font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            {[
              { to: "/services#residential", label: "Residential" },
              { to: "/services#commercial", label: "Commercial" },
              { to: "/services#infrastructure", label: "Infrastructure" },
              { to: "/services#design", label: "Design" },
            ].map((service, i) => (
              <li key={i}>
                <Link
                  to={service.to}
                  className="block text-blue-100 hover:text-yellow-400 transition-all duration-300"
                >
                  {service.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-yellow-400 font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-blue-200 text-sm">
            <li>EFF 42, Capital Galleria,
Sirsi Road, Jaipur 302034,
Rajasthan, India</li>
            <li>Email: info@tanwarconstruction.com</li>
            <li>Phone: +91 81049 42875</li>
          </ul>
           {/* Social Icons inside Footer */}
          <div className="flex space-x-4 mt-2">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-pink-500 via-pink-600 to-pink-500 p-3 rounded-full shadow-lg text-white hover:scale-110 hover:shadow-yellow-400/60 transition-transform duration-300"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-600 p-3 rounded-full shadow-lg text-white hover:scale-110 hover:shadow-yellow-400/60 transition-transform duration-300"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href="https://wa.me/91810492875"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-green-500 via-green-600 to-green-500 p-3 rounded-full shadow-lg text-white hover:scale-110 hover:shadow-yellow-400/60 transition-transform duration-300"
            >
              <FaWhatsapp size={18} />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-blue-400 via-blue-500 to-blue-400 p-3 rounded-full shadow-lg text-white hover:scale-110 hover:shadow-yellow-400/60 transition-transform duration-300"
            >
              <FaLinkedinIn size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 text-center text-blue-300 text-sm border-t border-blue-700 pt-4">
        © 2025 Tanwar Construction. All Rights Reserved.
      </div>

      {/* Floating Right Side Social Icons */}
      <div className="fixed bottom-16 right-6 flex flex-col space-y-4 z-50">
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-br from-pink-500 via-pink-600 to-pink-500 p-4 rounded-full shadow-lg text-white hover:scale-110 hover:shadow-yellow-400/60 transition-transform duration-300"
        >
          <FaInstagram size={20} />
        </a>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-600 p-4 rounded-full shadow-lg text-white hover:scale-110 hover:shadow-yellow-400/60 transition-transform duration-300"
        >
          <FaFacebookF size={20} />
        </a>
        <a
          href="https://wa.me/91810492875"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-br from-green-500 via-green-600 to-green-500 p-4 rounded-full shadow-lg text-white hover:scale-110 hover:shadow-yellow-400/60 transition-transform duration-300"
        >
          <FaWhatsapp size={20} />
        </a>
      
      </div>
    </footer>
  );
};

export default Footer;
