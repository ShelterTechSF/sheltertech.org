import { Link as GatsbyLink, graphql } from "gatsby";
import React from "react";

/** A Prismic Link with only the minimal set of properties for link resolving.
 *
 * Most of the fields on PrismicLinkType come from
 * https://prismic.io/docs/technologies/link-resolver-javascript#accessible-attributes,
 * with the exception of link_type, which is one of "Document", "Web", and
 * "Media", and url, which is the result of applying our linkResolver function
 * to a link.
 */
export type MinimalPrismicLinkType = Pick<
  Queries.PrismicLinkType,
  "link_type" | "target" | "url"
>;

type PrismicLinkProps = {
  linkData?: MinimalPrismicLinkType;
  children: React.ReactNode;
};

/** Link with properties that come from Prismic.
 *
 * `linkData` should be an object that comes directly from a Prismic Link field.
 *
 * Loosely based on the official example in
 * https://prismic.io/docs/technologies/link-resolver-gatsby
 */
const PrismicLink = ({ linkData, children }: PrismicLinkProps): JSX.Element => {
  if (linkData === undefined || !linkData.url) return <>{children}</>;
  switch (linkData.link_type) {
    case "Document":
      return <GatsbyLink to={linkData.url}>{children}</GatsbyLink>;
    case "Web":
    case "Media":
      return (
        <a href={linkData.url} target={linkData.target ?? undefined}>
          {children}
        </a>
      );
    default:
      throw new Error(
        `Unhandled link type: ${linkData.link_type ?? "undefined"}`
      );
  }
};

export const query = graphql`
  # The minimum set of data required for the <PrismicLink> component.
  fragment MinimalPrismicLinkData on PrismicLinkType {
    link_type
    target
    url
  }
`;

export default PrismicLink;
