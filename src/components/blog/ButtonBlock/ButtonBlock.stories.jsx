import React from "react";
import ButtonBlock from "./ButtonBlock";

export default {
  title: "Blog/ButtonBlock",
  component: ButtonBlock,
};

const Template = ({ header, isExternalLink, buttonText, url }) => (
  <div style={{ border: "1px dashed rebeccapurple" }}>
    <ButtonBlock
      header={header}
      isExternalLink={isExternalLink}
      buttonText={buttonText}
      url={url}
    />
  </div>
);

export const DefaultButtonBlock = Template.bind({});
DefaultButtonBlock.args = {
  header: "Download our annual report",
  isExternalLink: true,
  buttonText: "Download - 6.2 MB PDF",
  url: "/",
};
