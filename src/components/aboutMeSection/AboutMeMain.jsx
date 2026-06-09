import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import AboutMeImage from "./AboutMeImage";
import AboutMeText from "./AboutMeText";
const AboutMeMain = () => {
  return (
    <div
      id="about"
      className="flex md:flex-row sm:flex-col sm:gap-8 lg:gap-12 px-4 max-w-[1200px] mx-auto mt-[120px] justify-between items-center"
    >
      <motion.div
        variants={fadeIn("right", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.7 }}
      >
        <AboutMeText />
      </motion.div>
      <motion.div
        variants={fadeIn("left", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.7 }}
      >
        <AboutMeImage />
      </motion.div>
    </div>
  );
};

export default AboutMeMain;
