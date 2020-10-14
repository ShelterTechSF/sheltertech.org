import React from "react";
import FooterCTACard from "./FooterCTACard";

export default {
  title: "Block/FooterCTACard",
  component: FooterCTACard,
};

const Template = ({ title, description, buttonText }) => (
  <div style={{ backgroundColor: "black", width: "480px" }}>
    <FooterCTACard
      title={title}
      description={description}
      buttonText={buttonText}
    />
  </div>
);

export const DefaultFooterCTACard = Template.bind({});

DefaultFooterCTACard.args = {
  title: "Get Involved",
  description:
    "Volunteer with us and put your professional skills to good use.",
  buttonText: "Join Us",
};
