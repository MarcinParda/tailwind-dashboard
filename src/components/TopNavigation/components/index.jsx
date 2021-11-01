import {
  FaSearch,
  FaHashtag,
  FaRegBell,
  FaUserCircle,
  FaMoon,
  FaSun,
} from 'react-icons/fa';
import useDarkMode from "hooks/useDarkMode";

export const ThemeIcon = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);
  return (
    <span onClick={handleMode}>
      {darkTheme ? (
        <FaSun size='24' className='top-navigation-icon' />
      ) : (
        <FaMoon size='24' className='top-navigation-icon' />
      )}
    </span>
  );
};

export const Search = () => (
  <div className='search'>
    <input className='search-input' type='text' placeholder='Search...' />
    <FaSearch size='18' className='text-secondary my-auto' />
  </div>
);
export const BellIcon = () => <FaRegBell size='24' className='top-navigation-icon' />;
export const UserCircle = () => <FaUserCircle size='24' className='top-navigation-icon' />;
export const HashtagIcon = () => <FaHashtag size='20' className='title-hashtag' />;
export const Title = () => <h5 className='title-text'>tailwind-css</h5>;
