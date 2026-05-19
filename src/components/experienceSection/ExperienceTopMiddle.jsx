import { motion } from "framer-motion";

const RINGS = [
  { radius: 62,  tiltX: 68, tiltZ:   0, duration:  7, dotSize: 9,  lineOpacity: 0.40, glowPx: 13 },
  { radius: 94,  tiltX: 72, tiltZ:  58, duration: 13, dotSize:  7, lineOpacity: 0.24, glowPx:  9 },
  { radius: 122, tiltX: 65, tiltZ: 118, duration: 19, dotSize:  5, lineOpacity: 0.14, glowPx:  7 },
];

const LABELS = [
  { text: "AI",       style: { top: "8%",  left: "66%" }, delay: 0   },
  { text: "n8n",      style: { top: "74%", left: "7%"  }, delay: 0.9 },
  { text: "React",    style: { top: "78%", left: "60%" }, delay: 1.7 },
  { text: "Security", style: { top: "10%", left: "5%"  }, delay: 2.5 },
];

const ExperienceTopMiddle = () => {
  const S = 280;
  const C = S / 2;

  return (
    <div className="lg:w-[35%] md:w-[50%] sm:w-full bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm flex items-center justify-center">
      <div className="relative select-none" style={{ width: S, height: S }}>

        {/* Dot-grid background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.13) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        {/* Perspective container */}
        <div style={{ position: "absolute", inset: 0, perspective: "680px" }}>
          <div style={{ position: "absolute", inset: 0, transformStyle: "preserve-3d" }}>

            {/* Ambient glow */}
            <div
              className="absolute pointer-events-none"
              style={{
                width: 110, height: 110,
                top: C - 55, left: C - 55,
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(255,255,255,0.09) 0%, transparent 70%)",
              }}
            />

            {/* Central sphere */}
            <motion.div
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute pointer-events-none"
              style={{
                width: 50, height: 50,
                top: C - 25, left: C - 25,
                borderRadius: "50%",
                background: "radial-gradient(circle at 36% 30%, #ffffff 0%, #9ca3af 55%, #374151 100%)",
                boxShadow: "0 0 22px 7px rgba(255,255,255,0.3), 0 0 50px 20px rgba(255,255,255,0.06)",
              }}
            />

            {/* Orbital rings */}
            {RINGS.map(({ radius, tiltX, tiltZ, duration, dotSize, lineOpacity, glowPx }, i) => (
              <motion.div
                key={i}
                style={{
                  position: "absolute",
                  width: 0, height: 0,
                  top: C, left: C,
                  transformStyle: "preserve-3d",
                }}
                initial={{ rotateX: tiltX, rotateZ: tiltZ }}
                animate={{ rotateX: tiltX, rotateZ: tiltZ + 360 }}
                transition={{ duration, repeat: Infinity, ease: "linear", delay: i * 0.6 }}
              >
                {/* Ring border */}
                <div
                  style={{
                    position: "absolute",
                    width: radius * 2, height: radius * 2,
                    top: -radius, left: -radius,
                    borderRadius: "50%",
                    border: `1px solid rgba(255,255,255,${lineOpacity})`,
                  }}
                />
                {/* Orbiting dot */}
                <div
                  style={{
                    position: "absolute",
                    width: dotSize, height: dotSize,
                    top: -(radius + dotSize / 2),
                    left: -(dotSize / 2),
                    borderRadius: "50%",
                    background: "white",
                    boxShadow: `0 0 ${glowPx}px ${Math.round(glowPx / 2)}px rgba(255,255,255,0.65)`,
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Floating labels */}
        {LABELS.map(({ text, style, delay }) => (
          <motion.span
            key={text}
            className="absolute font-mono text-[8px] tracking-widest text-white/35 border border-white/10 px-2 py-0.5 rounded pointer-events-none"
            style={style}
            animate={{ y: [-3, 4, -3] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay }}
          >
            {text}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTopMiddle;
