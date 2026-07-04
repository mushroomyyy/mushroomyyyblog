import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const BlurText = ({ text, className, style, delay = 0, as: Tag = "span" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const words = text.split(" ");

  return (
    <Tag ref={ref} className={className} style={style}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, filter: "blur(10px)", y: 6 }}
          animate={isInView ? { opacity: 1, filter: "blur(0px)", y: 0 } : {}}
          transition={{ delay: delay + i * 0.1, duration: 0.65, ease: "easeOut" }}
          style={{ display: "inline-block", marginRight: i < words.length - 1 ? "0.22em" : 0 }}
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  );
};

export default BlurText;
