import PropTypes from "prop-types";
import React from "react";
import ReactModal from "react-modal";

import s from "./Modal.module.css";
import closeIcon from "./close-icon.svg";

const Modal = ({ children, isOpen, setIsOpen, ariaHideApp, contentLabel }) => (
  <ReactModal
    className={s.content}
    overlayClassName={s.overlay}
    isOpen={isOpen}
    onRequestClose={() => setIsOpen(false)}
    ariaHideApp={ariaHideApp}
    contentLabel={contentLabel}
  >
    <button
      className={s.closeButton}
      onClick={() => setIsOpen(false)}
      type="button"
    >
      <img src={closeIcon} alt="Close" />
    </button>
    {children}
  </ReactModal>
);

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  ariaHideApp: PropTypes.bool,
  contentLabel: PropTypes.string.isRequired,
};

Modal.defaultProps = {
  ariaHideApp: true,
};

export default Modal;
