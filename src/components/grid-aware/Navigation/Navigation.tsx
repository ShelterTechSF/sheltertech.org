import { Link } from "gatsby";
import * as React from "react";

import s from "./Navigation.module.css";
import burgerIcon from "./burger-icon.svg";
import logo from "./logo.svg";
import { NavigationItem } from "./types";

/** An internal, external, or button link. */
const NavLink = ({
  text,
  internalLink,
  externalLink,
  isButton = false,
}: NavigationItem) => {
  const className = `${s.navLink} ${isButton ? s.button : ""}`;
  if (internalLink) {
    // Enable the "active" style for any nested pages, except for the home page,
    // which would be a parent page for any page. This is also used to get
    // around some annoying behavior where a URL will not be considered the
    // "current" page even if it is off by a trailing slash (e.g. "/about" !===
    // "/about/" when it comes to computing "activeness").
    // https://github.com/reach/router/issues/231
    const isPartiallyActive = internalLink.replace(/\/$/, "") !== "";
    return (
      <Link
        className={className}
        activeClassName={s.currentPage}
        to={internalLink}
        partiallyActive={isPartiallyActive}
      >
        {text}
      </Link>
    );
  }
  if (externalLink) {
    return (
      <a
        className={className}
        href={externalLink}
        target="_blank"
        rel="noreferrer"
      >
        {text}
      </a>
    );
  }
  throw new Error("NavLink missing required link prop.");
};

type NavigationProps = {
  homeURL: string;
  navigationItems: NavigationItem[];
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
          <ul className={s.navList}>
            {navigationItems.map(
              ({ text, internalLink, externalLink, isButton }) => (
                <li key={text} className={s.navListItem}>
                  <NavLink
                    text={text}
                    internalLink={internalLink}
                    externalLink={externalLink}
                    isButton={isButton}
                  />
                </li>
              )
            )}
          </ul>
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
