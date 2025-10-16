import React from "react";
import { motion } from "framer-motion";
import { FaHardHat, FaTools, FaBuilding, FaHeadset } from "react-icons/fa";

const badges = [
  { icon: <FaHardHat />, title: "10+ Years", subtitle: "Experience" },
  { icon: <FaBuilding />, title: "100+", subtitle: "Projects Delivered" },
  { icon: <FaTools />, title: "50+", subtitle: "Skilled Engineers" },
  { icon: <FaHeadset />, title: "24/7", subtitle: "Support" },
];

const TrustedBadges = () => {
  return (
    <section className="bg-[#f0f7ff] py-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
        {badges.map((badge, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 hover:border-blue-400 transition"
          >
            <div className="text-blue-600 text-4xl mb-2 flex justify-center">
              {badge.icon}
            </div>
            <h3 className="text-2xl font-bold text-gray-700">{badge.title}</h3>
            <p className="text-gray-600">{badge.subtitle}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TrustedBadges;
