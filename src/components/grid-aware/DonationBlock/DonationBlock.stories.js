import React from "react";
import DonationBlock from "./DonationBlock";
import image from "./stories/giving-tuesday-logo.png";

export default {
  title: "Grid-Aware/DonationBlock",
  component: DonationBlock,
};

const Template = ({
  mainTitle,
  mainTitleImage,
  mainDescription,
  mobileTopParagraphs,
  whyDonateTitle,
  whyDonateList,
  impactTitle,
  impactList,
}) => (
  <DonationBlock
    mainTitle={mainTitle}
    mainTitleImage={mainTitleImage}
    mainDescription={mainDescription}
    mobileTopParagraphs={mobileTopParagraphs}
    whyDonateTitle={whyDonateTitle}
    whyDonateList={whyDonateList}
    impactTitle={impactTitle}
    impactList={impactList}
  />
);

export const Default = Template.bind({});

Default.args = {
  mainTitle: "Donate today",
  mainDescription:
    "Your support will address digital inequity for an underserved community that does not have access to the internet and essential digital services.",
  whyDonateTitle: "Why give to ShelterTech?",
  whyDonateList: [
    "Our work depends on regular contributions from donors like you.",
    "People experiencing homelessness and housing insecurity will have access to free internet and essential digital services.",
    "We serve over 3,000 users on a daily basis and we’re always working to grow our network and deepen its capabilities.",
    "These funds provide our advisory Community Representatives a stipend for their work.",
    "Our organization is built on the belief that everyone has the right to connectivity.",
  ],
  impactTitle: "Your impact",
  impactList: [
    "$40 will go to a single Community Representative for their time conducting a Datathon event.",
    "$150 connects a bed to wifi for five years.",
    "$200 to $300 pays for up to seven Community Representatives’ time for a either a research or Datathon event.",
    "$500 covers hosting an entire Datathon, which provides food for all volunteers and Community Representatives.",
    "Depending on the size, about $2,000 to $2,500 can wire an entire shelter.",
  ],
};

export const GivingTuesday = Template.bind({});

GivingTuesday.args = {
  mainTitleImage: {
    url: image,
    alt: "Giving Tuesday",
  },
  mainDescription:
    "For 2020, ShelterTech has a $20,000 fundraising goal to cover the installation costs for WiFi for the next SF building on our list. We have already raised half of that goal, and ask your support to raise the remaining $10,000.",
  mobileTopParagraphs: (
    <>
      <p>
        On this #GivingTuesday, we ask that you reflect on how important
        internet access is in your daily life. As we’ve shifted to a
        socially-distanced reality dependent on WiFi, many of us have been able
        to conduct Zoom calls to talk to our loved ones and coworkers, purchase
        deliverable groceries and take-out, and stream our favorite shows and
        movies. People experiencing homelessness often do not have internet
        access, making it harder to do all of these things.
      </p>
      <p>
        At ShelterTech, we believe connectivity is a right, not a privilege, and
        through our ShelterConnect program, we have installed free WiFi at a
        number of San Francisco-based shelters to help bridge this digital
        divide. You can learn more about ShelterConnect by watching our video{" "}
        <a href="https://www.youtube.com/watch?v=2aLyGwaRufY">here</a>.
      </p>
      <p>
        Last year, <em>you</em> and other supporters gave contributions which
        enabled ShelterTech to provide WiFi internet connectivity to hundreds of
        individuals experiencing homelessness and housing insecurity in San
        Francisco. With our partners, the City of San Francisco and Cisco,
        providing at no cost the broadband and network equipment, respectively,
        ShelterTech funded installation costs to costs to outfit two shelters,
        the{" "}
        <a href="https://medium.com/shelter-tech/the-mission-hotel-san-franciscos-largest-sro-now-provides-free-internet-to-hundreds-of-at-risk-f72761c62c2e">
          Mission Hotel
        </a>{" "}
        and MSC-South, with WiFi that collectively serves 640 people on a on on
        a daily basis.
      </p>
    </>
  ),
};
