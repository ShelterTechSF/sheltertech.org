import * as React from "react";
import ReactModal from "react-modal";

import s from "./Modal.module.css";
import closeIcon from "./close-icon.svg";

type ModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (x: boolean) => void;
  ariaHideApp?: boolean; // we only ever set this to false for storybook
  contentLabel: string;
  noBezel?: boolean; // If true, then eliminate the padding and close button
};

const Modal = ({
  children,
  isOpen,
  setIsOpen,
  ariaHideApp = true,
  contentLabel,
  noBezel,
}: ModalProps) => {
  const modalClassName = `${s.content} ${noBezel ? s.noBezel : s.withBezel}`;
  const buttonClassName = `${s.closeButton} ${
    noBezel ? s.noBezel : s.withBezel
  }`;
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

export default Modal;
