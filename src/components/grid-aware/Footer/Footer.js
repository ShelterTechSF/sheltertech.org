import React from "react";
import Button from "../../inline/Button";
import s from "./Footer.module.css";
import charityNavigator from "./stories/charity-navigator.svg";
import facebookLogo from "./stories/facebook.svg";
import githubLogo from "./stories/github.svg";
import instagramLogo from "./stories/instagram.svg";
import sealOfTransparency from "./stories/seal-of-transparency.svg";
import shelterTechLogoWhite from "./stories/sheltertech-logo-white.svg";
import twitterLogo from "./stories/twitter.svg";

function getYear() {
  return new Date().getFullYear();
}

const GridMiddleLeft = () => (
  <div className={s.gridMiddleLeftContainer}>
    <img src={shelterTechLogoWhite} alt="White ShelterTech Logo" />
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
        <img src={githubLogo} alt="Github Logo" />
      </a>
    </div>
  </div>
);

const FooterLinks = () => (
  <div className={s.footerLinksContainer}>
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
        <a href="/volunteer">Volunteer</a>
        <a href="/donate">Donate</a>
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
  </div>
);

const Seals = () => (
  <div className={s.sealsContainer}>
    <img src={sealOfTransparency} alt="Seal of Transparency" />
    <img src={charityNavigator} alt="Charity Navigator Seal" />
  </div>
);

const GridMiddleRight = () => (
  <div className={s.gridMiddleRightContainer}>
    <FooterLinks />
    <Seals />
  </div>
);

const Footer = () => {
  const GridTopRow = () => (
    <div className={s.gridTopRow}>
      <div className={s.subscribeContainer}>
        <div className={s.subscribeMessage}>Subscribe to get updates</div>
        <div className={s.formInput}>
          <input type="text" placeholder="email address" />
          <Button text="submit" internalLink="/mailchimp" />
        </div>
      </div>
    </div>
  );

  const GridMiddleRow = () => (
    <div className={s.gridMiddleRow}>
      <GridMiddleLeft />
      <GridMiddleRight />
    </div>
  );

  const GridBottomRow = () => (
    <div className={s.gridBottomRow}>
      <div className={s.organizationInfo}>
        <div>&copy; {getYear()} All Rights Reserved • ein: 38-3984099</div>
        <div>268 Bush Street #4302, San Francisco CA, 94104 USA</div>
      </div>
    </div>
  );

  return (
    <div className={s.bleedWrapper}>
      <section className={s.gridParent}>
        <GridTopRow />
        <GridMiddleRow />
        <GridBottomRow />
      </section>
    </div>
  );
};

Footer.propTypes = {};

export default Footer;
