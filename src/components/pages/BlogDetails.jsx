import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

// Blog data (same as in Blog.jsx)
const blogs = [
  {
    id: 1,
    title: "Smart Construction: How Technology is Transforming Building",
    date: "Oct 10, 2025",
    category: "Innovation",
    image:"/blog1.png",
    content: `
      The construction industry is rapidly evolving with the integration of modern technologies like Artificial Intelligence, IoT, and 3D printing. 
      Smart construction is not just about building faster — it’s about building better, safer, and more sustainably.

      Today, project management software enables real-time communication between teams, while AI-driven analytics improve efficiency and reduce human error.
      3D printing allows for faster, more precise, and cost-effective building processes, reshaping how we design structures.

      As we step into the future, Tanwar Construction continues to adopt digital innovations that redefine India's architectural landscape.
    `,
  },
  {
    id: 2,
    title: "Top 5 Modern Residential Design Trends for 2025",
    date: "Sep 18, 2025",
    category: "Design",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
    content: `
      Modern homes today focus on more than just luxury — they’re about functionality, sustainability, and minimalism. 
      Open floor plans, natural lighting, and smart home integration are key design principles for 2025.

      The trend toward green materials and modular construction ensures that homes are not just beautiful but also environmentally responsible. 
      At Tanwar Construction, we integrate these design philosophies into every residential project we undertake.

      The future of home design is simple — smarter, greener, and more connected than ever before.
    `,
  },
  {
    id: 3,
    title: "Sustainable Construction Practices in India",
    date: "Aug 25, 2025",
    category: "Sustainability",
    image:
      "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=900&q=80",
    content: `
      Sustainability has become a cornerstone of modern construction. 
      From eco-friendly materials like bamboo and recycled steel to water-efficient designs, the goal is clear — to build without harming the planet.

      Tanwar Construction emphasizes responsible resource usage, renewable energy adoption, and waste reduction practices.
      Our projects aim to create long-term environmental value while maintaining high construction standards.

      Together, we can make India's infrastructure more resilient and sustainable.
    `,
  },
  {
    id: 4,
    title: "Urban Infrastructure: The Future of Smart Cities in India",
    date: "Jul 30, 2025",
    category: "Infrastructure",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=900&q=80",
    content: `
      India's cities are transforming into smart ecosystems powered by data, digital connectivity, and innovation.
      Smart cities focus on better traffic management, sustainable buildings, and enhanced citizen experience.

      From intelligent lighting to automated public systems, technology is creating safer, greener, and more efficient urban environments.
      Tanwar Construction is proud to contribute to India’s growth by developing infrastructures that support these smart city visions.

      The future of urban India is bright — and it’s being built today.
    `,
  },
];

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return (
      <div className="text-center py-20 text-gray-700">
        <h2 className="text-2xl font-semibold">Blog Not Found</h2>
        <Link
          to="/blog"
          className="text-blue-600 hover:text-blue-700 font-medium mt-4 inline-block"
        >
          ← Back to Blogs
        </Link>
      </div>
    );
  }

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
            {blog.title}
          </h1>
          <p className="mt-3 text-lg sm:text-xl text-blue-800 font-medium">
            {blog.category} • {blog.date}
          </p>
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent rounded-t-[40%]"></div>
      </section>

      {/* Blog Content */}
      <section className="py-20 px-6 sm:px-12 lg:px-24 max-w-5xl mx-auto">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-[450px] object-cover rounded-2xl shadow-md mb-10"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-gray-700 leading-relaxed space-y-5 text-lg">
            {blog.content.split("\n").map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/blog"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full shadow-md font-semibold hover:bg-blue-700 transition"
            >
              ← Back to Blogs
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default BlogDetails;
