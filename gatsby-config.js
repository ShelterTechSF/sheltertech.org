const postcssCustomMedia = require("postcss-custom-media");

module.exports = {
  siteMetadata: {
    title: "ShelterTech - Technology for the underserved",
    description:
      "ShelterTech is solving the biggest technology challenges faced by those experiencing homelessness",
    author: "ShelterTech",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-ts-checker",
    {
      resolve: "gatsby-plugin-intercom-spa",
      options: {
        app_id: "w50oz3tb",
        include_in_development: true,
        delay_timeout: 1000,
      },
    },
    "gatsby-plugin-sass",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [postcssCustomMedia],
      },
    },
    {
      // See https://github.com/angeloashmore/gatsby-source-prismic for the full
      // list of options.
      resolve: "gatsby-source-prismic",
      options: {
        // The name of your prismic.io repository. This is required.
        // Example: 'gatsby-source-prismic-test-site' if your prismic.io address
        // is 'gatsby-source-prismic-test-site.prismic.io'.
        repositoryName: "sheltertech",

        // Set a list of links to fetch and be made available in your link
        // resolver function.
        // See: https://prismic.io/docs/javascript/query-the-api/fetch-linked-document-fields
        fetchLinks: [
          // Your list of links
        ],

        // Provide an object of Prismic custom type JSON schemas to load into
        // Gatsby. This is required.
        schemas: {
          // Your custom types mapped to schemas
          footer: require("./src/schemas/footer.json"),
        },

        // Add the Prismic Toolbar script to the site. Defaults to false.
        // Set to "legacy" if your repository requires the older toolbar script.
        // See: https://prismic.io/docs/rest-api/beyond-the-api/the-preview-feature
        prismicToolbar: true,
      },
    },
  ],
};
