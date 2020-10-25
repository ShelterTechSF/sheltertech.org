import React from "react";
import FooterCTACard from "./FooterCTACard";

export default {
  title: "Block/FooterCTACard",
  component: FooterCTACard,
};

const Template = ({ title, description, button }) => (
  <div style={{ backgroundColor: "black", width: "480px" }}>
    <FooterCTACard title={title} description={description} button={button} />
  </div>
);

export const DefaultFooterCTACard = Template.bind({});

DefaultFooterCTACard.args = {
  title: "Get Involved",
  description:
    "Volunteer with us and put your professional skills to good use.",
  button: { text: "Join Us", link: "/foo" },
};
