import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Rajesh Mehta",
    role: "Villa Owner",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    rating: 5,
    review:
      "BuildSmart turned my dream villa into reality with precision and style. The entire team was professional and transparent throughout the project.",
  },
  {
    name: "Sneha Kapoor",
    role: "Architect",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    review:
      "Collaborating with BuildSmart was a seamless experience. Their attention to detail and commitment to deadlines truly impressed me.",
  },
  {
    name: "Amit Sharma",
    role: "Corporate Client",
    image: "https://randomuser.me/api/portraits/men/23.jpg",
    rating: 4,
    review:
      "The quality of materials and execution exceeded our expectations. The commercial project was delivered on time and within budget.",
  },
  {
    name: "Priya Singh",
    role: "Homeowner",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 5,
    review:
      "Absolutely delighted with the outcome! Their craftsmanship and professionalism are unmatched in the industry.",
  },
  {
    name: "Rohit Verma",
    role: "Real Estate Developer",
    image: "https://randomuser.me/api/portraits/men/34.jpg",
    rating: 5,
    review:
      "Working with BuildSmart is always a pleasure. Their site management and finish quality are consistently top-notch.",
  },
  {
    name: "Anjali Patel",
    role: "Interior Designer",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    rating: 4,
    review:
      "They perfectly understand the design vision and deliver construction that complements interior aesthetics beautifully.",
  },
  {
    name: "Vikram Rao",
    role: "Hotel Owner",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    rating: 5,
    review:
      "Our resort project was handled with utmost professionalism. BuildSmart made the entire process stress-free and efficient.",
  },
  {
    name: "Nisha Gupta",
    role: "Bungalow Owner",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    review:
      "They transformed our space with outstanding structural quality and finishing. Highly recommended!",
  },
  {
    name: "Karan Thakur",
    role: "Architect Partner",
    image: "https://randomuser.me/api/portraits/men/77.jpg",
    rating: 5,
    review:
      "The team’s technical expertise and clear communication make collaboration a smooth process. Fantastic experience!",
  },
  {
    name: "Meera Joshi",
    role: "Homeowner",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
    rating: 4,
    review:
      "They built our dream home with precision and care. The entire team is skilled, courteous, and dependable.",
  },
];


const TestimonialSection = () => {
  return (
    <section className="bg-blue-50 py-20 px-6">
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl sm:text-4xl font-bold text-gray-900"
        >
          What Our Clients Say
        </motion.h2>
        <p className="text-gray-800 mt-2 max-w-2xl mx-auto">
          Real feedback from our happy clients who trusted us to bring their dreams to life.
        </p>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-6xl mx-auto"
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-2xl p-6 mx-4 text-left shadow-md hover:shadow-blue-300 transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-14 h-14 rounded-full border-2 border-gray-500 object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{t.name}</h3>
                  <p className="text-sm text-gray-700">{t.role}</p>
                </div>
              </div>

              <div className="flex text-yellow-400 mb-3">
                {Array.from({ length: t.rating }).map((_, index) => (
                  <FaStar key={index} />
                ))}
              </div>

              <p className="text-gray-900 text-sm leading-relaxed">{t.review}</p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TestimonialSection;
