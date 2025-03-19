import React from "react";
import { useNavigate } from "react-router-dom";
// import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sections = [
  {
    title: "Home",
    description: "Explore the main hub of everything.",
    route: "/home",
  },
  {
    title: "Who am I ???",
    description: "A deep dive into my journey and identity.",
    route: "/who-am-i",
  },
  {
    title: "Design",
    description: "Creative insights, projects, and inspirations.",
    route: "/design",
  },
  {
    title: "Tech + Achievements",
    description: "Innovations, projects, and milestones.",
    route: "/tech-achievements",
  },
  {
    title: "Life",
    description: "Personal experiences, stories, and reflections.",
    route: "/life",
  },
];

const Cards = () => {
  const navigate = useNavigate();

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
    // Remove centerMode to allow full width
    arrows: true,
    className: "full-width-slider",
  };

  return (
    <div className="w-full bg-dark-green py-12">
      <div className="w-full px-4 md:px-8 lg:px-12">
        <Slider {...settings}>
          {sections.map((section, index) => (
            <div key={index} className="px-2">
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div
                  className="bg-lime-300 text-green-900 p-6 rounded-lg h-64 cursor-pointer shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
                  onClick={() => navigate(section.route)}
                >
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold tracking-tight">
                      {section.title}
                    </h2>
                    <div className="w-16 h-1 bg-green-800 opacity-50 rounded-full"></div>
                    <p className="text-lg text-green-800">
                      {section.description}
                    </p>
                  </div>
                  <div className="flex justify-end">
                    <div className="rounded-full bg-green-800 p-2 text-lime-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Cards;
