// Note: This file cannot be written in TypeScript because it is imported by
// gatsby-config.js.

/** A link resolver function for Prismic.
 *
 * Accepts a description of an arbitrary Prismic document of any type and
 * returns a string URL to the document.
 *
 * See https://prismic.io/docs/technologies/link-resolver-javascript for the
 * available properties on the `doc` argument.
 */
const linkResolver = (doc) => {
  switch (doc.type) {
    case "home_page":
      return "/";
    default:
      // eslint-disable-next-line no-console
      console.warn(
        `Could not resolve the following document to a URL: ${JSON.stringify(
          doc
        )}`
      );
      return "/";
  }
};

module.exports = linkResolver;
