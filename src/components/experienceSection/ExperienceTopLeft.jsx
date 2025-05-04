import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-orange font-bold uppercase text-3xl font-special text-center">
        Since 2023
      </p>
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number="2" text="Years" />
        <p className="font-bold text-6xl text-lightBrown">-</p>
        <ExperienceInfo number="4" text="Websites" />
      </div>
      <p className="text-center">
        With 2 years of experience enhancing secure and automated software delivery pipelines in an enterprise banking environment.
      </p>
      <ExperienceInfo number="$7k" text="Expected Salary" />
    </div>
  );
};

export default ExperienceTopLeft;
