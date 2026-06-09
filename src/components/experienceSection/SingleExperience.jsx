import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleExperience = ({ experience }) => {
  return (
    <motion.div
      variants={fadeIn("right", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.7 }}
      className="md:h-[350px] md:w-[240px] sm:h-auto sm:w-full border border-white/10 rounded-2xl mt-12 p-4 bg-white/5 backdrop-blur-sm"
    >
      <p className="font-bold text-white">{experience.job}</p>
      <p className="text-white/75">{experience.company}</p>
      <p className="text-white/45">{experience.date}</p>
      <ul className="list-disc mt-4 pl-4">
        {experience.responsibilities.map((resp, index) => {
          return <li key={index}>{resp}</li>;
        })}
      </ul>
    </motion.div>
  );
};

export default SingleExperience;