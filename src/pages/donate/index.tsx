import * as React from "react";

import BaseHead from "../../components/BaseHead";
import ArticleSpotlightCard from "../../components/grid-aware/ArticleSpotlightCard";
import DonationBlock from "../../components/grid-aware/DonationBlock";
import Spacer from "../../components/grid-aware/Spacer";
import Layout from "../../components/layout";
import articleSpotlightImage from "../images/mission-hotel.jpeg";

export default () => (
  <Layout>
    <DonationBlock
      mainTitle="Donate today"
      mainDescription="Your support will address digital inequity for an under-resourced community that does not have access to the internet and essential digital services."
      whyDonateTitle="Why give to ShelterTech?"
      whyDonateList={[
        "Our work depends on regular contributions from donors like you.",
        "People experiencing homelessness and housing insecurity will have access to free internet and essential digital services.",
        "We serve over 1,600 users on a daily basis and we’re always working to grow our network and deepen its capabilities.",
        "These funds provide our advisory Community Representatives a stipend for their work.",
        "Our organization is built on the belief that everyone has the right to connectivity.",
      ]}
      impactTitle="Your impact"
      impactList={[
        "$40 will go to a single Community Representative for their time conducting a Datathon event.",
        "$150 connects a bed to wifi for five years.",
        "$200 to $300 pays for up to seven Community Representatives’ time for a either a research or Datathon event.",
        "$500 covers hosting an entire Datathon, which provides food for all volunteers and Community Representatives.",
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

export const Head = () => <BaseHead title="Donate | ShelterTech" />;
