import React from "react";
import { motion } from "framer-motion";
import {
  FaBuilding,
  FaCity,
  FaDraftingCompass,
  FaTools,
  FaRoad,
  FaHome,
  FaWarehouse,
  FaHammer,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const services = [
  {
    icon: <FaBuilding className="text-blue-700 text-5xl mb-6" />,
    title: "Residential Construction",
    desc: "From luxury villas to modern apartments, Tanwar Construction delivers homes built with precision, elegance, and sustainability. Every project reflects superior craftsmanship and attention to detail.",
  },
  {
    icon: <FaCity className="text-blue-700 text-5xl mb-6" />,
    title: "Commercial Projects",
    desc: "We design and execute cutting-edge commercial complexes, offices, and retail spaces with a perfect blend of innovation, durability, and architectural brilliance.",
  },
  {
    icon: <FaDraftingCompass className="text-blue-700 text-5xl mb-6" />,
    title: "Architecture & Design",
    desc: "Our team of architects and designers brings creativity and structural integrity together to create iconic spaces that stand the test of time.",
  },
  {
    icon: <FaTools className="text-blue-700 text-5xl mb-6" />,
    title: "Renovation & Remodeling",
    desc: "Whether it’s refreshing interiors or transforming entire structures, we turn outdated spaces into modern masterpieces with unmatched finesse.",
  },
  {
    icon: <FaRoad className="text-blue-700 text-5xl mb-6" />,
    title: "Infrastructure Development",
    desc: "From roads to bridges and industrial layouts, we take pride in contributing to India’s growing infrastructure with strength and innovation.",
  },
  {
    icon: <FaWarehouse className="text-blue-700 text-5xl mb-6" />,
    title: "Industrial Construction",
    desc: "Delivering large-scale industrial facilities with efficient layouts, durable structures, and compliance with modern standards.",
  },
  {
    icon: <FaHome className="text-blue-700 text-5xl mb-6" />,
    title: "Interior Design & Finishing",
    desc: "We specialize in premium interiors that combine functionality with aesthetics — turning every corner into an elegant space.",
  },
  {
    icon: <FaHammer className="text-blue-700 text-5xl mb-6" />,
    title: "Turnkey Solutions",
    desc: "From concept to completion, we handle every phase of your project with transparency, technical expertise, and dedication.",
  },
];

const Services = () => {
  return (
    <div className="bg-gradient-to-b from-[#e6f2ff] to-white text-gray-800">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center text-center bg-gradient-to-b from-[#b3d9ff] via-[#cce6ff] to-[#e6f2ff] overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-6"
        >
          <h1 className="text-4xl sm:text-6xl font-extrabold text-blue-900 tracking-tight drop-shadow-md">
            Our Services
          </h1>
          <p className="mt-3 text-lg sm:text-xl text-blue-800 font-medium max-w-2xl mx-auto">
            Tanwar Construction — crafting excellence in every project.
          </p>
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent rounded-t-[40%]"></div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 sm:px-12 lg:px-24 max-w-screen-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
            Building Beyond Expectations
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Our diverse range of construction services ensures excellence across
            residential, commercial, and industrial projects — powered by
            advanced technology and expert engineering.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-blue-200/70 transition-transform duration-300 hover:-translate-y-2 border-t-4 border-blue-600"
            >
              <div className="flex flex-col items-center text-center">
                {service.icon}
                <h3 className="text-xl font-semibold text-blue-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 py-14 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Build Your Dream Project?
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-6">
            Partner with Tanwar Construction for unmatched quality, timely
            delivery, and architectural excellence.
          </p>
          <Link to="/contact">
            <button className="bg-white text-blue-900 font-semibold px-8 py-3 rounded-full shadow-md hover:bg-blue-50 transition">
              Get in Touch
            </button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
