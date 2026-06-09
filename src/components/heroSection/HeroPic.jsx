import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0 }}
      whileHover={{ rotateY: -6, rotateX: 4, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 180, damping: 18 }}
      className="h-full flex items-center justify-center photo-tilt"
    >
      <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur-sm">
        <div className="photo-depth-layer" />
        <div className="photo-shine" />
        <img
          src="/mushroomyyyblog/images/hero-section.png"
          alt="Jordan Chua"
          className="sm:max-h-[240px] md:max-h-[340px] lg:max-h-[420px] w-auto rounded-[1.25rem] grayscale-[0.08] transition duration-500"
        />
      </div>
    </motion.div>
  );
};

export default HeroPic;
