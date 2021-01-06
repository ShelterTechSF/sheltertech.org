import classNames from "classnames";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const HOME_URL = "";

/** An internal, external, or button link. */
export const NavLink = ({
  text,
  internalLink,
  externalLink,
  isButton,
  theme,
}) => {
  const { navLink, button } = theme;
  const className = classNames(navLink, {
    [button]: isButton,
  });
  if (internalLink) {
    // Enable the "active" style for any nested pages, except for the home page,
    // which would be a parent page for any page. This is also used to get
    // around some annoying behavior where a URL will not be considered the
    // "current" page even if it is off by a trailing slash (e.g. "/about" !===
    // "/about/" when it comes to computing "activeness").
    // https://github.com/reach/router/issues/231
    const isPartiallyActive = internalLink.replace(/\/$/, "") !== HOME_URL;
    return (
      <Link
        className={className}
        activeClassName={theme.currentPage}
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
export const NavList = ({ items, theme }) => (
  <ul className={theme.navList}>
    {items.map(({ text, internalLink, externalLink, isButton }) => (
      <li key={text} className={theme.navListItem}>
        <NavLink
          text={text}
          internalLink={internalLink}
          externalLink={externalLink}
          isButton={isButton}
          theme={theme}
        />
      </li>
    ))}
  </ul>
);

NavList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(NavLink.propTypes)).isRequired,
  theme: PropTypes.objectOf(PropTypes.string).isRequired,
};
