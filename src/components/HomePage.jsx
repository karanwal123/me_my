import React, { useEffect, useState } from "react";

const HomePage = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Add entrance animation after component mounts
    setVisible(true);
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen text-white px-4 pt-10">
      <div className="w-full flex justify-center">
        <h1
          className={`flex flex-wrap gap-4 text-9xl md:text-8xl font-extrabold tracking-tighter transition-all duration-700 ${
            visible ? "opacity-100 transform-none" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="text-lime-400 hover:text-lime-300 transition-colors duration-300 cursor-default">
            CODE
          </span>
          <span className="hover:text-lime-400 transition-colors duration-300 cursor-default">
            DESIGN
          </span>
          <span className="text-lime-400 hover:text-lime-300 transition-colors duration-300 cursor-default">
            SLEEP
          </span>
          <span className="hover:text-lime-400 transition-colors duration-300 cursor-default">
            REPEAT
          </span>
        </h1>
      </div>

      <div
        className={`mt-12 transition-all duration-1000 delay-500 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* <button className="border-2 border-lime-400 text-lime-400 px-8 py-3 rounded-md text-lg font-medium hover:bg-lime-400 hover:text-black transition-all duration-300">
          Explore My Work
        </button> */}
      </div>
    </div>
  );
};

export default HomePage;
