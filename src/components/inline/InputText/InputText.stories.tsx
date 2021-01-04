import * as React from "react";
import {CSSProperties, useState} from "react";

import InputText from "./InputText";
import {Meta, Story} from "@storybook/react";

const demoStyling = {
  left: "50%",
  position: "absolute",
  top: "50%",
  transform: "translate(-50%, -50%)",
  width: "200px",
} as CSSProperties;

export default {
  title: "Inline/InputText",
  component: InputText,
} as Meta;

const Template: Story = ({ placeholderText, type, name }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <span style={demoStyling}>
        <InputText
          type={type}
          name={name}
          placeholderText={placeholderText}
          onChange={handleChange}
          value={value}
        />
      </span>
    </>
  );
};

export const DefaultInputText = Template.bind({});
DefaultInputText.args = {
  placeholderText: "email address",
  type: "email",
  name: "foo",
};
