import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-lightTaro mb-10">About Me</h2>
      <p>
      I'm Jordan, a DevSecOps Engineer at UOB, focused on automation, security, and efficient CI/CD delivery.
      With a strong background in Java and Groovy, I build secure pipelines, embed security early in development, and drive compliance across systems.
      I work closely with cross-functional teams and manage tools like Jenkins, SonarQube, and AppScan to support UOB’s secure digital transformation.
      </p>
      <button className="border border-white rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-white transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-lightTaro hover:text-taro transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
