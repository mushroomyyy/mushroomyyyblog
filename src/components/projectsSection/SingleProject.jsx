import { motion } from "framer-motion";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { fadeIn } from "../../framerMotion/variants";

const SingleProject = ({ name, year, align, image, link }) => {
  return (
    <motion.div
      variants={fadeIn("top", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className={`flex w-full sm:flex-col-reverse items-center gap-8 ${
        align === "left" ? "md:flex-row" : "md:flex-row-reverse"
      } justify-end sm:flex-col`}
    >
      <div>
        <h2 className="md:text-3xl sm:text-2xl text-white">{name}</h2>
        <h2
          className={`text-xl font-thin text-white font-special sm:text-center ${
            align === "left" ? "md:text-right" : "md:text-left"
          }`}
        >
          {year}
        </h2>
        <a
          href={link}
          className={`text-lg flex gap-2 items-center text-white/70 hover:text-white transition-all duration-500 cursor-pointer sm:justify-self-center ${
            align === "left" ? "md:justify-self-end" : "md:justify-self-start"
          }`}
        >
          View <BsFillArrowUpRightCircleFill />
        </a>
      </div>
      <motion.div
        whileHover={{ y: -8, rotateY: align === "left" ? -6 : 6, rotateX: 4, scale: 1.03 }}
        transition={{ type: "spring", stiffness: 180, damping: 18 }}
        className="max-h-[220px] sm:max-w-full md:max-w-[400px] rounded-2xl overflow-hidden transform transition-all duration-500 relative border border-white/10 bg-white/5 backdrop-blur-sm photo-tilt"
      >
        <div className="photo-depth-layer !rounded-2xl" />
        <div className="photo-shine" />
        <div className="w-full h-full bg-white/10 opacity-30 absolute top-0 left-0 hover:opacity-0 transition-all duration-500 md:block sm:hidden"></div>
        <img
          src={image}
          alt="website image"
          className="w-full h-full grayscale-[0.12] transition duration-500"
        />
      </motion.div>
    </motion.div>
  );
};

export default SingleProject;
