import { motion } from "framer-motion";
import ContactMeLeft from "./ContactMeLeft";
import ContactMeRight from "./ContactMeRight";

const MascotGold = ({ side, delay }) => (
  <motion.img
    src="/mushroomyyyblog/images/mushroom-cap-gold.png"
    alt=""
    className="absolute top-0 w-20 opacity-90 pointer-events-none hidden md:block z-10"
    style={{
      [side]: 0,
      transform: side === "left" ? "scaleX(-1)" : "none",
      filter: "drop-shadow(0 0 24px rgba(212,175,55,0.9))",
    }}
    animate={{ y: [0, -7, 0] }}
    transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay }}
  />
);

const ContactMeMain = () => {
  return (
    <div
      id="contact"
      className="max-w-[1200px] mx-auto items-center justify-center mt-[100px] px-4 relative"
    >
      <MascotGold side="right" delay={1.5} />
      <MascotGold side="left" delay={2.2} />
      <h2 className="sm:text-3xl md:text-5xl lg:text-6xl text-cyan mb-10 text-center">Contact Me</h2>
      <div className="flex justify-between sm:gap-8 lg:gap-24 bg-brown sm:p-4 md:p-8 rounded-2xl lg:flex-row sm:flex-col">
        <ContactMeLeft />
        <ContactMeRight />
      </div>
    </div>
  );
};

export default ContactMeMain;
