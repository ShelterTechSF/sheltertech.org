import React from "react";

import OneParagraphBlock from "./OneParagraphBlock";

export default {
  title: "Grid-Aware/OneParagraphBlock",
  component: OneParagraphBlock,
};

const Template = ({
  title,
  job1Title,
  job1Description,
  job2Title,
  job2Description,
  job3Title,
  job3Description,
  job4Title,
  job4Description,
  ctaButton,
}) => (
  <div>
    <OneParagraphBlock
      title={title}
      job1={{
        title: job1Title,
        description: job1Description,
      }}
      job2={{
        title: job2Title,
        description: job2Description,
      }}
      job3={{
        title: job3Title,
        description: job3Description,
      }}
      job4={{
        title: job4Title,
        description: job4Description,
      }}
      ctaButton={ctaButton}
    />
  </div>
);

export const DefaultOneParagraphBlock = Template.bind({});
DefaultOneParagraphBlock.args = {
  title: "Right now, we are looking for:",
  job1Title:
    "Product managers, designers, data scientists, and user researchers",
  job1Description:
    "Work with research, product, and dev teams to create digital services with real impact.",
  job2Title: "Front & Back-end Developers",
  job2Description:
    "Full stack, Front End, and Dev Ops opportunities (React or Ruby on Rails preferred).",
  job3Title: "Growth & Marketing",
  job3Description:
    "Build and execute our GTM strategy for SF Service Guide amongst service providers and low and no-income San Franciscans.",
  job4Title: "Fundraising & Partnerships",
  job4Description:
    "Help us fundraise for our ShelterConnect installations and empowering all our teams to do more",
  ctaButton: [{ text: "Become a Volunteer", internalLink: "/foo" }],
};
