import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="sm:text-4xl md:text-5xl lg:text-6xl text-white mb-10">About</h2>
      <p>
      I'm Jordan, an AI Backend & DevSecOps Engineer focused on secure automation, reliable delivery, and practical engineering outcomes.
      I work across pipelines, tooling, and interfaces, with a bias toward clean systems that are easy to trust and easy to use.
      </p>
      <button className="border border-white/15 rounded-full sm:py-3 sm:px-5 md:py-2 md:px-4 text-base flex gap-2 items-center mt-10 hover:bg-white hover:text-black transition-all duration-500 cursor-pointer md:self-start sm:self-center bg-white/5">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
