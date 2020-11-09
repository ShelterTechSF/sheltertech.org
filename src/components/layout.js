import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import ReactModal from "react-modal";

import "../stylesheets/global.css";
import shelterTechLogoWhite from "./grid-aware/Footer/sheltertech-logo-white.svg";
import Footer from "./grid-aware/Footer";
import facebookLogo from "./grid-aware/Footer/stories/facebook.svg";
import githubLogo from "./grid-aware/Footer/stories/github.svg";
import instagramLogo from "./grid-aware/Footer/stories/instagram.svg";
import sealOfTransparency from "./grid-aware/Footer/stories/seal-of-transparency.svg";
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
        inputPlaceHolderText="email address"
        footerNavigation={[
          {
            title: "Our Work",
            links: [
              { name: "ShelterConnect", url: "/shelterconnect" },
              { name: "SF Services Guide", url: "/sfservicesguide" },
              { name: "Community Reps", url: "/communityreps" },
            ],
          },
          {
            title: "What You Can Do",
            links: [
              { name: "Volunteer", url: "/new/volunteer" },
              { name: "Donate", url: "/new/donate" },
              { name: "Partnerships", url: "/partnerships" },
            ],
          },
          {
            title: "About Us",
            links: [
              { name: "Our Story", url: "/ourstory" },
              { name: "Record", url: "/record" },
              { name: "Newsroom", url: "/newsroom" },
            ],
          },
        ]}
        seals={[{ logo: sealOfTransparency, alt: "Seal of Transparency" }]}
        shelterTechLogo={{
          logo: shelterTechLogoWhite,
          alt: "ShelterTech Logo",
        }}
        socialMediaLinks={[
          {
            url: "https://www.facebook.com/ShelterTechOrg/",
            logo: facebookLogo,
            alt: "Facebook Logo",
          },
          {
            url: "https://twitter.com/sheltertechorg",
            logo: twitterLogo,
            alt: "Twitter Logo",
          },
          {
            url: "https://www.instagram.com/shelter_tech",
            logo: instagramLogo,
            alt: "Instagram Logo",
          },
          {
            url: "https://github.com/ShelterTechSF",
            logo: githubLogo,
            alt: "GitHub Logo",
          },
        ]}
        address="268 Bush Street #4302, San Francisco CA, 94104 USA"
        ein="• ein: 38-3984099"
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
