import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaPaintBrush, FaEye, FaGithub } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackgroundBeams from "../components/BackgroundBeams";
import DynamicCursor from "../components/DynamicCursor";

const Design = () => {
  const [hover, setHover] = useState(false);
  const [designs, setDesigns] = useState([
    {
      id: 1,
      title: "UI Dashboard",
      category: "Web Design",
      image: "/path/to/image1.jpg",
      description:
        "Modern analytics dashboard with data visualization components",
    },
    {
      id: 2,
      title: "E-Commerce Mobile App",
      category: "Mobile Design",
      image: "/path/to/image2.jpg",
      description: "Clean, intuitive shopping experience for mobile devices",
    },
    {
      id: 3,
      title: "Eco Brand Identity",
      category: "Branding",
      image: "/path/to/image3.jpg",
      description: "Sustainable brand system for an environmental organization",
    },
    {
      id: 4,
      title: "Financial Platform",
      category: "UI/UX",
      image: "/path/to/image4.jpg",
      description: "Investment tracking and portfolio management interface",
    },
    {
      id: 5,
      title: "Healthcare Portal",
      category: "Web Design",
      image: "/path/to/image5.jpg",
      description: "Patient management system with accessibility focus",
    },
    {
      id: 6,
      title: "Creative Agency Website",
      category: "Web Design",
      image: "/path/to/image6.jpg",
      description: "Dynamic portfolio site with interactive elements",
    },
  ]);

  const [filter, setFilter] = useState("All");
  const categories = [
    "All",
    "Web Design",
    "Mobile Design",
    "Branding",
    "UI/UX",
  ];

  const filteredDesigns =
    filter === "All"
      ? designs
      : designs.filter((design) => design.category === filter);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="container mx-auto px-6 py-24">
        <div className="flex flex-col items-center mb-16">
          <motion.div
            className="relative cursor-pointer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            {hover ? (
              <motion.span
                className="text-lime-300 block"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <FaPaintBrush size={80} />
              </motion.span>
            ) : (
              <motion.h1
                className="text-white text-6xl md:text-7xl font-extrabold tracking-tight"
                exit={{ opacity: 0, scale: 0.9 }}
              >
                DESIGNS
              </motion.h1>
            )}
          </motion.div>
          <motion.p
            className="text-gray-300 mt-4 max-w-2xl text-center text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            A collection of thoughtfully crafted digital experiences and visual
            identities
          </motion.p>
        </div>

        {/* Category filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === category
                  ? "bg-lime-300 text-green-900"
                  : "bg-green-900/30 text-gray-300 hover:bg-green-900/50"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Design grid with masonry layout */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {filteredDesigns.map((design, index) => (
            <DesignCard key={design.id} design={design} index={index} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

// Professional Design Card
const DesignCard = ({ design, index }) => {
  return (
    <motion.div
      className="group relative bg-green-900/20 rounded-xl overflow-hidden shadow-lg h-80"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      {/* Placeholder for image - replace with actual image tag */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800/80 to-green-900/50 z-0">
        {/* Replace this with an actual image */}
        <div className="h-full w-full flex items-center justify-center text-4xl text-gray-500 opacity-30">
          {design.title.charAt(0)}
        </div>
      </div>

      <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
        <div>
          <span className="inline-block px-3 py-1 bg-lime-300/20 text-lime-300 text-xs font-medium rounded-full mb-3">
            {design.category}
          </span>
          <h3 className="text-white text-xl font-bold">{design.title}</h3>
          <p className="text-gray-300 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {design.description}
          </p>
        </div>

        <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
          <button className="w-10 h-10 bg-lime-300 text-green-900 rounded-full flex items-center justify-center">
            <FaEye />
          </button>
          <button className="w-10 h-10 bg-green-900/80 text-white rounded-full flex items-center justify-center">
            <FaGithub />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Design;
