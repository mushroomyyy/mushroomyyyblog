import { GitHubIcon, InstagramIcon, LinkedInIcon } from "./BrandIcons";
import SingleContactSocial from "./SingleContactSocial";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/jordanvckj/" Icon={LinkedInIcon} />
      <SingleContactSocial link="https://github.com/mushroomyyy/mushroomyyyblog" Icon={GitHubIcon} />
      <SingleContactSocial link="https://www.instagram.com/mushroomyyy_/" Icon={InstagramIcon} />
    </div>
  );
};

export default ContactSocial;
