import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import AllExperiences from "./AllExperiences";
import ExperienceText from "./ExperienceText";
import ExperienceTop from "./ExperienceTop";
import MushroomOrbitTimeline from "./MushroomOrbitTimeline";

const MascotRed = ({ side, delay }) => (
  <motion.img
    src="/mushroomyyyblog/images/mushroom-cap-red-final.png"
    alt=""
    className="absolute top-0 w-20 opacity-90 pointer-events-none hidden md:block z-10"
    style={{ filter: "drop-shadow(0 0 24px rgba(220,0,0,0.9))" }}
    style={{
      [side]: 0,
      transform: side === "left" ? "scaleX(-1)" : "none",
    }}
    animate={{ y: [0, -7, 0] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
  />
);

const ExperienceMain = () => {
  return (
    <div id="experience" className="max-w-[1200px] mx-auto px-4 mt-[140px] relative">
      <MascotRed side="right" delay={0.5} />
      <MascotRed side="left" delay={1.2} />
      <motion.div
        variants={fadeIn("down", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.7 }}
      >
        <ExperienceText />
      </motion.div>
      <motion.div
        variants={fadeIn("down", 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0 }}
      >
        <ExperienceTop />
      </motion.div>
      <MushroomOrbitTimeline />
      <div className="w-full h-px mt-8 bg-white/10 lg:block sm:hidden"></div>
      <AllExperiences />
    </div>
  );
};

export default ExperienceMain;
