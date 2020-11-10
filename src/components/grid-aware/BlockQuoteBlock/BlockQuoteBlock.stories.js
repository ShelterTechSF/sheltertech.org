import React from "react";
import BlockQuoteBlock from "./BlockQuoteBlock";

export default {
  title: "Grid-Aware/BlockQuoteBlock",
  component: BlockQuoteBlock,
};

const Template = ({ quotes }) => <BlockQuoteBlock quotes={quotes} />;

export const DefaultBlockQuoteBlock = Template.bind({});

DefaultBlockQuoteBlock.args = {
  quotes: [
    {
      quote:
        "We've heard from San Franciscans, including as part of our recent strategic planning community outreach that it's hard to know where to go when you're looking for supportive services. It's hard to know where to start, and hard to navigate different resources to find accurate information. We're glad to be supporting ShelterTech and the broader community to build SF Service Guide - a one-stop, reliable place to help connect residents to the services they need.",
      attribution:
        "Barry Roeder, Mayor's Office of Housing and Community Development",
    },
    {
      quote:
        "Wi-fi has been a top request among young people here at Larkin Street. Now that we have it with ShelterTech we are seeing more young people come in and stay around and get the things they need so that they can move past homelessness, permanently.",
      attribution:
        "Veronica Pastore, Director of Communications, Larkin Street Youth Services",
    },
    {
      quote:
        "There’s an overwhelming number of resources for the vulnerable populations that live here and it’s important to have a place where they can go where they know all the information is accurate, up-to-date, and consistent with what their understanding has been of that particular resource. And if there are any changes that need to be made those will be reflected.",
      attribution:
        "Julie Rosenthal, Director of Social Services, Homeless Advocacy Project",
    },
  ],
};
