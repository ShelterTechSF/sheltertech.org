import * as React from "react";

import s from "./InputText.module.css";

/*
 * For responsive behavior, the width of the parent element
 * of this component should be set in a class and should
 * follow this example:
 *
 * In your js file:
 * <span className="my-wrapper"><InputText></span>
 *
 * In your css file:
 * .my-wrapper {
 *   width: 400px;
 *  }
 *
 *  @media (max-width: 720px) {
 *    .my-wrapper {
 *      width: 200px;
 *    }
 *  }
 *
 */

type InputTextProps = {
  name?: string;
  placeholderText?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  type: string;
};
const InputText = ({
  name,
  placeholderText,
  onChange,
  value,
  type,
}: InputTextProps) => {
  return (
    <input
      className={s.inputText}
      type={type}
      name={name}
      placeholder={placeholderText}
      onChange={onChange}
      value={value}
    />
  );
};

export default InputText;
