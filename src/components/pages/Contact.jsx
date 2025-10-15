import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white text-gray-800">

      {/* Hero Section */}
      <section className="relative w-full h-[50vh] flex items-center justify-center text-center bg-gradient-to-b from-blue-900 via-blue-700 to-blue-200 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-6"
        >
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white drop-shadow-lg">
            Get in Touch
          </h1>
          <p className="mt-3 text-lg sm:text-xl text-blue-100 font-medium max-w-2xl mx-auto">
            Contact Tanwar Construction for your next project, consultation, or query.
          </p>
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent rounded-t-[40%]"></div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 px-6 sm:px-12 lg:px-24 max-w-screen-xl mx-auto grid md:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-blue-300/40 transition"
        >
          <FaMapMarkerAlt className="text-blue-700 text-3xl mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Location</h3>
          <p className="text-gray-700">123 Skyline Avenue, Jaipur, Rajasthan, India</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-blue-300/40 transition"
        >
          <FaPhoneAlt className="text-blue-700 text-3xl mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
          <p className="text-gray-700">+91 81049 42875</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-blue-300/40 transition"
        >
          <FaEnvelope className="text-blue-700 text-3xl mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
          <p className="text-gray-700">contact@tanwarconstruction.com</p>
        </motion.div>
      </section>

      {/* Contact Form + Map */}
      <section className="py-16 px-6 sm:px-12 lg:px-24 max-w-screen-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Fill out the form below and our team will get back to you shortly.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-6"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Subject"
              className="border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Your Message"
              rows={6}
              className="border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-900 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-blue-800 transition"
            >
              Submit
            </button>
          </motion.form>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.179184103132!2d75.7864505!3d26.9124349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5b0c0f3f10b%3A0x6a8c93b36c345f0!2sJaipur%2C%20Rajasthan%2C%20India!5e0!3m2!1sen!2sin!4v1697345678901!5m2!1sen!2sin"
              width="100%"
              height="100%"
              className="min-h-[500px] w-full"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Tanwar Construction Location"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="bg-blue-900 py-14 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-6">
            Contact Tanwar Construction today and let's build something extraordinary.
          </p>
          <a
            href="#"
            className="bg-white text-blue-900 font-semibold px-8 py-3 rounded-full shadow-md hover:bg-blue-50 transition"
          >
            Get in Touch
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;
