import React from "react";
import { Github, Linkedin, Instagram, Twitter } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-transparent py-4 px-6 flex font-semibold justify-between items-center w-full">
      <div>
        <button className="border border-lime-400 text-lime-400 px-6 py-2 rounded-md hover:bg-lime-400 hover:bg-opacity-10 transition-all duration-300">
          Resume
        </button>
      </div>

      <div className="flex space-x-4">
        <button className="text-lime-400 p-2 rounded-md hover:bg-lime-400 hover:bg-opacity-10 transition-all duration-300">
          <Github size={24} />
        </button>
        <button className="text-lime-400 p-2 rounded-md hover:bg-lime-400 hover:bg-opacity-10 transition-all duration-300">
          <Linkedin size={24} />
        </button>
        <button className="text-lime-400 p-2 rounded-md hover:bg-lime-400 hover:bg-opacity-10 transition-all duration-300">
          <Instagram size={24} />
        </button>
        <button className="text-lime-400 p-2 rounded-md hover:bg-lime-400 hover:bg-opacity-10 transition-all duration-300">
          <Twitter size={24} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
