import React, { useState } from "react";

import InputText from "./InputText";

/*
For responsive behavior, the width of the parent element
of this component should be set in a class and should
follow this example:

In your js file:
<span className="my-wrapper"><InputText></span>

In your css file:
.my-wrapper {
  width: 400px;
}

@media (max-width: 720px) {
  .my-wrapper {
    width: 200px;
  }
}
 */

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

const Template = ({ placeholderText, onChange, value, type }) => {
  [text, setValue] = useState("");
  return (
    <span style={demoStyling}>
      <InputText
        type={type}
        placeholderText={placeholderText}
        onChange={onChange}
        value={value}
      />
    </span>
  );
};

export const DefaultInputText = Template.bind({});
DefaultInputText.args = {
  placeholderText: "email address",
  onChange: (e) => {
    setValue(e.target.value);
  },
  value: text,
  type: "email",
};
