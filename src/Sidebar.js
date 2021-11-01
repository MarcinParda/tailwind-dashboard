import {BsFillLightningFill, BsPlus, FaFire, FaPoo} from "react-icons/all";

const Sidebar = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg">
            <SidebarIcon icon={<FaFire size="28" />} />
            <SidebarIcon icon={<BsPlus size="28" />} />
            <SidebarIcon icon={<BsFillLightningFill size="28" />} />
            <SidebarIcon icon={<FaPoo size="28" />} />
        </div>
    );
};

const SidebarIcon = ({ icon }) => {
    return(
        <div className="sidebar-icon">
            {icon}
        </div>
    )
}

 export default Sidebar;
