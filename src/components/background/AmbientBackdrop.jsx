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

  const shapeStyle = (x, y, scale, rotate) => ({
    transform: `translate3d(${x - drift}vw, ${y - drift * 0.6}vh, 0) scale(${scale - tighten}) rotate(${rotate + progress * 24}deg)`,
    opacity: 0.16 + progress * 0.12 + burst * 0.08,
  });

  return (
    <div aria-hidden="true" className="fixed inset-0 -z-10 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_42%),radial-gradient(circle_at_bottom,_rgba(255,255,255,0.05),_transparent_38%)]" />
      <div
        className="absolute left-[4vw] top-[10vh] h-56 w-56 rounded-full border border-white/15 blur-[1px]"
        style={shapeStyle(0, 0, 1, 8)}
      />
      <div
        className="absolute right-[6vw] top-[18vh] h-40 w-40 rotate-12 rounded-[2rem] border border-white/15"
        style={shapeStyle(0, 0, 0.9, -18)}
      />
      <div
        className="absolute left-[18vw] bottom-[18vh] h-72 w-72 rounded-[3rem] border border-white/10"
        style={shapeStyle(0, 0, 1.05, 24)}
      />
      <div
        className="absolute right-[18vw] bottom-[8vh] h-48 w-48 rounded-full border border-white/10"
        style={shapeStyle(0, 0, 0.8, -8)}
      />
      <div
        className="absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5"
        style={{
          transform: `translate3d(calc(-50% + ${drift * 0.45}vw), calc(-50% + ${drift * 0.3}vh), 0) scale(${0.78 + progress * 0.08 + burst * 0.04})`,
          opacity: 0.08 + progress * 0.1,
        }}
      />
    </div>
  );
};

export default AmbientBackdrop;