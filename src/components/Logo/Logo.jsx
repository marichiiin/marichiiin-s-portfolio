import { NavLink } from 'react-router-dom';
import css from './Logo.module.css';

export const Logo = () => {
  return (
    <div>
      <NavLink
        to="/"
        end
        className={({ isActive }) => (isActive ? css.linkActive : css.link)}
      >
        <img src="/Logo.svg" alt="MJ's Logo" className={css.logo} />
      </NavLink>
    </div>
  );
};
