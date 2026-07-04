import { useEffect, useState } from "react";

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const AmbientBackdrop = () => {
  const [progress, setProgress] = useState(0);
  const [burst, setBurst] = useState(0);

  useEffect(() => {
    let frameId = 0;
    let burstTimeoutId = 0;

    const updateProgress = () => {
      const scrollTop = window.scrollY || window.pageYOffset;
      const maxScroll = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1,
      );

      setProgress(clamp(scrollTop / maxScroll, 0, 1));
    };

    const handleScroll = () => {
      if (frameId) {
        return;
      }

      frameId = window.requestAnimationFrame(() => {
        updateProgress();
        frameId = 0;
      });
    };

    const handleKeyDown = () => {
      window.clearTimeout(burstTimeoutId);
      setBurst(1);
      burstTimeoutId = window.setTimeout(() => setBurst(0), 140);
    };

    updateProgress();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
      window.cancelAnimationFrame(frameId);
      window.clearTimeout(burstTimeoutId);
    };
  }, []);

  const drift = progress * 18;
  const tighten = progress * 0.18 + burst * 0.08;

  const shapeStyle = (x, y, scale, rotate, opacity = 1) => ({
    transform: `translate3d(${x - drift}vw, ${y - drift * 0.6}vh, 0) scale(${scale - tighten}) rotate(${rotate + progress * 24}deg)`,
    opacity: (0.12 + progress * 0.1 + burst * 0.06) * opacity,
  });

  return (
    <div aria-hidden="true" className="fixed inset-0 -z-10 overflow-hidden" style={{ background: "#050710" }}>
      {/* Warm gold ambient radial glows */}
      <div className="absolute inset-0" style={{
        background: [
          "radial-gradient(ellipse 70% 50% at 20% 0%, rgba(212,175,55,0.07) 0%, transparent 60%)",
          "radial-gradient(ellipse 50% 40% at 80% 100%, rgba(154,123,28,0.06) 0%, transparent 55%)",
          "radial-gradient(circle at 50% 50%, rgba(212,175,55,0.025) 0%, transparent 40%)",
        ].join(", ")
      }} />

      {/* Floating circle — top left */}
      <div
        className="absolute left-[4vw] top-[10vh] h-56 w-56 rounded-full blur-[1px]"
        style={{
          border: "1px solid rgba(212,175,55,0.18)",
          ...shapeStyle(0, 0, 1, 8),
        }}
      />

      {/* Floating rounded rect — top right */}
      <div
        className="absolute right-[6vw] top-[18vh] h-40 w-40 rotate-12 rounded-[2rem]"
        style={{
          border: "1px solid rgba(212,175,55,0.14)",
          ...shapeStyle(0, 0, 0.9, -18),
        }}
      />

      {/* Diamond accent — bottom left */}
      <div
        className="absolute left-[12vw] bottom-[22vh] h-20 w-20"
        style={{
          border: "1px solid rgba(212,175,55,0.2)",
          transform: `rotate(${45 + progress * 20}deg) scale(${1 - tighten * 0.5})`,
          opacity: 0.18 + progress * 0.1,
        }}
      />

      {/* Large rounded rect — bottom left */}
      <div
        className="absolute left-[18vw] bottom-[18vh] h-72 w-72 rounded-[3rem]"
        style={{
          border: "1px solid rgba(154,123,28,0.1)",
          ...shapeStyle(0, 0, 1.05, 24),
        }}
      />

      {/* Circle — bottom right */}
      <div
        className="absolute right-[18vw] bottom-[8vh] h-48 w-48 rounded-full"
        style={{
          border: "1px solid rgba(212,175,55,0.1)",
          ...shapeStyle(0, 0, 0.8, -8),
        }}
      />

      {/* Diamond accent — top right area */}
      <div
        className="absolute right-[10vw] top-[45vh] h-14 w-14"
        style={{
          border: "1px solid rgba(212,175,55,0.15)",
          transform: `rotate(${45 + progress * 30}deg) scale(${0.85 - tighten * 0.3})`,
          opacity: 0.14 + progress * 0.08,
        }}
      />

      {/* Large center ring */}
      <div
        className="absolute left-1/2 top-1/2 h-[36rem] w-[36rem] rounded-full"
        style={{
          border: "1px solid rgba(212,175,55,0.05)",
          transform: `translate3d(calc(-50% + ${drift * 0.45}vw), calc(-50% + ${drift * 0.3}vh), 0) scale(${0.78 + progress * 0.08 + burst * 0.04})`,
          opacity: 0.06 + progress * 0.08,
        }}
      />

      {/* Inner center ring — tighter */}
      <div
        className="absolute left-1/2 top-1/2 h-[22rem] w-[22rem] rounded-full"
        style={{
          border: "1px solid rgba(212,175,55,0.04)",
          transform: `translate3d(calc(-50% - ${drift * 0.2}vw), calc(-50% - ${drift * 0.15}vh), 0) scale(${0.9 + progress * 0.05})`,
          opacity: 0.05 + progress * 0.06,
        }}
      />
    </div>
  );
};

export default AmbientBackdrop;
