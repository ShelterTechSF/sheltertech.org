import React from "react";

import InputText from "./InputText";

const demoStyling = {
  margin: "auto",
  marginTop: "50vh",
  width: "200px",
};

export default {
  title: "Inline/Form/InputText",
  component: InputText,
};

const Template = ({ placeholderText }) => (
  <div style={demoStyling}>
    <InputText placeholderText={placeholderText} />
  </div>
);

export const DefaultInputText = Template.bind({});
DefaultInputText.args = {
  placeholderText: "email address",
};
