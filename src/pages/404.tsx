import { withPrismicUnpublishedPreview } from "gatsby-plugin-prismic-previews";
import React from "react";

import BaseHead from "../components/BaseHead";
import OneParagraphBlock from "../components/grid-aware/OneParagraphBlock";
import Spacer from "../components/grid-aware/Spacer";
import Layout from "../components/layout";

const NotFoundPage = () => (
  <Layout>
    <OneParagraphBlock
      title="Page not found"
      descriptions={
        <p>Sorry, we couldn&apos;t find the page you were looking for.</p>
      }
      ctaButtons={[]}
      theme="white"
    />
    <Spacer heightDesktop="190px" heightMobile="80px" />
  </Layout>
);

export default withPrismicUnpublishedPreview(NotFoundPage);

export const Head = () => <BaseHead title="Page Not Found | ShelterTech" />;
