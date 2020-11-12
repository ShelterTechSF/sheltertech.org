import React, { useState } from "react";

import { InputText } from "./InputText";

const demoStyling = {
  left: "50%",
  position: "absolute",
  top: "50%",
  transform: "translate(-50%, -50%)",
};

export default {
  title: "Inline/InputText",
  component: InputText,
};

// Variables declared here so that DefaultInputText.args can interact with useState
let text;
let setValue;

const Template = ({ inputText }) => {
  [text, setValue] = useState("");
  return (
    <div style={demoStyling}>
      <InputText inputText={inputText} />
    </div>
  );
};

export const DefaultInputText = Template.bind({});
DefaultInputText.args = {
  inputText: {
    placeholderText: "email address",
    widthDesktop: "400px",
    widthMobile: "200px",
    onChange: (e) => {
      setValue(e.target.value);
    },
    value: text,
  },
};
