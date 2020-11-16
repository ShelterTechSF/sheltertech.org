import React from "react";

import ThreeParagraphBlock from "./ThreeParagraphBlock";
import image1 from "./stories/image2.png";
import image2 from "./stories/image3.png";

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
        alt: "Team posing for a photo after a design workshop.",
      }}
      image2={{
        url: image2,
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
  paragraph1Title: "Volunteer",
  paragraph1Description:
    "Volunteers make our work possible. There are several ways to support our mission. Learn more and get involved.",
  paragraph2Title: "Partnership",
  paragraph2Description:
    "We work with companies, nonprofits, and local governments to empower the community. Reach out to us.",
  paragraph3Title: "Donate",
  paragraph3Description:
    "Our programs are largely funded by donations from people who care about bridging the digital divide. Support ShelterTech today.",
  ctaTitle: "Volunteer, donate, or reach out to our partnerships team",
  ctaButtons: [
    { text: "Become a Volunteer", internalLink: "/foo" },
    { text: "Work With Us", internalLink: "/bar" },
    { text: "Donate", internalLink: "/fooBar" },
  ],
};
