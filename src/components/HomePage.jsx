import React, { useEffect, useState } from "react";
import { Code, PenTool, Moon, Repeat } from "lucide-react"; // Import icons

const HomePage = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen text-white px-4 pt-10">
      {/* Main Text Container */}
      <div className="w-full flex justify-center">
        <h1
          className={`flex flex-wrap gap-6 text-9xl md:text-8xl font-extrabold tracking-tighter text-center transition-all duration-700 ${
            visible ? "opacity-100 transform-none" : "opacity-0 translate-y-6"
          }`}
        >
          {/* CODE */}
          <div className="relative group">
            <span className="text-lime-400 transition-all duration-300 cursor-default group-hover:opacity-0">
              CODE |
            </span>
            <Code
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 text-lime-400"
              size={80}
            />
          </div>

          {/* DESIGN */}
          <div className="relative group">
            <span className="text-white transition-all duration-300 cursor-default group-hover:opacity-0">
              DESIGN |
            </span>
            <PenTool
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 text-white"
              size={80}
            />
          </div>

          {/* SLEEP */}
          <div className="relative group">
            <span className="text-lime-400 transition-all duration-300 cursor-default group-hover:opacity-0">
              SLEEP |
            </span>
            <Moon
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 text-lime-400"
              size={80}
            />
          </div>

          {/* REPEAT */}
          <div className="relative group">
            <span className="text-white transition-all duration-300 cursor-default group-hover:opacity-0">
              REPEAT |
            </span>
            <Repeat
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 text-white"
              size={80}
            />
          </div>
        </h1>
      </div>

      {/* Spacing between sections */}
      <div className="h-16"></div>

      {/* Intro Container */}
      <div className="border border-lime-400 rounded-lg p-6 bg-black bg-opacity-20 backdrop-blur-sm w-full max-w-4xl text-center">
        <h2 className="text-lime-400 text-2xl font-medium mb-3 font-barlow">
          A Quick Intro
        </h2>
        <p className="text-white font-barlow text-lg leading-relaxed transition-all duration-500 hover:text-lime-300 hover:tracking-wider hover:drop-shadow-[0_0_10px_rgba(204,255,144,0.8)]">
          I'm Aditya, a BTech Computer Science student at LNMIIT with a passion
          for design, development, and problem-solving. Skilled in React, Java,
          and UI/UX, I create seamless digital experiences with a focus on
          aesthetics and performance. Always eager to learn and innovate, I'm
          exploring GSAP for smooth animations and enhancing my full-stack
          skills. Let's build something amazing!
        </p>
      </div>
    </div>
  );
};

export default HomePage;
