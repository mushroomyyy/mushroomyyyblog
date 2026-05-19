import { EmailIcon, LocationIcon, PhoneIcon } from "./BrandIcons";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="jordanvckj@gmail.com" Image={EmailIcon} />
      <SingleInfo text="+65 8468 3633" Image={PhoneIcon} />
      <SingleInfo text="Singapore" Image={LocationIcon} />
    </div>
  );
};

export default ContactInfo;
