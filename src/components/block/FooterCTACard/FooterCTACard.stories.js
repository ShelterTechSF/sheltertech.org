import React from "react";
import FooterCTACard from "./FooterCTACard";

export default {
  title: "Block/FooterCTACard",
  component: FooterCTACard,
};

const Template = (args) => (
  <div style={{ backgroundColor: "black", width: "480px" }}>
    <FooterCTACard
      subTitle={args.subTitle}
      body={args.body}
      buttonText={args.buttonText}
    />
  </div>
);
export const DefaultFooterCTACard = Template.bind({});
DefaultFooterCTACard.args = {
  subTitle: "Get Involved",
  body: "Volunteer with us and put your professional skills to good use.",
  buttonText: "JOIN US",
};
