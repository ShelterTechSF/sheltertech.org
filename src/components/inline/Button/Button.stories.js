import React from "react";

import Button from "./Button";

const demoStyling = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  alignItems: "center",
  marginTop: "50vh",
};

export default {
  title: "Inline/Button",
  component: Button,
};

const Template = ({ text, externalLink, internalLink, onClick }) => (
  <div style={demoStyling}>
    <Button
      text={text}
      externalLink={externalLink}
      internalLink={internalLink}
      onClick={onClick}
    />
  </div>
);

export const ExternalLink = Template.bind({});
ExternalLink.args = {
  text: "External Link",
  externalLink: "https://www.google.com",
};

export const InternalLink = Template.bind({});
InternalLink.args = {
  text: "Internal Link",
  internalLink: "/",
};

export const OnClickButton = Template.bind({});
OnClickButton.args = {
  text: "On Click",
  onClick: (event) => {
    // eslint-disable-next-line no-console
    console.log("Modal, Dialogue or Popup");
    // eslint-disable-next-line no-console
    console.log(`event is ${event}`);
  },
};
