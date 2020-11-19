import React from "react";

import COVID19infoBoxBlock from "../../../components/grid-aware/COVID19InfoBoxBlock";
import ImageHeader from "../../../components/grid-aware/ImageHeader";
import classroom from "../../../components/grid-aware/ImageHeader/stories/classroom.png";
import whiteboard from "../../../components/grid-aware/ImageHeader/stories/whiteboard-sticky-notes.png";
import StatsBlock from "../../../components/grid-aware/StatsBlock";
import ThreeParagraphBlock from "../../../components/grid-aware/ThreeParagraphBlock";
import teamActivityImage from "../../../components/grid-aware/ThreeParagraphBlock/stories/image4.png";
import pairProgrammingImage from "../../../components/grid-aware/ThreeParagraphBlock/stories/image5.png";
import teamSnackingImage from "../../../components/grid-aware/ThreeParagraphBlock/stories/image6.png";
import TwoParagraphBlock from "../../../components/grid-aware/TwoParagraphBlock";
import volunteers from "../../../components/grid-aware/TwoParagraphBlock/stories/volunteers.png";
import Layout from "../../../components/layout";

export default () => (
  <Layout>
    <ImageHeader
      title="Volunteering"
      subtitle="We rely on hundreds of volunteers to bridge the digital divide that our most vulnerable neighbors face."
      description="If you share our belief that digital equity is a human right, we encourage you to apply and work with us."
      image1={{
        url: classroom,
        alt: "Classroom of volunteer members collaborating with one another.",
      }}
      image2={{
        url: whiteboard,
        alt:
          "Team members collaborating together by looking and pointing at whiteboard covered with sticky notes full of ideas.",
      }}
      ctaButtons={[
        {
          text: "Apply",
          internalLink: "/foo",
        },
      ]}
    />
    <COVID19infoBoxBlock
      title="Volunteering during COVID-19"
      description="Our programs have shifted to remote alternatives. While our means of coming together are different, our research and Datathon events will be conducted online. Simply put, our goal is still the same: to connect this community with resources that can help them address their challenges, become permanently housed, and on track to live happy and productive lives."
    />
    <StatsBlock
      title="See what our volunteers have accomplished together."
      statCards={[
        {
          number: "9,000",
          statement:
            "At-risk community members can now access services and amenities",
        },
        {
          number: "560",
          statement:
            "Bay Area volunteers have contributed to our cause since our founding in 2016",
        },
        {
          number: "$2M",
          statement:
            "Worth of work provided by volunteers has been put towards our programs",
        },
      ]}
    />
    <ThreeParagraphBlock
      title="Let’s work together"
      paragraph1={{
        title: "Technology",
        description:
          "Being based out of San Francisco, tech professionals comprise the bulk of our volunteer base and work together to improve the digital infrastructure powering the services designated for underserved residents.",
      }}
      paragraph2={{
        title: "Partnerships & Communications",
        description:
          "We work with government agencies, nonprofits, and local businesses to strengthen the city’s social services ecosystem. via discourse and knowledge sharing between organizations that align with our mission.",
      }}
      paragraph3={{
        title: "Research & Community Development",
        description:
          "To better understand the specific experiences people have endured with housing insecurity, our research team works alongside Community Representatives to better understand how best to serve these challenges.",
      }}
      leftTopImage={{
        url: pairProgrammingImage,
        alt: "Multiple volunteers working at a datathon.",
      }}
      leftBottomImage={{
        url: teamActivityImage,
        alt: "Team posing for a photo after a design workshop.",
      }}
      rightImage={{
        url: teamSnackingImage,
        alt: "Multiple volunteers working at a datathon.",
      }}
      ctaTitle="We know that digital equity can be achieved with people like you."
      ctaButtons={[{ text: "Apply", internalLink: "/bar" }]}
    />
    <TwoParagraphBlock
      title="What it’s like to volunteer at ShelterTech"
      paragraph1="No matter what role you play, the essential attitude you need is a deep belief in digital equity for all people."
      paragraph2={
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
            &ndash; You understand that ShelterTech is an all-volunteer team,
            and that you will try your best to always represent ShelterTech in a
            professional and thoughftul manner.
          </p>
        </>
      }
      image={{
        url: volunteers,
        alt:
          "Five volunteer members surrounding a table of holiday care packages.",
      }}
      ctaButtons={[
        {
          text: "Apply",
          internalLink: "/foo",
        },
      ]}
    />
  </Layout>
);
