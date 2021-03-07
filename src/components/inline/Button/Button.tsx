import { Link } from "gatsby";
import * as React from "react";

import s from "./Button.module.css";

type ButtonProps = {
  text: string;
  noHover?: boolean;
  externalLink?: string;
  internalLink?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({
  text,
  noHover,
  externalLink,
  internalLink,
  onClick,
}: ButtonProps) => {
  const className = `${s.button} ${noHover ? s.noHover : ""}`;

  if (externalLink !== undefined) {
    return (
      <a
        rel="noreferrer"
        target="_blank"
        href={externalLink}
        className={className}
      >
        {text}
      </a>
    );
  }
  if (internalLink !== undefined) {
    return (
      <Link className={className} to={internalLink}>
        {text}
      </Link>
    );
  }
  if (onClick !== undefined) {
    return (
      <button
        type="button"
        className={className}
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

type SubmitButtonProps = {
  value: string;
  noHover: boolean;
  name: string;
};

export const SubmitButton = ({ value, noHover, name }: SubmitButtonProps) => {
  const className = `${s.button} ${noHover ? s.noHover : ""}`;
  return (
    <input className={className} type="submit" name={name} value={value} />
  );
};
