import PropTypes from "prop-types";
import React from "react";
import { SubmitButton } from "../../../inline/Button";
import InputText from "../../../inline/InputText";

import * as s from "./SubscriptionBlock.module.css";

const SubscriptionBlock = ({
  formAction,
  formInputPlaceholder,
  formInputName,
  formAntiBotInputName, // This is displayed as a text field but hidden from humans in order to trick bots into filling it out
  formDescription,
}) => {
  return (
    <div className={s.bleedWrapper}>
      <div className={s.subscriptionBlock}>
        <div className={s.subscribeContainer}>
          <div className={s.title}>{formDescription}</div>
          <form
            className={s.form}
            action={formAction}
            method="post"
            target="_blank"
          >
            <span className={s.inputText}>
              <InputText
                name={formInputName}
                placeholderText={formInputPlaceholder}
                type="email"
              />
            </span>
            <input
              className={s.antiBotInput}
              type="text"
              aria-hidden
              name={formAntiBotInputName}
            />
            <SubmitButton value="Subscribe" name="subscribe" noHover />
          </form>
        </div>
      </div>
    </div>
  );
};

SubscriptionBlock.propTypes = {
  formAction: PropTypes.string.isRequired,
  formInputName: PropTypes.string.isRequired,
  formInputPlaceholder: PropTypes.string.isRequired,
  formAntiBotInputName: PropTypes.string.isRequired,
  formDescription: PropTypes.string.isRequired,
};

export default SubscriptionBlock;
