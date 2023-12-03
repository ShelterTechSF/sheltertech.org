import type { LogoPropType } from "../components/grid-aware/PartnersAndSponsorsBlock/PartnersAndSponsorsBlock";
import benetechLogo from "../components/grid-aware/PartnersAndSponsorsBlock/stories/benetech-logo.png";
import bridgeLogo from "../components/grid-aware/PartnersAndSponsorsBlock/stories/bridge-logo.png";
import ciscoLogo from "../components/grid-aware/PartnersAndSponsorsBlock/stories/cisco-logo.png";
import codeForSFLogo from "../components/grid-aware/PartnersAndSponsorsBlock/stories/code-for-sf-logo.png";
import codeTenderloinLogo from "../components/grid-aware/PartnersAndSponsorsBlock/stories/code-tenderloin-logo.png";
import compassFamilyServicesLogo from "../components/grid-aware/PartnersAndSponsorsBlock/stories/compass-family-services-logo.png";
import evictionDefenseLogo from "../components/grid-aware/PartnersAndSponsorsBlock/stories/eviction-defense-logo.png";
import gsmaLogo from "../components/grid-aware/PartnersAndSponsorsBlock/stories/gsma-logo.png";
import homeownershipSFLogo from "../components/grid-aware/PartnersAndSponsorsBlock/stories/homeownership-sf-logo.png";
import justiceAndDiversityCenterLogo from "../components/grid-aware/PartnersAndSponsorsBlock/stories/justice-and-diversity-center-logo.png";
import larkinStreetLogo from "../components/grid-aware/PartnersAndSponsorsBlock/stories/larkin-street-logo.png";
import mohcdLogo from "../components/grid-aware/PartnersAndSponsorsBlock/stories/mohcd-logo.png";
import monkeybrainsLogo from "../components/grid-aware/PartnersAndSponsorsBlock/stories/monkeybrains-logo.png";
import our415Logo from "../components/grid-aware/PartnersAndSponsorsBlock/stories/our-415-logo.svg";
import pagerdutyLogo from "../components/grid-aware/PartnersAndSponsorsBlock/stories/pagerduty-logo.png";
import pcsLogo from "../components/grid-aware/PartnersAndSponsorsBlock/stories/pcs-logo.png";
import uberLogo from "../components/grid-aware/PartnersAndSponsorsBlock/stories/uber-logo.png";
import ucsfAcuteCareInnovationCenterLogo from "../components/grid-aware/PartnersAndSponsorsBlock/stories/ucsf-acute-care-innovation-center-logo.png";
import weworkLogo from "../components/grid-aware/PartnersAndSponsorsBlock/stories/wework-logo.png";

const partnersAndSponsorsLogos: readonly LogoPropType[] = [
  {
    url: mohcdLogo,
    alt: "Logo of Mayor's Office of Housing and Community Development organization.",
  },
  {
    url: justiceAndDiversityCenterLogo,
    alt: "Logo of Justice and Diversity Center of The Bar Association of San Francisco organization.",
  },
  {
    url: our415Logo,
    alt: "Logo of Our 415 online public service directory organization.",
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
  {
    url: ucsfAcuteCareInnovationCenterLogo,
    alt: "Logo of UCSF Acute Care Innovation Center.",
    link: "https://acutecare.ucsf.edu/",
  },
] as const;

export default partnersAndSponsorsLogos;
