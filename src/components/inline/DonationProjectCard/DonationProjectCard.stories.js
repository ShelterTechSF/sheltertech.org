import React from "react";
import DonationProjectCard from "./DonationProjectCard";
import background from "./blackbackground.jpg";

export default {
  title: "Inline/DonationProjectCard",
  component: DonationProjectCard,
};

const Template = () => (
  <div style={{ backgroundImage: `url(${background})` }}>
    <DonationProjectCard title="Star Hotel SRO" subtitle="280 People" />
  </div>
);

export const DefaultDonationProjectCard = Template.bind({});

DefaultDonationProjectCard.args = {
  data: {
    title: "Star Hotel SRO",
    subtitle: "280 People",
  },
};
