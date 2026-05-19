import { LuArrowUpRight } from "react-icons/lu";

const NavbarBtn = () => {
  return (
    <a
      href="https://www.linkedin.com/in/jordanvckj/"
      target="_blank"
      rel="noopener noreferrer"
      className="px-4 py-2 rounded-full text-lg font-bold font-body text-white border border-white/15 flex items-center gap-1 bg-white/5 transition-all duration-500 hover:scale-105 hover:bg-white hover:text-black cursor-pointer"
    >
      Hire Me
      <div className="sm:hidden md:block">
        <LuArrowUpRight />
      </div>
    </a>
  );
};

export default NavbarBtn;
