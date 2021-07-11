import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import ReactModal from "react-modal";

import "../stylesheets/global.css";
import favicon from "./favicon.ico";
import Footer from "./grid-aware/Footer";
import shelterTechLogoWhite from "./grid-aware/Footer/sheltertech-logo-white.svg";
import facebookLogo from "./grid-aware/Footer/stories/facebook.svg";
import githubLogo from "./grid-aware/Footer/stories/github.svg";
import sealOfTransparency from "./grid-aware/Footer/stories/guidestar-seal-of-transparency.svg";
import instagramLogo from "./grid-aware/Footer/stories/instagram.svg";
import twitterLogo from "./grid-aware/Footer/stories/twitter.svg";
import { BurgerMenu, Navigation } from "./grid-aware/Navigation";

type NavItem = {
  text: string;
  internalLink: string;
  isButton?: boolean;
};

const navigationItems: NavItem[] = [
  { text: "About Us", internalLink: "/aboutus" },
  { text: "Our Programs", internalLink: "/programs" },
  { text: "Volunteer", internalLink: "/volunteer" },
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
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0"
        />

        <title>ShelterTech - Technology for the under-resourced</title>
        <meta
          name="description"
          content="ShelterTech is solving the biggest technology challenges faced by those experiencing homelessness"
        />
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
            { text: "Programs", internalLink: "/" },
            { text: "Volunteer", internalLink: "/volunteer" },
            { text: "Donate", internalLink: "/donate" },
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
          employerIdentificationNumber="EIN: 38-3984099"
        />
      </div>
    </div>
  );
};

export default Layout;
