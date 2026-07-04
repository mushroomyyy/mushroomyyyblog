import { cn } from "../../lib/utils";

const MovingBorder = ({ children, className, containerClassName, borderRadius = "999px" }) => {
  return (
    <div
      className={cn("relative p-[1px] overflow-hidden", containerClassName)}
      style={{ borderRadius }}
    >
      <div
        className="animate-spin-slow absolute pointer-events-none"
        style={{
          top: "-50%",
          left: "-50%",
          width: "200%",
          height: "200%",
          background:
            "conic-gradient(from 0deg, transparent 60%, rgba(212,175,55,0.75) 80%, transparent 100%)",
        }}
      />
      <div
        className={cn("relative z-10", className)}
        style={{ borderRadius: `calc(${borderRadius} - 1px)`, background: "#050710" }}
      >
        {children}
      </div>
    </div>
  );
};

export default MovingBorder;
