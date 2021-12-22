import * as React from "react";
import Button from "../../inline/Button";

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
  <div>
    <h3>{header}</h3>
    {isExternalLink ? (
      <Button text={buttonText} externalLink={url} />
    ) : (
      <Button text={buttonText} internalLink={url} />
    )}
  </div>
);

export default ButtonBlock;
