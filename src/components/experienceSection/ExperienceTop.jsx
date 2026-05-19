import ExperienceTopLeft from "./ExperienceTopLeft";
import ExperienceTopMiddle from "./ExperienceTopMiddle";
import ExperienceTopRight from "./ExperienceTopRight";

const ExperienceTop = () => {
  return (
    <div className="flex lg:flex-row sm:flex-col gap-4 items-center justify-center mt-10">
      <ExperienceTopLeft />
      <ExperienceTopMiddle />
      <ExperienceTopRight />
    </div>
  );
};

export default ExperienceTop;
