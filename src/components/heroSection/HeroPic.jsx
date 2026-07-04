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
      <div
        className="relative rounded-[2rem] p-4 backdrop-blur-sm"
        style={{
          border: "1px solid rgba(212,175,55,0.18)",
          background: "rgba(212,175,55,0.03)",
          boxShadow: "0 0 0 1px rgba(212,175,55,0.04), 0 24px 60px rgba(0,0,0,0.5)",
        }}
      >
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
