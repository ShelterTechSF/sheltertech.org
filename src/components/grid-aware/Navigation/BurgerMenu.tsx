import { Link } from "gatsby";
import * as React from "react";
import { push as Menu } from "react-burger-menu";

import * as s from "./BurgerMenu.module.css";
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

type BurgerMenuProps = {
  pageWrapperID: string;
  outerContainerID: string;
  navigationItems: NavigationItem[];
  isOpen: boolean;
  setIsOpen: (newValue: boolean) => void;
};

const BurgerMenu = ({
  pageWrapperID,
  outerContainerID,
  isOpen,
  setIsOpen,
  navigationItems,
}: BurgerMenuProps) => (
  <Menu
    burgerButtonClassName={s.burgerButton}
    className={s.menuWrap}
    crossButtonClassName={s.crossButton}
    disableAutoFocus
    isOpen={isOpen}
    itemListElement="nav"
    menuClassName={s.menu}
    onClose={() => setIsOpen(false)}
    onOpen={() => setIsOpen(true)}
    outerContainerId={outerContainerID}
    overlayClassName={s.overlay}
    pageWrapId={pageWrapperID}
    right
    width="286px"
  >
    <ul className={s.navList}>
      {navigationItems.map(({ text, internalLink, externalLink, isButton }) => (
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
  </Menu>
);

export default BurgerMenu;
