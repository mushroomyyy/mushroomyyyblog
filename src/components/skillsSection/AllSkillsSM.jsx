import { motion } from "framer-motion";
import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs, SiOpenai, SiRedux, SiTypescript } from "react-icons/si";
import { fadeIn } from "../../framerMotion/variants";
import { N8nIcon } from "./SkillIcons";

const skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
  },
  {
    skill: "CSS",
    icon: FaCss3Alt,
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    skill: "TypeScript",
    icon: SiTypescript,
  },
  {
    skill: "ReactJS",
    icon: FaReact,
  },
  {
    skill: "Redux",
    icon: SiRedux,
  },
  {
    skill: "NextJS",
    icon: SiNextdotjs,
  },
  {
    skill: "OpenAI",
    icon: SiOpenai,
  },
  {
    skill: "n8n",
    icon: N8nIcon,
  },
  {
    skill: "TailwindCSS",
    icon: RiTailwindCssFill,
  },
];

const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
      {skills.map((item, index) => {
        return (
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            key={index}
            className="flex flex-col items-center hover:-translate-y-5 transition-all duration-500"
          >
            <div className="bg-white/5 text-white h-[80px] w-[80px] flex items-center justify-center rounded-full hover:scale-105 transform transition-all duration-500 text-4xl border border-white/15 backdrop-blur-sm shadow-[0_0_0_1px_rgba(255,255,255,0.03)]">
              <item.icon />
            </div>
            <p className="text-white/80 font-medium tracking-wide text-center mt-6 whitespace-nowrap">{item.skill}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AllSkillsSM;
