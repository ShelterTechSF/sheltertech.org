import React from "react";
import FooterCTACard from "./FooterCTACard";

export default {
  title: "Block/FooterCTACard",
  component: FooterCTACard,
};

const Template = ({ title, body, buttonText }) => (
  <div style={{ backgroundColor: "black", width: "480px" }}>
    <FooterCTACard title={title} body={body} buttonText={buttonText} />
  </div>
);
export const DefaultFooterCTACard = Template.bind({});
DefaultFooterCTACard.args = {
  title: "Get Involved",
  body: "Volunteer with us and put your professional skills to good use.",
  buttonText: "Join Us",
};
