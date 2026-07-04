import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs, SiOpenai, SiRedux, SiTypescript } from "react-icons/si";
import { Marquee } from "../ui/marquee";
import { HiggsFieldIcon, N8nIcon } from "./SkillIcons";

const skills = [
  { skill: "HTML", icon: FaHtml5 },
  { skill: "CSS", icon: FaCss3Alt },
  { skill: "JavaScript", icon: IoLogoJavascript },
  { skill: "TypeScript", icon: SiTypescript },
  { skill: "ReactJS", icon: FaReact },
  { skill: "Redux", icon: SiRedux },
  { skill: "NextJS", icon: SiNextdotjs },
  { skill: "OpenAI", icon: SiOpenai },
  { skill: "n8n", icon: N8nIcon },
  { skill: "TailwindCSS", icon: RiTailwindCssFill },
  { skill: "Higgsfield AI", icon: HiggsFieldIcon },
];

const SkillPill = ({ icon: Icon, skill }) => (
  <div className="flex flex-col items-center gap-3 mx-2">
    <div
      className="h-16 w-16 flex items-center justify-center rounded-full text-3xl backdrop-blur-sm transition-all duration-300"
      style={{
        color: "rgba(212,175,55,0.85)",
        border: "1px solid rgba(212,175,55,0.25)",
        background: "rgba(212,175,55,0.05)",
      }}
    >
      <Icon />
    </div>
    <p className="text-xs font-medium tracking-wide text-center whitespace-nowrap" style={{ color: "rgba(237,224,192,0.75)" }}>
      {skill}
    </p>
  </div>
);

const AllSkillsSM = () => {
  return (
    <div className="relative overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <Marquee pauseOnHover className="[--duration:26s] [--gap:2rem]">
        {skills.map((item) => (
          <SkillPill key={item.skill} icon={item.icon} skill={item.skill} />
        ))}
      </Marquee>
    </div>
  );
};

export default AllSkillsSM;
