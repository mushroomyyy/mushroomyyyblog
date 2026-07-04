import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import AllSkills from "./AllSkills";
import AllSkillsSM from "./AllSkillsSM";
import SkillsText from "./SkillsText";

const SkillsMain = () => {
  return (
    <div id="skills" className="relative">
<div className="max-w-[1200px] px-4 mx-auto sm:min-h-0 lg:min-h-[600px] relative overflow-hidden pt-24 pb-8 flex flex-col items-center">
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
          className="relative z-10"
        >
          <SkillsText />
        </motion.div>
        <div className="relative z-10 mt-16 sm:hidden lg:block">
          <AllSkills />
        </div>
        <div className="relative z-10 mt-12 sm:block lg:hidden">
          <AllSkillsSM />
        </div>
      </div>
    </div>
  );
};

export default SkillsMain;
