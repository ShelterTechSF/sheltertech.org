import React, { useState } from "react";

import ArticleSpotlightCard from "../../components/grid-aware/ArticleSpotlightCard";
import BlockQuoteBlock from "../../components/grid-aware/BlockQuoteBlock/BlockQuoteBlock";
import HomePageLargeParagraph from "../../components/grid-aware/HomePageLargeParagraph";
import Modal from "../../components/grid-aware/Modal";
import PartnersAndSponsorsBlock from "../../components/grid-aware/PartnersAndSponsorsBlock";
import benetechLogo from "../../components/grid-aware/PartnersAndSponsorsBlock/stories/benetech-logo.png";
import ciscoLogo from "../../components/grid-aware/PartnersAndSponsorsBlock/stories/cisco-logo.png";
import justiceAndDiversityCenterLogo from "../../components/grid-aware/PartnersAndSponsorsBlock/stories/justice-and-diversity-center-logo.png";
import larkinStreetLogo from "../../components/grid-aware/PartnersAndSponsorsBlock/stories/larkin-street-logo.png";
import mohcdLogo from "../../components/grid-aware/PartnersAndSponsorsBlock/stories/mohcd-logo.png";
import pagerdutyLogo from "../../components/grid-aware/PartnersAndSponsorsBlock/stories/pagerduty-logo.png";
import sfFamiliesLogo from "../../components/grid-aware/PartnersAndSponsorsBlock/stories/sf-families-logo.png";
import uberLogo from "../../components/grid-aware/PartnersAndSponsorsBlock/stories/uber-logo.png";
import ProgramsBlock from "../../components/grid-aware/ProgramsBlock";
import communityDevelopmentImg from "../../components/grid-aware/ProgramsBlock/stories/community-development.jpg";
import sfServiceGuideImg from "../../components/grid-aware/ProgramsBlock/stories/sf-service-guide.jpg";
import shelterConnectImg from "../../components/grid-aware/ProgramsBlock/stories/shelter-connect.jpg";
import Spacer from "../../components/grid-aware/Spacer";
import ThreeParagraphBlock from "../../components/grid-aware/ThreeParagraphBlock";
import image1 from "../../components/grid-aware/ThreeParagraphBlock/stories/image1.png";
import image2 from "../../components/grid-aware/ThreeParagraphBlock/stories/image2.png";
import image3 from "../../components/grid-aware/ThreeParagraphBlock/stories/image3.png";
import TitleBlock from "../../components/grid-aware/TitleBlock";
import VideoHeader from "../../components/grid-aware/VideoHeader/VideoHeader";
import videoHeaderImage from "../../components/grid-aware/VideoHeader/stories/VideoHeader.png";
import VideoSpotlightBlock from "../../components/grid-aware/VideoSpotlightBlock";
import videoSpotlightBlockImage from "../../components/grid-aware/VideoSpotlightBlock/stories/VideoSpotlightBlock.png";
import Layout from "../../components/layout";
import VolunteerSignupForm from "../../components/thirdparty/mailchimp/VolunteerSignupForm";
import annualReportPDF from "./ShelterTech-Annual-Report-2018.pdf";
import articleSpotlightImage from "./mission-hotel.jpeg";

export default () => {
  const [volunteerFormIsOpen, setVolunteerFormIsOpen] = useState(false);
  return (
    <Layout>
      <Modal
        isOpen={volunteerFormIsOpen}
        setIsOpen={setVolunteerFormIsOpen}
        contentLabel="Volunteer"
      >
        <VolunteerSignupForm />
      </Modal>
      <VideoHeader
        title="Less than half of nearly 10,000 people experiencing homelessness in the Bay Area have reliable access to the internet."
        description="ShelterTech is a technology-focused nonprofit organization making it easier for this community to connect with  resources that can help them address their challenges."
        image={videoHeaderImage}
        ctaButtons={[
          { text: "Donate", internalLink: "/new/donate" },
          { text: "Volunteer", internalLink: "/new/volunteer" },
        ]}
        playButtonLink="https://www.youtube.com/watch?v=KCduRWJ1hQo"
      />
      <HomePageLargeParagraph
        title="We believe connectivity is a human right."
        description="Access to the internet and technology makes it possible for people to find a job, human services, and contact family and friends."
      />
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
          { text: "Become a Volunteer", internalLink: "/new/volunteer" },
          { text: "Donate", internalLink: "/new/donate" },
          { text: "Work with us", onClick: () => setVolunteerFormIsOpen(true) },
        ]}
      />
      <ProgramsBlock
        title="Our programs"
        programs={[
          {
            theme: "dark",
            image: shelterConnectImg,
            imageAlt: "Image of ShelterTech booth with 4 volunteers smiling.",
            title: "ShelterConnect",
            description:
              "Through partnerships with the City of San Francisco and Cisco, residents can use free wifi and hardware at shelters and transitional housing facilities.",
          },
          {
            theme: "dark",
            image: sfServiceGuideImg,
            imageAlt:
              "Image of the back of two people sitting where the woman on the left is pointing to the monitor of a Macbook as the man observes.",
            title: "SF Service Guide",
            description:
              "Anyone with access to a smartphone, tablet, or computer can utilize this online directory of human services provided in San Francisco.",
          },
          {
            theme: "dark",
            image: communityDevelopmentImg,
            imageAlt: "Image of ShelterTech community member smiling.",
            title: "Community Development",
            description:
              "We depend on Community Representatives to inform our work from their lived experiences and rely on volunteers to continuously updated the resources we develop.",
          },
        ]}
      />
      <Spacer
        heightDesktop="91px"
        heightMobile="19px"
        color="var(--color-black)"
      />
      <VideoSpotlightBlock
        eyebrowText="Our Impact"
        description="Over 3,000 people have daily internet access in local shelters and resource centers."
        button={{ text: "View Annual Report", externalLink: annualReportPDF }}
        image={{
          url: videoSpotlightBlockImage,
          alt: "Video spotlight of Aaron speaking.",
        }}
        playButtonLink="/foo"
        blackBackground
      />
      <Spacer heightDesktop="42px" heightMobile="0" />
      <TitleBlock title="Voices from the community" />
      <BlockQuoteBlock
        quotes={[
          {
            quote:
              "We’ve heard from San Franciscans, including as part of our recent strategic planning community outreach that it’s hard to know where to go when you’re looking for supportive services. It’s hard to know where to start, and hard to navigate different resources to find accurate information. We’re glad to be supporting ShelterTech and the broader community to build SF Service Guide – a one-stop, reliable place to help connect residents to the services they need.",
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
        ]}
      />
      <Spacer heightDesktop="20px" heightMobile="0" />
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
        eyebrowText="ShelterConnect Spotlight"
        title="Mission Hotel"
        description="We recently reached a major milestone. The biggest SRO in San Francisco now provides free wifi and hardware to hundreds of people."
        button={{
          text: "Read More",
          externalLink:
            "https://medium.com/shelter-tech/the-mission-hotel-san-franciscos-largest-sro-now-provides-free-internet-to-hundreds-of-at-risk-f72761c62c2e",
        }}
        backgroundImage={articleSpotlightImage}
      />
      <Spacer heightDesktop="170px" heightMobile="80px" />
    </Layout>
  );
};
