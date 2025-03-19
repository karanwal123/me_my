import React from "react";
import { Github, Twitter, Linkedin, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-black bg-opacity-30 border-t border-lime-400 mt-20 relative overflow-hidden">
      {/* Texture overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-full h-full">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-lime-400"
              style={{
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.25,
              }}
            />
          ))}
        </div>
        <div className="grid grid-cols-12 gap-4 w-full h-full opacity-5">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-r border-lime-400 h-full"></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto py-10 px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-8">
          {/* Social icons */}
          <div className="flex space-x-6">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
            >
              <Github
                size={24}
                className="text-lime-400 hover:text-lime-300 transition-colors duration-300"
              />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
            >
              <Linkedin
                size={24}
                className="text-lime-400 hover:text-lime-300 transition-colors duration-300"
              />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
            >
              <Twitter
                size={24}
                className="text-lime-400 hover:text-lime-300 transition-colors duration-300"
              />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
            >
              <Instagram
                size={24}
                className="text-lime-400 hover:text-lime-300 transition-colors duration-300"
              />
            </a>
            <a
              href="mailto:contact@example.com"
              className="transition-transform hover:scale-110"
            >
              <Mail
                size={24}
                className="text-lime-400 hover:text-lime-300 transition-colors duration-300"
              />
            </a>
          </div>

          {/* Credit line */}
          <div className="text-center">
            <p className="text-white font-barlow text-sm">
              <span className="inline-block relative">
                Designed & Developed by
                <span className="ml-1 text-lime-400 font-medium">
                  Aditya Karanwal
                </span>
                <span className="absolute -bottom-1 left-0 w-full h-px bg-lime-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </span>
            </p>
          </div>

          {/* Subtle code line */}
          <div className="w-full max-w-lg mx-auto pt-4 border-t border-lime-400 border-opacity-30">
            <p className="text-center text-gray-400 font-barlow text-xs">
              <span className="text-lime-400">&lt;</span>
              <span className="text-white opacity-70">code</span>
              <span className="text-lime-400">&gt;</span>
              <span className="text-white opacity-50 mx-1">with passion</span>
              <span className="text-lime-400">&lt;/</span>
              <span className="text-white opacity-70">code</span>
              <span className="text-lime-400">&gt;</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
