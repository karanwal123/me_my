import React from "react";
import {
  Github,
  Linkedin,
  Instagram,
  Twitter,
  BookOpenText,
  Code2,
} from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-transparent py-4 px-6 flex font-semibold justify-between items-center w-full">
      <div>
        <a
          href="https://drive.google.com/file/d/1ezfng7hX8OKGAfxiU4hwne-tiCHojigk/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-lime-400 text-lime-400 px-6 py-2 rounded-md hover:bg-lime-400 hover:bg-opacity-10 transition-all duration-300"
        >
          Resume
        </a>
      </div>

      <div className="flex space-x-4">
        {/* GitHub */}
        <a
          href="https://github.com/karanwal123"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lime-400 p-2 rounded-md hover:bg-lime-400 hover:bg-opacity-10 transition-all duration-300"
        >
          <Github size={24} />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/aditya-karanwal-37aa28292"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lime-400 p-2 rounded-md hover:bg-lime-400 hover:bg-opacity-10 transition-all duration-300"
        >
          <Linkedin size={24} />
        </a>

        {/* Instagram */}
        <a
          href="https://x.com/aadi_says_whaa?t=IReYrQzhJn8a0sghbrWnmA&s=08"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lime-400 p-2 rounded-md hover:bg-lime-400 hover:bg-opacity-10 transition-all duration-300"
        >
          <Instagram size={24} />
        </a>

        {/* Twitter */}
        <a
          href="https://x.com/aadi_says_whaa?t=IReYrQzhJn8a0sghbrWnmA&s=08"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lime-400 p-2 rounded-md hover:bg-lime-400 hover:bg-opacity-10 transition-all duration-300"
        >
          <Twitter size={24} />
        </a>

        {/* Notion Portfolio */}
        <a
          href="https://www.notion.so/About-me-173c0f234b3e80688bbbfd1570fa7b41?pvs=4"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lime-400 p-2 rounded-md hover:bg-lime-400 hover:bg-opacity-10 transition-all duration-300"
        >
          <BookOpenText size={24} />
        </a>

        {/* LeetCode Profile */}
        <a
          href="https://leetcode.com/u/aditya_karanwal/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lime-400 p-2 rounded-md hover:bg-lime-400 hover:bg-opacity-10 transition-all duration-300"
        >
          <Code2 size={24} />
        </a>
      </div>
    </nav>
  );
};

// Normally, when you click a link, the new website can see which site you came from (via referrer info).
// noreferrer hides this, so the new site doesn’t know your previous page.

// imagine you open a link in a new tab, and that tab tries to control or change your original page.
// noopener blocks this, keeping your page safe.

export default Navbar;
