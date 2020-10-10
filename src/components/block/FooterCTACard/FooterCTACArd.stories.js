import React from "react";
import FooterCTACArd from "./FooterCTACArd";

export default {
  title: "Block/FooterCTACArd",
  component: FooterCTACArd,
};

const Template = (args) => (
  <div style={{ backgroundColor: "black", width: "480px" }}>
    <FooterCTACArd
      subTitle={args.subTitle}
      body={args.body}
      buttonText={args.buttonText}
    />
  </div>
);
export const DefaultFooterCTACArd = Template.bind({});
DefaultFooterCTACArd.args = {
  subTitle: "Get Involved",
  body: "Volunteer with us and put your professional skills to good use.",
  buttonText: "JOIN US",
};
