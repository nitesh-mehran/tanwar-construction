import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative w-full">
      {/* Video Background */}
      <video
        className="w-full object-cover h-[100vh] sm:h-[60vh] md:h-[100vh]"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white drop-shadow-md">
          Building the Future with{" "}
          <span className="text-yellow-400">Strength</span> & Precision
        </h1>

        <p className="text-gray-200 text-lg sm:text-xl mb-8 drop-shadow-sm max-w-3xl">
          Delivering quality construction services with trust, innovation, and
          commitment.
        </p>

        <motion.a
          whileHover={{ scale: 1.05 }}
          href="#contact"
          className="bg-yellow-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-600 transition"
        >
          Get a Free Quote
        </motion.a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
