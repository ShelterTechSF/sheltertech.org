import React, { useState } from "react";
import { Helmet } from "react-helmet";

import YouTubeEmbed from "../../components/block/YouTubeEmbed";
import ArticleSpotlightCard from "../../components/grid-aware/ArticleSpotlightCard";
import DonationBlock from "../../components/grid-aware/DonationBlock";
import image from "../../components/grid-aware/DonationBlock/stories/giving-tuesday-logo.png";
import Modal from "../../components/grid-aware/Modal";
import Spacer from "../../components/grid-aware/Spacer";
import Layout from "../../components/layout";
import articleSpotlightImage from "./mission-hotel.jpeg";

export default () => {
  const [videoHeaderModalIsOpen, setVideoHeaderModalIsOpen] = useState(false);

  return (
    <Layout>
      <Helmet>
        <title>Donate | ShelterTech</title>
      </Helmet>
      <Modal
        isOpen={videoHeaderModalIsOpen}
        setIsOpen={setVideoHeaderModalIsOpen}
        contentLabel="Video"
        noBezel
      >
        <YouTubeEmbed
          url="https://www.youtube.com/embed/2aLyGwaRufY"
          title="Why Internet - Learn about the digital divide and how you can help"
        />
      </Modal>
      <DonationBlock
        givingTuesdayImage={{
          url: image,
          alt: "Giving Tuesday logo.",
        }}
        mainDescription="For 2020, ShelterTech has a $20,000 fundraising goal to cover the installation costs for WiFi for the next SF building on our list. We have already raised half of that goal, and ask your support to raise the remaining $10,000."
        givingTuesdayParagraph={[
          <span>
            On this #GivingTuesday, we ask that you reflect on how important
            internet access is in your daily life. As we’ve shifted to a
            socially-distanced reality dependent on WiFi, many of us have been
            able to conduct Zoom calls to talk to our loved ones and coworkers,
            purchase deliverable groceries and take-out, and stream our favorite
            shows and movies. People experiencing homelessness often do not have
            internet access, making it harder to do all of these things.
          </span>,
          <span>
            At ShelterTech, we believe connectivity is a right, not a privilege,
            and through our ShelterConnect program, we have installed free WiFi
            at a number of San Francisco-based shelters to help bridge this
            digital divide. You can learn more about ShelterConnect by watching
            our video&nbsp;
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
            <span
              style={{
                color: "#069",
                textDecoration: "underline",
                cursor: "pointer",
              }}
              onClick={() => setVideoHeaderModalIsOpen(true)}
            >
              here
            </span>
            .
          </span>,
          <span>
            Last year, <span style={{ textDecoration: "underline" }}>you</span>{" "}
            and other supporters gave contributions which enabled ShelterTech to
            provide WiFi internet connectivity to hundreds of individuals
            experiencing homelessness and housing insecurity in San Francisco.
            With our partners, the City of San Francisco and Cisco, providing at
            no cost the broadband and network equipment, respectively,
            ShelterTech funded installation costs to outfit two shelters, the
            &nbsp;
            <a href="https://medium.com/shelter-tech/the-mission-hotel-san-franciscos-largest-sro-now-provides-free-internet-to-hundreds-of-at-risk-f72761c62c2e">
              Mission Hotel
            </a>
            &nbsp; and MSC-South, with WiFi that collectively serves 640 people
            on a daily basis.
          </span>,
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
