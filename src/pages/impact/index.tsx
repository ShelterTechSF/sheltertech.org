import { Link } from "gatsby";
import * as React from "react";

import BaseHead from "../../components/BaseHead";
import ArticleSpotlightCard from "../../components/grid-aware/ArticleSpotlightCard";
import Spacer from "../../components/grid-aware/Spacer";
import StatsBarBlock from "../../components/grid-aware/StatsBarBlock";
import StatsBlock from "../../components/grid-aware/StatsBlock";
import TextHeader from "../../components/grid-aware/TextHeader";
import Layout from "../../components/layout";
import articleSpotlightImage from "../images/mission-hotel.jpeg";
import linkSFLogo from "./link-sf.png";
import our415Logo from "./our-415-logo.svg";
import ucsfAcuteCareInnovationCenterLogo from "./ucsf-acute-care-innovation-center-logo.png";

export default () => (
  <Layout>
    <TextHeader title="Our Impact" hasBottomPadding={false} />
    <StatsBlock
      title="SF Service Guide"
      subtitle={
        <>
          A platform designed to connect people who are experiencing
          homelessness or housing insecurity to needed services in San
          Francisco. <Link to="/programs">Learn more about this program.</Link>
        </>
      }
      statCards={[
        {
          number: "6.0K",
          statement: "Average monthly users in 2021",
        },
        {
          number: "72K",
          statement: "Total users in 2021",
        },
        {
          number: "463",
          statement: "Organizations represented",
        },
      ]}
      theme="white"
      titleColor="blue"
    />
    <StatsBarBlock
      title="ShelterConnect"
      subtitle={
        <>
          Delivering free, turn-key WiFi solutions to shelters and transitional
          housing facilities with key partners.{" "}
          <Link to="/programs">Learn more about this program.</Link>
        </>
      }
      barStatCards={[
        {
          bars: [
            { label: 2019, statistic: 17 },
            { label: 2020, statistic: 18 },
            { label: 2021, statistic: 21 },
          ],
          title: "Shelters wired",
          subtitle: "Cumulative total",
          orientation: "vertical",
        },
        {
          bars: [
            { label: 2019, statistic: 1265 },
            { label: 2020, statistic: 1605 },
            { label: 2021, statistic: 1848 },
          ],
          title: "People serviced nightly",
          orientation: "horizontal",
        },
      ]}
      theme="gray"
      titleColor="blue"
    />
    <StatsBlock
      title="Volunteers"
      subtitle={
        <>
          As an all-volunteer organization ShelterTech relies on volunteers to
          support digital equity.{" "}
          <Link to="/volunteer">Learn more about volunteering.</Link>
        </>
      }
      statCards={[
        {
          number: "40",
          statement: "Active volunteers",
        },
        {
          number: "15",
          statement: "Corporate volunteer organizations",
        },
      ]}
      theme="white"
      titleColor="blue"
    />
    <StatsBlock
      title="Funding"
      subtitle={
        <>
          As a non-profit organization that does not focus on fundraising events
          or similar methods to fund our work, we depend on grants from the City
          of San Francisco and other organizations, as well as donations from
          corporations and individuals.{" "}
          <Link to="/donate">Help us reach our next funding goal.</Link>
        </>
      }
      statCards={[
        {
          number: "$230k",
          statement: "Total funding in 2021 (grants and donations)",
        },
        {
          number: "$150k",
          statement: "In-kind contributions in 2021",
        },
      ]}
      theme="gray"
      titleColor="blue"
    />
    <StatsBlock
      title="Hosted Partners"
      subtitle="ShelterTech is proud to provide the data on the SF Service Guide platform for other organizations to use on their own websites. We have worked closely with Our 415, Link-SF, and UCSF Acute Care Innovation Center to provide a custom experience catered to their users’ needs, leveraging our data curation pipeline to keep that information accurate and up to date."
      statCards={[
        {
          number: <img src={our415Logo} alt="Our 415 Logo." />,
        },
        {
          number: <img src={linkSFLogo} alt="Link-SF Logo." />,
        },
        {
          number: (
            <a
              href="https://acutecare.ucsf.edu/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={ucsfAcuteCareInnovationCenterLogo}
                alt="UCSF Acute Care Innovation Center Logo."
              />
            </a>
          ),
        },
      ]}
      theme="white"
      titleColor="blue"
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

export const Head = () => <BaseHead title="Our Impact | ShelterTech" />;
