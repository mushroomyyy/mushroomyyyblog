import ContactMeLeft from "./ContactMeLeft";
import ContactMeRight from "./ContactMeRight";

const ContactMeMain = () => {
  return (
    <div
      id="contact"
      className="max-w-[1200px] mx-auto items-center justify-center mt-[100px] px-4 "
    >
      <h2 className="sm:text-3xl md:text-5xl lg:text-6xl text-cyan mb-10 text-center">Contact Me</h2>
      <div className="flex justify-between sm:gap-8 lg:gap-24 bg-brown sm:p-4 md:p-8 rounded-2xl lg:flex-row sm:flex-col">
        <ContactMeLeft />
        <ContactMeRight />
      </div>
    </div>
  );
};

export default ContactMeMain;
