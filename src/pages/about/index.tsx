import * as React from "react";
import { Helmet } from "react-helmet";

import ArticleSpotlightCard from "../../components/grid-aware/ArticleSpotlightCard";
import Spacer from "../../components/grid-aware/Spacer";
import Layout from "../../components/layout";
import articleSpotlightImage from "../volunteer/laura-barerra-vera.png";

export default () => (
  <Layout>
    <Helmet>
      <title>About Us | ShelterTech</title>
    </Helmet>
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
