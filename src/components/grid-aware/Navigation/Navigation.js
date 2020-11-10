import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import { NavLink, NavList } from "./NavList";
import navListStyles from "./NavList.Navigation.module.css";
import s from "./Navigation.module.css";
import burgerIcon from "./burger-icon.svg";
import logo from "./logo.svg";

/** Full navigation component. */
const Navigation = ({ homeURL, navigationItems, toggleBurgerMenu }) => {
  return (
    <div className={s.bleedWrapper}>
      <header className={s.container}>
        <Link to={homeURL}>
          <img className={s.logo} src={logo} alt="ShelterTech" />
        </Link>
        <nav className={s.fullNavWrapper}>
          <NavList items={navigationItems} theme={navListStyles} />
        </nav>
        <div className={s.mobileNavWrapper}>
          <button
            className={s.burgerButton}
            type="button"
            onClick={toggleBurgerMenu}
          >
            <img
              className={s.burgerIcon}
              src={burgerIcon}
              alt="Open navigation menu"
            />
          </button>
        </div>
      </header>
    </div>
  );
};

Navigation.propTypes = {
  homeURL: PropTypes.string.isRequired,
  navigationItems: PropTypes.arrayOf(PropTypes.shape(NavLink.propTypes))
    .isRequired,
  toggleBurgerMenu: PropTypes.func.isRequired,
};

export default Navigation;
