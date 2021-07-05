import * as React from "react";
import { Helmet } from "react-helmet";

import ArticleSpotlightCard from "../../components/grid-aware/ArticleSpotlightCard";
import Spacer from "../../components/grid-aware/Spacer";
import TwoParagraphBlock from "../../components/grid-aware/TwoParagraphBlock";
import Layout from "../../components/layout";
import articleSpotlightImage from "../volunteer/laura-barerra-vera.png";
import darcelJackson from "./darcel-jackson.png";

export default () => (
  <Layout>
    <Helmet>
      <title>About Us | ShelterTech</title>
    </Helmet>
    <TwoParagraphBlock
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
            smartphone and could find WiFi, but there weren't any apps or
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
