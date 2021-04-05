import * as React from "react";
import Button, { ButtonProps } from "../../inline/Button";
import s from "./FooterCTACard.module.css";

type FooterCTACardProps = {
  title: string;
  description: string;
  button: ButtonProps;
};

const FooterCTACard = ({ title, description, button }: FooterCTACardProps) => (
  <div className={s.container}>
    <div className={s.title}>{title}</div>
    <div className={s.description}>{description}</div>
    <div className={s.buttonWrapper}>
      <Button text={button.text} internalLink={button.internalLink} />
    </div>
  </div>
);

export default FooterCTACard;
