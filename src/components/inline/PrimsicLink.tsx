import { Link as GatsbyLink } from "gatsby";
import React from "react";

import linkResolver from "../../utils/linkResolver";

/** A Prismic Link with only the minimal set of properties for link resolving.
 *
 * Most of these fields come from
 * https://prismic.io/docs/technologies/link-resolver-javascript#accessible-attributes,
 * with the exception of link_type, which is one of "Document", "Web", and
 * "Media".
 */
export type MinimalPrismicLinkType = Pick<
  GatsbyTypes.PrismicLinkType,
  "isBroken" | "link_type" | "target" | "type" | "uid"
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
  if (linkData === undefined) return <>{children}</>;
  switch (linkData.link_type) {
    case "Document":
      return <GatsbyLink to={linkResolver(linkData)}>{children}</GatsbyLink>;
    case "Web":
    case "Media":
      return (
        <a href={linkResolver(linkData)} target={linkData.target}>
          {children}
        </a>
      );
    default:
      throw new Error(
        `Unhandled link type: ${linkData.link_type ?? "undefined"}`
      );
  }
};

export default PrismicLink;
