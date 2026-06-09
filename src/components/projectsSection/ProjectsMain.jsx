import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";

const projects = [
  {
    name: "Bitbucket Code Doctor",
    year: "Sep 2024",
    align: "right",
    image: "/mushroomyyyblog/images/bitbucket-code-doctor.svg",
    link: "https://pr-ai-code-reviewer.vercel.app/",
    description: "AI-powered pull request reviewer that analyses code diffs and delivers automated feedback directly in Bitbucket.",
    stack: ["React", "OpenAI", "Vercel"],
  },
  {
    name: "Prompt Template",
    year: "Jan 2025",
    align: "left",
    image: "/mushroomyyyblog/images/prompt-template.svg",
    link: "https://bitbucket.org/debugging-dragons/prompt-template/src/main/",
    description: "A structured prompt library for managing and versioning LLM prompt templates across teams.",
    stack: ["Python", "Bitbucket API"],
  },
  {
    name: "n8n Automation",
    year: "Feb 2025",
    align: "right",
    image: "/mushroomyyyblog/images/n8n-automation.svg",
    link: "#",
    description: "Enterprise workflow automation templates built on n8n, covering data pipelines and notification routing.",
    stack: ["n8n", "Python"],
  },
  {
    name: "FoodMark",
    year: "May 2025",
    align: "left",
    image: "/mushroomyyyblog/images/foodmark.svg",
    link: "https://github.com/Dubstepmonk/FoodPrint",
    description: "A food discovery and bookmarking app for saving and sharing favourite restaurants and dishes.",
    stack: ["React", "Firebase"],
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.7 }}
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
              link={project.link}
              description={project.description}
              stack={project.stack}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
