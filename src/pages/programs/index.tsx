import * as React from "react";
import { useState } from "react";
import { Helmet } from "react-helmet";

import ArticleSpotlightCard from "../../components/grid-aware/ArticleSpotlightCard";
import Modal from "../../components/grid-aware/Modal";
import ProgramBlock from "../../components/grid-aware/ProgramBlock";
import ProgramsSubtitleBlock from "../../components/grid-aware/ProgramsSubtitleBlock";
import Spacer from "../../components/grid-aware/Spacer";
import TextHeader from "../../components/grid-aware/TextHeader";
import Layout from "../../components/layout";
import PartnershipSignupForm from "../../components/thirdparty/mailchimp/PartnershipSignupForm";
import articleSpotlightImage from "../images/laura-barerra-vera-cropped.png";
import communityDevelopmentImg from "./community-development.jpg";
import serviceGuideImg from "./sf-service-guide.jpg";
import shelterConnect from "./shelter-connect.jpg";

export default () => {
  const [partnershipFormIsOpen, setPartnershipFormIsOpen] = useState(false);

  return (
    <Layout>
      <Helmet>
        <title>Our Programs | ShelterTech</title>
      </Helmet>
      <Modal
        isOpen={partnershipFormIsOpen}
        setIsOpen={setPartnershipFormIsOpen}
        contentLabel="Partnership"
      >
        <PartnershipSignupForm />
      </Modal>
      <TextHeader
        title="Our Programs"
        description="ShelterTech's programs are designed to support the underserved community experiencing homelessness and housing insecurity through WiFi connectivity and access to online resources."
      />
      <ProgramsSubtitleBlock title="ShelterTech offers the following programs:" />
      <ProgramBlock
        title="SF Service Guide"
        description={
          <>
            <p>
              The SF Service Guide is an online directory of human services in
              San Francisco that launched in November 2019 and currently serves
              1,500 unique monthly users. The directory&apos;s focus is on
              homelessness and housing services but also covers a variety of
              other services, from education and legal aid to senior services
              and re-entry programs. Our goal is to help anyone with access to a
              smartphone, tablet, or computer find the services they need.
            </p>
            <p>
              SF Service Guide is supported by a grant from the SF Mayor&apos;s
              Office of Housing and Community Development and verified for
              accuracy by our data partner, the Homeless Advocacy Project of the
              JDC.
            </p>
          </>
        }
        image={{
          url: serviceGuideImg,
          alt: "SF Service Guide",
        }}
        ctaButtons={[
          {
            text: "Visit Site",
            externalLink: "https://sfserviceguide.org/",
          },
          {
            text: "Donate",
            internalLink: "/donate/",
          },
        ]}
      />
      <ProgramBlock
        title="ShelterConnect"
        description={
          <>
            <p>
              The ShelterConnect program works with partners to deliver a free,
              turn-key WiFi solution for shelters and transitional housing
              facilities. ShelterConnect is proud to provide over 4,000 people a
              year with daily internet access in over 20 local shelters and
              resource centers.
            </p>
            <p>
              We focus on identifying strategies to reduce the lifetime program
              cost for wiring a shelter. The three primary costs are:
            </p>
            <ul>
              <li>Equipment and licensing</li>
              <li>Installation labor</li>
              <li>Ongoing ISP charges</li>
            </ul>
            <p>
              In 2019 we established a partnership with the City of San
              Francisco Digital Equity team to deliver 1GB fiber/ISP capability
              to future ShelterConnect locations at no cost. Working with
              partners, ShelterConnect has implemented free WiFi solutions at
              over 20 locations including the Star Hotel, Mission Hotel,
              MSC-South, and ten locations managed by Larkin Street Youth
              Services.
            </p>
          </>
        }
        image={{
          url: shelterConnect,
          alt: "Shelter Connect",
        }}
        ctaButtons={[
          {
            text: "DONATE",
            internalLink: "/donate/",
          },
          {
            text: "PARTNER WITH US",
            onClick: () => setPartnershipFormIsOpen(true),
          },
        ]}
      />
      <ProgramBlock
        title="Community Representative Program"
        description={
          <>
            <p>
              ShelterTech collaborates with Community Representatives who have
              experienced homelessness to engage with volunteers, help build
              program awareness, and gain insight to inform our programs and
              products. Community Representative are key participants in the
              following events:
            </p>
            <ul>
              <li>
                Datathons are public events where volunteers from the community
                help verify data in the SF Service Guide
              </li>
              <li>
                Outreach events in partnership with local frontline service
                organizations help connect underserved communities with needed
                resources
              </li>
            </ul>
          </>
        }
        image={{
          url: communityDevelopmentImg,
          alt: "Community Development",
        }}
        ctaButtons={[
          {
            text: "DONATE",
            internalLink: "/donate/",
          },
        ]}
      />
      <Spacer heightDesktop="20px" heightMobile="0px" />
      <ArticleSpotlightCard
        eyebrowText="Volunteer Spotlight"
        title="Laura Barrera-Vera"
        subtitle="Program Manager, SF Service Guide"
        description="I moved to San Francisco in 2019 and immediately decided to join ShelterTech as I felt compelled to take action to address the worsening homelessness crisis. As Product Lead, I have focused on managing product development and on improving collaboration across all key teams to ensure we build an impactful product."
        button={{
          text: "Read More",
          externalLink:
            "https://medium.com/shelter-tech/volunteer-spotlight-laura-barrera-vera-41594cfbbe7b",
        }}
        backgroundImage={articleSpotlightImage}
      />
      <Spacer heightDesktop="170px" heightMobile="80px" />
    </Layout>
  );
};
