import * as React from "react";
import Button from "../../inline/Button";
import * as s from "./ButtonBlock.module.css";

type ButtonBlockProps = {
  header: string;
  url: string;
  buttonText: string;
  isExternalLink?: boolean;
};

const ButtonBlock = ({
  header,
  isExternalLink,
  buttonText,
  url,
}: ButtonBlockProps) => (
  <div className={s.container}>
    <h3 className={s.header}>{header}</h3>
    {isExternalLink ? (
      <Button text={buttonText} externalLink={url} />
    ) : (
      <Button text={buttonText} internalLink={url} />
    )}
  </div>
);

export default ButtonBlock;
