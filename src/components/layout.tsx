import React, { useState, useEffect } from "react";
import ReactModal from "react-modal";

import "../stylesheets/global.css";
import Footer from "./grid-aware/Footer";
import shelterTechLogoWhite from "./grid-aware/Footer/sheltertech-logo-white.svg";
import facebookLogo from "./grid-aware/Footer/stories/facebook.svg";
import githubLogo from "./grid-aware/Footer/stories/github.svg";
import instagramLogo from "./grid-aware/Footer/stories/instagram.svg";
import twitterLogo from "./grid-aware/Footer/stories/twitter.svg";
import { BurgerMenu, Navigation } from "./grid-aware/Navigation";

type NavItem = {
  text: string;
  internalLink: string;
  isButton?: boolean;
};

const navigationItems: NavItem[] = [
  { text: "About Us", internalLink: "/about" },
  { text: "Our Programs", internalLink: "/programs" },
  { text: "Our Impact", internalLink: "/impact" },
  { text: "Volunteer", internalLink: "/volunteer" },
  { text: "Stories", internalLink: "/blog" },
  { text: "Donate", internalLink: "/donate", isButton: true },
];

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
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
          homeURL="/"
          navigationItems={navigationItems}
          toggleBurgerMenu={() => setBurgerMenuIsOpen(!burgerMenuIsOpen)}
        />
        {children}
        <Footer
          formAction="https://sheltertech.us19.list-manage.com/subscribe/post?u=c47829732a0bea5c8e8a94604&amp;id=08f60e42ef"
          formInputName="EMAIL"
          formInputPlaceholder="email address"
          formAntiBotInputName="b_c47829732a0bea5c8e8a94604_08f60e42ef"
          formDescription="Subscribe to get updates"
          footerNavigation={[
            { text: "About Us", internalLink: "/about" },
            { text: "Our Programs", internalLink: "/programs" },
            { text: "Our Impact", internalLink: "/impact" },
            { text: "Volunteer", internalLink: "/volunteer" },
            { text: "Stories", internalLink: "/blog" },
            { text: "Donate", internalLink: "/donate" },
          ]}
          seals={[
            {
              link: "https://www.guidestar.org/profile/shared/e23fc5a4-2f66-4562-8c4e-e3d813e732b5",
              logo: "https://widgets.guidestar.org/TransparencySeal/9546530",
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
          employerIdentificationNumber="EIN: 38-3984099"
        />
      </div>
    </div>
  );
};

export default Layout;
