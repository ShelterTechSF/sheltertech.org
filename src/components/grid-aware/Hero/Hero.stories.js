import React from "react";

import Hero from "./Hero";
import heroImage from "./stories/Hero.png";

export default {
  title: "Grid-Aware/Hero",
  component: Hero,
};

const Template = ({ heroTitle, heroDescription, ctaButtons, heroLink }) => (
  <Hero
    heroText={{
      title: heroTitle,
      description: heroDescription,
    }}
    heroImage={heroImage}
    ctaButtons={ctaButtons}
    heroLink={heroLink}
  />
);

export const DefaultHero = Template.bind({});
DefaultHero.args = {
  heroTitle:
    "X in 10 people experiencing homelessness lack access to the internet and essential digital services",
  heroDescription:
    "ShelterTech is a nonprofit organization dedicated to supporting people who are experiencing homelessness or housing insecurity by leveraging technology and connectivity.",
  ctaButtons: [{ text: "Give the gift of technology", link: "/foo" }],
  heroLink: "https://www.youtube.com/watch?v=KCduRWJ1hQo", // SF Service Guide Beta Launch Webinar
};
