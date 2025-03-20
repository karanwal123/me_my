import React, { useEffect, useState } from "react";
import { Code, PenTool, Moon, Repeat } from "lucide-react";
import Cards from "./Cards";

const HomePage = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen text-white px-4 pt-10 space-y-20">
      
      <div className="w-full flex justify-center">
        <h1
          className={`flex flex-wrap gap-6 text-7xl md:text-8xl font-extrabold tracking-tight text-center transition-all duration-700 ${
            visible ? "opacity-100 transform-none" : "opacity-0 translate-y-6"
          }`}
        >
          {[
            { text: "CODE |", icon: Code, color: "text-lime-400" },
            { text: "DESIGN |", icon: PenTool, color: "text-white" },
            { text: "SLEEP |", icon: Moon, color: "text-lime-400" },
            { text: "REPEAT |", icon: Repeat, color: "text-white" },
          ].map(({ text, icon: Icon, color }, index) => (
            <div key={index} className="relative group">
              <span
                className={`transition-all duration-300 cursor-default group-hover:opacity-0 ${color}`}
              >
                {text}
              </span>
              <Icon
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"
                size={80}
              />
            </div>
          ))}
        </h1>
      </div>

     
      <div className="border border-lime-400 rounded-lg p-8 bg-black bg-opacity-30 backdrop-blur-lg w-full max-w-4xl text-center shadow-lg">
        <h2 className="text-lime-400 text-4xl font-bold mb-6 tracking-wide transition-all duration-300 hover:drop-shadow-[0_0_10px_#a3e635]">
          A Quick Intro
        </h2>

        <p className="text-white text-lg leading-relaxed transition-all duration-500 hover:text-lime-300 hover:tracking-wide">
          I'm Aditya, a BTech Computer Science student at LNMIIT with a passion
          for design, development, and problem-solving. Skilled in React, Java,
          and UI/UX, I create seamless digital experiences with a focus on
          aesthetics and performance. Always eager to learn and innovate, I'm
          exploring GSAP for smooth animations and enhancing my full-stack
          skills. Let's build something amazing!
        </p>
      </div>

          
      <div className="w-full max-w-6xl px-4">
        <Cards />
      </div>
    </div>
  );
};

export default HomePage;
