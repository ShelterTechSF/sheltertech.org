import React from 'react';
import { Link } from 'gatsby';
import { slide as Menu } from 'react-burger-menu';
import './Navigation.scss';

const Header = () => (
  <header className="site--header">
    <div className="site--header--wrapper">
      <h1 className="site--header--logo">
        <Link to="/">ShelterTech</Link>
      </h1>
      <nav className="site--header--nav">
        <SlideMenu />
        <Links withBlog />
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
      <Links />
    </nav>
    <div className="site--footer--legal">
      <ul>
        <li>ShelterTech is a 501 (c)(3)</li>
        <li>ein: 38-3984099</li>
        <li>made in san francisco</li>
        <li>© 2020 All Rights Reserved</li>
        <li>
          <a href="https://www.facebook.com/ShelterTechOrg/">facebook</a>
        </li>
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
    {withBlog && (
      <a
        href="https://medium.com/shelter-tech"
        target="_blank"
        rel="noopener noreferrer"
      >
        Blog
      </a>
    )}
    <Link className="donate-button" href="/donate">
      Donate
    </Link>
  </>
);

export { Header, Footer };
