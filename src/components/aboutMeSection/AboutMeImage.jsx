import { motion } from "framer-motion";

const AboutMeImage = () => {
  return (
    <motion.div
      whileHover={{ y: -10, rotateY: 7, rotateX: 3, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 170, damping: 16 }}
      className="sm:w-[80vw] sm:max-w-[350px] md:w-[350px] relative photo-tilt"
    >
      <div className="rounded-[100px] overflow-hidden relative">
        <div className="photo-shine" />
        <img
          src="/mushroomyyyblog/images/about-me-section.png"
          alt="About Me Image"
          className="w-full h-auto object-contain transform transition duration-500"
        />
      </div>
    </motion.div>
  );
};

export default AboutMeImage;
