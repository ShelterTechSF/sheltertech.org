import React from "react";

import partnersAndSponsorsLogos from "../../../data/partnersAndSponsorsLogos";
import PartnersAndSponsorsBlock from "./PartnersAndSponsorsBlock";

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
