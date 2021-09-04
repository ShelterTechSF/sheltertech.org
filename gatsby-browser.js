// Boilerplate for enabling Prismic previews
// See: https://prismic.io/docs/technologies/previews-gatsby
/* eslint-disable */

import { PrismicPreviewProvider } from "gatsby-plugin-prismic-previews";
import * as React from "react";
import "gatsby-plugin-prismic-previews/dist/styles.css";

export const wrapRootElement = ({ element }) => (
  <PrismicPreviewProvider>{element}</PrismicPreviewProvider>
)
