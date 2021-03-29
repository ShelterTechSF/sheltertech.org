import { Link } from "gatsby";
import * as React from "react";

const HOME_URL = "";

export type ThemeType = {
  button: string;
  currentPage: string;
  navLink: string;
  navList: string;
  navListItem: string;
};

export type NavLinkProps = {
  text: string;
  internalLink?: string;
  externalLink?: string;
  isButton?: boolean;
  theme: ThemeType;
};

/** An internal, external, or button link. */
const NavLink = ({
  text,
  internalLink,
  externalLink,
  isButton = false,
  theme,
}: NavLinkProps) => {
  const className = `${theme.navLink} ${isButton ? theme.button : ""}`;
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

type NavListProps = {
  items: NavLinkProps[];
  theme: ThemeType;
};

/** List of navigation items. */
export const NavList = ({ items, theme }: NavListProps) => (
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
