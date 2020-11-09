import PropTypes from "prop-types";
import React from "react";
import Button from "../../../inline/Button";
import InputText from "../../../inline/Form/InputText";

import s from "./SubscriptionBlock.module.css";

const SubscriptionBlock = ({ inputPlaceHolderText }) => {
  return (
    <div className={s.bleedWrapper}>
      <div className={s.subscriptionBlock}>
        <div className={s.subscribeContainer}>
          <div className={s.subscribeMessage}>Subscribe to get updates</div>
          <form className={s.formInput}>
            <div className={s.inputText}>
              <InputText placeholderText={inputPlaceHolderText} />
            </div>
            <Button text="submit" internalLink="/mailchimp" />
          </form>
        </div>
      </div>
    </div>
  );
};

SubscriptionBlock.propTypes = {
  inputPlaceHolderText: PropTypes.string.isRequired,
};

export default SubscriptionBlock;
