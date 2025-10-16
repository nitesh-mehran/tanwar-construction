import React from "react";
import { motion } from "framer-motion";
import { FaBuilding, FaDraftingCompass, FaTools, FaCity } from "react-icons/fa";

const services = [
  {
    title: "Residential Construction",
    icon: <FaBuilding className="text-blue-600 text-4xl mb-4" />,
    desc: "From modern villas to elegant apartments, we design and build homes that define comfort and style.",
  },
  {
    title: "Commercial Projects",
    icon: <FaCity className="text-blue-600 text-4xl mb-4" />,
    desc: "Delivering premium commercial spaces with smart architecture and sustainable design.",
  },
  {
    title: "Architecture & Design",
    icon: <FaDraftingCompass className="text-blue-600 text-4xl mb-4" />,
    desc: "Creative architectural solutions that blend innovation with functionality.",
  },
  {
    title: "Renovation & Remodeling",
    icon: <FaTools className="text-blue-600 text-4xl mb-4" />,
    desc: "Transforming old spaces into fresh modern environments with superior craftsmanship.",
  },
];

const ServicesOverview = () => {
  return (
    <section className="bg-[#ebf3fa] py-20 px-6 sm:px-12 lg:px-24 max-w-screen-xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Our Core Services
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We deliver complete construction and design services — ensuring
          precision, quality, and excellence in every project.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-blue-300/40 transition-transform duration-300 hover:-translate-y-2"
          >
            <div className="flex flex-col items-center text-center">
              {service.icon}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesOverview;
