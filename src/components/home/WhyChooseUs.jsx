import React from "react";
import { motion } from "framer-motion";
import { FaHardHat, FaTools, FaClock, FaStar, FaShieldAlt, FaHandsHelping } from "react-icons/fa";

const reasons = [
  {
    icon: <FaHardHat size={40} className="text-yellow-600" />,
    title: "Expert Team",
    description: "Skilled professionals ensuring top-quality construction from start to finish.",
  },
  {
    icon: <FaTools size={40} className="text-yellow-600" />,
    title: "Premium Materials",
    description: "We use only the highest quality materials for lasting durability.",
  },
  {
    icon: <FaClock size={40} className="text-yellow-600" />,
    title: "On-Time Delivery",
    description: "Projects completed on schedule without compromising quality.",
  },
  {
    icon: <FaStar size={40} className="text-yellow-600" />,
    title: "Innovation & Design",
    description: "Modern designs and innovative solutions for every project.",
  },
  {
    icon: <FaShieldAlt size={40} className="text-yellow-600" />,
    title: "Safety First",
    description: "Strict safety standards to ensure secure and compliant construction.",
  },
  {
    icon: <FaHandsHelping size={40} className="text-yellow-600" />,
    title: "Reliable Support",
    description: "Continuous support and transparent communication throughout.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-[#f0f7ff] py-16 px-6 sm:px-12 lg:px-24">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Why Choose Us
        </h2>
        <p className="text-gray-600 text-lg sm:text-xl">
          We combine quality, innovation, and trust to deliver exceptional construction projects.
        </p>
      </motion.div>

      {/* Reasons Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(59,130,246,0.3)" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 flex flex-col items-center text-center cursor-pointer shadow-md hover:shadow-blue-200 transition"
          >
            {/* Icon */}
            <div className="mb-4">{reason.icon}</div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{reason.title}</h3>

            {/* Description */}
            <p className="text-gray-600 text-sm">{reason.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
