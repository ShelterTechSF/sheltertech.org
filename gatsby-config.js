const postcssCustomMedia = require("postcss-custom-media");

const linkResolver = require("./src/utils/linkResolver");

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
    "gatsby-plugin-image",
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

        linkResolver,

        // Provide an object of Prismic custom type JSON schemas to load into
        // Gatsby. This is required.
        schemas: {
          // Your custom types mapped to schemas
          footer: require("./src/schemas/footer.json"),
          home_page: require("./src/schemas/home_page.json"),
          volunteer_page: {},
          test: {},
          team_member: {},
          team: {},
          post: {},
          open_role: {},
          event: {},
          blog_home: {},
        },
      },
    },
    "gatsby-plugin-typegen",
  ],
};
