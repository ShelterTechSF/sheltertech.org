import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

/** An internal, external, or button link. */
export const NavLink = ({
  text,
  internalLink,
  externalLink,
  isButton,
  theme,
}) => {
  const className = `${theme.navLink} ${isButton ? theme.button : ""}`;
  if (internalLink) {
    return (
      <Link
        className={className}
        activeClassName={theme.currentPage}
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
