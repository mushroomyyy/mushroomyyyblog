import MushroomLogo from "../navbar/MushroomLogo";
import ContactInfo from "./ContactInfo";
import ContactSocial from "./ContactSocial";

const ContactMeRight = () => {
  return (
    <div className="flex flex-col items-center justify-center sm:gap-6 lg:gap-10">
      <div className="sm:w-[240px] sm:h-[240px] md:w-[280px] md:h-[280px] rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center shadow-[0_0_0_1px_rgba(255,255,255,0.03)]">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="rounded-full border border-white/10 bg-black/30 p-5">
            <MushroomLogo size="large" />
          </div>
          <p className="text-white/75 text-sm tracking-[0.32em] uppercase">Mushroomyyy</p>
        </div>
      </div>
      <ContactInfo />
      <ContactSocial />
    </div>
  );
};

export default ContactMeRight;
