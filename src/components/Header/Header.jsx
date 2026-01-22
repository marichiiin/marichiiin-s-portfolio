import css from './Header.module.css';
import { Logo } from '../Logo/Logo';
import { Sidebar } from '../Sidebar/Sidebar';
import { MdOutlineMenu } from 'react-icons/md';
import { useToggle } from '../../hooks/useToggle';
import { Navbar } from '../../components/Navbar/Navbar';
import { DarkLightMode } from '../DarkLightMode/DarkLightMode';

export const Header = () => {
  const { isOpen: isSidebarOpen, toggle: toggleSidebar } = useToggle(false);

  return (
    <header className={css.header}>

      {/* Navbar */}
      <Navbar />

      {/* LOGO */}
      <Logo />

      {/* Toggle for Dark or Light Mode */}
      {/* <DarkLightMode /> */}

      {/* HAMBURGER ICON */}
      <MdOutlineMenu
        className={`${css.hamburgerIcon} ${
          isSidebarOpen && css.visuallyHidden
        }`}
        onClick={toggleSidebar}
      />

      {/* SIDEBAR */}
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
    </header>
  );
};
