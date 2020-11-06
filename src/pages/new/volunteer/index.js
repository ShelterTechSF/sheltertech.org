import React from "react";

import OneParagraphBlock from "../../../components/grid-aware/OneParagraphBlock";
import Layout from "../../../components/layout";

export default () => (
  <Layout>
    <OneParagraphBlock
      title="Right now, we are looking for:"
      jobs={
        <>
          <div>
            Product managers, designers, data scientists, and user researchers
          </div>
          <div>
            Work with research, product, and dev teams to create digital
            services with real impact.
          </div>
          <div>Front & Back-end Developers</div>
          <div>
            Full stack, Front End, and Dev Ops opportunities (React or Ruby on
            Rails preferred).
          </div>
          <div>Growth & Marketing</div>
          <div>
            Build and execute our GTM strategy for SF Service Guide amongst
            service providers and low and no-income San Franciscans.
          </div>
          <div>Fundraising & Partnerships</div>
          <div>
            Help us fundraise for our ShelterConnect installations and
            empowering all our teams to do more
          </div>
        </>
      }
      ctaButton={[{ text: "Become a Volunteer", internalLink: "/foo" }]}
    />
  </Layout>
);
