import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
import { fadeIn } from "../../framerMotion/variants";
import SingleExperience from "./SingleExperience";

const experiences = [
  {
    job: "AI Backend & DevSecOps Engineer",
    company: "United Overseas Bank",
    date: "2023 - Present",
    responsibilities: [
      "Builds AI-assisted backend tooling and secure automation for internal engineering workflows.",
      "Owns DevSecOps delivery patterns that improve reliability and deployment confidence.",
      "Partners with teams to simplify engineering processes and reduce manual overhead.",
    ],
  },
  {
    job: "DevSecOps Engineer",
    company: "United Overseas Bank",
    date: "2022 - 2023",
    responsibilities: [
      "Automated and secured CI/CD with scalable, reusable components.",
      "Improved performance and reliability across dev and deployment workflows.",
      "Streamlined secure dev processes to enhance developer experience.",
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
                viewport={{ once: true, amount: 0.7 }}
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
