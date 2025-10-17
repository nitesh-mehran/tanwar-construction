import React from "react";
import { motion } from "framer-motion";
import { FaBuilding } from "react-icons/fa";

const AboutPreview = () => {
  return (
    <section className="py-20 px-6 sm:px-12 lg:px-24 bg-gradient-to-b from-[#f0f8ff] to-white text-gray-800">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image Side */}
        <motion.img
          src="/team.png"
          alt="About Tanwar Construction"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-2xl shadow-lg hover:shadow-blue-200 transition"
        />

        {/* Content Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <FaBuilding className="text-5xl text-blue-700 mb-4" />
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
            About Tanwar Construction
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Tanwar Construction is a symbol of trust, precision, and excellence
            in the Indian construction industry. From modern homes to landmark
            commercial spaces, we craft every project with a focus on quality,
            innovation, and durability.
          </p>
          <a
            href="/about"
            className="inline-block bg-blue-800 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:bg-blue-900 transition"
          >
            Read More
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPreview;
