import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import AboutMeMain from "./components/aboutMeSection/AboutMeMain";
import AmbientBackdrop from "./components/background/AmbientBackdrop";
import CVModal from "./components/common/CVModal";
import ContactMeMain from "./components/contactMeSection/ContactMeMain";
import DanceJourneySection from "./components/danceSection/DanceJourneySection";
import ExperienceMain from "./components/experienceSection/ExperienceMain";
import FooterMain from "./components/footer/FooterMain";
import HeroMain from "./components/heroSection/HeroMain";
import NavbarMain from "./components/navbar/NavbarMain";
import ProjectsMain from "./components/projectsSection/ProjectsMain";
import SkillsMain from "./components/skillsSection/SkillsMain";
import SubHeroMain from "./components/subHeroSection/SubHeroMain";

function App() {
  const bootChars = "JORDAN CHUA".split("");
  const [isBooting, setIsBooting] = useState(true);

  useEffect(() => {
    const timerId = window.setTimeout(() => {
      setIsBooting(false);
    }, 1700);

    return () => window.clearTimeout(timerId);
  }, []);

  return (
    <main className="font-body text-white relative overflow-hidden bg-black min-h-screen">
      <AmbientBackdrop />
      <CVModal />

      <AnimatePresence>
        {isBooting && (
          <motion.div
            key="boot-loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.45, ease: "easeOut" } }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black"
          >
            <div className="boot-shell">
              <p className="boot-label" aria-label="Jordan Chua">
                {bootChars.map((char, index) => (
                  <span
                    key={`${char}-${index}`}
                    className="boot-letter"
                    style={{ "--delay": `${index * 0.06}s` }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </p>
              <p className="boot-subtitle">Secure Systems, Minimal Surface</p>
              <div className="boot-track">
                <div className="boot-fill" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 28, scale: 0.99 }}
        animate={isBooting ? { opacity: 0, y: 28, scale: 0.99 } : { opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.18, 0.88, 0.32, 1] }}
      >
        <NavbarMain />
        <HeroMain />
        <SubHeroMain />
        <SkillsMain />
        <AboutMeMain />
        <DanceJourneySection />
        <ExperienceMain />
        <ProjectsMain />
        <ContactMeMain />
        <FooterMain />
      </motion.div>
    </main>
  );
}

export default App;
