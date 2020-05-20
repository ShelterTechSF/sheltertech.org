import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { slide as Menu } from 'react-burger-menu';
import favicon from '../../images/favicon.ico';
import '../../stylesheets/components/Navigation.scss';

const Navigation = ({ data, children }) => {
  // Define the meta title and description
  const { title, description } = data.site.siteMetadata;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0" />

        <title>{ title }</title>
        <meta name="description" content={description} />
        <link rel="icon" href={favicon} />
      </Helmet>
      <div className="app">
        <Header />
        { children }
        <Footer />
      </div>
    </>
  );
};

Navigation.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
  children: PropTypes.element.isRequired,
};


const Header = () => (
  <header className="site--header">
    <div className="site--header--wrapper">
      <h1 className="site--header--logo"><Link to="/">ShelterTech</Link></h1>
      <nav className="site--header--nav">
        <SlideMenu />
        <ul>
          <Links withBlog />
        </ul>
      </nav>
    </div>
  </header>
);

const SlideMenu = () => (
  <Menu right>
    <Links withBlog />
  </Menu>
);

const Footer = () => (
  <footer className="site--footer">
    <nav className="site--footer--nav">
      <ul>
        <Links />
      </ul>
    </nav>
    <div className="site--footer--legal">
      <ul>
        <li>ShelterTech is a 501 (c)(3)</li>
        <li>ein: 38-3984099</li>
        <li>made in san francisco</li>
        <li>© 2020 All Rights Reserved</li>
        <li><a href="https://www.facebook.com/ShelterTechOrg/">facebook</a></li>
      </ul>
    </div>
  </footer>
);

// eslint-disable-next-line react/prop-types
const Links = ({ withBlog }) => (
  <>
    <Link to="/">Programs</Link>
    <Link to="/annual-report-2018">Impact</Link>
    <Link to="/events">Events</Link>
    <Link to="/get-involved">Get Involved</Link>
    <Link to="/team">Team</Link>
    <a href="mailto:info@sheltertech.org">Contact Us</a>
    {
      withBlog
      && <a href="https://medium.com/shelter-tech" target="_blank" rel="noopener noreferrer">Blog</a>
    }
    <Link className="donate-button" href="/donate">Donate</Link>
  </>
);

export default Navigation;
