import React from "react";
import { motion } from "framer-motion";
import { FaRegBuilding, FaMapMarkerAlt, FaHardHat } from "react-icons/fa";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Skyline Residency",
    location: "Jaipur, Rajasthan",
    img: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09c8?auto=format&fit=crop&w=900&q=80",
    desc: "A luxury residential apartment complex designed for modern living, blending architecture with comfort and sustainability.",
  },
  {
    title: "Tanwar Corporate Park",
    location: "Gurugram, Haryana",
    img: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=900&q=80",
    desc: "A state-of-the-art commercial tower offering smart office spaces, built with energy-efficient materials and cutting-edge design.",
  },
  {
    title: "Golden Highway Project",
    location: "Kota, Rajasthan",
    img: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=900&q=80",
    desc: "A milestone infrastructure project featuring durable road construction with advanced materials ensuring longevity and safety.",
  },
  {
    title: "Green Valley Villas",
    location: "Ajmer, Rajasthan",
    img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=900&q=80",
    desc: "A premium gated community of luxurious villas surrounded by nature — combining modern aesthetics and serene living.",
  },
  {
    title: "Metro Plaza",
    location: "Delhi NCR",
    img: "https://images.unsplash.com/photo-1529429611273-4e5a5c0b8f1d?auto=format&fit=crop&w=900&q=80",
    desc: "Commercial complex built with world-class architecture, offering retail, dining, and entertainment spaces under one roof.",
  },
  {
    title: "Industrial Logistics Hub",
    location: "Bhiwadi, Rajasthan",
    img: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=900&q=80",
    desc: "A large-scale industrial warehouse development focusing on efficiency, safety, and sustainability for future-ready businesses.",
  },
];

const Projects = () => {
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
            Our Projects
          </h1>
          <p className="mt-3 text-lg sm:text-xl text-blue-800 font-medium max-w-2xl mx-auto">
            Showcasing the excellence and legacy of Tanwar Construction across
            India’s modern skyline.
          </p>
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent rounded-t-[40%]"></div>
      </section>

      {/* Project Grid Section */}
      <section className="py-20 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
            Featured Developments
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Every Tanwar Construction project reflects excellence, innovation,
            and reliability — redefining architectural standards across India.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-blue-200/70 transition border-t-4 border-blue-700"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-blue-900 mb-2 flex items-center gap-2">
                  <FaRegBuilding className="text-blue-700" />
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-2 flex items-center gap-1">
                  <FaMapMarkerAlt className="text-blue-700" />
                  {project.location}
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {project.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Vision / Quality Section */}
      <section
        className="relative py-20 text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-blue-900/75"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <FaHardHat className="text-5xl mx-auto mb-4 text-blue-300" />
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-50 mb-4">
            Commitment to Quality & Innovation
          </h2>
          <p className="text-blue-100 max-w-3xl mx-auto">
            Each of our projects is a promise — of durability, design excellence,
            and customer satisfaction. We build not just structures, but
            long-term trust and value for our clients.
          </p>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 py-12 text-center text-white">
        <FaRegBuilding className="text-4xl mx-auto mb-3 text-blue-300" />
        <h2 className="text-2xl sm:text-3xl font-bold text-white">
          Let’s Build the Future Together
        </h2>
        <p className="text-blue-100 mt-2 max-w-2xl mx-auto">
          Reach out to us today and be part of the next landmark project with
          Tanwar Construction.
        </p>
        <Link
          to="/contact"
          className="inline-block mt-6 bg-white text-blue-800 font-semibold px-8 py-3 rounded-full shadow-md hover:bg-blue-50 transition"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
};

export default Projects;
