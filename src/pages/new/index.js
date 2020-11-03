import React from "react";

import PartnersAndSponsorsBlock from "../../components/grid-aware/PartnersAndSponsorsBlock";
import benetechLogo from "../../components/grid-aware/PartnersAndSponsorsBlock/stories/benetech-logo.png";
import ciscoLogo from "../../components/grid-aware/PartnersAndSponsorsBlock/stories/cisco-logo.png";
import justiceAndDiversityCenterLogo from "../../components/grid-aware/PartnersAndSponsorsBlock/stories/justice-and-diversity-center-logo.png";
import larkinStreetLogo from "../../components/grid-aware/PartnersAndSponsorsBlock/stories/larkin-street-logo.png";
import mohcdLogo from "../../components/grid-aware/PartnersAndSponsorsBlock/stories/mohcd-logo.png";
import pagerdutyLogo from "../../components/grid-aware/PartnersAndSponsorsBlock/stories/pagerduty-logo.png";
import sfFamiliesLogo from "../../components/grid-aware/PartnersAndSponsorsBlock/stories/sf-families-logo.png";
import uberLogo from "../../components/grid-aware/PartnersAndSponsorsBlock/stories/uber-logo.png";
import ThreeParagraphBlock from "../../components/grid-aware/ThreeParagraphBlock";
import image1 from "../../components/grid-aware/ThreeParagraphBlock/stories/image1.png";
import image2 from "../../components/grid-aware/ThreeParagraphBlock/stories/image2.png";
import image3 from "../../components/grid-aware/ThreeParagraphBlock/stories/image3.png";
import TwoParagraphBlock from "../../components/grid-aware/TwoParagraphBlock";
import darcelHeadshot from "../../components/grid-aware/TwoParagraphBlock/stories/darcel-jackson-headshot.png";
import Layout from "../../components/layout";

export default () => (
  <Layout>
    <ThreeParagraphBlock
      title="Get involved"
      paragraph1={{
        title: "Volunteer",
        description:
          "Volunteers make our work possible. There are several ways to support our mission. Learn more and get involved.",
      }}
      paragraph2={{
        title: "Partnerships",
        description:
          "We work with companies, nonprofits, and local governments to empower the community. Reach out to us.",
      }}
      paragraph3={{
        title: "Donate",
        description:
          "Our programs are largely funded by donations from people who care about bridging the digital divide. Support ShelterTech today.",
      }}
      image1={{
        url: image1,
        alt: "Two volunteers working on a laptop together at a datathon.",
      }}
      image2={{
        url: image2,
        alt: "Team posing for a photo after a design workshop.",
      }}
      image3={{
        url: image3,
        alt: "Multiple volunteers working at a datathon.",
      }}
      ctaTitle="Volunteer, donate, or reach out to our partnerships team"
      ctaButtons={[
        { text: "Volunteer", internalLink: "/new/volunteer" },
        { text: "Donate", internalLink: "/new/donate" },
        { text: "Work with us", onClick: () => {} },
      ]}
    />
    <TwoParagraphBlock
      title="Rooted in the Community"
      paragraph1="ShelterTech was founded in 2016 by Darcel Jackson, who experienced homelessness first hand. Darcel envisioned a Bay Area where technology serves everyone, and those who were most vulnerable had the digital infrastructure and tools they need to get back on their feet."
      paragraph2={
        <>
          <p style={{ marginTop: "0" }}>
            Our all volunteer team is paving the way for a new kind of community
            organisation, one where expertise is shared across income boundaries
            and life experiences. From day one, we’ve worked side-by-side with
            those experiencing homelessness to understand the challenges they
            face and the solutions they want to address their needs.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p style={{ marginBottom: "0" }}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab inventore veritatis et quasi architecto beatae vitae dicta
            sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt.
          </p>
        </>
      }
      image={{
        url: darcelHeadshot,
        alt: "Darcel Jackson head shot wearing a heather gray hoodie.",
      }}
      ctaButton={[
        {
          text: "More About us",
          internalLink: "/foo",
        },
      ]}
    />
    <PartnersAndSponsorsBlock
      title="Partners and sponsors"
      partnersAndSponsors={[
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
          alt:
            "Logo of SF Families online public service directory organization.",
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
          alt: "Logo of Uber Technologies Inc. company.",
        },
      ]}
    />
  </Layout>
);
