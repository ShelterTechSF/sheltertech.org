import React from "react";
import DonationProjectCard from "./DonationProjectCard";
import background from "./SampleImg.png";

export default {
  title: "Block/DonationProjectCard",
  component: DonationProjectCard,
};

const Template = ({ title, subtitle }) => (
  <div
    style={{
      backgroundImage: `url(${background})`,
      width: "240px",
      backgroundRepeat: "no-repeat",
    }}
  >
    <DonationProjectCard title={title} subtitle={subtitle} />
  </div>
);

export const DefaultDonationProjectCard = Template.bind({});

DefaultDonationProjectCard.args = {
  title: "Star Hotel SRO",
  subtitle: "280 People",
};
