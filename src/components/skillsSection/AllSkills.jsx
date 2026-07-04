import { FaCss3Alt, FaHtml5, FaJava, FaPython, FaReact, FaVuejs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs, SiNuxtdotjs, SiOpenai, SiRedux, SiTypescript } from "react-icons/si";
import { Marquee } from "../ui/marquee";
import SingleSkill from "./SingleSkill";
import { ClaudeIcon, GroovyIcon, N8nIcon } from "./SkillIcons";

const skills = [
  { skill: "HTML", icon: FaHtml5 },
  { skill: "CSS", icon: FaCss3Alt },
  { skill: "JavaScript", icon: IoLogoJavascript },
  { skill: "TypeScript", icon: SiTypescript },
  { skill: "ReactJS", icon: FaReact },
  { skill: "Redux", icon: SiRedux },
  { skill: "NextJS", icon: SiNextdotjs },
  { skill: "NuxtJS", icon: SiNuxtdotjs },
  { skill: "VueJS", icon: FaVuejs },
  { skill: "OpenAI", icon: SiOpenai },
  { skill: "Claude", icon: ClaudeIcon },
  { skill: "n8n", icon: N8nIcon },
  { skill: "TailwindCSS", icon: RiTailwindCssFill },
  { skill: "Python", icon: FaPython },
  { skill: "Groovy", icon: GroovyIcon },
  { skill: "Java", icon: FaJava },
];

const firstRow = skills.slice(0, 6);
const secondRow = skills.slice(6);

const AllSkills = () => {
  return (
    <div className="relative flex flex-col gap-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
      <Marquee pauseOnHover className="[--duration:32s] [--gap:3.5rem]">
        {firstRow.map((item) => (
          <SingleSkill key={item.skill} text={item.skill} imgSvg={<item.icon />} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:32s] [--gap:3.5rem]">
        {secondRow.map((item) => (
          <SingleSkill key={item.skill} text={item.skill} imgSvg={<item.icon />} />
        ))}
      </Marquee>
    </div>
  );
};

export default AllSkills;
