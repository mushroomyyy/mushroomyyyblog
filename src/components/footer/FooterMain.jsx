import { motion } from "framer-motion";

const FooterMain = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mt-24 mb-12 flex flex-col items-center gap-6 px-4">
      <motion.img
        src="/mushroomyyyblog/images/mushroom-logo-dkgreen.png"
        alt="Mushroomyyy"
        className="w-16 opacity-70 drop-shadow-[0_0_12px_rgba(45,150,57,0.3)]"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className="group flex flex-col items-center gap-2 cursor-pointer"
      >
        <span className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-white/5 text-white/60 transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:border-white group-hover:scale-110">
          ↑
        </span>
        <span className="text-[10px] uppercase tracking-[0.35em] text-white/35 group-hover:text-white/60 transition-colors duration-300">
          Back to top
        </span>
      </button>

      <div className="text-center max-w-sm">
        <p className="text-sm italic text-white/40 leading-relaxed">
          &ldquo;But the brightest of lights, casts the darkest of shadows.&rdquo;
        </p>
        <p className="mt-1 text-[10px] uppercase tracking-[0.35em] text-white/20">
          — Phoenix Wright
        </p>
      </div>

      <p className="text-[11px] text-white/20 tracking-wide">
        © 2025 Mushroomyyy
      </p>
    </footer>
  );
};

export default FooterMain;
