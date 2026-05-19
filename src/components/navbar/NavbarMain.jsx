import { SiGithub } from "react-icons/si";
import { useSelector } from "react-redux";
import CVButton from "./CVButton";
import NavbarBtn from "./NavbarBtn";
import NavbarLinks from "./NavbarLinks";
import NavbarLogo from "./NavbarLogo";
import NavbarToggler from "./NavbarToggler";

const NavbarMain = () => {
  const menuOpen = useSelector((state) => state.menu.menuOpen);
  return (
    <nav className="max-w-[1300px] mx-auto w-full px-4 fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2">
      <div className="flex justify-between w-full max-w-[1200px] mx-auto bg-black/70 backdrop-blur-md items-center p-5 rounded-r-full rounded-l-full border border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
        <NavbarLogo />
        <div className={`${menuOpen ? "sm:block" : "sm:hidden"} lg:block`}>
          <NavbarLinks />
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/mushroomyyy"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full text-white/70 border border-white/15 bg-white/5 hover:bg-white hover:text-black transition-all duration-300"
            aria-label="GitHub"
          >
            <SiGithub size={18} />
          </a>
          <CVButton />
          <NavbarBtn />
        </div>
      </div>
      <div className="flex lg:hidden sm:block p-5 bg-black/70 backdrop-blur-md items-center justify-center rounded-full border border-white/10">
        <NavbarToggler />
      </div>
    </nav>
  );
};

export default NavbarMain;
