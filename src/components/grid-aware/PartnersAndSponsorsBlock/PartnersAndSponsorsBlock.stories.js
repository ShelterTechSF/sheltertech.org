import React from "react";

import PartnersAndSponsorsBlock from "./PartnersAndSponsorsBlock";
import mohcdLogo from "./stories/MOHCD-logo.png";
import benetechLogo from "./stories/benetech-logo.png";
import ciscoLogo from "./stories/cisco-logo.png";
import justiceAndDiversityCenterLogo from "./stories/justice-and-diversity-center-logo.png";
import larkinStreetLogo from "./stories/larkin-street-logo.png";
import pagerdutyLogo from "./stories/pagerduty-logo.png";
import sfFamiliesLogo from "./stories/sf-families-logo.png";
import uberLogo from "./stories/uber-logo.png";

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
  partnersAndSponsors: [
    {
      url: mohcdLogo,
      alt:
        "Logo of Mayor's Office of Housing and Community Development organization.",
    },
    {
      url: justiceAndDiversityCenterLogo,
      alt:
        "Logo of Justice and Diversity Center of The Bar Association of San Francisco organization.",
    },
    {
      url: benetechLogo,
      alt: "Logo of Benetech nonprofit organization.",
    },
    {
      url: larkinStreetLogo,
      alt: "Logo of Larkin Street Youth Services nonprofit organization.",
    },
    {
      url: sfFamiliesLogo,
      alt: "Logo of SF Families online public service directory organization.",
    },
    {
      url: ciscoLogo,
      alt: "Logo of Cisco Systems networking hardware company.",
    },
    {
      url: pagerdutyLogo,
      alt: "Logo of PagerDuty computer software company.",
    },
    {
      url: uberLogo,
      alt: "Logo of Uber Technologies Inc company.",
    },
  ],
};
