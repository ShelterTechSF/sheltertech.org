import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import s from "./Navigation.module.css";
import logo from "./logo.svg";

/** An internal, external, or button link. */
const NavLink = ({ text, internalLink, externalLink, isButton }) => {
  const className = `${s.navLink} ${isButton ? s.button : ""}`;
  if (internalLink) {
    return (
      <Link
        className={className}
        activeClassName={s.currentPage}
        to={internalLink}
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

NavLink.propTypes = {
  text: PropTypes.string.isRequired,
  internalLink: PropTypes.string,
  externalLink: PropTypes.string,
  isButton: PropTypes.bool,
};

NavLink.defaultProps = {
  isButton: false,
};

/** List of navigation items. */
const NavList = ({ items }) => (
  <ul className={s.navList}>
    {items.map(({ text, internalLink, externalLink, isButton }) => (
      <li key={text} className={s.navListItem}>
        <NavLink
          text={text}
          internalLink={internalLink}
          externalLink={externalLink}
          isButton={isButton}
        />
      </li>
    ))}
  </ul>
);

NavList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(NavLink.propTypes)).isRequired,
};

/** Full navigation component. */
const Navigation = ({ homeURL, navigationItems }) => {
  return (
    <div className={s.bleedWrapper}>
      <header className={s.container}>
        <Link to={homeURL}>
          <img className={s.logo} src={logo} alt="ShelterTech" />
        </Link>
        <nav>
          <NavList items={navigationItems} />
        </nav>
      </header>
    </div>
  );
};

Navigation.propTypes = {
  homeURL: PropTypes.string.isRequired,
  navigationItems: PropTypes.arrayOf(PropTypes.shape(NavLink.propTypes))
    .isRequired,
};

export default Navigation;
