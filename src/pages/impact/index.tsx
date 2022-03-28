import * as React from "react";
import { Helmet } from "react-helmet";

import ArticleSpotlightCard from "../../components/grid-aware/ArticleSpotlightCard";
import Spacer from "../../components/grid-aware/Spacer";
import StatsBarBlock from "../../components/grid-aware/StatsBarBlock";
import StatsBlock from "../../components/grid-aware/StatsBlock";
import Layout from "../../components/layout";
import articleSpotlightImage from "../images/mission-hotel.jpeg";

export default () => (
  <Layout>
    <Helmet>
      <title>Making an impact</title>
    </Helmet>
    <StatsBlock
      title="SF Service Guide"
      subtitle="A platform designed to connect at-risk and homeless individuals to critical human services in San Francisco. Learn more about this program."
      statCards={[
        {
          number: "3k",
          secondaryNumber: "+6 Y0Y",
          statement: "Monthly users",
        },
        {
          number: "13.4k",
          secondaryNumber: "+6 Y0Y",
          statement: "Annual users",
        },
        {
          number: "111",
          statement: "New resources",
        },
      ]}
      theme="white"
    />
    <StatsBarBlock
      title="ShelterConnect"
      subtitle="Delivering free, turn-key WiFi solutions to shelters and transitional housing facilities with key partners. Learn more about this program."
      barStatCards={[
        {
          bars: [
            {
              label: 2019,
              statistic: 14,
            },
            {
              label: 2020,
              statistic: 17,
            },
            {
              label: 2021,
              statistic: 21,
            },
          ],
          title: "Shelters Wired",
          subtitle: "+4 Y0Y",
          orientation: "vertical",
        },
        {
          bars: [
            {
              label: "PEAK",
              statistic: 14,
            },
            {
              label: "TARGET",
              statistic: 17,
            },
            {
              label: 2020,
              statistic: 21,
            },
          ],
          title: "People serviced daily",
          subtitle: "Daytime",
          orientation: "horizontal",
        },
        {
          bars: [
            {
              label: "PEAK",
              statistic: 14,
            },
            {
              label: "TARGET",
              statistic: 17,
            },
            {
              label: 2020,
              statistic: 21,
            },
          ],
          title: "People serviced daily",
          subtitle: "Nighttime",
          orientation: "vertical",
        },
      ]}
      theme="gray"
      titleColor="blue"
    />
    <StatsBlock
      title="Volunteers"
      subtitle="As an all-volunteer organization ShelterTech relies on volunteers to support digital equity. Learn more about volunteering."
      statCards={[
        {
          number: "107",
          secondaryNumber: "+6 Y0Y",
          statement: "Active volunteers",
        },
        {
          number: "13",
          secondaryNumber: "+6 Y0Y",
          statement: "Community Representatives",
        },
        {
          number: "20",
          secondaryNumber: "+6 Y0Y",
          statement: "Corporate volunteer organizations",
        },
      ]}
      theme="white"
    />
    <StatsBlock
      title="Funding"
      subtitle="As an all-volunteer organization ShelterTech relies on volunteers to support digital equity. Help us reach our next funding goal."
      statCards={[
        {
          number: "$79k",
          secondaryNumber: "+6 Y0Y",
          statement: "Annual funding",
        },
        {
          number: "$2m",
          secondaryNumber: "+6 Y0Y",
          statement: "in in-kind contributions",
        },
      ]}
      theme="gray"
    />
    <Spacer heightDesktop="190px" heightMobile="80px" />
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
