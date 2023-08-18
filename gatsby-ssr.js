// Boilerplate for enabling Prismic previews
// See: https://prismic.io/docs/technologies/previews-gatsby
/* eslint-disable */

import {
  componentResolverFromMap,
  PrismicPreviewProvider,
} from "gatsby-plugin-prismic-previews";
import * as React from "react";
import { PrismicBlogPostPage } from "./src/pages/blog/{prismicBlogPost.uid}";
import linkResolver from "./src/utils/linkResolver";

export const wrapRootElement = ({ element }) => (
  <PrismicPreviewProvider
    repositoryConfigs={[
      {
        repositoryName: "sheltertech",
        linkResolver,
        componentResolver: componentResolverFromMap({
          blog_post: PrismicBlogPostPage,
        }),
      },
    ]}
  >
    {element}
  </PrismicPreviewProvider>
);
