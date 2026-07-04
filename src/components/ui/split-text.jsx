import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SplitText = ({ text, className, style, delay = 0, stagger = 0.045 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const chars = text.split("");

  return (
    <span ref={ref} className={className} style={{ ...style, display: "inline-block" }}>
      {chars.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 28, rotateX: 40 }}
          animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
          transition={{
            delay: delay + i * stagger,
            duration: 0.5,
            ease: [0.2, 0.65, 0.3, 0.9],
          }}
          style={{ display: "inline-block" }}
        >
          {char === " " ? " " : char}
        </motion.span>
      ))}
    </span>
  );
};

export default SplitText;
