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
      <div
        className="flex justify-between w-full max-w-[1200px] mx-auto backdrop-blur-md items-center p-5 rounded-r-full rounded-l-full"
        style={{
          background: "rgba(5,7,16,0.82)",
          border: "1px solid rgba(212,175,55,0.22)",
          boxShadow: "0 0 0 1px rgba(212,175,55,0.04), 0 8px 32px rgba(0,0,0,0.5), 0 0 40px rgba(212,175,55,0.04)",
        }}
      >
        <NavbarLogo />
        <div className={`${menuOpen ? "sm:block" : "sm:hidden"} lg:block`}>
          <NavbarLinks />
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/mushroomyyy"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full transition-all duration-300"
            style={{
              color: "rgba(212,175,55,0.7)",
              border: "1px solid rgba(212,175,55,0.2)",
              background: "rgba(212,175,55,0.04)",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "rgba(212,175,55,0.15)";
              e.currentTarget.style.color = "#F2D060";
              e.currentTarget.style.borderColor = "rgba(212,175,55,0.45)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "rgba(212,175,55,0.04)";
              e.currentTarget.style.color = "rgba(212,175,55,0.7)";
              e.currentTarget.style.borderColor = "rgba(212,175,55,0.2)";
            }}
            aria-label="GitHub"
          >
            <SiGithub size={18} />
          </a>
          <CVButton />
          <NavbarBtn />
        </div>
      </div>
      <div
        className="flex lg:hidden sm:block p-5 backdrop-blur-md items-center justify-center rounded-full"
        style={{
          background: "rgba(5,7,16,0.82)",
          border: "1px solid rgba(212,175,55,0.22)",
        }}
      >
        <NavbarToggler />
      </div>
    </nav>
  );
};

export default NavbarMain;
