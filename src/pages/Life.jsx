import { Info, User, Heart, Music } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const Life = () => {
  const [visible, setVisible] = useState(false);
  const quoteRef = useRef(null);

  useEffect(() => {
    setTimeout(() => setVisible(true), 300); // Delay for animation

    // GSAP animation for the quote section
    gsap.fromTo(
      quoteRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power3.out" }
    );
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
            { text: "ABOUT", icon: Info, color: "text-lime-400" },
            { text: "MY", icon: User, color: "text-white" },
            { text: "LIFE", icon: Heart, color: "text-lime-400" },
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

      {/* Tech Stack Section */}
      <div className="border border-lime-400 rounded-lg p-8 bg-black bg-opacity-30 backdrop-blur-lg w-full max-w-4xl text-center shadow-lg">
        <h2 className="text-lime-400 text-4xl font-bold mb-6 tracking-wide transition-all duration-300 hover:drop-shadow-[0_0_10px_#a3e635]">
          Life
        </h2>

        <p className="text-white text-lg leading-relaxed transition-all duration-500 hover:text-lime-300 hover:tracking-wide">
          Hey there! By now, you probably know my name—Aditya (yeah, one of the
          most common names out there, but hey, my surname makes up for it 😉).
          I'm currently pursuing my B.Tech in Computer Science at LNMIIT,
          Jaipur. When I’m not buried in code, you’ll find me scrolling
          endlessly on Pinterest or vibing to some pop music. Oh, and fun
          fact—I’m absolutely terrible at academics (but we don’t talk about
          that) and I LOVE CHAI ☕.
        </p>
      </div>

      {/* Spotify Button */}
      <a
        href="https://open.spotify.com/user/adityakaranwal"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-4 px-10 py-5 bg-gradient-to-r from-green-500 to-green-400 text-black font-bold text-2xl rounded-full shadow-lg transition-all 
             hover:scale-110 hover:from-green-400 hover:to-green-300 hover:shadow-[0px_0px_20px_#22c55e] 
             animate-pulse"
      >
        <Music size={30} className="animate-spin-slow" /> Spotify
      </a>
    </div>
  );
};

export default Life;
