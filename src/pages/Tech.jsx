import { Cpu, Trophy } from "lucide-react"; // Importing icons
import { useState, useEffect } from "react";

const Tech = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 300); // Adding a slight delay for animation
  }, []);

  return (
    <div className="w-full flex justify-center">
      <h1
        className={`flex flex-wrap gap-6 text-7xl md:text-8xl font-extrabold tracking-tight text-center transition-all duration-700 ${
          visible ? "opacity-100 transform-none" : "opacity-0 translate-y-6"
        }`}
      >
        {[
          { text: "TECH", icon: Cpu, color: "text-lime-400" },
          { text: "&", icon: null, color: "text-white" }, // No icon for '&'
          { text: "ACHIEVEMENTS", icon: Trophy, color: "text-lime-400" },
        ].map(({ text, icon: Icon, color }, index) => (
          <div key={index} className="relative group">
            <span
              className={`transition-all duration-300 cursor-default group-hover:opacity-0 ${color}`}
            >
              {text}
            </span>
            {Icon && (
              <Icon
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"
                size={80}
              />
            )}
          </div>
        ))}
      </h1>
    </div>
  );
};

export default Tech;
