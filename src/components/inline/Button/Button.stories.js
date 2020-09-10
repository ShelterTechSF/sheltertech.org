import React from "react";

import Button from "./Button";

export default {
  title: "Inline/Button",
  component: Button,
};

const Template = ({ children }) => <Button>{children}</Button>;

export const DefaultButton = Template.bind({});
DefaultButton.args = {
  children: "Click Me",
};
