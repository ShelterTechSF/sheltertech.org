import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import ReactModal from "react-modal";

import "../stylesheets/global.css";
import Footer from "./grid-aware/Footer";
import shelterTechLogoWhite from "./grid-aware/Footer/sheltertech-logo-white.svg";
import facebookLogo from "./grid-aware/Footer/stories/facebook.svg";
import githubLogo from "./grid-aware/Footer/stories/github.svg";
import sealOfTransparency from "./grid-aware/Footer/stories/guidestar-seal-of-transparency.svg";
import instagramLogo from "./grid-aware/Footer/stories/instagram.svg";
import twitterLogo from "./grid-aware/Footer/stories/twitter.svg";
import { BurgerMenu, Navigation } from "./grid-aware/Navigation";

const navigationItems = [
  { text: "Programs", internalLink: "/new" },
  { text: "Volunteer", internalLink: "/new/volunteer" },
  { text: "Donate", internalLink: "/new/donate", isButton: true },
];

const Layout = ({ children }) => {
  const pageWrapperID = "page-wrapper";
  const outerContainerID = "outer-container";
  const [burgerMenuIsOpen, setBurgerMenuIsOpen] = useState(false);
  useEffect(() => {
    ReactModal.setAppElement(`#${outerContainerID}`);
  }, []);
  return (
    <div id={outerContainerID}>
      <BurgerMenu
        isOpen={burgerMenuIsOpen}
        setIsOpen={setBurgerMenuIsOpen}
        navigationItems={navigationItems}
        pageWrapperID={pageWrapperID}
        outerContainerID={outerContainerID}
      />
      <div id={pageWrapperID}>
        <Navigation
          homeURL="/new"
          navigationItems={navigationItems}
          toggleBurgerMenu={() => setBurgerMenuIsOpen(!burgerMenuIsOpen)}
        />
        {children}
      </div>
      <Footer
        placeholderText="email address"
        email="email"
        text="Subscribe to get updates"
        footerNavigation={[
          { text: "Programs", internalLink: "/new" },
          { text: "Volunteer", internalLink: "/new/volunteer" },
          { text: "Donate", internalLink: "/new/donate" },
        ]}
        seals={[
          {
            link: "https://www.guidestar.org/profile/38-3984099",
            logo: sealOfTransparency,
            alt: "GuideStar Seal of Transparency",
          },
        ]}
        shelterTechLogo={{
          url: shelterTechLogoWhite,
          alt: "ShelterTech Logo",
        }}
        socialMediaLinks={[
          {
            link: "https://www.facebook.com/ShelterTechOrg/",
            logo: facebookLogo,
            alt: "Facebook Logo",
          },
          {
            link: "https://twitter.com/sheltertechorg",
            logo: twitterLogo,
            alt: "Twitter Logo",
          },
          {
            link: "https://www.instagram.com/shelter_tech",
            logo: instagramLogo,
            alt: "Instagram Logo",
          },
          {
            link: "https://github.com/ShelterTechSF",
            logo: githubLogo,
            alt: "GitHub Logo",
          },
        ]}
        address="268 Bush Street #4302, San Francisco CA, 94104 USA"
        employerIdentificationNumber="ein: 38-3984099"
      />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
