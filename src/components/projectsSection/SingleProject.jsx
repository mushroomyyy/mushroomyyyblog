import { motion } from "framer-motion";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { fadeIn } from "../../framerMotion/variants";
import MovingBorder from "../ui/moving-border";

const SingleProject = ({ name, year, align, image, link, description, stack }) => {
  return (
    <motion.div
      variants={fadeIn("top", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className={`flex w-full sm:flex-col-reverse items-center gap-8 ${
        align === "left" ? "md:flex-row" : "md:flex-row-reverse"
      } justify-end sm:flex-col`}
    >
      <div className={`flex flex-col gap-2 ${align === "left" ? "md:items-end" : "md:items-start"} sm:items-center`}>
        <h2 className="md:text-3xl sm:text-2xl text-white">{name}</h2>
        <h2 className="text-sm font-thin text-white/50 font-special">{year}</h2>
        {description && (
          <p className={`text-sm text-white/60 leading-relaxed max-w-[300px] ${align === "left" ? "md:text-right" : "md:text-left"} sm:text-center`}>
            {description}
          </p>
        )}
        {stack && stack.length > 0 && (
          <div className={`flex flex-wrap gap-2 mt-1 ${align === "left" ? "md:justify-end" : "md:justify-start"} sm:justify-center`}>
            {stack.map((tech) => (
              <span key={tech} className="px-2.5 py-0.5 rounded-full border border-white/20 bg-white/5 text-xs text-white/70">
                {tech}
              </span>
            ))}
          </div>
        )}
        <MovingBorder containerClassName="mt-2" borderRadius="999px">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm flex gap-2 items-center px-4 py-1.5 transition-colors duration-300"
            style={{ color: "rgba(212,175,55,0.8)" }}
            onMouseEnter={e => { e.currentTarget.style.color = "#F2D060"; }}
            onMouseLeave={e => { e.currentTarget.style.color = "rgba(212,175,55,0.8)"; }}
          >
            View <BsFillArrowUpRightCircleFill />
          </a>
        </MovingBorder>
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
