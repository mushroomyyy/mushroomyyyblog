import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";

const projects = [
  {
    name: "Bitbucket Code Doctor",
    year: "Sep2024",
    align: "right",
    image: "/mushroomyyyblog/images/website-img-1.jpg",
    link: "https://pr-ai-code-reviewer.vercel.app/",
  },
  {
    name: "Prompt Template",
    year: "Jan2025",
    align: "left",
    image: "/mushroomyyyblog/images/website-img-2.webp",
    link: "https://bitbucket.org/debugging-dragons/prompt-template/src/main/",
  },
  {
    name: "n8n Automation",
    year: "Feb2025",
    align: "right",
    image: "/mushroomyyyblog/images/website-img-3.jpg",
    link: "#",
  },
  {
    name: "FoodMark",
    year: "May2025",
    align: "left",
    image: "/mushroomyyyblog/images/website-img-4.jpg",
    link: "https://github.com/Dubstepmonk/FoodPrint",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
