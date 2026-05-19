import { motion } from "framer-motion";
import { Brain, Code, Rocket, Shield, Zap } from "lucide-react";
import { fadeIn } from "../../framerMotion/variants";
import RadialOrbitalTimeline from "../ui/radial-orbital-timeline";

const timelineData = [
  {
    id: 1,
    title: "Secure Design",
    date: "Foundation",
    content:
      "Security isn't bolted on — it's the starting point. Every system I build treats trust as a design constraint, not a checkbox.",
    category: "Security",
    icon: Shield,
    relatedIds: [2, 5],
    status: "completed",
    energy: 95,
  },
  {
    id: 2,
    title: "AI-Assisted Dev",
    date: "Accelerator",
    content:
      "I use AI to move faster without losing correctness — from code generation to intelligent automation that knows when to escalate.",
    category: "AI Engineering",
    icon: Brain,
    relatedIds: [1, 3],
    status: "in-progress",
    energy: 88,
  },
  {
    id: 3,
    title: "Automation First",
    date: "Core Practice",
    content:
      "If a task runs twice, it should run itself. Reusable, observable pipelines that remove toil and keep teams moving.",
    category: "Automation",
    icon: Zap,
    relatedIds: [2, 4],
    status: "completed",
    energy: 92,
  },
  {
    id: 4,
    title: "Reliable Delivery",
    date: "Proof of Work",
    content:
      "Pipelines and deployments that teams can bet on. Confidence comes from observability, rollback-readiness, and consistent standards.",
    category: "Delivery",
    icon: Rocket,
    relatedIds: [3, 5],
    status: "completed",
    energy: 90,
  },
  {
    id: 5,
    title: "Developer Experience",
    date: "Force Multiplier",
    content:
      "Clean APIs, minimal friction, readable systems. Good DX is what makes security habits stick and automation actually get used.",
    category: "DX",
    icon: Code,
    relatedIds: [4, 1],
    status: "in-progress",
    energy: 78,
  },
];

const MushroomOrbitTimeline = () => {
  return (
    <motion.section
      variants={fadeIn("up", 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      className="mt-14"
    >
      <div className="mb-4 px-1">
        <p className="text-[10px] uppercase tracking-[0.4em] text-white/45">Engineering Principles</p>
        <h3 className="mt-1 text-lg font-semibold text-white/80">
          Five pillars. Click any node to explore.
        </h3>
      </div>
      <div className="rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden">
        <RadialOrbitalTimeline
          timelineData={timelineData}
          containerClassName="sm:h-[360px] md:h-[460px] lg:h-[580px]"
        />
      </div>
    </motion.section>
  );
};

export default MushroomOrbitTimeline;
