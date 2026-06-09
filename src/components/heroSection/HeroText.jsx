import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center max-w-[560px]">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0 }}
        className="lg:text-lg sm:text-base uppercase tracking-[0.4em] text-white/60"
      >
        AI Backend & DevSecOps Engineer
      </motion.h2>
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0 }}
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl text-white font-bold uppercase leading-none"
      >
        Jordan <br className="sm:hidden md:block" />
        Chua
      </motion.h1>
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0 }}
        className="sm:text-sm md:text-base lg:text-lg mt-4 text-white/70 leading-relaxed"
      >
        I build secure automation, resilient pipelines, and practical web experiences.
        <br /> Minimal surface, strong delivery, measurable impact.
      </motion.p>
      <motion.div
        variants={fadeIn("up", 0.8)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0 }}
        className="flex flex-wrap gap-3 mt-6 md:justify-start sm:justify-center"
      >
        <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-sm">
          Security + automation
        </span>
        <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-sm">
          3+ years of impact
        </span>
        <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-sm">
          Enterprise delivery
        </span>
      </motion.div>
          <div className="mt-6 md:mt-8 flex md:justify-start sm:justify-center">
            <button
              onClick={() => window.dispatchEvent(new Event("openCV"))}
              className="px-6 py-2.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-white/90 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.15)]"
            >
              Preview CV
            </button>
          </div>
    </div>
  );
};

export default HeroText;
