import React from "react";

import TwoParagraphBlock from "./TwoParagraphBlock";
import volunteers from "./stories/volunteers.png";

export default {
  title: "Grid-Aware/TwoParagraphBlock",
  component: TwoParagraphBlock,
};

const Template = ({
  title,
  paragraph1,
  paragraph2,
  image,
  ctaButtons,
  isAbout,
  theme,
}) => (
  <div style={{ border: "1px dashed rebeccapurple" }}>
    <TwoParagraphBlock
      title={title}
      paragraph1={paragraph1}
      paragraph2={paragraph2}
      image={image}
      ctaButtons={ctaButtons}
      isAbout={isAbout}
      theme={theme}
    />
  </div>
);

export const Gray = Template.bind({});
Gray.args = {
  title: "What it’s like to volunteer at ShelterTech",
  paragraph1:
    "No matter what role you play, the essential attitude you need is a deep belief in digital equity for all people.",
  paragraph2: (
    <>
      <p>We ask that you consider these three things before joining:</p>
      <p>
        &ndash; You are willing to volunteer at least three hours each week.
      </p>
      <p>
        &ndash; You will be kind, considerate, and ethical towards other
        volunteers and the communities we serve.
      </p>
      <p>
        &ndash; You understand that ShelterTech is an all-volunteer team, and
        that you will try your best to always represent ShelterTech in a
        professional and thoughftul manner.
      </p>
    </>
  ),
  image: {
    url: volunteers,
    alt: "Five volunteer members surrounding a table of holiday care packages.",
  },
  ctaButtons: [
    {
      text: "Apply",
      internalLink: "/foo",
    },
  ],
};
