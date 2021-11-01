import {BellIcon, HashtagIcon, Search, ThemeIcon, Title, UserCircle} from "components/TopNavigation/components";

const TopNavigation = () => {
  return (
    <div className='top-navigation'>
        <HashtagIcon />
        <Title />
        <BellIcon />
        <Search />
        <ThemeIcon />
        <UserCircle />
    </div>
  );
};
export default TopNavigation;
