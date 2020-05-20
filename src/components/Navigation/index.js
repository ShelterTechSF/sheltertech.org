import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Navigation from './Navigation';
import '../../stylesheets/app.scss';


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
    render={(data) => <Navigation data={data} {...props} />}
  />
);
