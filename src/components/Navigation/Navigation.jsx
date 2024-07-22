/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './Navigation.module.css';

const makeNavLinkClass = ({ isActive }) => {
  //   console.log(isActive);
  return clsx(css.link, isActive && css.active);
};

export default function Navigation() {
  return (
    <header>
      <nav className={css.nav}>
        <NavLink to="/" className={makeNavLinkClass}>
          Home
        </NavLink>
        <NavLink to="/movies" className={makeNavLinkClass}>
          Movies
        </NavLink>
        {/* <NavLink to="/movies/:movieId" className={makeNavLinkClass}>
          Movie Details
        </NavLink> */}
      </nav>
    </header>
  );
}
