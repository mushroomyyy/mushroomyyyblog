import { motion } from "framer-motion";

const AboutMeImage = () => {
  return (
    <motion.div
      whileHover={{ y: -12, scale: 1.04 }}
      transition={{ type: "spring", stiffness: 160, damping: 16 }}
      className="sm:w-[80vw] sm:max-w-[320px] md:w-[320px] relative flex items-center justify-center"
    >
      {/* Glow ring behind the mascot */}
      <div
        className="absolute inset-0 rounded-full blur-[60px] opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(212,175,55,0.6) 0%, transparent 70%)" }}
      />
      <img
        src="/mushroomyyyblog/images/mushroom-logo-about.png"
        alt="Mushroomyyy mascot"
        className="w-full h-auto object-contain drop-shadow-[0_0_32px_rgba(212,175,55,0.25)] transition duration-500"
      />
    </motion.div>
  );
};

export default AboutMeImage;
