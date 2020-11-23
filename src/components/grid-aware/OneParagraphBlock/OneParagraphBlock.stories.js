import React from "react";

import OneParagraphBlock from "./OneParagraphBlock";

export default {
  title: "Grid-Aware/OneParagraphBlock",
  component: OneParagraphBlock,
};

const Template = ({ title, descriptions, ctaButtons }) => (
  <div>
    <OneParagraphBlock
      title={title}
      descriptions={descriptions}
      ctaButtons={ctaButtons}
    />
  </div>
);

export const DefaultOneParagraphBlock = Template.bind({});
DefaultOneParagraphBlock.args = {
  title: "This is where we could use your expertise",
  descriptions: (
    <>
      <h2>Product</h2>
      <p>
        Our department—which includes product managers, designers, data
        scientists, and user researchers—creates and maintains digital services
        with real impact.
      </p>
      <h2>Marketing and Growth</h2>
      <p>
        This dynamic team builds awareness by following a communications roadmap
        and executing our go-to-market strategy for service providers and unsung
        San Franciscans.
      </p>
      <h2>Fundraising and Partnerships</h2>
      <p>
        Help us organize events and campaigns to raise donations for our
        ShelterConnect installations that provide free wifi and hardware for
        local housing shelters.
      </p>
      <h2>Software Development</h2>
      <p>
        To create user-friendly websites, we need front- and back-end developers
        and dev ops professionals who know React or Ruby on Rails.
      </p>
    </>
  ),
  ctaButtons: [{ text: "Apply", internalLink: "/foo" }],
};
