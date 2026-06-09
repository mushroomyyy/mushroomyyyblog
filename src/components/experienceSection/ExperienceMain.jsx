import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import AllExperiences from "./AllExperiences";
import ExperienceText from "./ExperienceText";
import ExperienceTop from "./ExperienceTop";
import MushroomOrbitTimeline from "./MushroomOrbitTimeline";

const ExperienceMain = () => {
  return (
    <div id="experience" className="max-w-[1200px] mx-auto px-4 mt-[140px]">
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
