import React from "react";
import DonationProjectCard from "./DonationProjectCard";
import background from "./SampleImg.png";

export default {
  title: "Block/DonationProjectCard",
  component: DonationProjectCard,
};

const Template = ({ title, subtitle }) => (
  <div style={{ width: "240px" }}>
    <DonationProjectCard
      title={title}
      subtitle={subtitle}
      background={background}
    />
  </div>
);

export const DefaultDonationProjectCard = Template.bind({});

DefaultDonationProjectCard.args = {
  title: "Star Hotel SRO",
  subtitle: "280 People",
};
