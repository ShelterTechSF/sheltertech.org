import React from "react";

import Button from "./Button";

export default {
  title: "Inline/Button",
  component: Button,
};

const Template = ({
  externalLinkButton,
  internalLinkButton,
  scriptActionButton,
}) => (
  <div
    style={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center",
      marginTop: "50vh",
    }}
  >
    <Button button={externalLinkButton} />
    <Button button={internalLinkButton} />
    <Button button={scriptActionButton} />
  </div>
);

export const DefaultButton = Template.bind({});
DefaultButton.args = {
  externalLinkButton: {
    text: "External Link",
    externalLink: "https://www.google.com",
  },
  internalLinkButton: {
    text: "Internal Link",
    internalLink: "/",
  },
  scriptActionButton: {
    text: "Script Action",
    scriptAction: () => {
      // eslint-disable-next-line no-console
      console.log("Modal, Dialogue or Popup");
    },
  },
};
