import React from "react";
import Button from "../../../inline/Button";
import { InputText, InputTextPropType } from "../../../inline/InputText";

import s from "./SubscriptionBlock.module.css";

const SubscriptionBlock = ({ inputText }) => {
  return (
    <div className={s.bleedWrapper}>
      <div className={s.subscriptionBlock}>
        <div className={s.subscribeContainer}>
          <div className={s.subscribeMessage}>Subscribe to get updates</div>
          <form className={s.formInput}>
            <div className={s.inputText}>
              <InputText inputText={inputText} />
            </div>
            <div className={s.buttonWrapper}>
              <Button text="submit" internalLink="/mailchimp" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

SubscriptionBlock.propTypes = {
  inputText: InputTextPropType.isRequired,
};

export default SubscriptionBlock;
