import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "Do you offer turnkey construction solutions?",
    answer:
      "Yes, we provide end-to-end turnkey construction — from planning to delivery, including design, materials, and execution.",
  },
  {
    question: "Can I customize my building design?",
    answer:
      "Absolutely! Our architects work closely with you to ensure every detail matches your preferences and budget.",
  },
  {
    question: "Do you handle government approvals?",
    answer:
      "Yes, our team helps you manage necessary approvals, documentation, and legal processes smoothly.",
  },
  {
    question: "How do you ensure project quality?",
    answer:
      "We follow strict quality standards, regular inspections, and use trusted brands for materials.",
  },
];

const FAQSection = () => {
  const [active, setActive] = useState(null);
  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="bg-[#f1f5ff] py-20 px-6 sm:px-12 lg:px-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Here are some common queries about our construction and design
          services.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-md rounded-2xl p-5 hover:shadow-blue-200 transition-all"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full text-left"
            >
              <span className="font-medium text-gray-900">{faq.question}</span>
              <span className="text-gray-700">
                {active === index ? <FaMinus /> : <FaPlus />}
              </span>
            </button>

            <AnimatePresence>
              {active === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-3 text-gray-600 text-sm leading-relaxed"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
