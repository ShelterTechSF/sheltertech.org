import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import ReactModal from "react-modal";

import s from "./Modal.module.css";
import closeIcon from "./close-icon.svg";

const Modal = ({
  children,
  isOpen,
  setIsOpen,
  ariaHideApp,
  contentLabel,
  noBezel,
}) => {
  const modalClassName = classNames(
    s.content,
    noBezel ? s.noBezel : s.withBezel
  );
  const buttonClassName = classNames(
    s.content,
    noBezel ? s.noBezel : s.withBezel
  );

  return (
    <ReactModal
      className={modalClassName}
      overlayClassName={s.overlay}
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
      ariaHideApp={ariaHideApp}
      contentLabel={contentLabel}
    >
      <button
        className={buttonClassName}
        onClick={() => setIsOpen(false)}
        type="button"
      >
        <img src={closeIcon} alt="Close" />
      </button>
      {children}
    </ReactModal>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  ariaHideApp: PropTypes.bool,
  contentLabel: PropTypes.string.isRequired,
  noBezel: PropTypes.bool, // If true, then eliminate the padding and close button
};

Modal.defaultProps = {
  ariaHideApp: true,
  noBezel: false,
};

export default Modal;
