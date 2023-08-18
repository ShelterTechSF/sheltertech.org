import { withPrismicUnpublishedPreview } from "gatsby-plugin-prismic-previews";
import React from "react";

import Layout from "../legacy/layouts/Layout";

const Page = () => (
  <div className="content">
    <div className="content-bg" />
    <div className="content--header">
      <h2>Page not found</h2>
      <h3>Sorry, we couldn&apos;t find the page you were looking&nbsp;for.</h3>
    </div>
  </div>
);

const NotFoundPage = () => (
  <Layout>
    <Page />
  </Layout>
);

export default withPrismicUnpublishedPreview(NotFoundPage);
