import { StaticQuery, graphql } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";
import { TitleDescriptionPropType } from "../../PropTypeShapes";
import { Header, Footer } from "../components/Navigation";
import favicon from "../images/favicon.ico";
import "./app.scss";

const Layout = ({ data, children }) => {
  // Define the meta title and description
  const { title, description } = data.site.siteMetadata;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0"
        />

        <title>{title}</title>
        <meta name="description" content={description} />
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
      </Helmet>
      <div className="app">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};

Layout.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: TitleDescriptionPropType.isRequired,
    }).isRequired,
  }).isRequired,
  children: PropTypes.element.isRequired,
};

export default (props) => (
  <StaticQuery
    query={graphql`
      query SiteQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    // eslint-disable-next-line react/jsx-props-no-spreading
    render={(data) => <Layout data={data} {...props} />}
  />
);
