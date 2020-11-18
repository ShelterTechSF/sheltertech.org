import PropTypes from "prop-types";
import React from "react";
import Button from "../../../inline/Button";
import InputText from "../../../inline/InputText";

import s from "./SubscriptionBlock.module.css";

const SubscriptionBlock = ({ placeholderText, email, text }) => {
  return (
    <div className={s.bleedWrapper}>
      <div className={s.subscriptionBlock}>
        <div className={s.subscribeContainer}>
          <div className={s.title}>{text}</div>
          <form className={s.form}>
            <span className={s.inputText}>
              <InputText placeholderText={placeholderText} type={email} />
            </span>
            <Button text="submit" internalLink="/mailchimp" noHover />
          </form>
        </div>
      </div>
    </div>
  );
};

SubscriptionBlock.propTypes = {
  placeholderText: PropTypes.string,
  email: PropTypes.string.isRequired,
  text: PropTypes.string,
};

SubscriptionBlock.defaultProps = {
  placeholderText: undefined,
  text: undefined,
};

export default SubscriptionBlock;
