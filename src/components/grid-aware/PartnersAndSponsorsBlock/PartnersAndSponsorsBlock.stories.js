import React from "react";

import PartnersAndSponsorsBlock from "./PartnersAndSponsorsBlock";
import benetechLogo from "./stories/benetech-logo.png";
import bridgeLogo from "./stories/bridge-logo.png";
import ciscoLogo from "./stories/cisco-logo.png";
import codeForSFLogo from "./stories/code-for-sf-logo.png";
import codeTenderloinLogo from "./stories/code-tenderloin-logo.png";
import compassFamilyServicesLogo from "./stories/compass-family-services-logo.png";
import evictionDefenseLogo from "./stories/eviction-defense-logo.png";
import gsmaLogo from "./stories/gsma-logo.png";
import homeownershipSFLogo from "./stories/homeownership-sf-logo.png";
import justiceAndDiversityCenterLogo from "./stories/justice-and-diversity-center-logo.png";
import larkinStreetLogo from "./stories/larkin-street-logo.png";
import mohcdLogo from "./stories/mohcd-logo.png";
import monkeybrainsLogo from "./stories/monkeybrains-logo.png";
import pagerdutyLogo from "./stories/pagerduty-logo.png";
import pcsLogo from "./stories/pcs-logo.png";
import sfFamiliesLogo from "./stories/sf-families-logo.png";
import uberLogo from "./stories/uber-logo.png";
import weworkLogo from "./stories/wework-logo.png";

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
      url: sfFamiliesLogo,
      alt: "Logo of SF Families online public service directory organization.",
    },
    {
      url: compassFamilyServicesLogo,
      alt: "Logo of Compass Family Services.",
    },
    {
      url: larkinStreetLogo,
      alt: "Logo of Larkin Street Youth Services nonprofit organization.",
    },
    {
      url: evictionDefenseLogo,
      alt: "Logo of Eviction Defense Collaborative.",
    },
    {
      url: homeownershipSFLogo,
      alt: "Logo of Homeownership education and opportunity",
    },
    {
      url: benetechLogo,
      alt: "Logo of Benetech nonprofit organization.",
    },
    {
      url: ciscoLogo,
      alt: "Logo of Cisco Systems networking hardware company.",
    },
    {
      url: codeTenderloinLogo,
      alt: "Logo of Code Tenderloin.",
    },
    {
      url: monkeybrainsLogo,
      alt: "Logo of monkeybrains.",
    },
    {
      url: pagerdutyLogo,
      alt: "Logo of PagerDuty computer software company.",
    },
    {
      url: bridgeLogo,
      alt: "Logo of Bridge.",
    },
    {
      url: weworkLogo,
      alt: "Logo of wework.",
    },
    {
      url: pcsLogo,
      alt: "Logo of Professional Computer Support.",
    },
    {
      url: uberLogo,
      alt: "Logo of Uber Technologies Inc. company.",
    },
    {
      url: codeForSFLogo,
      alt: "Logo of Code for San Francisco.",
    },
    {
      url: gsmaLogo,
      alt: "Logo of GSMA.",
    },
  ],
};
