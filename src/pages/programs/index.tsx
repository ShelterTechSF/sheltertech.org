import * as React from "react";

import ArticleSpotlightCard from "../../components/grid-aware/ArticleSpotlightCard";
import CommunityRepProgramBlock from "../../components/grid-aware/CommunityRepProgramBlock";
import classroom from "../../components/grid-aware/ImageHeader/stories/classroom.png";
import ProgramsPageLargeParagraph from "../../components/grid-aware/ProgramsPageLargeParagraph";
import SFServiceGuideBlock from "../../components/grid-aware/SFServiceGuideBlock";
import ShelterConnectBlock from "../../components/grid-aware/ShelterConnectBlock";

import Layout from "../../components/layout";
import articleSpotlightImage from "./laura-barerra-vera.png";

export default () => (
  <Layout>
    <ProgramsPageLargeParagraph
      title="Our Programs"
      description="ShelterTech's programs are designed to suppport the underserved community experiencing homelessness and housing insecurity through WiFi connectivity and acccess to online resources."
    />
    <SFServiceGuideBlock
      title="SF Service Guide"
      subtitle="an online directory of human services in San Francisco"
      description="The SF Service Guide is an online directory of human services in San Francisco that launched in November 2019 and currently serves 1,500 unique monthly users. The directory's focus is on homelessness and housing services but also covers a variety of other services, from education and legal aid to senior services and re-entry programs. Our goal is to help anyone with access to smartphone, tablet, or computer to find services they need."
      description2="SF Service Guide is supported by a grant from SF Mayor's Office of Housing and Community Development and verified for accuracy by our data partner, the Homeless Advocacy Project of the JDC."
      image={{
        url: classroom,
        alt: "Classroom of volunteer members collaborating with one another.",
      }}
      ctaButtons={[
        {
          text: "Visit Site",
          onClick: () => console.log(true),
        },
        {
          text: "Donate",
          onClick: () => console.log(true),
        },
      ]}
    />
    <ShelterConnectBlock
      title="ShelterConnect"
      subtitle="a program that installs free WiFi in overnight shelters, community centers, and supportive housing developments"
      description="The ShelterConnect program works with partners to deliver a free, turn-key WiFi solution for shelters and transitional housing facilities. ShelterConnect is proud to provide over 4,000 people a year with daily internet access in over 20 local shelters and resource centers."
      description2="We focus on identifying strategies to reduce the lifetime program cost for wiring a shelter. The three primary costs are:"
      bullet1="Equipment and licensing"
      bullet2="Installation labor"
      bullet3="Ongoing ISP charges"
      description3="In 2019 we established a partnership with the City of San Francisco Digital Equity team to deliver 1GB fiber/ISP capability to future ShelterConnect locations at no cost.  Working with partners, ShelterConnect has implemented free WiFi solutions at over 20 locations including the Star Hotel, Mission Hotel, MSC-South, and ten locations managed by Larkin Street Youth Services."
      image={{
        url: classroom,
        alt: "Classroom of volunteer members collaborating with one another.",
      }}
      ctaButtons={[
        {
          text: "DONATE",
          onClick: () => console.log(true),
        },
        {
          text: "PARTNER WITH US",
          onClick: () => console.log(true),
        },
      ]}
    />
    <CommunityRepProgramBlock
      title="Community Representative Program"
      subtitle="providing program insight and engagement with the community"
      description="ShelterTech collaborates with Community Representatives who have experienced homelessness to engage with volunteers, help build program awareness, and gain insight to inform our programs and products. Community Representative are key participants in the following events:"
      bullet1="Datathons are public events where volunteers from the community help verify data in the SF Service Guide"
      bullet2="Outreach events in partnership with local frontline service organizations help connect underserved communities with needed resources"
      image={{
        url: classroom,
        alt: "Classroom of volunteer members collaborating with one another.",
      }}
      ctaButtons={[
        {
          text: "DONATE",
          onClick: () => console.log(true),
        },
      ]}
    />
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
  </Layout>
);
