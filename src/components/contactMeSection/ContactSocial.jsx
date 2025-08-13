import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import SingleContactSocial from "./SingleContactSocial";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/jordanvckj/" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/mushroomyyy" Icon={FiGithub} />
      <SingleContactSocial link="https://www.instagram.com/mushroomyyy_/" Icon={FaInstagram} />
    </div>
  );
};

export default ContactSocial;
