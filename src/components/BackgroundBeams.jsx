import { motion } from "framer-motion";

const BackgroundBeams = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      {/* Beam 1 */}
      <motion.div
        className="absolute top-0 left-1/4 w-[220px] h-full bg-green-700 opacity-25 blur-[100px]"
        animate={{
          y: ["-8%", "8%", "-8%"],
          rotate: [0, 8, -8, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Beam 2 */}
      <motion.div
        className="absolute top-1/2 right-1/4 w-[260px] h-full bg-emerald-600 opacity-30 blur-[110px]"
        animate={{
          y: ["8%", "-8%", "8%"],
          rotate: [0, -10, 10, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Beam 3 */}
      <motion.div
        className="absolute bottom-0 left-1/3 w-[280px] h-full bg-teal-700 opacity-25 blur-[120px]"
        animate={{
          y: ["-6%", "6%", "-6%"],
          rotate: [0, 15, -15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default BackgroundBeams;
