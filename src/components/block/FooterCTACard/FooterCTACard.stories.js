import React from "react";
import FooterCTACard from "./FooterCTACard";

export default {
  title: "Block/FooterCTACard",
  component: FooterCTACard,
};

const Template = ({ subtitle, body, buttonText }) => (
  <div style={{ backgroundColor: "black", width: "480px" }}>
    <FooterCTACard subTitle={subtitle} body={body} buttonText={buttonText} />
  </div>
);
export const DefaultFooterCTACard = Template.bind({});
DefaultFooterCTACard.args = {
  subtitle: "Get Involved",
  body: "Volunteer with us and put your professional skills to good use.",
  buttonText: "JOIN US",
};
