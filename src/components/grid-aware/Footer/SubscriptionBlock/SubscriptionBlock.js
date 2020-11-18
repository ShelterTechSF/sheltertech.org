import PropTypes from "prop-types";
import React from "react";
import Button from "../../../inline/Button";
import InputText from "../../../inline/InputText";

import s from "./SubscriptionBlock.module.css";

const SubscriptionBlock = ({
  formInputPlaceholder,
  formInputValue,
  formDescription,
}) => {
  return (
    <div className={s.bleedWrapper}>
      <div className={s.subscriptionBlock}>
        <div className={s.subscribeContainer}>
          <div className={s.title}>{formDescription}</div>
          <form className={s.form}>
            <span className={s.inputText}>
              <InputText
                placeholderText={formInputPlaceholder}
                type={formInputValue}
              />
            </span>
            <Button text="submit" internalLink="/mailchimp" noHover />
          </form>
        </div>
      </div>
    </div>
  );
};

SubscriptionBlock.propTypes = {
  formInputPlaceholder: PropTypes.string,
  formInputValue: PropTypes.string.isRequired,
  formDescription: PropTypes.string,
};

SubscriptionBlock.defaultProps = {
  formInputPlaceholder: undefined,
  formDescription: undefined,
};

export default SubscriptionBlock;
