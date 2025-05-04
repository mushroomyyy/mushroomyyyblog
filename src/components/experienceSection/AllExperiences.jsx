import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
import { fadeIn } from "../../framerMotion/variants";
import SingleExperience from "./SingleExperience";

const experiences = [
  {
    job: "DevSecOps Engineer",
    company: "United Overseas Bank",
    date: "2023 - Present",
    responsibilities: [
      "Automated and secured CI/CD with scalable, reusable components.",
      "Improved performance and reliability across dev and deployment workflows.",
      "Streamlined secure dev processes to enhance developer experience.",
    ],
  },
  {
    job: "P. Engineering Intern",
    company: "Thales Armed Forces",
    date: "2022 - 2023",
    responsibilities: [
      "Streamlining manual processes (document validation, and quality assurance checks)",
      "Developed an RPA tool to automate quality assurance.",
      "This project expected to cut over 80% of man-hours.",
    ],
  },
  {
    job: "Supply Supervisor",
    company: "Singapore Armed Forces",
    date: "2018 - 2022",
    responsibilities: [
      "Oversaw high-value communications equipment, maintaining readiness and security.",
      "Led innovation taskforces and key projects to drive process improvements and tech adoption.",
      "Led a 50 member team, in a fast-paced setting.",
    ],
  },
];


const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
