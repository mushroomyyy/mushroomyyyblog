import { Link } from "react-scroll";
import MushroomLogo from "./MushroomLogo";

const NavbarLogo = () => {
  return (
    <Link to="hero" spy smooth duration={500} className="cursor-pointer flex items-center gap-3 group">
      <MushroomLogo size="small" />
      <div className="leading-none">
        <h1 className="text-white text-2xl sm:hidden md:block group-hover:text-white/80 transition-all duration-300">
          Jordan Chua
        </h1>
        <h1 className="text-white font-special font-extrabold text-4xl md:hidden sm:block group-hover:text-white/80 transition-all duration-300">
          JC
        </h1>
      </div>
    </Link>
  );
};

export default NavbarLogo;
