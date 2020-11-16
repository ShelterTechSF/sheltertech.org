import PropTypes from "prop-types";
import React from "react";
import Button from "../../../inline/Button";
import InputText from "../../../inline/InputText";

import s from "./SubscriptionBlock.module.css";

const SubscriptionBlock = ({ placeholderText, type }) => {
  return (
    <div className={s.bleedWrapper}>
      <div className={s.subscriptionBlock}>
        <div className={s.subscribeContainer}>
          <div className={s.title}>Subscribe to get updates</div>
          <form className={s.formInput}>
            <span className={s.inputText}>
              <InputText placeholderText={placeholderText} type={type} />
            </span>
            <Button text="submit" internalLink="/mailchimp" />
          </form>
        </div>
      </div>
    </div>
  );
};

SubscriptionBlock.propTypes = {
  placeholderText: PropTypes.string,
  type: PropTypes.string.isRequired,
};

SubscriptionBlock.defaultProps = {
  placeholderText: undefined,
};

export default SubscriptionBlock;
