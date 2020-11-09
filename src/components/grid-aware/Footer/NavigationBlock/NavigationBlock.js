import React from "react";
import shelterTechLogoWhite from "../sheltertech-logo-white.svg";
import facebookLogo from "../stories/facebook.svg";
import githubLogo from "../stories/github.svg";
import instagramLogo from "../stories/instagram.svg";
import sealOfTransparency from "../stories/seal-of-transparency.svg";
import twitterLogo from "../stories/twitter.svg";
import s from "./Navigation.module.css";

const NavigationLeftArea = () => (
  <div>
    <img src={shelterTechLogoWhite} alt="ShelterTech Logo" />
    <div className={s.socialMediaLinks}>
      <a href="https://www.facebook.com/ShelterTechOrg/">
        <img src={facebookLogo} alt="Facebook Logo" />
      </a>
      <a href="https://twitter.com/sheltertechorg">
        <img src={twitterLogo} alt="Twitter Logo" />
      </a>
      <a href="https://www.instagram.com/shelter_tech">
        <img src={instagramLogo} alt="Instagram Logo" />
      </a>
      <a href="https://github.com/ShelterTechSF">
        <img src={githubLogo} alt="GitHub Logo" />
      </a>
    </div>
  </div>
);

const FooterLinks = () => (
  <nav className={s.footerLinksContainer}>
    <div className={s.footerLinksColumn}>
      <div className={s.footerLinksTitle}>Our Work</div>
      <div className={s.footerLinks}>
        <a href="/shelterconnect">ShelterConnect</a>
        <a href="/sfserviceguide">SF Service Guide</a>
        <a href="/communityreps">Community Reps</a>
      </div>
    </div>
    <div className={s.footerLinksColumn}>
      <div className={s.footerLinksTitle}>What You Can Do</div>
      <div className={s.footerLinks}>
        <a href="/new/volunteer">Volunteer</a>
        <a href="/new/donate">Donate</a>
        <a href="/partnerships">Partnerships</a>
      </div>
    </div>
    <div className={s.footerLinksColumn}>
      <div className={s.footerLinksTitle}>About Us</div>
      <div className={s.footerLinks}>
        <a href="/ourstory">Our Story</a>
        <a href="/record">Record</a>
        <a href="/newsroom">Newsroom</a>
      </div>
    </div>
  </nav>
);

const Seals = () => (
  <div className={s.seals}>
    <img src={sealOfTransparency} alt="Seal of Transparency" />
  </div>
);

const NavigationRightArea = () => (
  <div className={s.navigationRightArea}>
    <FooterLinks />
    <Seals />
  </div>
);

const Navigation = () => {
  return (
    <div className={s.bleedWrapper}>
      <div className={s.navigation}>
        <NavigationLeftArea />
        <NavigationRightArea />
      </div>
    </div>
  );
};

Navigation.propTypes = {};

export default Navigation;
