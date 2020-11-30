import React from "react";

import PartnersAndSponsorsBlock from "./PartnersAndSponsorsBlock";
import partnersAndSponsorsLogos from "./stories/partnersAndSponsorsLogos";

export default {
  title: "Grid-Aware/PartnersAndSponsorsBlock",
  component: PartnersAndSponsorsBlock,
};

const Template = ({ title, partnersAndSponsors }) => (
  <PartnersAndSponsorsBlock
    title={title}
    partnersAndSponsors={partnersAndSponsors}
  />
);

export const DefaultPartnersAndSponsorsBlock = Template.bind({});
DefaultPartnersAndSponsorsBlock.args = {
  title: "Partners and sponsors",
  partnersAndSponsors: partnersAndSponsorsLogos,
};
