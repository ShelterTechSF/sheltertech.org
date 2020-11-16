import React from "react";

import ImageHeader from "../../../components/grid-aware/ImageHeader";
import classroom from "../../../components/grid-aware/ImageHeader/stories/classroom.png";
import whiteboard from "../../../components/grid-aware/ImageHeader/stories/whiteboard-sticky-notes.png";
import OneParagraphBlock from "../../../components/grid-aware/OneParagraphBlock";
import StatsBlock from "../../../components/grid-aware/StatsBlock";
import TwoParagraphBlock from "../../../components/grid-aware/TwoParagraphBlock";
import volunteers from "../../../components/grid-aware/TwoParagraphBlock/stories/volunteers.png";
import Layout from "../../../components/layout";

export default () => (
  <Layout>
    <OneParagraphBlock
      title="This is where we could use your expertise"
      jobs={
        <>
          <p>Product</p>
          <p>
            Our department—which includes product managers, designers, data
            scientists, and user researchers—creates and maintains digital
            services with real impact.
          </p>
          <p>Marketing and Growth</p>
          <p>
            This dynamic team builds awareness by following a communications
            roadmap and executing our go-to-market strategy for service
            providers and unsung San Franciscans.
          </p>
          <p>Fundraising and Partnerships</p>
          <p>
            Help us organize events and campaigns to raise donations for our
            ShelterConnect installations that provide free wifi and hardware for
            local housing shelters.
          </p>
          <p>Fundraising & Partnerships</p>
          <p>
            To create user-friendly websites, we need front- and back-end
            developers and dev ops professionals who know React or Ruby on
            Rails.
          </p>
        </>
      }
      ctaButtons={[{ text: "Apply", internalLink: "/foo" }]}
    />
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
