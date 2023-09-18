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
          volunteer_page: require("./src/schemas/volunteer_page.json"),
          test: require("./src/schemas/test.json"),
          team_member: require("./src/schemas/team_member.json"),
          team: require("./src/schemas/team.json"),
          post: require("./src/schemas/post.json"),
          open_role: require("./src/schemas/open_role.json"),
          blog_home: require("./src/schemas/blog_home.json"),
          blog_post: require("./src/schemas/blog_post.json"),
          blog_post_topic: require("./src/schemas/blog_post_topic.json"),
          event: {},
        },
      },
    },
    {
      resolve: "gatsby-plugin-prismic-previews",
      options: {
        repositoryName: "sheltertech",
      },
    },
  ],
  graphqlTypegen: {
    // Needed for CI so that the type stubs are available for type checking.
    // They are otherwise only generated when running a development server, but
    // it's difficult to start and stop the development server in a CI
    // environment (hard to know when to send a Ctrl-C to the process in CI).
    generateOnBuild: true,
  },
};
