const SingleSkill = ({ imgSvg, text }) => {
  return (
    <div className="hover:-translate-y-10 transition-all duration-500 flex flex-col items-center">
      <div className="flex flex-col items-center gap-6 relative">
        <div className="bg-white/5 text-white h-[100px] w-[100px] flex items-center justify-center rounded-full hover:scale-105 transform transition-all duration-500 text-5xl border border-white/15 backdrop-blur-sm shadow-[0_0_0_1px_rgba(255,255,255,0.03)]">
          {imgSvg}
        </div>
        <p className="text-white/80 font-medium tracking-wide text-center whitespace-nowrap">{text}</p>
      </div>
    </div>
  );
};

export default SingleSkill;
