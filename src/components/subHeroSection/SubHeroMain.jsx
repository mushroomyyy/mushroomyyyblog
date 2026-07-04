import { motion } from "framer-motion";
import RotatingText from "../ui/rotating-text";

const taglines = ["AI-Powered Solutions", "Automation & Orchestration", "Security By Design"];

const Ornament = () => (
  <span className="mx-3" style={{ color: "rgba(212,175,55,0.3)" }}>◆</span>
);

const SubHeroMain = () => {
  return (
    <div className="w-full relative">
      <div className="gold-rule" />
      <div
        className="w-full text-center uppercase xl:text-xl md:text-lg sm:text-sm py-5 items-center gap-6 tracking-[0.35em] flex justify-around"
        style={{ background: "rgba(212,175,55,0.04)" }}
      >
        {/* Desktop: 3 staggered phrases */}
        {taglines.map((text, i) => (
          <motion.p
            key={text}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5, ease: "easeOut" }}
            className="md:block sm:hidden"
            style={{ color: "rgba(212,175,55,0.65)" }}
          >
            <Ornament />{text}<Ornament />
          </motion.p>
        ))}

        {/* Mobile only: KokonutUI RotatingText cycling through taglines */}
        <p className="md:hidden sm:block" style={{ color: "rgba(212,175,55,0.65)" }}>
          <Ornament />
          <RotatingText texts={taglines} interval={2600} />
          <Ornament />
        </p>
      </div>
      <div className="gold-rule" />
    </div>
  );
};

export default SubHeroMain;
