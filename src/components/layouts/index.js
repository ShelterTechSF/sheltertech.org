import React, { Fragment } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Header from './Header'
import Footer from './Footer'
import Intercom, { IntercomAPI } from 'react-intercom'
import favicon from '../../images/favicon.ico'
import '../../stylesheets/app.scss'

// IntercomAPI('trackEvent', window.location.href)

export default props => (
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
    render={ data => <Layout data={ data } { ...props }/> }
  />
)

const Layout = ( props ) => {
  // Define the meta title and description
  const title = props.data.site.siteMetadata.title
  const description = props.data.site.siteMetadata.description

	return(
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0"/>
        
        <title>{ title }</title>
        <meta name="description" content={ description } />
        <link rel="icon" href={favicon} />
      </Helmet>
      <div className='app'>
        <Header />
        { props.children }
        {/* <Intercom appID="w50oz3tb"/> */}
        <Footer/>
      </div>
    </Fragment>
	)
}
