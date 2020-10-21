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

const Template = ({ title }) => (
  <div>
    <PartnersAndSponsorsBlock
      title={title}
      mohcdLogo={{
        url: mohcdLogo,
        alt: "Mayor's Office of Housing and Community Development logo.",
      }}
      justiceAndDiversityCenterLogo={{
        url: justiceAndDiversityCenterLogo,
        alt: "Justice and Diversity Center logo.",
      }}
      benetechLogo={{
        url: benetechLogo,
        alt: "Benetech logo.",
      }}
      larkinStreetLogo={{
        url: larkinStreetLogo,
        alt: "Larkin Street logo.",
      }}
      sfFamiliesLogo={{
        url: sfFamiliesLogo,
        alt: "SF Families logo.",
      }}
      ciscoLogo={{
        url: ciscoLogo,
        alt: "Cisco logo.",
      }}
      pagerdutyLogo={{
        url: pagerdutyLogo,
        alt: "PagerDuty logo.",
      }}
      uberLogo={{
        url: uberLogo,
        alt: "Uber logo.",
      }}
    />
  </div>
);

export const DefaultPartnersAndSponsorsBlock = Template.bind({});
DefaultPartnersAndSponsorsBlock.args = {
  title: "Partners and sponsors",
};
