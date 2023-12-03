import React from "react";
import favicon from "./favicon.ico";

type Props = {
  title: string | null;
};

/** Base component for the <head> element on each page.
 *
 * This uses the Gatsby Head API, which involves declaring an export named
 * `Head` in each file describing a page (e.g. src/pages). Note that unlike
 * react-helmet, nested, duplicated tags aren't automatically deduplicated, so
 * if we need to override a tag defined in this component, we need to declare
 * `id` properties. To add additional tags, you can simply instantiate this
 * component and add the other tags as sibling elements.
 *
 * See the Gatsby documentation for more details:
 * https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
const BaseHead = ({ title }: Props) => (
  <>
    <meta charSet="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0"
    />

    {title && <title>{title}</title>}
    <meta
      name="description"
      content="ShelterTech is solving the biggest technology challenges faced by those experiencing homelessness"
    />
    <meta name="twitter:site" content="@sheltertechorg" />
    <link rel="icon" href={favicon} />
    {/* Global site tag (gtag.js) - Google Analytics */}
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=UA-116318550-4"
    />
    <script>{`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-116318550-4');
    `}</script>
  </>
);

export default BaseHead;
