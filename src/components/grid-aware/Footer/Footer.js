import React from "react";
import s from "./Footer.module.css";
import InfoBlock from "./InfoBlock/InfoBlock";
import Navigation from "./NavigationBlock/NavigationBlock";
import SubscriptionBlock from "./SubscriptionBlock/SubscriptionBlock";

const Footer = () => {
  return (
    <div className={s.bleedWrapper}>
      <footer className={s.gridParent}>
        <SubscriptionBlock />
        <Navigation />
        <InfoBlock />
      </footer>
    </div>
  );
};

Footer.propTypes = {};

export default Footer;
