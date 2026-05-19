const ExperienceInfo = ({ number, text }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="font-semibold text-5xl text-white">{number}</p>
      <p className="font-medium text-sm text-white/60 uppercase tracking-[0.25em] -mt-2 font-body">{text}</p>
    </div>
  );
};

export default ExperienceInfo;
