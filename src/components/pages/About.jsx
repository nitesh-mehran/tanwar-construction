import React from "react";
import { motion } from "framer-motion";
import { FaHardHat, FaUsers, FaBuilding } from "react-icons/fa";

const About = () => {
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
            About Tanwar Construction
          </h1>
          <p className="mt-3 text-lg sm:text-xl text-blue-100 font-medium max-w-2xl mx-auto">
            Building trust. Creating landmarks.
          </p>
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent rounded-t-[40%]"></div>
      </section>




      {/* About Company */}
      <section className="py-16 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <img
            src="/team.png"
            alt="construction team"
            className="rounded-2xl shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Crafting Excellence in Every Structure
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Tanwar Construction Company is a trusted name in civil and
              architectural excellence. From residential marvels to large-scale
              commercial projects, we bring innovation and reliability to every
              blueprint. Our dedication to quality, sustainability, and
              long-lasting relationships makes us one of the leading builders in
              the region.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Vision Section */}
      <section
        className="relative py-20 text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1800&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-blue-900/70"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <FaBuilding className="text-5xl mx-auto mb-4 text-blue-300" />
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-100 mb-4">
            Our Vision & Commitment
          </h2>
          <p className="text-blue-100 max-w-3xl mx-auto">
            We aim to redefine the skyline with engineering precision, premium
            materials, and a people-first philosophy. Every Tanwar project is a
            commitment to durability, design brilliance, and trust.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8"
        >
          Meet Our Expert Team
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              img: "/nk.jpg",
              name: "Rajesh Tanwar",
              role: "Founder & CEO",
            },
            {
              img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=600&q=80",
              name: "Pooja Sharma",
              role: "Chief Architect",
            },
            {
              img: "/nk.png",
              name: "Vikas Yadav",
              role: "Project Engineer",
            },
          ].map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-gray-700">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer Call to Action */}
      <section className="bg-blue-800 py-10 text-center text-white">
        <FaHardHat className="text-4xl mx-auto mb-3 text-blue-300" />
        <h2 className="text-2xl font-bold text-gray-100">
          Building the Future Together
        </h2>
        <p className="text-blue-100 mt-2">
          Contact us today and let’s start your next construction journey.
        </p>
      </section>
    </div>
  );
};

export default About;
