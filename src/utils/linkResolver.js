// Note: This file cannot be written in TypeScript because it is imported by
// gatsby-config.js.

/** A link resolver function for Prismic.
 *
 * Accepts a description of an arbitrary Prismic document of any type and
 * returns a string URL to the document.
 *
 * See https://prismic.io/docs/technologies/link-resolver-javascript for the
 * available properties on the `doc` argument.
 *
 * NOTE: The URLs _must_ have trailing slashes or else the Prismic previewing
 * functionality for unpublished pages won't work. See
 * https://community.prismic.io/t/unpublished-previews-not-working-with-gatsby-prismic-and-netlify/13634/5
 */
const linkResolver = (doc) => {
  switch (doc.type) {
    case "blog_post":
      return `/blog/${doc.uid}/`;
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
