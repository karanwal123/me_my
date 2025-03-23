import { Cpu, Trophy, Quote } from "lucide-react"; // Importing icons
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import AnimatedQuoteBox from "../components/AnimatedQuoteBox ";

const Tech = () => {
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
      {/* TECH & ACHIEVEMENTS Heading */}
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

      {/* Tech Stack Section */}
      <div className="border border-lime-400 rounded-lg p-8 bg-black bg-opacity-30 backdrop-blur-lg w-full max-w-4xl text-center shadow-lg">
        <h2 className="text-lime-400 text-4xl font-bold mb-6 tracking-wide transition-all duration-300 hover:drop-shadow-[0_0_10px_#a3e635]">
          Tech Stack and Skills
        </h2>

        <p className="text-white text-lg leading-relaxed transition-all duration-500 hover:text-lime-300 hover:tracking-wide">
          Oh, you know, just the usual—C, C++, Java, Python, JavaScript—because
          who doesn’t love juggling multiple languages like a circus act? Throw
          in MongoDB, MySQL, and RESTful APIs because, apparently, handling data
          and making things "talk" to each other is my idea of fun. And of
          course, Git, because what’s development without a little version
          control-induced chaos? On the backend, I tinker with Node.js, while on
          the frontend, I make things look not-terrible with React.js and
          TailwindCSS. UI/UX? Yes. Figma? Lived there. Animations? GSAP,
          Framer—because static websites are just boring. Also, Adobe
          Illustrator, because sometimes pixels need a little extra love. In
          short, I make things work, make them look good, and occasionally break
          them just to fix them again.
        </p>
      </div>

      <div>
        <AnimatedQuoteBox />
      </div>

      {/* Achievements Section */}

      <div className="border border-lime-400 rounded-lg p-8 bg-black bg-opacity-30 backdrop-blur-lg w-full max-w-4xl text-center shadow-lg">
        <h2 className="text-lime-400 text-4xl font-bold mb-6 tracking-wide transition-all duration-300 hover:drop-shadow-[0_0_10px_#a3e635]">
          Achievements
        </h2>

        <p className="text-white text-lg leading-relaxed transition-all duration-500 hover:text-lime-300 hover:tracking-wide">
          🏆{" "}
          <span className="font-semibold text-lime-300">
            Hackstreet 3.0 (2025):
          </span>
          Secured <span className="text-lime-400 font-bold">1st Place</span>{" "}
          with my team in Hackstreet 3.0, a hackathon organized by IEEE at JIIT
          Noida.
        </p>

        <p className="mt-4 text-white text-lg leading-relaxed transition-all duration-500 hover:text-lime-300 hover:tracking-wide">
          🎖️{" "}
          <span className="font-semibold text-lime-300">
            HackJKLU v4.0 (2025):
          </span>
          Secured <span className="text-lime-400 font-bold">4th Place</span>{" "}
          with my team in HackJKLU v4.0, a hackathon organized by JK Lakshmipat
          University, Jaipur.
        </p>
      </div>
    </div>
  );
};

export default Tech;
