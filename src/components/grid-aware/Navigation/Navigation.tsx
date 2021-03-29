import { Link } from "gatsby";
import * as React from "react";

import { NavLinkProps, NavList, ThemeType } from "./NavList";
import navListStyles from "./NavList.Navigation.module.css";
import s from "./Navigation.module.css";
import burgerIcon from "./burger-icon.svg";
import logo from "./logo.svg";

type NavigationProps = {
  homeURL: string;
  navigationItems: NavLinkProps[];
  toggleBurgerMenu: () => void;
};

/** Full navigation component. */
const Navigation = ({
  homeURL,
  navigationItems,
  toggleBurgerMenu,
}: NavigationProps) => {
  return (
    <div className={s.bleedWrapper}>
      <header className={s.container}>
        <Link to={homeURL}>
          <img className={s.logo} src={logo} alt="ShelterTech" />
        </Link>
        <nav className={s.fullNavWrapper}>
          {/* Note: The type assertion as ThemeType is necessary because our CSS modules shim for TypeScript doesn't know about the specific keys that are accessible. */}
          <NavList items={navigationItems} theme={navListStyles as ThemeType} />
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

export default Navigation;
