import React, { useState } from "react";

import InputText from "./InputText";

const demoStyling = {
  left: "50%",
  position: "absolute",
  top: "50%",
  transform: "translate(-50%, -50%)",
  width: "200px",
};

export default {
  title: "Inline/InputText",
  component: InputText,
};

// Variables declared here so that DefaultInputText.args can interact with useState
let text;
let setValue;

const Template = ({ placeholderText, value, type }) => {
  [text, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <span style={demoStyling}>
      <InputText
        type={type}
        placeholderText={placeholderText}
        onChange={handleChange}
        value={value}
      />
    </span>
  );
};

export const DefaultInputText = Template.bind({});
DefaultInputText.args = {
  placeholderText: "email address",
  value: text,
  type: "email",
};
