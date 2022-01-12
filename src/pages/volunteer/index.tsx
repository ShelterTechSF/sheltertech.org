import React, { useState } from "react";
import { Helmet } from "react-helmet";

import ArticleSpotlightCard from "../../components/grid-aware/ArticleSpotlightCard";
import COVID19infoBoxBlock from "../../components/grid-aware/COVID19InfoBoxBlock";
import ImageHeader from "../../components/grid-aware/ImageHeader";
import whiteboard from "../../components/grid-aware/ImageHeader/stories/whiteboard-sticky-notes.png";
import Modal from "../../components/grid-aware/Modal";
import OneParagraphBlock from "../../components/grid-aware/OneParagraphBlock";
import Spacer from "../../components/grid-aware/Spacer";
import StatsBlock from "../../components/grid-aware/StatsBlock";
import ThreeParagraphBlock from "../../components/grid-aware/ThreeParagraphBlock";
import TwoParagraphBlock from "../../components/grid-aware/TwoParagraphBlock";
import volunteers from "../../components/grid-aware/TwoParagraphBlock/stories/volunteers.png";
import Layout from "../../components/layout";
import VolunteerSignupForm from "../../components/thirdparty/mailchimp/VolunteerSignupForm";
import teamInClassroom from "../images/classroom.png";
import articleSpotlightImage from "../images/laura-barerra-vera-cropped.png";
import teamActivityImage from "./image4.png";

export default () => {
  const [volunteerFormIsOpen, setVolunteerFormIsOpen] = useState(false);
  return (
    <Layout>
      <Helmet>
        <title>Volunteer | ShelterTech</title>
      </Helmet>
      <Modal
        isOpen={volunteerFormIsOpen}
        setIsOpen={setVolunteerFormIsOpen}
        contentLabel="Volunteer"
      >
        <VolunteerSignupForm />
      </Modal>
      <ImageHeader
        title="Volunteer & Get Involved"
        subtitle="ShelterTech is a volunteer-driven organization that relies on volunteers to bridge the digital divide faced by people experiencing homelessness and are housing insecure in San Francisco. Internet access and technology makes it possible for people to find jobs, human services, and contact family and friends."
        description="If you share our belief that digital equity is a human right, we encourage you to apply and work with us."
        image1={{
          url: whiteboard,
          alt: "Team members collaborating together by looking and pointing at whiteboard covered with sticky notes full of ideas.",
        }}
        ctaButtons={[
          {
            text: "Apply",
            onClick: () => setVolunteerFormIsOpen(true),
          },
        ]}
      />
      <COVID19infoBoxBlock
        title="Volunteering during COVID-19"
        description="While our means of coming together are different, our research and Datathon events are conducted online. Simply put, our goal is still the same: to connect this community with resources that can help them address their challenges, become permenantly housed, and on track to live happy and productive lives."
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
        theme="white"
      />
      <ThreeParagraphBlock
        title="How we work"
        paragraph1={{
          title: "Technology",
          description:
            "Being based out of San Francisco, tech professionals comprise the bulk of our volunteer base and work together to improve the digital infrastructure powering the services designated for underserved residents.",
        }}
        paragraph2={{
          title: "Research & Community Development",
          description:
            "No two experiences of people facing housing insecurity is the same. We have a dedicated team working alongside individuals who have experienced homelessness learning how best to serve the diverse challenges faced by those facing housing insecurity.",
        }}
        paragraph3={{
          title: "Partnerships & Communications",
          description:
            "We work with government agencies, nonprofits, and local businesses to strengthen the city’s social services ecosystem. via discourse and knowledge sharing between organizations that align with our mission.",
        }}
        leftTopImage={{
          url: teamInClassroom,
          alt: "Team members in a classroom setting.",
        }}
        leftBottomImage={{
          url: teamActivityImage,
          alt: "Team bonding activity night.",
        }}
        ctaTitle="We know that digital equity can be achieved with people like you."
        ctaButtons={[
          { text: "Apply", onClick: () => setVolunteerFormIsOpen(true) },
        ]}
      />
      <TwoParagraphBlock
        title="Volunteering at ShelterTech"
        paragraph1=""
        paragraph2={
          <>
            <p>We ask that you consider these three things before joining:</p>
            <ul>
              <li>
                You are willing to volunteer at least three hours each week
              </li>
              <li>
                You will be kind, considerate, and ethical towards other
                volunteers and the communities we serve
              </li>
              <li>
                You understand that ShelterTech is a volunteer-driven team, and
                that you will try your best to always represent ShelterTech in a
                professional and thoughftul manner
              </li>
              <li>
                No matter what role you play, the essential attitude you need is
                a deep belief in digital equity for all people
              </li>
            </ul>
          </>
        }
        image={{
          url: volunteers,
          alt: "Five volunteer members surrounding a table of holiday care packages.",
        }}
        ctaButtons={[
          {
            text: "Apply",
            onClick: () => setVolunteerFormIsOpen(true),
          },
        ]}
        theme="white"
      />
      <OneParagraphBlock
        title="We need your expertise"
        descriptions={
          <>
            <h2>Product</h2>
            <p>
              Our department—which includes product managers, designers, data
              scientists, and user researchers—creates and maintains digital
              services with real impact.
            </p>
            <h2>Marketing and Growth</h2>
            <p>
              This dynamic team builds awareness by following a communications
              roadmap and executing our go-to-market strategy for service
              providers and unsung San Franciscans.
            </p>
            <h2>Fundraising and Partnerships</h2>
            <p>
              Help us organize events and campaigns to raise donations for our
              ShelterConnect installations that provide free wifi and hardware
              for local housing shelters.
            </p>
            <h2>Software Development</h2>
            <p>
              To create user-friendly websites, we need front- and back-end
              developers and dev ops professionals who know React or Ruby on
              Rails.
            </p>
          </>
        }
        ctaButtons={[
          { text: "Apply", onClick: () => setVolunteerFormIsOpen(true) },
        ]}
        theme="gray"
      />
      <Spacer heightDesktop="190px" heightMobile="80px" />
      <ArticleSpotlightCard
        eyebrowText="Volunteer Spotlight"
        title="Laura Barrera-Vera"
        subtitle="Program Manager, SF Service Guide"
        description="I moved to San Francisco in 2019 and immediately decided to join ShelterTech as I felt compelled to take action to address the worsening homelessness crisis. As Product Lead, I have focused on managing product development and on improving collaboration across all key teams to ensure we build an impactful product."
        button={{
          text: "Read More",
          externalLink:
            "https://medium.com/shelter-tech/volunteer-spotlight-laura-barrera-vera-41594cfbbe7b",
        }}
        backgroundImage={articleSpotlightImage}
      />
      <Spacer heightDesktop="170px" heightMobile="80px" />
    </Layout>
  );
};
