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
  <div>
    <PartnersAndSponsorsBlock
      title={title}
      partnersAndSponsors={partnersAndSponsors}
    />
  </div>
);

export const DefaultPartnersAndSponsorsBlock = Template.bind({});
DefaultPartnersAndSponsorsBlock.args = {
  title: "Partners and sponsors",
  partnersAndSponsors: [
    {
      id: 1,
      url: mohcdLogo,
      alt:
        "Mayor's Office of Housing and Community Development organization logo.",
    },
    {
      id: 2,
      url: justiceAndDiversityCenterLogo,
      alt:
        "Justice and Diversity Center of The Bar Association of San Francisco organization logo.",
    },
    { id: 3, url: benetechLogo, alt: "Benetech nonprofit organization logo." },
    {
      id: 4,
      url: larkinStreetLogo,
      alt: "Larkin Street Youth Services nonprofit organization logo.",
    },
    {
      id: 5,
      url: sfFamiliesLogo,
      alt: "SF Families online public service directory organization logo.",
    },
    {
      id: 6,
      url: ciscoLogo,
      alt: "Cisco Systems networking hardware company logo.",
    },
    {
      id: 7,
      url: pagerdutyLogo,
      alt: "PagerDuty computer software company logo.",
    },
    { id: 8, url: uberLogo, alt: "Uber Technologies Inc company logo." },
  ],
};
