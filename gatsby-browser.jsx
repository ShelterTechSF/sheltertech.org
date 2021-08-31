// Boilerplate for enabling Prismic previews
// See: https://prismic.io/docs/technologies/previews-gatsby

import { PrismicPreviewProvider } from "gatsby-plugin-prismic-previews";
import * as React from "react";
import "gatsby-plugin-prismic-previews/dist/styles.css";

const wrapRootElement = ({ element }) => (
  <PrismicPreviewProvider>{element}</PrismicPreviewProvider>
);

export default wrapRootElement;
