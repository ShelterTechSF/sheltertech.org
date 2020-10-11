import React from "react";

import ThreeParagraphBlock from "./ThreeParagraphBlock";
import image1 from "./stories/image1.png";
import image2 from "./stories/image2.png";
import image3 from "./stories/image3.png";

export default {
  title: "Grid-Aware/ThreeParagraphBlock",
  component: ThreeParagraphBlock,
};

const Template = ({
  title,
  paragraph1Title,
  paragraph1Description,
  paragraph2Title,
  paragraph2Description,
  paragraph3Title,
  paragraph3Description,
  ctaTitle,
  ctaButtons,
}) => (
  <div style={{ border: "1px dashed rebeccapurple" }}>
    <ThreeParagraphBlock
      title={title}
      paragraph1={{
        title: paragraph1Title,
        description: paragraph1Description,
      }}
      paragraph2={{
        title: paragraph2Title,
        description: paragraph2Description,
      }}
      paragraph3={{
        title: paragraph3Title,
        description: paragraph3Description,
      }}
      image1={{
        url: image1,
        alt: "Two volunteers working on a laptop together at a datathon.",
      }}
      image2={{
        url: image2,
        alt: "Team posing for a photo after a design workshop.",
      }}
      image3={{
        url: image3,
        alt: "Multiple volunteers working at a datathon.",
      }}
      ctaTitle={ctaTitle}
      ctaButtons={ctaButtons}
    />
  </div>
);

export const Gray = Template.bind({});
Gray.args = {
  title: "Get involved",
  paragraph1Title: "Volunteer your talents",
  paragraph1Description:
    "Our strength is rooted in our growing community of volunteers who have been mobilized to help the most vulnerable among us-the elderly, the children, domestic abuse survivors, single mothers and others struggling with homelessness who are not getting their basic digital needs met.",
  paragraph2Title: "Empower your organization",
  paragraph2Description:
    "We work with government agencies and nonprofits to empower their programs and build better connections between agencies. We build alongside your teams, so everyone is trained and prepared for handoff. We build alongside your teams, so everyone is trained and prepared for handoff.",
  paragraph3Title: "Donate to end the digital divide",
  paragraph3Description:
    "A monthly donation helps change the lives of those in need. Whether it’s providing free internet access to someone for the night or connecting a brand new shelter to the internet, your support will have a sustaining impact.",
  ctaTitle: "Volunteer, donate, or reach out to our partnerships team",
  ctaButtons: [
    { text: "Become a Volunteer", link: "/foo" },
    { text: "Donate", link: "/bar" },
  ],
};
