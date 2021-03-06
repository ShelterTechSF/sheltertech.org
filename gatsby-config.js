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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
};
