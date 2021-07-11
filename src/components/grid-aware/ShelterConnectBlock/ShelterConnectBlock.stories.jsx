import React from "react";
import ShelterConnectBlock from "./ShelterConnectBlock";

import SFServiceGuideBlock from "./ShelterConnectBlock";

import classroom from "./stories/classroom.png";
import whiteboard from "./stories/whiteboard-sticky-notes.png";

export default {
  title: "Grid-Aware/ShelterConnectBlock",
  component: ShelterConnectBlock,
};

const Template = ({
  title,
  subtitle,
  description,
  description2,
  bullet1,
  bullet2,
  bullet3,
  description3,
  image,
  ctaButtons,
}) => (
  <ShelterConnectBlock
    title={title}
    subtitle={subtitle}
    description={description}
    description2={description2}
    bullet1={bullet1}
    bullet2={bullet2}
    bullet3={bullet3}
    description3={description3}
    image={image}
    ctaButtons={ctaButtons}
  />
);

export const DefaultShelterConnectBlock = Template.bind({});
DefaultShelterConnectBlock.args = {
  title: "SF Service Guide",
  subtitle:
    "an online directory of human services in San Francisco",
  description:
    "The SF Service Guide is an online directory of human services in San Francisco that launched in November 2019 and currently serves 1,500 unique monthly users. The directory's focus is on homelessness and housing services but also covers a variety of other services, from education and legal aid to senior services and re-entry programs. Our goal is to help anyone with access to smartphone, tablet, or computer to find services they need.",
  description2:
    "SF Service Guide is supported by a grant from SF Mayor's Office of Housing and Community Development and verified for accuracy by our data partner, the Homeless Advocacy Project of the JDC.",
  bullet1="Equipment and licensing Installation labor	Ongoing ISP charges",
  bullet2="Installation labor",
  bullet3="Ongoing ISP charges",
  description3="In 2019 we established a partnership with the City of San Francisco Digital Equity team to deliver 1GB fiber/ISP capability to future ShelterConnect locations at no cost.  Working with partners, ShelterConnect has implemented free WiFi solutions at over 20 locations including the Star Hotel, Mission Hotel, MSC-South, and ten locations managed by Larkin Street Youth Services.",
  image: {
    url: classroom,
    alt: "Classroom of volunteer members collaborating with one another.",
  },
  ctaButtons: [
    {
      text: "Donate",
      internalLink: "/foo",
    },
    {
      text: "Partner with us",
      internalLink: "/foo",
    },
  ],
};
