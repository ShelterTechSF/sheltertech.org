import * as React from "react";
import { push as Menu } from "react-burger-menu";

import s from "./BurgerMenu.module.css";
import { NavLinkProps, NavList, ThemeType } from "./NavList";
import navListStyles from "./NavList.BurgerMenu.module.css";

type BurgerMenuProps = {
  pageWrapperID: string;
  outerContainerID: string;
  navigationItems: NavLinkProps[];
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
    {/* Note: The type assertion as ThemeType is necessary because our CSS modules shim for TypeScript doesn't know about the specific keys that are accessible. */}
    <NavList items={navigationItems} theme={navListStyles as ThemeType} />
  </Menu>
);

export default BurgerMenu;
