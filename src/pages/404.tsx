import {
  componentResolverFromMap,
  withPrismicUnpublishedPreview,
} from "gatsby-plugin-prismic-previews";
import React from "react";

import Layout from "../legacy/layouts/Layout";
import linkResolver from "../utils/linkResolver";
import { PrismicBlogPostPage } from "./blog/{prismicBlogPost.uid}";

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

export default withPrismicUnpublishedPreview(NotFoundPage, [
  {
    repositoryName: "sheltertech",
    linkResolver,
    componentResolver: componentResolverFromMap({
      blog_post: PrismicBlogPostPage,
    }),
  },
]);
