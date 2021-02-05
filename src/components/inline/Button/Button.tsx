import { Link } from "gatsby";
import * as React from "react";

import s from "./Button.module.css";

type ButtonProps = {
  text: string;
  externalLink: string;
  internalLink: string;
  onClick:(e: React.MouseEvent<HTMLButtonElement>) => void;
  noHover: boolean;
}

const Button = ({ text, externalLink, internalLink, onClick, noHover }: ButtonProps) => {
  const button = `${s.button} ${noHover ? s.noHover : ""}`;

  if (externalLink) {

    return (
      <a
        rel="noreferrer"
        target="_blank"
        href={externalLink}
        className={button}
      >
        {text}
      </a>
    );
  }
  if (internalLink) {
    return (
      <Link className={button} to={internalLink}>
        {text}
      </Link>
    );
  }
  if (onClick) {
    return (
      <button
        type="button"
        className={button}
        onClick={(event) => {
          onClick(event);
        }}
      >
        {text}
      </button>
    );
  }
  throw new Error(
    "Missing required prop. Must specify one of: externalLink, internalLink, or onClick."
  );
};

export default Button;

/** A version of the Button specifically to be used with forms as the submit button. */

type SubmitButton = {
  value: string;
  noHover: boolean;
  name: string;
}

export const SubmitButton = ({ value, noHover, name }: SubmitButton) => {
  const className = `${s.button} ${noHover ? s.noHover : ""}`;
  return (
    <input className={className} type="submit" name={name} value={value} />
  );
};

SubmitButton.defaultProps = {
  noHover: false,
};
