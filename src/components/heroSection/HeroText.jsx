import BlurText from "../ui/blur-text";
import ShimmerButton from "../ui/shimmer-button";
import SplitText from "../ui/split-text";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center max-w-[560px]">
      <BlurText
        text="AI Backend & DevSecOps Engineer"
        as="h2"
        delay={0.1}
        className="lg:text-lg sm:text-base uppercase tracking-[0.4em]"
        style={{ color: "rgba(212,175,55,0.65)" }}
      />

      <h1 className="md:text-[2.8rem] lg:text-6xl sm:text-4xl font-bold uppercase leading-none gold-gradient-text">
        <SplitText text="Jordan" delay={0.3} stagger={0.055} />
        <br className="sm:hidden md:block" />
        <SplitText text="Chua" delay={0.75} stagger={0.055} />
      </h1>

      <BlurText
        text="I build secure automation, resilient pipelines, and practical web experiences. Minimal surface, strong delivery, measurable impact."
        as="p"
        delay={1.1}
        className="sm:text-sm md:text-base lg:text-lg mt-4 leading-relaxed"
        style={{ color: "rgba(237,224,192,0.7)" }}
      />

      <div className="flex flex-wrap gap-3 mt-6 md:justify-start sm:justify-center">
        {["Security + automation", "3+ years of impact", "Enterprise delivery"].map((label, i) => (
          <BlurText
            key={label}
            text={label}
            as="span"
            delay={1.4 + i * 0.12}
            className="rounded-full px-4 py-2 text-sm backdrop-blur-sm transition-all duration-300"
            style={{
              color: "rgba(212,175,55,0.85)",
              border: "1px solid rgba(212,175,55,0.22)",
              background: "rgba(212,175,55,0.05)",
            }}
          />
        ))}
      </div>

      <div className="mt-6 md:mt-8 flex md:justify-start sm:justify-center">
        <ShimmerButton onClick={() => window.dispatchEvent(new Event("openCV"))}>
          Preview CV
        </ShimmerButton>
      </div>
    </div>
  );
};

export default HeroText;
