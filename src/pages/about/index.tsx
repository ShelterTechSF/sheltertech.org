import * as React from "react";
import { Helmet } from "react-helmet";

import ArticleSpotlightCard from "../../components/grid-aware/ArticleSpotlightCard";
import ImageHeader from "../../components/grid-aware/ImageHeader";
import Spacer from "../../components/grid-aware/Spacer";
import TwoParagraphBlock from "../../components/grid-aware/TwoParagraphBlock";
import Layout from "../../components/layout";
import darcelJackson from "./darcel-jackson.png";
import articleSpotlightImage from "./laura-barerra-vera-cropped.png";
import teamImage from "./sheltertech-team.png";

export default () => (
  <Layout>
    <Helmet>
      <title>About Us | ShelterTech</title>
    </Helmet>
    <ImageHeader
      title="About Us"
      subtitle="Our Mission and History"
      description={
        <>
          <p>
            ShelterTech is an award-winning non-profit solving the biggest
            technology challenges faced by people experiencing homelessness and
            are housing insecure in San Francisco. Our unique, all-volunteer
            organization is committed to bridging the digital divide, inspired
            by the belief that digital equity and connectivity is a right, not a
            privilege.
          </p>
          <p>
            With over 9,000 people in San Francisco and over 28,000 in the Bay
            Area currently unsheltered and tens of thousands more at risk of
            eviction, the situation has never been more dire. The tech boom in
            San Francisco has created thousands of jobs and great wealth. It has
            also widened the digital divide and created an affordable housing
            crisis, making a bad situation even worse.
          </p>
          <p>
            Working in close collaboration with the City of San Francisco,
            frontline services organizations, local corporations, and community
            representatives, ShelterTech is committed to delivering solutions
            built by the community, for the community. ShelterTech’s programs
            include:
          </p>
          <ul>
            <li>
              <a
                href="https://sfserviceguide.org/"
                style={{ textDecoration: "underline" }}
              >
                SF Service Guide
              </a>{" "}
              is an online directory of human services in San Francisco
            </li>
            <li>
              ShelterConnect is a program that installs free WiFi in shelters,
              community centers, and supportive housing developments
            </li>
            <li>
              The Community Representative program is designed to bring
              volunteers and underserved community members together to enhance
              ShelterTech programs and build awareness
            </li>
          </ul>
        </>
      }
      image1={{
        url: teamImage,
        alt: "Team members posing for a group photo.",
      }}
    />
    <TwoParagraphBlock
      isAbout
      title="A note from our Founder, Darcel Jackson"
      paragraph2={
        <>
          <p>
            I became homeless when I was injured and lost my welding job working
            on the new Bay Bridge in San Francisco. I realized the longer I
            stayed in that condition, the harder it would become to escape it.
            Living on the streets, you spend most of your time just trying to
            survive. It’s hard to know where to start, what services you need,
            how to get training in a new field or search for jobs. I had a
            smartphone and could find WiFi, but there weren&apos;t any apps or
            websites to help me get off the streets. Now I want to give back and
            help people that become homeless. Darcel founded ShelterTech to help
            bridge this digital divide.
          </p>
        </>
      }
      image={{
        url: darcelJackson,
        alt: "Darcel Jackson, founder of ShelterTech.",
      }}
    />
    <Spacer heightDesktop="190px" heightMobile="80px" />
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
