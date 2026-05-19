import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 sm:w-full lg:w-[300px] bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
      <p className="text-white font-semibold uppercase text-sm font-body text-center tracking-[0.28em]">
        Since 2023
      </p>
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number="3" text="Years" />
        <p className="font-semibold text-5xl text-white/20">-</p>
        <ExperienceInfo number="5" text="Projects" />
      </div>
      <p className="text-center text-white/65 leading-relaxed text-sm font-body">
        With 3 years of experience building secure, reliable systems and shipping practical engineering solutions in enterprise environments.
      </p>
    </div>
  );
};

export default ExperienceTopLeft;
