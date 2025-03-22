import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useAnimation,
  AnimatePresence,
} from "framer-motion";
import { Quote, Sparkles, MousePointerClick } from "lucide-react";

const AnimatedQuoteBox = () => {
  const quoteRef = useRef(null);
  const isInView = useInView(quoteRef, { once: false, amount: 0.3 });
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Track mouse position for glow effect
  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  // Animate in when in view
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  // Words to animate
  const words =
    "Because writing flawless code on the first try is a myth, and design without a little drama is just a wireframe.".split(
      " "
    );

  return (
    <motion.div
      ref={quoteRef}
      className="relative border border-lime-400 rounded-lg p-8 bg-black bg-opacity-30 backdrop-blur-lg w-full max-w-3xl text-center shadow-lg overflow-hidden"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6 },
        },
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      onClick={() => setIsClicked(!isClicked)}
      whileHover={{ boxShadow: "0 0 25px rgba(163, 230, 53, 0.4)" }}
    >
      {/* Dynamic glow effect that follows cursor */}
      {isHovered && (
        <motion.div
          className="absolute bg-lime-400 opacity-10 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x - 100,
            y: mousePosition.y - 100,
            scale: isClicked ? 1.5 : 1,
          }}
          transition={{ type: "spring", damping: 10 }}
          style={{ width: 200, height: 200 }}
        />
      )}

      {/* Top quote mark with animation */}
      <motion.div
        initial={{ opacity: 0, x: -50, rotate: -20 }}
        animate={controls}
        variants={{
          hidden: { opacity: 0, x: -50, rotate: -20 },
          visible: {
            opacity: 0.7,
            x: -15,
            rotate: 0,
            transition: { duration: 0.5, delay: 0.2 },
          },
        }}
        whileHover={{ scale: 1.2, rotate: -10 }}
        className="absolute top-0 left-0 transform -translate-x-4 -translate-y-4 text-lime-400"
      >
        <Quote size={50} />
      </motion.div>

      {/* Animated text that staggers in word by word */}
      <motion.p className="text-white text-2xl italic font-medium px-4 leading-relaxed flex flex-wrap justify-center gap-x-2">
        {words.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.3,
                  delay: 0.5 + i * 0.04,
                  ease: "easeOut",
                },
              },
            }}
            className={
              word === "flawless" || word === "code" || word === "drama"
                ? "text-lime-400 relative"
                : ""
            }
          >
            {(word === "flawless" || word === "drama" || word === "code") &&
              isHovered && (
                <motion.span
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Sparkles
                    className="absolute text-lime-400 -mt-6 -ml-6"
                    size={16}
                  />
                </motion.span>
              )}
            {word}
          </motion.span>
        ))}
      </motion.p>

      {/* Bottom quote mark with animation */}
      <motion.div
        initial={{ opacity: 0, x: 50, rotate: 20 }}
        animate={controls}
        variants={{
          hidden: { opacity: 0, x: 50, rotate: 20 },
          visible: {
            opacity: 0.7,
            x: 15,
            rotate: 0,
            transition: { duration: 0.5, delay: 0.2 },
          },
        }}
        whileHover={{ scale: 1.2, rotate: 10 }}
        className="absolute bottom-0 right-0 transform translate-x-4 translate-y-4 text-lime-400"
      >
        <Quote size={50} />
      </motion.div>

      {/* Call to action hint */}
      <AnimatePresence>
        {!isClicked && isHovered && (
          <motion.div
            className="absolute bottom-2 right-2 text-lime-400/70 flex items-center gap-1 text-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
          >
            <MousePointerClick size={14} />
            <span>Click me</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Particle effect on click */}
      <AnimatePresence>
        {isClicked && (
          <>
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute w-2 h-2 rounded-full bg-lime-400"
                initial={{
                  opacity: 1,
                  x: mousePosition.x,
                  y: mousePosition.y,
                  scale: 0,
                }}
                animate={{
                  x: mousePosition.x + (Math.random() - 0.5) * 200,
                  y: mousePosition.y + (Math.random() - 0.5) * 200,
                  opacity: 0,
                  scale: Math.random() * 2 + 0.5,
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: Math.random() * 1 + 0.5 }}
              />
            ))}
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default AnimatedQuoteBox;
