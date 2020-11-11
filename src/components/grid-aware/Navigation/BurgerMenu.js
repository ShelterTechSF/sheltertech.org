import PropTypes from "prop-types";
import React from "react";
import { push as Menu } from "react-burger-menu";

import s from "./BurgerMenu.module.css";
import { NavLink, NavList } from "./NavList";
import navListStyles from "./NavList.BurgerMenu.module.css";

const BurgerMenu = ({
  pageWrapperID,
  outerContainerID,
  isOpen,
  setIsOpen,
  navigationItems,
}) => (
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
    <NavList items={navigationItems} theme={navListStyles} />
  </Menu>
);

BurgerMenu.propTypes = {
  pageWrapperID: PropTypes.string.isRequired,
  outerContainerID: PropTypes.string.isRequired,
  navigationItems: PropTypes.arrayOf(PropTypes.shape(NavLink.propTypes))
    .isRequired,
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default BurgerMenu;
