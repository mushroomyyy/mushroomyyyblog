import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="jordanvckj@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+65 8468 3633" Image={FiPhone} />
      <SingleInfo text="Singapore" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
