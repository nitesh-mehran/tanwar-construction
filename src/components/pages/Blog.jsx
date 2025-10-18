import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const blogs = [
  {
    id: 1,
    title: "Smart Construction: How Technology is Transforming Building",
    date: "Oct 10, 2025",
    category: "Innovation",
    image:"/blog1.png",
    description:
      "From 3D printing to AI-driven site management, discover how technology is reshaping the future of the construction industry.",
  },
  {
    id: 2,
    title: "Top 5 Modern Residential Design Trends for 2025",
    date: "Sep 18, 2025",
    category: "Design",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
    description:
      "Explore the latest residential architecture trends that focus on sustainability, space optimization, and aesthetic minimalism.",
  },
  {
    id: 3,
    title: "Sustainable Construction Practices in India",
    date: "Aug 25, 2025",
    category: "Sustainability",
    image:
      "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=900&q=80",
    description:
      "Learn how eco-friendly materials and green practices are making construction projects more efficient and environmentally responsible.",
  },
  {
    id: 4,
    title: "Urban Infrastructure: The Future of Smart Cities in India",
    date: "Jul 30, 2025",
    category: "Infrastructure",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=900&q=80",
    description:
      "As Indian cities evolve, smart infrastructure and digital planning are driving sustainable growth and better urban living experiences.",
  },
];

const Blog = () => {
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
            Our Blogs
          </h1>
          <p className="mt-3 text-lg sm:text-xl text-blue-800 font-medium max-w-2xl mx-auto">
            Insights, innovations, and updates from the world of construction
            and modern architecture.
          </p>
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent rounded-t-[40%]"></div>
      </section>

      {/* Blog Grid Section */}
      <section className="py-20 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
            Latest Articles
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Stay updated with trends and expert insights from Tanwar
            Construction’s experience in modern infrastructure and design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-10">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-blue-200/70 transition border-t-4 border-blue-700"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 text-left">
                <p className="text-sm text-blue-500 font-medium mb-1">
                  {blog.category} • {blog.date}
                </p>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">
                  {blog.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {blog.description.substring(0, 110)}...
                </p>
                <Link
                  to={`/blog/${blog.id}`}
                  className="inline-block mt-4 text-blue-600 font-semibold hover:text-blue-700 transition"
                >
                  Read More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
