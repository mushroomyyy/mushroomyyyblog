const SingleSkill = ({ imgSvg, text }) => {
  return (
    <div className="hover:-translate-y-10 transition-all duration-500 flex flex-col items-center">
      <div className="flex flex-col items-center gap-6 relative">
        <div
          className="h-[100px] w-[100px] flex items-center justify-center rounded-full hover:scale-105 transform transition-all duration-500 text-5xl backdrop-blur-sm"
          style={{
            color: "rgba(212,175,55,0.85)",
            border: "1px solid rgba(212,175,55,0.25)",
            background: "rgba(212,175,55,0.05)",
            boxShadow: "0 0 0 1px rgba(212,175,55,0.04)",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.boxShadow = "0 0 22px rgba(212,175,55,0.25), 0 0 0 1px rgba(212,175,55,0.1)";
            e.currentTarget.style.borderColor = "rgba(212,175,55,0.5)";
            e.currentTarget.style.color = "#F2D060";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.boxShadow = "0 0 0 1px rgba(212,175,55,0.04)";
            e.currentTarget.style.borderColor = "rgba(212,175,55,0.25)";
            e.currentTarget.style.color = "rgba(212,175,55,0.85)";
          }}
        >
          {imgSvg}
        </div>
        <p className="font-medium tracking-wide text-center whitespace-nowrap" style={{ color: "rgba(237,224,192,0.75)" }}>{text}</p>
      </div>
    </div>
  );
};

export default SingleSkill;
