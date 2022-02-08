import React from "react";
import TextBlock from "./TextBlock";

export default {
  title: "Blog/TextBlock",
  component: TextBlock,
};

const Template = ({ rawText }) => (
  <div style={{ border: "1px dashed rebeccapurple" }}>
    <TextBlock rawText={rawText} />
  </div>
);

export const DefaultTextBlock = Template.bind({});
DefaultTextBlock.args = {
  rawText: [
    {
      type: "heading1",
      text: "Introduction",
      spans: [],
    },
    {
      type: "paragraph",
      text: "For this project, we partnered with the City of San Francisco’s Digital Equity team to deliver 1GB fiber/ISP capability at no cost to the building. Cisco, which is a new partner of ShelterTech’s, generously donated equipment. Installation was provided by PCS-SF, a San Francisco-based IT support and services company. Funding for this project was partially provided by a grant from PagerDuty, Inc. a provider of global digital management solutions also based in San Francisco.",
      spans: [],
    },
    {
      type: "o-list-item",
      text: "This is an ordered list with bold text",
      spans: [
        {
          start: 29,
          end: 38,
          type: "strong",
        },
      ],
    },
    {
      type: "o-list-item",
      text: "This list item has italicized text",
      spans: [
        {
          start: 19,
          end: 34,
          type: "em",
        },
      ],
    },
    {
      type: "paragraph",
      text: "The Tenderloin Housing Clinic (THC), a local nonprofit dedicated to low-income tenant’s rights and preserving and expanding San Francisco’s low-cost housing stock, has overseen the location’s operations since 1999 through the SRO/Master Lease Program.",
      spans: [],
    },
    {
      type: "paragraph",
      text: "“We are truly grateful to Sheltertech for their partnership with THC and for their commitment to making WiFi accessible to tenants in our largest supportive housing site, the Mission Hotel. Having access to the internet is vital for individuals to stay connected, educated, and able to explore resources, especially during this health crisis that has impacted many of our tenants who suffer from mental health or substance use dependency,” Janet Aguilar, Director of Support Services at THC, said.",
      spans: [],
    },
  ],
};
