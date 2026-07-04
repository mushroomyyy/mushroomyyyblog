import { cn } from "../../lib/utils";

const ShimmerButton = ({ children, className, onClick, ...props }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "group relative inline-flex items-center justify-center overflow-hidden rounded-full px-6 py-2.5 font-semibold text-sm transition-shadow duration-300 hover:shadow-[0_0_32px_rgba(212,175,55,0.45)]",
        className,
      )}
      style={{ background: "linear-gradient(135deg, #D4AF37, #C9A227)", color: "#050710" }}
      {...props}
    >
      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 pointer-events-none" />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
};

export default ShimmerButton;
