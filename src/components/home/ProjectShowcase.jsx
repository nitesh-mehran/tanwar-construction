import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Luxury Villa Construction",
    img: "/1.png",
    desc: "A modern villa project built with premium materials and precise engineering.",
  },
  {
    title: "Corporate Office Tower",
    img: "/2.png",
    desc: "High-rise commercial space with smart, energy-efficient architecture.",
  },
  {
    title: "Residential Township",
    img: "/3.png",
    desc: "Large-scale residential construction with 200+ housing units.",
  },
  {
    title: "Bridge & Highway Project",
    img: "/4.png",
    desc: "Massive civil infrastructure built with international safety standards.",
  },
  {
    title: "Smart Industrial Park",
    img: "/5.png",
    desc: "Innovative industrial development designed for future-ready businesses.",
  },
  {
    title: "Luxury Hotel & Resort",
    img: "/6.png",
    desc: "Five-star hospitality project blending elegance, comfort, and architecture.",
  },
];

const ProjectShowcase = () => {
  return (
    <section className="bg-[#eef4ff] py-20 px-6 sm:px-12 lg:px-24 max-w-screen-xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-5xl sm:text-4xl font-bold text-gray-900 mb-4">
          Our Featured Projects
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore our latest construction masterpieces that combine innovation,
          quality, and durability.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-blue-200 transition-transform duration-300 hover:-translate-y-2 flex flex-col"
          >
            <div className="overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
                className="h-56 w-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 flex-grow">
                {project.desc}
              </p>
              <a
                href="#"
                className="text-blue-600 text-sm font-medium mt-auto hover:underline hover:text-blue-800 transition duration-300"
              >
                Read More →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectShowcase;
