import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const milestones = [
  "Started dancing young and built discipline through consistent practice.",
  "Performed in team settings where timing, trust, and coordination mattered.",
  "Applied that same mindset to engineering: rhythm, iteration, and composure under pressure.",
];

const DanceJourneySection = () => {
  return (
    <section id="dance" className="max-w-[1200px] mx-auto px-4 mt-16 mb-20">
      <motion.div
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.35 }}
        className="rounded-lg border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
      >
        <p className="text-[10px] uppercase tracking-[0.35em] text-white/50">Personal</p>
        <h3 className="mt-1.5 text-lg md:text-xl text-white/90 font-semibold">Dance</h3>
        <p className="mt-2.5 text-xs md:text-sm text-white/65 leading-relaxed">
          Dance shaped how I approach growth: consistency, refinement, and performing with clarity.
        </p>

        <ul className="mt-3 space-y-1.5 text-xs text-white/60 list-disc pl-5">
          {milestones.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};

export default DanceJourneySection;