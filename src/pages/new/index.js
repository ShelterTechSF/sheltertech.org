import React from "react";

import ArticleSpotlightCard from "../../components/grid-aware/ArticleSpotlightCard";
import articleSpotlightImage from "../../components/grid-aware/ArticleSpotlightCard/stories/background.png";
import BlockQuoteBlock from "../../components/grid-aware/BlockQuoteBlock/BlockQuoteBlock";
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
    <BlockQuoteBlock
      quotes={
        ([
          {
            quote:
              "We've heard from San Franciscans, including as part of our recent strategic planning community outreach that it's hard to know where to go when you're looking for supportive services. It's hard to know where to start, and hard to navigate different resources to find accurate information. We're glad to be supporting ShelterTech and the broader community to build SF Service Guide - a one-stop, reliable place to help connect residents to the services they need.",
            attribution:
              "Barry Roeder, Mayor's Office of Housing and Community Development",
          },
          {
            quote:
              "We’ve heard from San Franciscans, including as part of our recent strategic planning community outreach that It’s hard to know where to go when you’re looking for supportive services. It’s hard to know where to start, and hard to navigate different resources to find accurate information. We’re glad to be supporting ShelterTech and the broader community to build SF Service Guide – a one-stop, reliable place to help connect residents to the services they need.",
            attribution:
              "Barry Roeder, Mayor’s Office of Housing and Community Development",
          },
          {
            quote:
              "Wi-fi has been a top request among young people here at Larkin Street. Now that we have it with ShelterTech we are seeing more young people come in and stay around and get the things they need so that they can move past homelessness, permanently.",
            attribution:
              "Veronica Pastore, Director of Communications, Larkin Street Youth Services",
          },
          {
            quote:
              "There’s an overwhelming number of resources for the vulnerable populations that live here and it’s important to have a place where they can go where they know all the information is accurate, up-to-date, and consistent with what their understanding has been of that particular resource. And if there are any changes that need to be made those will be reflected.",
            attribution:
              "Julie Rosenthal, Director of Social Services, Homeless Advocacy Project",
          },
        ],
        [
          {
            quote:
              "We've heard from San Franciscans, including as part of our recent strategic planning community outreach that it's hard to know where to go when you're looking for supportive services. It's hard to know where to start, and hard to navigate different resources to find accurate information. We're glad to be supporting ShelterTech and the broader community to build SF Service Guide - a one-stop, reliable place to help connect residents to the services they need.",
            attribution:
              "Barry Roeder, Mayor's Office of Housing and Community Development",
          },
          {
            quote:
              "We’ve heard from San Franciscans, including as part of our recent strategic planning community outreach that It’s hard to know where to go when you’re looking for supportive services. It’s hard to know where to start, and hard to navigate different resources to find accurate information. We’re glad to be supporting ShelterTech and the broader community to build SF Service Guide – a one-stop, reliable place to help connect residents to the services they need.",
            attribution:
              "Barry Roeder, Mayor’s Office of Housing and Community Development",
          },
          {
            quote:
              "Wi-fi has been a top request among young people here at Larkin Street. Now that we have it with ShelterTech we are seeing more young people come in and stay around and get the things they need so that they can move past homelessness, permanently.",
            attribution:
              "Veronica Pastore, Director of Communications, Larkin Street Youth Services",
          },
          {
            quote:
              "There’s an overwhelming number of resources for the vulnerable populations that live here and it’s important to have a place where they can go where they know all the information is accurate, up-to-date, and consistent with what their understanding has been of that particular resource. And if there are any changes that need to be made those will be reflected.",
            attribution:
              "Julie Rosenthal, Director of Social Services, Homeless Advocacy Project",
          },
        ])
      }
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
    <ArticleSpotlightCard
      eyebrowText="Partnership Spotlight"
      title="Digital Equity Team of San Francisco"
      description="Free Fiber Initiative summary we're working together to find new and different ways of building lasting infrastructure"
      button={{ text: "Read more", internalLink: "/foo" }}
      backgroundImage={articleSpotlightImage}
    />
  </Layout>
);
