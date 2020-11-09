import React from "react";
import Button from "../../../inline/Button";

import s from "./SubscriptionBlock.module.css";

const SubscriptionBlock = () => {
  return (
    <div className={s.bleedWrapper}>
      <div className={s.subscriptionBlock}>
        <div className={s.subscribeContainer}>
          <div className={s.subscribeMessage}>Subscribe to get updates</div>
          <div className={s.formInput}>
            <form>
              <input type="text" placeholder="email address" />
              <Button text="submit" internalLink="/mailchimp" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

SubscriptionBlock.propTypes = {};

export default SubscriptionBlock;
