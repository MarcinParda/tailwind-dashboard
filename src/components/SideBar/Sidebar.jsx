import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';
import SideBarIcon from "components/SideBar/components/SideBarIcon";
import Divider from "components/SideBar/components/Divader";

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 flex flex-col bg-white dark:bg-gray-900 shadow-lg">
        <SideBarIcon icon={<FaFire size="28" />} text="Private chat" />
        <Divider />
        <SideBarIcon icon={<BsPlus size="32" />} text="Add server" />
        <SideBarIcon icon={<BsFillLightningFill size="20" />} text="Work stuff" />
        <SideBarIcon icon={<FaPoo size="20" />} text="Dirty jokes" />
        <Divider />
        <SideBarIcon icon={<BsGearFill size="22" />} text="Settings" />
    </div>
  );
};

export default SideBar;
