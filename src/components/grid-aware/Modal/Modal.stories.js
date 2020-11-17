import React, { useState } from "react";

import Modal from "./Modal";

export default {
  title: "Grid-Aware/Modal",
  component: Modal,
};

const Template = () => {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        setIsOpen={setModalIsOpen}
        /* Disable ariaHideApp in Storybook to suppress warning about not
         * setting the app element.
         * https://github.com/reactjs/react-modal/issues/576
         */
        ariaHideApp={false}
        contentLabel="Example Modal"
      >
        <div style={{ font: "var(--font-body-medium)" }}>
          <h1 style={{ font: "var(--font-headline)" }}>Work with Us</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </Modal>
      <div>
        <button type="button" onClick={() => setModalIsOpen(!modalIsOpen)}>
          Toggle Modal
        </button>
      </div>
    </div>
  );
};

export const DefaultModal = Template.bind({});
DefaultModal.args = {};
